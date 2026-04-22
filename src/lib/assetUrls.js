export const ASSET_BASE_URL = 'https://endlesshorizons-assets-223940416395-ap-south-1-an.s3.ap-south-1.amazonaws.com/images'

export function assetUrl(fileName) {
  return new URL(fileName, `${ASSET_BASE_URL}/`).toString()
}