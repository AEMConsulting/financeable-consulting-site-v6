import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  CalendarRange,
  ChevronRight,
  HandCoins,
  LineChart,
  ShieldCheck,
} from 'lucide-react'

const withBase = (file: string) => `${import.meta.env.BASE_URL}media/voxr/${file}`

const media = {
  hero: withBase('hero.avif'),
  dashboard: withBase('laptop.avif'),
  support: withBase('illustration-0.avif'),
  reporting: withBase('illustration-1.avif'),
  forecasting: withBase('illustration-2.avif'),
} as const

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Why Cuno', href: '#why-cuno' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
] as const

const heroHighlights = [
  'Decision-ready monthly reporting',
  'Forward-looking cash visibility',
  'Commercial finance support for founders',
] as const

const serviceCards = [
  {
    title: 'Senior finance support',
    copy:
      'Recurring senior finance support to bring structure, rhythm, and commercial clarity into the month.',
    points: ['Leadership-ready monthly review cadence', 'Clear ownership across finance priorities'],
    image: media.support,
    icon: ShieldCheck,
  },
  {
    title: 'Management reporting',
    copy:
      'Monthly reporting that explains performance clearly, fast, and in a way leadership can actually use.',
    points: ['Decision-ready reporting packs', 'Commentary built around action'],
    image: media.reporting,
    icon: BarChart3,
  },
  {
    title: 'Cash flow forecasting',
    copy:
      'Rolling visibility over upcoming cash pressure, headroom, and timing so fewer surprises hit the business.',
    points: ['Forward planning with context', 'Better decisions before pressure builds'],
    image: media.forecasting,
    icon: LineChart,
  },
] as const

const whyCards = [
  {
    eyebrow: 'Clarity first',
    title: 'Numbers that make sense quickly',
    copy:
      'Reports stop feeling like admin and start working like a decision tool for the month ahead.',
  },
  {
    eyebrow: 'Built for founders',
    title: 'Senior support without the full-time hire',
    copy:
      'You get commercial finance input when the business needs it, before a permanent CFO is the right move.',
  },
  {
    eyebrow: 'Monthly control',
    title: 'A repeatable operating rhythm',
    copy:
      'One routine for reporting, review, and next actions keeps finance easier to manage as complexity grows.',
  },
  {
    eyebrow: 'Forward view',
    title: 'Cash visibility before it becomes urgent',
    copy:
      'More runway to think, plan, and adjust before cash pressure starts driving the conversation.',
  },
] as const

const processCards = [
  {
    number: '01',
    title: 'Review the setup',
    copy: 'See where clarity is breaking down across reporting, rhythm, ownership, and cash visibility.',
  },
  {
    number: '02',
    title: 'Build the routine',
    copy: 'Put in place a practical monthly reporting and review rhythm built around how your business runs.',
  },
  {
    number: '03',
    title: 'Use the numbers',
    copy: 'Turn reporting into a tool for leadership decisions, not just a record of what already happened.',
  },
  {
    number: '04',
    title: 'Keep refining',
    copy: 'Adjust reporting, planning, and support as the business gets more demanding and more complex.',
  },
] as const

const faqItems = [
  {
    question: 'Who is this built for?',
    answer:
      'Founder-led businesses and growing teams that need better monthly clarity, but do not need a full-time CFO yet.',
  },
  {
    question: 'Do we need to replace our accountant?',
    answer:
      'No. This can sit alongside your current accountant or bookkeeper and add structure, visibility, and leadership support.',
  },
  {
    question: 'What changes first?',
    answer:
      'Usually the first win is a cleaner monthly view: better reporting, clearer commentary, and a more dependable review rhythm.',
  },
  {
    question: 'Is this only for businesses in trouble?',
    answer:
      'No. It is often strongest for businesses growing into more complexity and wanting better control before problems appear.',
  },
] as const

function AppVBizee1() {
  return (
    <div className="vbizee1-page min-h-screen bg-[#081522] text-[#eef2f4]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(124,231,215,0.20),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-10rem] top-[8rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(83,132,165,0.24),transparent_72%)] blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[22%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(205,245,239,0.10),transparent_70%)] blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#081522]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-[0.24em] text-[#d8f3ef] uppercase">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#9fdad0]/30 bg-white/5 shadow-[0_12px_32px_rgba(4,12,20,0.28)]">
              C
            </span>
            Cuno
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[#a7b8c5] lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#d7f7f1]/20 bg-[linear-gradient(180deg,rgba(234,250,247,0.16),rgba(95,151,170,0.14))] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_20px_48px_rgba(3,9,16,0.28)] transition hover:translate-y-[-1px]"
          >
            Book intro call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24 lg:pt-14">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d7f7f1]/16 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7ce7d7]">
              <BadgeCheck className="h-4 w-4" />
              Clear monthly finance support
            </div>

            <h1 className="mt-6 max-w-3xl font-['Space_Grotesk'] text-5xl font-bold leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.25rem]">
              Clarity for growing businesses.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#a7b8c5] sm:text-xl">
              Reporting, cash visibility, and finance leadership without the full-time CFO hire,
              made for founders.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7ce7d7] px-6 py-3.5 text-sm font-semibold text-[#082032] transition hover:bg-[#96f0e3]"
              >
                Start with Cuno
                <ChevronRight className="h-4 w-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/8"
              >
                Explore services
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,31,45,0.94),rgba(10,22,33,0.98))] px-5 py-4 text-sm font-medium text-[#dce7ee] shadow-[0_20px_50px_rgba(2,8,14,0.28)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-[#8ea5b6]">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Founder-led businesses
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Monthly reporting clarity
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Better cash visibility
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 translate-x-5 translate-y-6 rounded-[2rem] bg-[linear-gradient(180deg,rgba(124,231,215,0.14),rgba(83,132,165,0.06))] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#d7f7f1]/14 bg-[linear-gradient(180deg,rgba(18,38,54,0.96),rgba(8,21,34,0.98))] p-5 shadow-[0_30px_90px_rgba(2,8,14,0.42)] sm:p-6">
              <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(232,249,247,0.12),rgba(95,151,170,0.08))] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7ce7d7]">
                      Monthly finance view
                    </p>
                    <h2 className="mt-3 max-w-sm font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.03em] text-white">
                      Decision-ready reporting with a stronger cash view.
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#7ce7d7]/12 px-4 py-3 text-right">
                    <div className="text-xs uppercase tracking-[0.18em] text-[#8ebfb7]">Built for</div>
                    <div className="mt-1 text-sm font-semibold text-white">Growing teams</div>
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a1b2a]">
                  <img
                    src={media.hero}
                    alt="Finance dashboard view"
                    className="h-60 w-full object-cover opacity-72"
                  />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-[#8ea5b6]">Reporting</div>
                    <div className="mt-2 text-base font-semibold text-white">Monthly and decision-ready</div>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-[#8ea5b6]">Cash</div>
                    <div className="mt-2 text-base font-semibold text-white">Forward-looking visibility</div>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-[#8ea5b6]">Support</div>
                    <div className="mt-2 text-base font-semibold text-white">Commercial and practical</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5">
                  <div className="flex items-center gap-3 text-sm font-semibold text-white">
                    <CalendarRange className="h-4 w-4 text-[#7ce7d7]" />
                    One monthly rhythm
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#a7b8c5]">
                    Review. Build. Decide. One cleaner routine across reporting, planning, and
                    cash.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(124,231,215,0.14),rgba(95,151,170,0.08))] p-5">
                  <div className="text-xs uppercase tracking-[0.16em] text-[#d8f3ef]">Good fit</div>
                  <p className="mt-3 text-sm leading-7 text-white">
                    Founder-led teams needing stronger finance control before a full-time hire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(232,249,247,0.06),rgba(95,151,170,0.03))]">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 text-sm text-[#dce7ee] sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-4">
              Decision-ready reporting
            </div>
            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-4">
              Forward-looking cash planning
            </div>
            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-4">
              Monthly senior finance support
            </div>
            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-4">
              Built for founders who want control
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7ce7d7]">
              Services
            </p>
            <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
              Three ways to get clarity before it becomes a problem.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#a7b8c5]">
              Finance leadership, reporting, and cash visibility arranged as one clear support
              offer for growing businesses.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceCards.map((card) => {
              const Icon = card.icon

              return (
                <article
                  key={card.title}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,31,45,0.94),rgba(10,22,33,0.98))] shadow-[0_26px_70px_rgba(2,8,14,0.38)]"
                >
                  <div className="border-b border-white/10 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d7f7f1]/18 bg-[linear-gradient(180deg,rgba(124,231,215,0.14),rgba(95,151,170,0.06))]">
                        <Icon className="h-5 w-5 text-[#7ce7d7]" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8ea5b6]">
                        Core capability
                      </span>
                    </div>

                    <h3 className="mt-5 font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.03em] text-white">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[#a7b8c5]">{card.copy}</p>
                  </div>

                  <div className="p-5">
                    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a1b2a]">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="mt-5 space-y-3">
                      {card.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-[#dce7ee]"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="why-cuno" className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(232,249,247,0.09),rgba(95,151,170,0.06))] p-6 shadow-[0_26px_70px_rgba(2,8,14,0.24)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7ce7d7]">
                Why Cuno
              </p>
              <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                Support that feels clear, calm, and usable.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#c5d3dc]">
                Bizee has a strong simple flow. This page keeps that easy-to-understand shape, but
                speaks in the finance language your buyers need.
              </p>

              <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0a1b2a]">
                <img
                  src={media.dashboard}
                  alt="Cuno monthly finance dashboard"
                  className="h-72 w-full object-cover"
                />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-[#8ea5b6]">Focus</div>
                  <div className="mt-2 text-base font-semibold text-white">Control before chaos</div>
                </div>
                <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-[#8ea5b6]">Approach</div>
                  <div className="mt-2 text-base font-semibold text-white">Monthly finance, made usable</div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {whyCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[1.85rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,31,45,0.94),rgba(10,22,33,0.98))] p-6 shadow-[0_26px_70px_rgba(2,8,14,0.28)]"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7ce7d7]">
                    {card.eyebrow}
                  </div>
                  <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.03em] text-white">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#a7b8c5]">{card.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(232,249,247,0.06),rgba(95,151,170,0.03))]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7ce7d7]">
                How it works
              </p>
              <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                Review. Build. Decide.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#a7b8c5]">
                Cuno reviews what is happening now, builds the right monthly routine, and helps
                finance become easier to manage as the business grows.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-4">
              {processCards.map((card) => (
                <article
                  key={card.number}
                  className="rounded-[1.85rem] border border-white/10 bg-[#0d1f2e] p-6 shadow-[0_20px_50px_rgba(3,9,16,0.24)]"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7ce7d7]">
                    {card.number}
                  </div>
                  <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.03em] text-white">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#a7b8c5]">{card.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,31,45,0.94),rgba(10,22,33,0.98))] p-6 shadow-[0_26px_70px_rgba(2,8,14,0.28)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7ce7d7]">
                What you get
              </p>
              <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                One clean finance layer for the month ahead.
              </h2>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Reporting that leadership uses</h3>
                      <p className="mt-2 text-sm leading-7 text-[#a7b8c5]">
                        Cleaner reporting packs, practical commentary, and a clearer monthly story.
                      </p>
                    </div>
                    <BadgeCheck className="mt-1 h-5 w-5 text-[#7ce7d7]" />
                  </div>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Cash visibility with context</h3>
                      <p className="mt-2 text-sm leading-7 text-[#a7b8c5]">
                        Rolling cash view tied to decisions, timing, and what is coming next.
                      </p>
                    </div>
                    <HandCoins className="mt-1 h-5 w-5 text-[#7ce7d7]" />
                  </div>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Senior finance support without drag</h3>
                      <p className="mt-2 text-sm leading-7 text-[#a7b8c5]">
                        Commercial support shaped around the business, not bloated process.
                      </p>
                    </div>
                    <ShieldCheck className="mt-1 h-5 w-5 text-[#7ce7d7]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(232,249,247,0.10),rgba(95,151,170,0.06))] p-6 shadow-[0_26px_70px_rgba(2,8,14,0.24)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7ce7d7]">
                Built for founders
              </p>
              <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
                Better finance control without jumping too early into a full-time CFO hire.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#d4e0e8]">
                This page uses the easier, conversion-led rhythm you liked from Bizee, but it keeps
                your Cuno offer, your Cuno tone, and your Cuno color system.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-[#7ce7d7]" />
                  <div>
                    <div className="font-semibold text-white">Clearer monthly numbers</div>
                    <div className="mt-1 text-sm text-[#a7b8c5]">
                      Less noise, more signal, better finance conversations.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-[#7ce7d7]" />
                  <div>
                    <div className="font-semibold text-white">Forward cash visibility</div>
                    <div className="mt-1 text-sm text-[#a7b8c5]">
                      More time to react before pressure becomes urgent.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-[#7ce7d7]" />
                  <div>
                    <div className="font-semibold text-white">A stronger monthly routine</div>
                    <div className="mt-1 text-sm text-[#a7b8c5]">
                      Reporting and support shaped around how your team actually operates.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(232,249,247,0.05),rgba(95,151,170,0.03))]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7ce7d7]">FAQ</p>
                <h2 className="mt-4 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                  Questions founders usually ask before they start.
                </h2>
              </div>

              <div className="space-y-4">
                {faqItems.map((item) => (
                  <article
                    key={item.question}
                    className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,31,45,0.94),rgba(10,22,33,0.98))] p-6 shadow-[0_20px_50px_rgba(3,9,16,0.24)]"
                  >
                    <h3 className="text-xl font-semibold text-white">{item.question}</h3>
                    <p className="mt-3 text-base leading-7 text-[#a7b8c5]">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.4rem] border border-[#d7f7f1]/14 bg-[linear-gradient(135deg,#32556c_0%,#24445b_42%,#16354a_100%)] p-7 shadow-[0_34px_90px_rgba(2,8,14,0.38)] sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d8f3ef]">
                  Ready to start
                </p>
                <h2 className="mt-4 max-w-2xl font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                  Built for founders who want control without the full-time hire.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d4e0e8]">
                  If you want clearer monthly numbers, stronger cash visibility, and finance
                  support that helps the business move faster, this is the next step.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/12 bg-[#081522]/36 p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-[#cde9e4]">Best for</div>
                    <div className="mt-2 text-base font-semibold text-white">
                      Founder-led businesses and growing teams
                    </div>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-[#cde9e4]">Outcome</div>
                    <div className="mt-2 text-base font-semibold text-white">
                      Clearer monthly decisions with better finance control
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:hello@cuno.example"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7ce7d7] px-6 py-4 text-sm font-semibold text-[#082032] transition hover:bg-[#96f0e3]"
                >
                  Book a conversation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AppVBizee1
