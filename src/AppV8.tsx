import { useEffect, useRef } from 'react'
import AppV7V1 from '@/AppV7V1.tsx'

function getHeroVideoSrc() {
  if (typeof window === 'undefined') {
    return 'media/v8-hero-background.mp4'
  }

  const currentPath = window.location.pathname
  const siteRoot = currentPath.includes('/v8/') ? currentPath.replace(/\/v8\/.*$/, '/') : currentPath

  return new URL(`${siteRoot}media/v8-hero-background.mp4`, window.location.origin).toString()
}

function applyV8Variant(root: HTMLDivElement | null) {
  if (!root) {
    return
  }

  const theme = root.querySelector<HTMLElement>('.v5-theme')

  if (!theme) {
    return
  }

  theme.classList.add('v8-live-variant')

  const heroSection = theme.querySelector<HTMLElement>('main section:first-of-type')
  const heroGrid = heroSection?.querySelector<HTMLElement>(':scope > .mx-auto.grid')
  const heroCopyColumn = heroGrid?.firstElementChild as HTMLElement | null
  const heroFormColumn = heroGrid?.lastElementChild as HTMLElement | null
  const heroMetrics = heroCopyColumn?.querySelector<HTMLElement>('.mt-10.grid.gap-4.sm\\:grid-cols-3')
  const heroNote = heroCopyColumn?.querySelector<HTMLElement>('.v3-hero-note')
  const heroLead = heroCopyColumn?.querySelector<HTMLElement>('p')
  const heroPill = heroCopyColumn?.querySelector<HTMLElement>('.rounded-pill')

  heroSection?.classList.add('v8-hero-section')
  heroGrid?.classList.add('v8-hero-grid')
  heroCopyColumn?.classList.add('v8-hero-copy-column')
  heroFormColumn?.classList.add('v8-hero-form-column')
  heroMetrics?.classList.add('v8-hero-metrics')
  heroNote?.classList.add('v8-hero-note')
  heroLead?.classList.add('v8-hero-lead')
  heroPill?.classList.add('v8-hero-pill')

  if (!heroSection) {
    return
  }

  let video = heroSection.querySelector<HTMLVideoElement>('.v8-hero-video')

  if (!video) {
    const shell = document.createElement('div')
    shell.className = 'v8-hero-video-shell'
    shell.setAttribute('aria-hidden', 'true')

    video = document.createElement('video')
    video.className = 'v8-hero-video'
    video.autoplay = true
    video.muted = true
    video.loop = true
    video.playsInline = true
    video.preload = 'auto'
    video.disablePictureInPicture = true

    const source = document.createElement('source')
    source.src = getHeroVideoSrc()
    source.type = 'video/mp4'

    video.appendChild(source)
    shell.appendChild(video)
    heroSection.prepend(shell)
  }

  video.play().catch(() => undefined)
}

function AppV8() {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current

    if (!root) {
      return
    }

    const apply = () => {
      window.requestAnimationFrame(() => {
        applyV8Variant(root)
      })
    }

    apply()

    const observer = new MutationObserver(() => {
      apply()
    })

    observer.observe(root, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={rootRef}>
      <AppV7V1 />
    </div>
  )
}

export default AppV8
