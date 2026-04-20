import { useEffect, useRef, useState } from 'react'
import App from '@/App.tsx'

function AnimatedCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null)
  const dotRef = useRef<HTMLDivElement | null>(null)
  const currentRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isInteractive, setIsInteractive] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')

    if (!finePointer.matches) {
      return
    }

    let frame = 0

    const updateCursor = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.16
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.16

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0) translate(-50%, -50%)`
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetRef.current.x}px, ${targetRef.current.y}px, 0) translate(-50%, -50%)`
      }

      frame = window.requestAnimationFrame(updateCursor)
    }

    const handlePointerMove = (event: PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY }

      setIsVisible(true)

      const target = event.target

      if (target instanceof Element) {
        const nextInteractive = Boolean(
          target.closest('a, button, input, textarea, select, label, [role="button"]'),
        )

        setIsInteractive((current) => (current === nextInteractive ? current : nextInteractive))
      }
    }

    const handlePointerLeave = () => setIsVisible(false)
    const handlePointerDown = () => setIsPressed(true)
    const handlePointerUp = () => setIsPressed(false)

    frame = window.requestAnimationFrame(updateCursor)

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })
    window.addEventListener('pointerup', handlePointerUp, { passive: true })
    document.addEventListener('mouseleave', handlePointerLeave)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      document.removeEventListener('mouseleave', handlePointerLeave)
    }
  }, [])

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`v5-cursor-ring${isVisible ? ' is-visible' : ''}${isInteractive ? ' is-interactive' : ''}${isPressed ? ' is-pressed' : ''}`}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`v5-cursor-dot${isVisible ? ' is-visible' : ''}${isInteractive ? ' is-interactive' : ''}${isPressed ? ' is-pressed' : ''}`}
      />
    </>
  )
}

function AppV5() {
  return (
    <>
      <AnimatedCursor />
      <div className="v5-theme">
        <App />
      </div>
    </>
  )
}

export default AppV5
