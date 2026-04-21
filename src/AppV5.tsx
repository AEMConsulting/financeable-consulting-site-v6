import { useEffect, useRef, useState } from 'react'
import App from '@/App.tsx'

const idleBackground = { x: 0.46, y: 0.24 }
const toDataUri = (markup: string) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(markup)}`
const journeyMark = toDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 820" fill="none">
  <defs>
    <linearGradient id="journey-c-stroke" x1="130" y1="110" x2="570" y2="710" gradientUnits="userSpaceOnUse">
      <stop stop-color="#BDF4EE"/>
      <stop offset=".46" stop-color="#79E5D7"/>
      <stop offset="1" stop-color="#2B8D88"/>
    </linearGradient>
    <radialGradient id="journey-c-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 410) rotate(90) scale(340 300)">
      <stop stop-color="#8AF0E4" stop-opacity=".34"/>
      <stop offset="1" stop-color="#8AF0E4" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="350" cy="410" r="266" stroke="url(#journey-c-stroke)" stroke-width="72" stroke-linecap="round" stroke-dasharray="1180 520" transform="rotate(24 350 410)"/>
  <path d="M525 238c-42-55-106-86-184-86-138 0-236 96-236 258 0 162 98 258 236 258 80 0 145-29 190-88" stroke="url(#journey-c-stroke)" stroke-width="44" stroke-linecap="round" opacity=".9"/>
  <circle cx="350" cy="410" r="314" fill="url(#journey-c-glow)"/>
</svg>`)
const benefitVisuals = [
  toDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" fill="none">
    <rect x="72" y="42" width="496" height="176" rx="34" fill="#EEF6F8" stroke="#C9DAE2"/>
    <rect x="106" y="76" width="132" height="108" rx="24" fill="#DDEDF1" stroke="#BFD2DB"/>
    <rect x="148" y="110" width="94" height="56" rx="18" fill="#FFFFFF" stroke="#C9DAE2"/>
    <path d="M168 138H220" stroke="#16354A" stroke-width="6" stroke-linecap="round"/>
    <circle cx="174" cy="88" r="18" fill="#79E5D7"/>
    <path d="M284 106H474" stroke="#CBD9DF" stroke-width="4" stroke-dasharray="10 12"/>
    <path d="M284 152H502" stroke="#CBD9DF" stroke-width="4" stroke-dasharray="10 12"/>
    <circle cx="502" cy="106" r="10" fill="#D9E7EC"/>
    <circle cx="530" cy="152" r="10" fill="#D9E7EC"/>
  </svg>`),
  toDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" fill="none">
    <rect x="74" y="42" width="492" height="176" rx="34" fill="#EEF6F8" stroke="#C9DAE2"/>
    <rect x="106" y="70" width="114" height="118" rx="24" fill="#DDEDF1" stroke="#BFD2DB"/>
    <rect x="258" y="70" width="128" height="118" rx="24" fill="#FFFFFF" stroke="#C9DAE2"/>
    <rect x="420" y="70" width="112" height="118" rx="24" fill="#F8FCFC" stroke="#D4E1E7"/>
    <path d="M288 110H356" stroke="#16354A" stroke-width="6" stroke-linecap="round"/>
    <path d="M288 144H366" stroke="#79E5D7" stroke-width="6" stroke-linecap="round"/>
    <circle cx="162" cy="98" r="16" fill="#79E5D7"/>
    <circle cx="476" cy="98" r="14" fill="#D9E7EC"/>
  </svg>`),
  toDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" fill="none">
    <rect x="72" y="42" width="496" height="176" rx="34" fill="#EEF6F8" stroke="#C9DAE2"/>
    <rect x="110" y="74" width="150" height="110" rx="24" fill="#DDEDF1" stroke="#BFD2DB"/>
    <path d="M136 112H220" stroke="#79E5D7" stroke-width="8" stroke-linecap="round"/>
    <path d="M296 76V188" stroke="#C7D6DD" stroke-width="4" stroke-dasharray="8 10"/>
    <rect x="334" y="90" width="168" height="78" rx="24" fill="#FFFFFF" stroke="#C9DAE2"/>
    <path d="M364 122H452" stroke="#16354A" stroke-width="6" stroke-linecap="round"/>
    <circle cx="468" cy="122" r="14" fill="#79E5D7"/>
  </svg>`),
  toDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" fill="none">
    <rect x="70" y="42" width="500" height="176" rx="34" fill="#EEF6F8" stroke="#C9DAE2"/>
    <rect x="96" y="66" width="206" height="104" rx="24" fill="#DDEDF1" stroke="#BFD2DB"/>
    <rect x="136" y="96" width="214" height="104" rx="24" fill="#FFFFFF" stroke="#D1E1E7"/>
    <rect x="176" y="126" width="238" height="76" rx="24" fill="#FFFFFF" stroke="#D7E5EA"/>
    <path d="M204 154H332" stroke="#16354A" stroke-width="6" stroke-linecap="round"/>
    <path d="M204 176H286" stroke="#79E5D7" stroke-width="6" stroke-linecap="round"/>
    <circle cx="494" cy="94" r="20" fill="#E4F6F4"/>
    <circle cx="530" cy="154" r="16" fill="#D8E7EC"/>
  </svg>`),
]

function AnimatedCursor({ themeRef }: { themeRef: { current: HTMLDivElement | null } }) {
  const ringRef = useRef<HTMLDivElement | null>(null)
  const dotRef = useRef<HTMLDivElement | null>(null)
  const currentRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const backgroundCurrentRef = useRef(idleBackground)
  const backgroundTargetRef = useRef(idleBackground)
  const [isVisible, setIsVisible] = useState(false)
  const [isInteractive, setIsInteractive] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [isOnLightSurface, setIsOnLightSurface] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!finePointer.matches) {
      return
    }

    let frame = 0

    const writeBackgroundMotion = (x: number, y: number) => {
      const theme = themeRef.current

      if (!theme) {
        return
      }

      const clampedX = Math.min(Math.max(x, 0.08), 0.92)
      const clampedY = Math.min(Math.max(y, 0.08), 0.88)
      const accentX = 78 - (clampedX - 0.5) * 28
      const accentY = 72 - (clampedY - 0.32) * 24
      const shiftX = (clampedX - 0.5) * 72
      const shiftY = (clampedY - 0.34) * 56

      theme.style.setProperty('--v5-mouse-x', `${(clampedX * 100).toFixed(2)}%`)
      theme.style.setProperty('--v5-mouse-y', `${(clampedY * 100).toFixed(2)}%`)
      theme.style.setProperty('--v5-mouse-accent-x', `${accentX.toFixed(2)}%`)
      theme.style.setProperty('--v5-mouse-accent-y', `${accentY.toFixed(2)}%`)
      theme.style.setProperty('--v5-mouse-shift-x', `${shiftX.toFixed(2)}px`)
      theme.style.setProperty('--v5-mouse-shift-y', `${shiftY.toFixed(2)}px`)
    }

    const updateCursor = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.16
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.16

      if (!reduceMotion.matches) {
        backgroundCurrentRef.current.x +=
          (backgroundTargetRef.current.x - backgroundCurrentRef.current.x) * 0.075
        backgroundCurrentRef.current.y +=
          (backgroundTargetRef.current.y - backgroundCurrentRef.current.y) * 0.075

        writeBackgroundMotion(backgroundCurrentRef.current.x, backgroundCurrentRef.current.y)
      }

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
      backgroundTargetRef.current = {
        x: event.clientX / Math.max(window.innerWidth, 1),
        y: event.clientY / Math.max(window.innerHeight, 1),
      }

      setIsVisible(true)

      const target = event.target

      if (target instanceof Element) {
        const nextInteractive = Boolean(
          target.closest('a, button, input, textarea, select, label, [role="button"]'),
        )
        const nextLightSurface = Boolean(
          target.closest('#features, #benefits, #faq'),
        )

        setIsInteractive((current) => (current === nextInteractive ? current : nextInteractive))
        setIsOnLightSurface((current) => (current === nextLightSurface ? current : nextLightSurface))
      }
    }

    const handlePointerLeave = () => {
      setIsVisible(false)
      setIsOnLightSurface(false)
      backgroundTargetRef.current = idleBackground
    }
    const handlePointerDown = () => setIsPressed(true)
    const handlePointerUp = () => setIsPressed(false)

    writeBackgroundMotion(idleBackground.x, idleBackground.y)
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
  }, [themeRef])

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`v5-cursor-ring${isVisible ? ' is-visible' : ''}${isInteractive ? ' is-interactive' : ''}${isPressed ? ' is-pressed' : ''}${isOnLightSurface ? ' is-on-light' : ''}`}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`v5-cursor-dot${isVisible ? ' is-visible' : ''}${isInteractive ? ' is-interactive' : ''}${isPressed ? ' is-pressed' : ''}${isOnLightSurface ? ' is-on-light' : ''}`}
      />
    </>
  )
}

function AppV5() {
  const themeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const theme = themeRef.current

    if (!theme) {
      return
    }

    const applyV5Enhancements = () => {
      const headerBrand = theme.querySelector<HTMLElement>('header a[href="#top"]')

      if (headerBrand) {
        headerBrand.classList.add('v5-brand-lockup')
        headerBrand.querySelector<HTMLElement>(':scope > div:first-child')?.classList.add('v5-brand-icon')

        const brandText = headerBrand.querySelector<HTMLElement>(':scope > div:last-child')
        const primary = brandText?.querySelector<HTMLElement>(':scope > div:first-child')
        const secondary = brandText?.querySelector<HTMLElement>(':scope > div:last-child')

        brandText?.classList.add('v5-brand-text')

        if (primary && primary.textContent !== 'Cuno Consulting') {
          primary.textContent = 'Cuno Consulting'
        }

        if (secondary?.textContent) {
          secondary.textContent = ''
        }
      }

      theme.querySelectorAll<HTMLElement>('div').forEach((element) => {
        if (element.textContent?.trim() !== 'Cuno') {
          return
        }

        const next = element.nextElementSibling

        if (!(next instanceof HTMLElement) || next.textContent?.trim() !== 'Senior finance support') {
          return
        }

        element.textContent = 'Cuno Consulting'
        element.classList.add('v5-mobile-brand-title')
        next.textContent = ''
      })

      theme.querySelectorAll<HTMLImageElement>('img').forEach((image) => {
        const rawSource = image.getAttribute('src')

        if (rawSource?.startsWith('./media/voxr/')) {
          image.setAttribute('src', rawSource.replace('./media/voxr/', '../media/voxr/'))
        }
      })

      theme.querySelectorAll<HTMLElement>('[style]').forEach((element) => {
        const currentBackground = element.style.backgroundImage

        if (currentBackground.includes('./media/voxr/')) {
          element.style.backgroundImage = currentBackground.replaceAll('./media/voxr/', '../media/voxr/')
        }
      })

      const heroMetricLabel = theme.querySelector<HTMLElement>(
        'main section:first-of-type .surface-glass .text-sm.text-lilac',
      )

      if (heroMetricLabel && heroMetricLabel.textContent !== 'Reporting') {
        heroMetricLabel.textContent = 'Reporting'
      }

      theme
        .querySelector<HTMLElement>('#contact')
        ?.closest<HTMLElement>('.gradient-outline')
        ?.classList.add('v5-hero-consultation-card')
      theme
        .querySelector<HTMLElement>('#contact')
        ?.closest<HTMLElement>('.relative')
        ?.classList.add('v5-hero-consultation-wrap')

      theme.querySelector<HTMLElement>('.marquee-track')?.parentElement?.classList.add('v5-hero-marquee-shell')

      theme.querySelectorAll<HTMLElement>('#features article.feature-card').forEach((card) => {
        card.classList.add('v5-feature-card')
        card.querySelector<HTMLElement>('.mt-6.text-sm.uppercase')?.classList.add('v5-feature-tag')
        card.querySelectorAll<HTMLElement>('.rounded-\\[16px\\]').forEach((bullet) => {
          bullet.classList.add('v5-feature-bullet')
        })
      })

      const desktopJourneyTrack = theme.querySelector<HTMLElement>('#journey .hidden.lg\\:flex')
      desktopJourneyTrack?.firstElementChild?.classList.add('v5-journey-intro')

      theme.querySelectorAll<HTMLElement>('#journey article').forEach((card) => {
        if (card.textContent?.includes('Ready for clear monthly numbers')) {
          card.classList.add('v5-journey-ready-card')
        }
      })

      theme.querySelector<HTMLElement>('#journey .lg\\:hidden .swiper')?.classList.add('v5-journey-mobile-swiper')
      theme
        .querySelector<HTMLElement>('#journey .lg\\:hidden .mt-8.flex.items-center.justify-center.gap-4')
        ?.classList.add('v5-journey-mobile-controls')

      theme.querySelectorAll<HTMLImageElement>('#journey .journey-logo, #journey img[src*="frame16"]').forEach((image) => {
        image.setAttribute('src', journeyMark)
        image.classList.add('v5-journey-mark')
      })

      theme.querySelector<HTMLElement>('#benefits .mt-14.flex.items-center.justify-end.gap-4')?.classList.add('v5-benefits-controls')
      theme.querySelector<HTMLElement>('#benefits .benefits-swiper')?.classList.add('v5-benefits-mobile-swiper')

      theme.querySelectorAll<HTMLElement>('#benefits article').forEach((card, index) => {
        card.classList.add('v5-benefit-card')
        card.querySelector<HTMLElement>('.rounded-\\[18px\\]')?.classList.add('v5-benefit-impact')
        const image = card.querySelector<HTMLImageElement>('img')

        image?.classList.add('v5-benefit-art')

        if (image && benefitVisuals[index]) {
          image.setAttribute('src', benefitVisuals[index])
        }
      })

      theme
        .querySelector<HTMLElement>('main > section:last-of-type .mt-10.flex.flex-wrap.justify-center.gap-3')
        ?.remove()

      const outcomesSection = Array.from(theme.querySelectorAll<HTMLElement>('main section')).find(
        (section) => section.textContent?.includes('Finance support that delivers operating control.'),
      )

      if (outcomesSection) {
        outcomesSection.classList.add('v5-outcomes-section')
        outcomesSection
          .querySelector<HTMLElement>(':scope > .mx-auto > .mt-14.grid > div:first-child')
          ?.classList.add('v5-outcomes-stats-grid')
        outcomesSection
          .querySelectorAll<HTMLElement>(':scope > .mx-auto > .mt-14.grid > div:first-child > div')
          .forEach((card) => {
            card.classList.add('v5-outcomes-stat-card')
          })
      }
    }

    applyV5Enhancements()

    const observer = new MutationObserver(() => {
      window.requestAnimationFrame(applyV5Enhancements)
    })

    observer.observe(theme, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <AnimatedCursor themeRef={themeRef} />
      <div ref={themeRef} className="v5-theme">
        <App />
      </div>
    </>
  )
}

export default AppV5
