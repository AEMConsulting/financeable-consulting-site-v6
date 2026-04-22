import { useEffect, useRef } from 'react'
import AppV3Live from '@/AppV3Live.tsx'

function applyV7V1Variant(root: HTMLDivElement | null) {
  if (!root) {
    return
  }

  const theme = root.querySelector<HTMLElement>('.v5-theme')

  if (!theme) {
    return
  }

  theme.classList.add('v7-v1-live-variant')

  const main = theme.querySelector<HTMLElement>('main')
  const whyCunoSection = theme.querySelector<HTMLElement>('#benefits')
  const outcomesSection = Array.from(theme.querySelectorAll<HTMLElement>('main > section')).find(
    (section) => section.textContent?.includes('Finance support that delivers operating control.'),
  )

  if (main && whyCunoSection && outcomesSection && whyCunoSection.previousElementSibling !== outcomesSection) {
    main.insertBefore(outcomesSection, whyCunoSection)
  }

  const journeySection = theme.querySelector<HTMLElement>('#journey')
  const desktopJourneyTrack = journeySection?.querySelector<HTMLElement>(':scope > .hidden.lg\\:flex')
  const desktopJourneyIntro = desktopJourneyTrack?.firstElementChild as HTMLElement | null

  if (journeySection && desktopJourneyTrack && desktopJourneyIntro) {
    desktopJourneyTrack.classList.add('v7-v1-journey-track')
    desktopJourneyIntro.classList.add('v7-v1-journey-intro')

    if (desktopJourneyIntro.parentElement === desktopJourneyTrack) {
      journeySection.insertBefore(desktopJourneyIntro, desktopJourneyTrack)
    }
  }
}

function AppV7V1() {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current

    if (!root) {
      return
    }

    const apply = () => {
      window.requestAnimationFrame(() => {
        applyV7V1Variant(root)
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
      <AppV3Live />
    </div>
  )
}

export default AppV7V1
