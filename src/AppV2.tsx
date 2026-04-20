import { useState } from 'react'
import {
  ArrowRight,
  CalendarClock,
  ChevronDown,
  LineChart,
  MapPin,
  NotebookTabs,
  Orbit,
  Sparkles,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const trustChips = [
  'Senior Finance Support',
  'Management Reporting',
  'Cashflow Forecasting',
  'London-focused support',
] as const

const metrics = [
  { value: 'Core', label: 'Three support tracks built for growth-stage finance clarity.' },
  { value: 'Structured', label: 'A monthly cadence instead of reactive finance firefighting.' },
  { value: 'Flexible', label: 'No upfront commitment. Start with a conversation.' },
  { value: 'London', label: 'Primary focus, with room for selected UK growth hubs.' },
] as const

type ServiceItem = {
  label: string
  title: string
  copy: string
  bullets: string[]
  icon: LucideIcon
  tone: 'violet' | 'blue' | 'pink'
}

const services: readonly ServiceItem[] = [
  {
    label: 'Senior Finance Support',
    title: 'Clarity, control, and stronger monthly foundations.',
    copy:
      'A recurring senior finance layer for businesses that need sharper reporting, clearer guidance, and a dependable monthly operating rhythm.',
    bullets: ['Structured monthly reporting', 'Forward-looking financial insight'],
    icon: Orbit,
    tone: 'violet',
  },
  {
    label: 'Management Reporting',
    title: 'Turn your numbers into clear, decision-ready signal.',
    copy:
      'Focused monthly reporting with commentary that leadership can actually use instead of another pack that lands after the moment has passed.',
    bullets: ['Management accounts', 'Variance analysis with clear explanations'],
    icon: NotebookTabs,
    tone: 'blue',
  },
  {
    label: 'Cashflow Forecasting',
    title: 'See cash pressure before it becomes the story.',
    copy:
      'Rolling forecasting and practical planning support keep liquidity visible and help leadership act before timing issues turn into risk.',
    bullets: ['Rolling cashflow forecast', 'Forward-looking decision support'],
    icon: Wallet,
    tone: 'pink',
  },
] as const

const operatingSignals = [
  {
    index: '01',
    title: 'Timely, relevant reporting',
    challenge:
      'Reporting arrives late, with limited visibility for planning and decision-making. Everything starts to feel like guesswork.',
    outcome:
      'Cuno tightens the monthly reporting rhythm so leadership gets a decision-ready view instead of a backward-looking admin document.',
  },
  {
    index: '02',
    title: 'Cash visibility before pressure becomes risk',
    challenge:
      'When receipts, spend, and commitments are not clearly tracked, cash risk becomes harder to control.',
    outcome:
      'Rolling forecasting turns cash into a forward-looking management discussion rather than a late-stage surprise.',
  },
  {
    index: '03',
    title: 'Support once informal finance stops being enough',
    challenge:
      'Bookkeeping and year-end compliance may exist, but leadership still lacks dependable monthly finance support.',
    outcome:
      'Structure, interpretation, and a clear monthly cadence make finance easier to manage before a full-time senior hire is justified.',
  },
] as const

const processSteps = [
  {
    step: '01',
    title: 'Your current setup',
    copy: 'Review where reporting, visibility, and finance decision-making are losing clarity today.',
  },
  {
    step: '02',
    title: 'The build',
    copy: 'Create the reporting and review cadence that matches how the business actually operates and grows.',
  },
  {
    step: '03',
    title: 'Improve control',
    copy: 'Tighten visibility across reporting, planning, and cash so finance is easier to manage and act on.',
  },
  {
    step: '04',
    title: 'Stronger support',
    copy: 'Use finance as a guide for short-term priorities and longer-term direction, not just historic explanation.',
  },
  {
    step: '05',
    title: 'Refine as you grow',
    copy: 'Keep reports, forecasts, and management visibility evolving with the business instead of lagging behind it.',
  },
] as const

const faqItems = [
  {
    question: 'Who is Cuno best suited to?',
    answer:
      'Founder-led businesses, growing SMEs, and small leadership teams that need stronger reporting, cash visibility, and practical finance support without hiring a full-time senior leader too early.',
  },
  {
    question: 'What services does Cuno offer?',
    answer:
      'The core services are Senior Finance Support, Management Reporting, and Cashflow Forecasting. Together they cover recurring finance leadership, better monthly visibility, and stronger control over planning and liquidity.',
  },
  {
    question: 'Does this replace our current accountant?',
    answer:
      'Not necessarily. The support can sit alongside an existing accountant, bookkeeper, or finance manager to add structure, interpretation, and decision support.',
  },
  {
    question: 'Is the service only for businesses in trouble?',
    answer:
      'No. It is often most useful when a business is growing, hiring, or managing more complexity than the current finance setup can handle comfortably.',
  },
  {
    question: 'How do we start?',
    answer:
      'The first step is a consultation to understand how reporting, cash planning, and finance decisions are working today and where more clarity is needed.',
  },
] as const

const serviceAreas = [
  'London',
  'City of London',
  'Westminster',
  'Southwark',
  'London Bridge',
  "King's Cross",
  'Manchester',
] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' as const, delay },
})

function SectionTag({ children }: { children: string }) {
  return <span className="v2-tag">{children}</span>
}

function HeroChart() {
  return (
    <svg aria-hidden="true" className="v2-chart-svg" fill="none" viewBox="0 0 340 150">
      <defs>
        <linearGradient id="v2ChartStroke" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#39d1ff" />
          <stop offset="45%" stopColor="#8567ff" />
          <stop offset="100%" stopColor="#ff4dc4" />
        </linearGradient>
      </defs>
      <path
        d="M8 118C44 84 64 48 98 56C130 63 139 109 176 96C214 83 224 30 264 36C296 41 313 72 332 20"
        stroke="url(#v2ChartStroke)"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d="M8 118C44 84 64 48 98 56C130 63 139 109 176 96C214 83 224 30 264 36C296 41 313 72 332 20"
        opacity="0.22"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeWidth="14"
      />
    </svg>
  )
}

function AppV2() {
  const reduceMotion = useReducedMotion()
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="v2-page">
      <div className="v2-background">
        <div className="v2-grid" />
        <div className="v2-aurora v2-aurora-one" />
        <div className="v2-aurora v2-aurora-two" />
        <div className="v2-aurora v2-aurora-three" />
      </div>

      <header className="v2-topbar">
        <a className="v2-brand" href="#top">
          <span className="v2-brand-mark">CU</span>
          <span>
            <strong>Cuno</strong>
            <em>Design version 02</em>
          </span>
        </a>

        <nav className="v2-nav">
          <a href="#services">Services</a>
          <a href="#signals">Signals</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="v2-top-actions">
          <a className="v2-button v2-button-secondary" href="../">
            View original
          </a>
          <a className="v2-button v2-button-primary" href="#contact">
            Book a consultation
          </a>
        </div>
      </header>

      <main id="top">
        <section className="v2-hero">
          <div className="v2-shell v2-hero-layout">
            <motion.div
              className="v2-hero-copy"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <SectionTag>Midnight strategy lab</SectionTag>
              <p className="v2-hero-kicker">CUNO</p>
              <h1>For businesses that need clearer monthly decisions.</h1>
              <p className="v2-hero-body">
                Cuno helps founder-led businesses and growing teams bring order to
                reporting, cash visibility, and finance leadership. Clear numbers.
                Better decisions. Stronger operating rhythm, without a full-time CFO
                hire too early.
              </p>

              <div className="v2-hero-actions">
                <a className="v2-button v2-button-primary" href="#contact">
                  Book a consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a className="v2-button v2-button-secondary" href="#services">
                  Explore the three support routes
                </a>
              </div>

              <div className="v2-chip-row">
                {trustChips.map((chip) => (
                  <span key={chip} className="v2-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="v2-stage"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
              animate={reduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            >
              <div className="v2-stage-glow v2-stage-glow-one" />
              <div className="v2-stage-glow v2-stage-glow-two" />
              <div className="v2-stage-glow v2-stage-glow-three" />
              <div className="v2-stage-orbit v2-stage-orbit-one" />
              <div className="v2-stage-orbit v2-stage-orbit-two" />
              <div className="v2-stage-core">
                <div className="v2-stage-core-label">Signal</div>
                <strong>Monthly clarity</strong>
                <span>Reporting, cash, and decision support moving in one visible rhythm.</span>
              </div>

              <div className="v2-floating-pill v2-floating-pill-left">
                <NotebookTabs className="h-4 w-4" />
                Management Reporting
              </div>
              <div className="v2-floating-pill v2-floating-pill-right">
                <Wallet className="h-4 w-4" />
                Cashflow Forecasting
              </div>
              <div className="v2-floating-pill v2-floating-pill-bottom">
                <Orbit className="h-4 w-4" />
                Senior Finance Support
              </div>

              <div className="v2-stage-panel">
                <div className="v2-stage-panel-head">
                  <span>Version 02</span>
                  <strong>Clarity / Control / Signal</strong>
                </div>
                <HeroChart />
                <div className="v2-stage-stats">
                  <div>
                    <span>Numbers</span>
                    <strong>Decision-ready</strong>
                  </div>
                  <div>
                    <span>Cash insight</span>
                    <strong>Forward-looking</strong>
                  </div>
                  <div>
                    <span>Support</span>
                    <strong>Commercially focused</strong>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="v2-belt">
          <div className="v2-shell v2-belt-grid">
            {metrics.map((item, index) => (
              <motion.article key={item.value} className="v2-belt-item" {...fadeUp(index * 0.05)}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="v2-section" id="services">
          <div className="v2-shell">
            <div className="v2-section-head">
              <SectionTag>Core services</SectionTag>
              <h2>Three routes. One cleaner monthly operating picture.</h2>
              <p>
                The moodboard direction is now applied as a darker, sharper, more
                product-led design language while keeping the Cuno offer clear and
                commercial.
              </p>
            </div>

            <div className="v2-service-grid">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.article
                    key={service.label}
                    className={`v2-panel v2-service-panel v2-service-panel-${service.tone}`}
                    {...fadeUp(index * 0.08)}
                  >
                    <div className="v2-service-topline">
                      <SectionTag>{service.label}</SectionTag>
                      <span className="v2-icon-chip">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <ul>
                      {service.bullets.map((bullet) => (
                        <li key={bullet}>
                          <Sparkles className="h-4 w-4" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="v2-section v2-section-dark" id="signals">
          <div className="v2-shell v2-signal-layout">
            <div className="v2-signal-intro">
              <SectionTag>Operating outcomes</SectionTag>
              <h2>Finance support that starts to feel like operating control.</h2>
              <p>
                This version leans into product-launch energy: stronger contrast,
                cleaner hierarchy, and more premium atmosphere without losing business
                clarity.
              </p>
            </div>

            <div className="v2-signal-list">
              {operatingSignals.map((item, index) => (
                <motion.article key={item.index} className="v2-signal-row" {...fadeUp(index * 0.08)}>
                  <div className="v2-signal-index">{item.index}</div>
                  <div className="v2-signal-copy">
                    <h3>{item.title}</h3>
                    <p>{item.challenge}</p>
                  </div>
                  <div className="v2-signal-outcome">{item.outcome}</div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="v2-section" id="process">
          <div className="v2-shell v2-process-layout">
            <div className="v2-process-intro">
              <SectionTag>How it works</SectionTag>
              <h2>Understand the setup, build the rhythm, and keep control visible.</h2>
              <p>
                The page now behaves more like a premium product reveal: fewer generic
                blocks, stronger section contrast, and one dominant visual idea per
                area.
              </p>

              <div className="v2-process-aside">
                <div className="v2-mini-panel">
                  <CalendarClock className="h-5 w-5" />
                  <div>
                    <strong>Monthly cadence</strong>
                    <span>Built for recurring decisions, not one-off finance panic.</span>
                  </div>
                </div>
                <div className="v2-mini-panel">
                  <LineChart className="h-5 w-5" />
                  <div>
                    <strong>Decision support</strong>
                    <span>Reporting, cash visibility, and interpretation in one rhythm.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="v2-process-stack">
              {processSteps.map((step, index) => (
                <motion.article key={step.step} className="v2-process-item" {...fadeUp(index * 0.07)}>
                  <div className="v2-process-badge">{step.step}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="v2-section v2-section-dark" id="contact">
          <div className="v2-shell v2-contact-layout">
            <motion.article className="v2-contact-poster" {...fadeUp(0)}>
              <SectionTag>Ready to start</SectionTag>
              <h2>Make the finance function easier to manage each month.</h2>
              <p>
                If reporting is delayed, cash visibility is weak, or finance decisions
                still rely too much on instinct, Cuno can help build a clearer monthly
                rhythm.
              </p>
              <div className="v2-hero-actions">
                <a className="v2-button v2-button-primary" href="../#contact">
                  Open live enquiry form
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a className="v2-button v2-button-secondary" href="../">
                  Compare with original version
                </a>
              </div>

              <div className="v2-area-row">
                {serviceAreas.map((area) => (
                  <span key={area} className="v2-area-chip">
                    <MapPin className="h-4 w-4" />
                    {area}
                  </span>
                ))}
              </div>
            </motion.article>

            <motion.article className="v2-panel v2-faq-panel" {...fadeUp(0.1)}>
              <SectionTag>FAQ</SectionTag>
              <div className="v2-faq-list" id="faq">
                {faqItems.map((item, index) => {
                  const isOpen = openFaq === index

                  return (
                    <div key={item.question} className="v2-faq-item">
                      <button
                        type="button"
                        className="v2-faq-trigger"
                        onClick={() => {
                          setOpenFaq(isOpen ? -1 : index)
                        }}
                      >
                        <span>{item.question}</span>
                        <ChevronDown className={`h-5 w-5 transition ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                            className="v2-faq-answer"
                          >
                            <p>{item.answer}</p>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </motion.article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AppV2
