import { useEffect, useRef } from 'react'
import AppV2Live from '@/AppV2Live.tsx'

function applyV3Variant(root: HTMLDivElement | null) {
  if (!root) {
    return
  }

  const theme = root.querySelector<HTMLElement>('.v5-theme')

  if (!theme) {
    return
  }

  theme.classList.add('v3-live-variant')

  const heroSection = theme.querySelector<HTMLElement>('main section:first-of-type')

  if (heroSection) {
    const heroGrid = heroSection.querySelector<HTMLElement>(':scope > .mx-auto.grid')
    const heroLeftColumn = heroGrid?.firstElementChild as HTMLElement | null
    const heroMetrics = heroLeftColumn?.querySelector<HTMLElement>('.mt-10.grid.gap-4.sm\\:grid-cols-3')
    const heroCtaCard =
      heroGrid?.querySelector<HTMLElement>('.v2-live-hero-cta-card, .v5-hero-consultation-card') ??
      null
    const heroCtaInner = heroCtaCard?.querySelector<HTMLElement>(':scope > .relative > .relative') ?? null

    const cardDisclaimer = Array.from(
      heroCtaCard?.querySelectorAll<HTMLElement>('div, p, span') ?? [],
    ).find(
      (node) =>
        node.children.length === 0 &&
        node.textContent?.trim() === 'No retainer or commitment required. First conversation is exploratory.',
    )

    cardDisclaimer?.remove()

    if (heroMetrics && !heroLeftColumn?.querySelector('.v3-hero-note')) {
      const note = document.createElement('div')
      note.className = 'v3-hero-note mt-6 text-sm'
      note.textContent = 'No retainer or commitment required. First conversation is exploratory.'
      heroMetrics.insertAdjacentElement('afterend', note)
    }

    const ctaEyebrow = heroCtaInner?.firstElementChild as HTMLElement | null

    ctaEyebrow?.classList.add('v3-hero-cta-kicker')

    heroCtaCard?.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((heading) => {
      if (heading.textContent?.trim() === 'Book a consultation') {
        heading.remove()
      }
    })
  }
}

function AppV3Live() {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current

    if (!root) {
      return
    }

    const apply = () => {
      window.requestAnimationFrame(() => {
        applyV3Variant(root)
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
      <AppV2Live />
    </div>
  )
}

export default AppV3Live
