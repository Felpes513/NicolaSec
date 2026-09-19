import ampmLogo from '../../assets/Ampm-logo.png'
import aramacanLogo from '../../assets/Aramacan-logo.png'
import assaiLogo from '../../assets/assai-logo.jpg'
import claroLogo from '../../assets/Claro-logo.png'
import gruAirportLogo from '../../assets/GruAirport-logo.png'
import interPagLogo from '../../assets/InterPag.png'
import ipirangaLogo from '../../assets/Ipiranga.jpeg'
import kmvLogo from '../../assets/Kmv-logo.png'
import krispyKremeLogo from '../../assets/KrispyKreme-logo.jpg'
import libertyLogo from '../../assets/LibertySeguros-logo.jpg'
import neoGasLogo from '../../assets/NeoGas-logo.jpeg'
import oplaLogo from '../../assets/Opla-logo.png'
import oxitenoLogo from '../../assets/Oxiteno-logo.png'
import pagBankLogo from '../../assets/PagBank.png'
import ultraLogo from '../../assets/Ultra-logo.jpeg'
import ultracargoLogo from '../../assets/Ultracargo.jpg'
import ultragazLogo from '../../assets/Ultragas-logo.png'

const relationships = [
  {
    name: 'Assaí',
    logo: assaiLogo,
  },
  {
    name: 'Claro',
    logo: claroLogo,
  },
  {
    name: 'ampm',
    logo: ampmLogo,
  },
  {
    name: 'Ultracargo',
    logo: ultracargoLogo,
  },
  {
    name: 'GRU Airport',
    logo: gruAirportLogo,
  },
  {
    name: 'Liberty Seguros',
    logo: libertyLogo,
  },
  {
    name: 'KMV',
    logo: kmvLogo,
  },
  {
    name: 'Ipiranga',
    logo: ipirangaLogo,
  },
  {
    name: 'Clube Atlético Aramaçan',
    logo: aramacanLogo,
  },
  {
    name: 'NeoGas',
    logo: neoGasLogo,
  },
  {
    name: 'Opla',
    logo: oplaLogo,
  },
  {
    name: 'Krispy Kreme',
    logo: krispyKremeLogo,
  },
  {
    name: 'InterPag',
    logo: interPagLogo,
  },
  {
    name: 'Grupo Ultra',
    logo: ultraLogo,
  },
  {
    name: 'PagBank',
    logo: pagBankLogo,
  },
  {
    name: 'Ultragaz',
    logo: ultragazLogo,
  },
  {
    name: 'Oxiteno',
    logo: oxitenoLogo,
  },
]

function LogoGroup({ hidden = false }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-4 pr-4"
    >
      {relationships.map((company) => (
        <div
          key={`${hidden ? 'duplicate-' : ''}${company.name}`}
          className="group/logo flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-nicola-orange/40 hover:shadow-lg"
        >
          <img
            src={company.logo}
            alt={hidden ? '' : `Logo da ${company.name}`}
            className="max-h-14 max-w-full object-contain opacity-60 grayscale transition duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

function Relationships() {
  return (
    <section
      id="relacionamentos"
      className="overflow-hidden border-y border-slate-200 bg-white py-16"
    >
      <div className="container-nicola">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-nicola-orange-dark">
            Relacionamentos
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-nicola-navy sm:text-3xl">
            Experiência ao lado de grandes organizações
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            Projetos que fortalecem operações críticas, governança de acessos
            e transformação digital segura.
          </p>
        </div>
      </div>

      <div className="logo-marquee mt-11">
        <div className="logo-marquee-track">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  )
}

export default Relationships