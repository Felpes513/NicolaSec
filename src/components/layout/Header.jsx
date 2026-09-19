import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/nicolasec-logo.jpeg'

const navigation = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Parceiros', href: '#parceiros' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container-nicola flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Símbolo da NicolaSec"
            className="h-11 w-11 rounded-xl object-cover"
          />

          <span className="text-xl font-bold tracking-tight text-nicola-navy">
            Nicola<span className="text-nicola-orange">Sec</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-nicola-orange"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-full bg-nicola-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-nicola-orange lg:inline-flex"
        >
          Fale com um especialista
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-nicola-navy lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-nicola flex flex-col py-5">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-slate-100 py-4 font-medium text-slate-700"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex justify-center rounded-full bg-nicola-navy px-6 py-3 font-semibold text-white"
            >
              Fale com um especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header