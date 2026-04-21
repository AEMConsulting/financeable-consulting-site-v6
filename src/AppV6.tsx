import { useEffect, useRef, useState } from 'react'
import App from '@/App.tsx'

const idleBackground = { x: 0.48, y: 0.22 }
const toDataUri = (markup: string) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(markup)}`
const journeyMark = toDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 820" fill="none">
  <defs>
    <linearGradient id="journey-v6-stroke" x1="142" y1="112" x2="570" y2="714" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F7EBD2"/>
      <stop offset=".44" stop-color="#C79A52"/>
      <stop offset="1" stop-color="#5F4626"/>
    </linearGradient>
    <radialGradient id="journey-v6-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 410) rotate(90) scale(332 286)">
      <stop stop-color="#E7C186" stop-opacity=".34"/>
      <stop offset="1" stop-color="#E7C186" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <path d="M182 212c44-58 105-86 180-86 146 0 242 99 242 251 0 156-102 267-252 267-74 0-130-19-174-55" stroke="url(#journey-v6-stroke)" stroke-width="42" stroke-linecap="round"/>
  <path d="M486 214c-34-24-72-34-125-34-118 0-196 75-196 194 0 122 75 196 191 196 58 0 102-13 138-42" stroke="url(#journey-v6-stroke)" stroke-width="72" stroke-linecap="round" stroke-dasharray="702 420"/>
  <circle cx="350" cy="410" r="306" fill="url(#journey-v6-glow)"/>
</svg>`)
const benefitVisuals = [
  toDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" fill="none">
    <rect x="52" y="58" width="178" height="126" rx="26" fill="#FCF7EF" stroke="#D3C2A6"/>
    <path d="M92 154H184" stroke="#A47337" stroke-width="8" stroke-linecap="round"/>
    <path d="M258 86H540" stroke="#CDBDA3" stroke-width="4" stroke-dasharray="10 12"/>
    <path d="M258 144H484" stroke="#CDBDA3" stroke-width="4" stroke-dasharray="10 12"/>
    <circle cx="300" cy="86" r="9" fill="#A47337"/>
    <circle cx="396" cy="144" r="9" fill="#3C434D"/>
    <circle cx="514" cy="86" r="18" fill="#EFE1CB"/>
  </svg>`),
  toDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" fill="none">
    <path d="M76 126H552" stroke="#D7C7AC" stroke-width="4" stroke-dasharray="10 12"/>
    <path d="M214 56V202" stroke="url(#v6-line-a)" stroke-width="5"/>
    <path d="M380 72V184" stroke="url(#v6-line-b)" stroke-width="5"/>
    <circle cx="130" cy="90" r="26" fill="#FBF6EE"/>
    <circle cx="274" cy="92" r="22" fill="#E8C98F"/>
    <circle cx="448" cy="144" r="16" fill="#D9DEE3"/>
    <defs>
      <linearGradient id="v6-line-a" x1="214" y1="56" x2="214" y2="202" gradientUnits="userSpaceOnUse">
        <stop stop-color="transparent"/><stop offset=".5" stop-color="#A47337"/><stop offset="1" stop-color="transparent"/>
      </linearGradient>
      <linearGradient id="v6-line-b" x1="380" y1="72" x2="380" y2="184" gradientUnits="userSpaceOnUse">
        <stop stop-color="transparent"/><stop offset=".5" stop-color="#525965"/><stop offset="1" stop-color="transparent"/>
      </linearGradient>
    </defs>
  </svg>`),
  toDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" fill="none">
    <path d="M82 84H222" stroke="#BF8A46" stroke-width="8" stroke-linecap="round"/>
    <path d="M266 68V194" stroke="url(#v6-speed)" stroke-width="5"/>
    <path d="M348 112H550" stroke="#D3C3AB" stroke-width="4" stroke-dasharray="10 12"/>
    <path d="M330 156H502" stroke="#D3C3AB" stroke-width="4" stroke-dasharray="10 12"/>
    <circle cx="138" cy="64" r="24" fill="#FBF5EB"/>
    <circle cx="452" cy="112" r="10" fill="#EAD8B7"/>
    <circle cx="528" cy="156" r="10" fill="#3B434E"/>
    <defs>
      <linearGradient id="v6-speed" x1="266" y1="68" x2="266" y2="194" gradientUnits="userSpaceOnUse">
        <stop stop-color="transparent"/><stop offset=".5" stop-color="#D5AB6C"/><stop offset="1" stop-color="transparent"/>
      </linearGradient>
    </defs>
  </svg>`),
  toDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" fill="none">
    <rect x="80" y="48" width="214" height="108" rx="22" fill="#FCF7EF" stroke="#DAC9AF"/>
    <rect x="122" y="84" width="214" height="108" rx="22" fill="#FFFDF9" stroke="#D8C7AA"/>
    <rect x="162" y="114" width="242" height="108" rx="24" fill="#F9F4EC" stroke="#D8C7AA"/>
    <path d="M194 160H312" stroke="#A06D34" stroke-width="6" stroke-linecap="round"/>
    <circle cx="494" cy="88" r="20" fill="#E8D1AA"/>
    <circle cx="542" cy="148" r="16" fill="#D9DDE3"/>
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
        const nextLightSurface = Boolean(target.closest('#features, #benefits, #faq'))

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

function AppV6() {
  const themeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const theme = themeRef.current

    if (!theme) {
      return
    }

    const applyV6Enhancements = () => {
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

      if (heroMetricLabel && heroMetricLabel.textContent !== 'Operating cadence') {
        heroMetricLabel.textContent = 'Operating cadence'
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

      theme
        .querySelectorAll<HTMLImageElement>('#journey .journey-logo, #journey img[src*="frame16"]')
        .forEach((image) => {
          image.setAttribute('src', journeyMark)
          image.classList.add('v5-journey-mark')
        })

      theme
        .querySelector<HTMLElement>('#benefits .mt-14.flex.items-center.justify-end.gap-4')
        ?.classList.add('v5-benefits-controls')
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

    applyV6Enhancements()

    const observer = new MutationObserver(() => {
      window.requestAnimationFrame(applyV6Enhancements)
    })

    observer.observe(theme, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <AnimatedCursor themeRef={themeRef} />
      <div ref={themeRef} className="v5-theme v6-theme">
        <App />
      </div>
    </>
  )
}

export default AppV6
