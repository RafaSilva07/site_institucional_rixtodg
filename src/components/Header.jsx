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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#F5F5F7]/92 shadow-[0_10px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-24 w-[min(1160px,calc(100%-32px))] items-center justify-between">
        <a href="#" aria-label="Rixto Digital" onClick={closeMenu}>
          <img
            src={logo}
            alt="Rixto Digital"
            width="112"
            height="41"
            decoding="async"
            className="w-28"
          />
        </a>

        <nav
          className="hidden items-center gap-1 rounded-full border border-black/10 bg-white/80 p-1.5 text-sm font-medium text-[#666A73] shadow-[0_14px_40px_rgba(17,17,17,0.06)] backdrop-blur-xl md:flex"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => {
            const active = activeSection === item.id

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavigation}
                aria-current={active ? 'page' : undefined}
                className={`flex min-h-11 items-center justify-center rounded-full px-5 text-center transition duration-300 hover:bg-[#111111] hover:text-white ${
                  active ? 'bg-[#111111] text-white' : ''
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <a
          href={whatsappLink}
          className="hidden rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1E1E1E] active:translate-y-0 md:inline-flex"
        >
          Falar conosco
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex rounded-full border border-black/10 bg-white/90 px-4 py-2 text-sm font-semibold text-[#111111] shadow-[0_10px_25px_rgba(17,17,17,0.05)] backdrop-blur transition duration-300 hover:border-black/20 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="mx-auto w-[min(1160px,calc(100%-32px))] pb-4 md:hidden"
        >
          <nav
            className="grid gap-2 rounded-3xl border border-black/10 bg-white/95 p-3 shadow-[0_20px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl"
            aria-label="Navegação mobile"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={handleNavigation}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#666A73] transition hover:bg-[#111111] hover:text-white"
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
