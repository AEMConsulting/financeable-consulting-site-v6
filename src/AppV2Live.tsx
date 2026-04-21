import { useEffect, useRef } from 'react'
import AppV5 from '@/AppV5.tsx'

function applyV2CopyVariant(root: HTMLDivElement | null) {
  if (!root) {
    return
  }

  const theme = root.querySelector<HTMLElement>('.v5-theme')

  if (!theme) {
    return
  }

  const heroSection = theme.querySelector<HTMLElement>('main section:first-of-type')

  if (heroSection) {
    const heroHeading = heroSection.querySelector<HTMLElement>('h1')
    const heroBody = heroHeading?.nextElementSibling as HTMLElement | null

    if (heroHeading) {
      heroHeading.textContent = 'Clarity for growing businesses.'
    }

    if (heroBody) {
      heroBody.textContent =
        'Reporting, cash visibility, and finance leadership without the full-time CFO hire, made for founders.'
    }

    heroSection.querySelector<HTMLElement>('.mt-8.flex.flex-wrap.gap-3')?.remove()
    heroSection.querySelector<HTMLElement>('.mt-8.text-sm.text-muted')?.remove()

    const heroMetricCards = heroSection.querySelectorAll<HTMLElement>('.mt-10.grid.gap-4 > div')
    const heroMetrics = [
      ['Reporting', 'Decision-ready monthly'],
      ['Cash insight', 'Forward-looking'],
      ['Support', 'Commercially focused'],
    ] as const

    heroMetricCards.forEach((card, index) => {
      const copy = heroMetrics[index]

      if (!copy) {
        return
      }

      const lines = card.querySelectorAll<HTMLElement>('div')

      if (lines[0]) {
        lines[0].textContent = copy[0]
      }

      if (lines[1]) {
        lines[1].textContent = copy[1]
      }
    })
  }

  const featuresSection = theme.querySelector<HTMLElement>('#features')

  if (featuresSection) {
    const heading = featuresSection.querySelector<HTMLElement>('h2')
    const body = heading?.nextElementSibling as HTMLElement | null

    if (heading) {
      heading.textContent = 'Three ways to get clarity before it becomes a problem.'
    }

    if (body) {
      body.textContent = 'Finance leadership, reporting, and cash flow without the full-time hire.'
    }

    const featureCards = featuresSection.querySelectorAll<HTMLElement>('article.feature-card')
    const featureContent = [
      {
        title: 'Clarity, control and strong foundations',
        copy:
          'Recurring senior finance support for clearer reporting and a dependable monthly rhythm.',
      },
      {
        title: 'Numbers that are decision-ready',
        copy: 'Monthly reporting with commentary leadership can act on.',
      },
      {
        title: "See cash pressures before it arrives",
        copy: "Rolling forecasts and planning support so you always know what's ahead.",
      },
    ] as const

    featureCards.forEach((card, index) => {
      const content = featureContent[index]

      if (!content) {
        return
      }

      const title = card.querySelector<HTMLElement>('h3')
      const copy = title?.nextElementSibling as HTMLElement | null

      if (title) {
        title.textContent = content.title
      }

      if (copy) {
        copy.textContent = content.copy
      }

      card.querySelector<HTMLElement>('.mt-6.grid')?.remove()
    })
  }

  const journeySection = theme.querySelector<HTMLElement>('#journey')

  if (journeySection) {
    const headingCandidates = journeySection.querySelectorAll<HTMLElement>('h2')

    headingCandidates.forEach((heading) => {
      heading.textContent = 'Review. Build. Decide.'
    })

    const desktopTrack = journeySection.querySelector<HTMLElement>('.hidden.lg\\:flex')
    const mobileStack = journeySection.querySelector<HTMLElement>('.lg\\:hidden')

    const updateJourneyCards = (scope: ParentNode | null) => {
      if (!scope) {
        return
      }

      const cards = scope.querySelectorAll<HTMLElement>('article')
      const cardCopy = [
        'A full review of where clarity is breaking down.',
        'Structured reporting and review, tailored to how you operate.',
        'Tighter visibility across reporting, cash, and planning.',
        'Finance support as a guide, not just a record.',
        'A method that keeps up with your growing business.',
      ] as const

      cardCopy.forEach((copy, index) => {
        const card = cards[index]
        const body = card?.querySelector<HTMLElement>('p')

        if (body) {
          body.textContent = copy
        }
      })

      const ctaCard = cards[5]

      if (ctaCard) {
        const ctaHeading = ctaCard.querySelector<HTMLElement>('h3')
        const ctaBody = ctaCard.querySelector<HTMLElement>('p')

        if (ctaHeading) {
          ctaHeading.textContent = 'Ready to make the leap?'
        }

        if (ctaBody) {
          ctaBody.textContent = 'Built for founders who want control without the full-time hire.'
        }
      }
    }

    updateJourneyCards(desktopTrack)
    updateJourneyCards(mobileStack)
  }
}

function AppV2Live() {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current

    if (!root) {
      return
    }

    const apply = () => {
      window.requestAnimationFrame(() => {
        applyV2CopyVariant(root)
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
      <AppV5 />
    </div>
  )
}

export default AppV2Live
