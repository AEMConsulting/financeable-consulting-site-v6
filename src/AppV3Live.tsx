import { useEffect, useRef } from 'react'
import AppV2Live from '@/AppV2Live.tsx'

function applyV3LayoutVariant(root: HTMLDivElement | null) {
  if (!root) {
    return
  }

  const theme = root.querySelector<HTMLElement>('.v5-theme')

  if (!theme) {
    return
  }

  theme.classList.add('v3-live-variant')

  const main = theme.querySelector<HTMLElement>('main')
  const benefitsSection = theme.querySelector<HTMLElement>('#benefits')
  const outcomesSection = Array.from(theme.querySelectorAll<HTMLElement>('main > section')).find(
    (section) => section.textContent?.includes('Finance support that delivers operating control.'),
  )

  if (main && benefitsSection && outcomesSection && benefitsSection.previousElementSibling !== outcomesSection) {
    main.insertBefore(outcomesSection, benefitsSection)
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
        applyV3LayoutVariant(root)
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
