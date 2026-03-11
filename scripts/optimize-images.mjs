import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve('src/assets')
const RASTER_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png'])
const MAX_WIDTH = 2200

async function getFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        return getFiles(fullPath)
      }
      return fullPath
    }),
  )

  return files.flat()
}

function formatMB(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!RASTER_EXTENSIONS.has(ext)) {
    return null
  }

  const beforeStat = await fs.stat(filePath)
  const image = sharp(filePath, { failOn: 'none' }).rotate()
  const metadata = await image.metadata()

  let pipeline = image
  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
  }

  if (ext === '.png') {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true, quality: 85 })
  } else {
    pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true, progressive: true })
  }

  const buffer = await pipeline.toBuffer()
  if (buffer.length >= beforeStat.size) {
    return {
      filePath,
      before: beforeStat.size,
      after: beforeStat.size,
      changed: false,
    }
  }

  const tempPath = `${filePath}.tmp`
  await fs.writeFile(tempPath, buffer)
  await fs.rename(tempPath, filePath)
  return {
    filePath,
    before: beforeStat.size,
    after: buffer.length,
    changed: true,
  }
}

async function run() {
  const files = await getFiles(ROOT)
  const rasterFiles = files.filter((file) => RASTER_EXTENSIONS.has(path.extname(file).toLowerCase()))

  const results = []
  for (const file of rasterFiles) {
    const result = await optimizeImage(file)
    if (result) {
      results.push(result)
    }
  }

  const changed = results.filter((r) => r.changed)
  const beforeTotal = results.reduce((sum, r) => sum + r.before, 0)
  const afterTotal = results.reduce((sum, r) => sum + r.after, 0)

  console.log(`Scanned: ${results.length} raster files`)
  console.log(`Optimized: ${changed.length} files`)
  console.log(`Total before: ${formatMB(beforeTotal)}`)
  console.log(`Total after:  ${formatMB(afterTotal)}`)
  console.log(`Saved:        ${formatMB(beforeTotal - afterTotal)}`)

  for (const r of changed) {
    console.log(`${path.relative(process.cwd(), r.filePath)} | ${formatMB(r.before)} -> ${formatMB(r.after)}`)
  }
}

run().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
