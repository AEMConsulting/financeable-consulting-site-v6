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
