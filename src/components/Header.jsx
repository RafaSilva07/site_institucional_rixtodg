import { useState } from 'react'
import logo from '../assets/logo.png'
import { useActiveSection } from '../hooks/useActiveSection'
import { navItems, whatsappLink } from '../data/siteData'

function Header() {
  const [open, setOpen] = useState(false)
  const { activeSection } = useActiveSection()

  const closeMenu = () => setOpen(false)

  function handleNavigation() {
    closeMenu()
  }

  return (
    <header className="fixed left-1/2 top-3 z-[100] w-[calc(100%-1rem)] max-w-[1100px] -translate-x-1/2 sm:top-4 sm:w-[calc(100%-2rem)]">
      <svg
        className="pointer-events-none absolute h-0 w-0"
        aria-hidden="true"
        focusable="false"
      >
        <filter id="liquid-glass-header" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.013"
            numOctaves="3"
            seed="7"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="1.9 0 0 0 -0.22 0 1.9 0 0 -0.22 0 0 1.9 0 -0.22 0 0 0 1 0"
            result="boostedNoise"
          />
          <feGaussianBlur in="boostedNoise" stdDeviation="1.8" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="-86"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
      </svg>

      <div className="liquid-glass-shell relative overflow-hidden rounded-[1.75rem] border border-white/45 bg-white/[0.025] px-3 py-2 shadow-[0_22px_80px_rgba(17,17,17,0.14),0_0_0_1px_rgba(255,255,255,0.26)] sm:rounded-full sm:px-4 md:px-5">
        <div className="liquid-glass-surface pointer-events-none absolute inset-0 rounded-[inherit]" />
        <div className="liquid-glass-caustic pointer-events-none absolute inset-0 rounded-[inherit]" />
        <div className="pointer-events-none absolute inset-px rounded-[inherit] border border-white/50" />
        <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

        <nav className="relative z-10 flex min-h-14 items-center justify-between gap-3">
          <a
            href="#"
            aria-label="Rixto Digital"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Rixto Digital"
              width="112"
              height="41"
              decoding="async"
              className="w-24 sm:w-28"
            />
          </a>

          <div
            className="hidden items-center gap-1 rounded-full border border-white/55 bg-white/58 p-1 text-sm font-medium text-[#20242D] shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_10px_28px_rgba(17,17,17,0.07)] backdrop-blur-2xl md:flex"
            aria-label="Navegacao principal"
          >
            {navItems.map((item) => {
              const active = activeSection === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleNavigation}
                  aria-current={active ? 'page' : undefined}
                  className={`flex min-h-10 items-center justify-center rounded-full px-4 text-center transition duration-300 hover:bg-[#111111] hover:text-white lg:px-5 ${
                    active ? 'bg-[#111111] text-white shadow-[0_10px_24px_rgba(17,17,17,0.16)]' : ''
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="flex shrink-0 items-center">
            <a
              href={whatsappLink}
              className="hidden rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(17,17,17,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1E1E1E] active:translate-y-0 md:inline-flex"
            >
              Falar conosco
            </a>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[#111111] shadow-[0_10px_25px_rgba(17,17,17,0.07)] backdrop-blur transition duration-300 hover:border-black/20 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? 'Fechar' : 'Menu'}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="mt-2 rounded-[1.5rem] border border-white/45 bg-white/88 p-2 shadow-[0_22px_70px_rgba(17,17,17,0.15)] backdrop-blur-2xl md:hidden"
        >
          <nav className="grid gap-1.5" aria-label="Navegacao mobile">
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={handleNavigation}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#555962] transition hover:bg-[#111111] hover:text-white"
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}

            <a
              onClick={closeMenu}
              href={whatsappLink}
              className="rounded-2xl bg-[#111111] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Falar conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
