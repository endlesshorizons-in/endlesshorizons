import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { assetUrl } from '../../lib/assetUrls'

const SITE_NAME = 'Endless Horizons'
const DEFAULT_DESCRIPTION =
  'Endless Horizons plans curated Kashmir, Jammu, and Ladakh journeys with local expertise, transparent pricing, and responsive support.'

function getAbsoluteUrl(pathname) {
  if (typeof window === 'undefined') {
    return pathname
  }

  return new URL(pathname, window.location.origin).toString()
}

function syncTag(selector, createTag, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement(createTag)
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

export default function Seo({ title, description = DEFAULT_DESCRIPTION, image = assetUrl('Logo.png'), noIndex = false }) {
  const location = useLocation()

  useEffect(() => {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    const absoluteUrl = getAbsoluteUrl(location.pathname)
    const absoluteImage = getAbsoluteUrl(image)

    document.title = pageTitle

    syncTag('meta[name="description"]', 'meta', {
      name: 'description',
      content: description,
    })
    syncTag('meta[name="robots"]', 'meta', {
      name: 'robots',
      content: noIndex ? 'noindex,nofollow' : 'index,follow',
    })
    syncTag('link[rel="canonical"]', 'link', {
      rel: 'canonical',
      href: absoluteUrl,
    })
    syncTag('meta[property="og:title"]', 'meta', {
      property: 'og:title',
      content: pageTitle,
    })
    syncTag('meta[property="og:description"]', 'meta', {
      property: 'og:description',
      content: description,
    })
    syncTag('meta[property="og:type"]', 'meta', {
      property: 'og:type',
      content: 'website',
    })
    syncTag('meta[property="og:url"]', 'meta', {
      property: 'og:url',
      content: absoluteUrl,
    })
    syncTag('meta[property="og:image"]', 'meta', {
      property: 'og:image',
      content: absoluteImage,
    })
    syncTag('meta[name="twitter:card"]', 'meta', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    syncTag('meta[name="twitter:title"]', 'meta', {
      name: 'twitter:title',
      content: pageTitle,
    })
    syncTag('meta[name="twitter:description"]', 'meta', {
      name: 'twitter:description',
      content: description,
    })
    syncTag('meta[name="twitter:image"]', 'meta', {
      name: 'twitter:image',
      content: absoluteImage,
    })
  }, [description, image, location.pathname, noIndex, title])

  return null
}