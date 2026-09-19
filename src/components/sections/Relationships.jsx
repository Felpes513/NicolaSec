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

function LogoGroup({ duplicate = false }) {
  return (
    <div
      aria-hidden={duplicate ? 'true' : undefined}
      className={[
        'flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4',
        duplicate ? 'logo-marquee-duplicate' : '',
      ].join(' ')}
    >
      {relationships.map((company) => (
        <div
          key={`${duplicate ? 'duplicate-' : ''}${company.name}`}
          className="group/logo flex h-20 w-36 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-nicola-orange/40 hover:shadow-lg sm:h-24 sm:w-48 sm:rounded-2xl sm:px-7"
        >
          <img
            src={company.logo}
            alt={duplicate ? '' : `Logo da ${company.name}`}
            className="max-h-11 max-w-full object-contain opacity-90 transition duration-300 sm:max-h-14 sm:opacity-60 sm:grayscale sm:group-hover/logo:opacity-100 sm:group-hover/logo:grayscale-0"
            loading="lazy"
            draggable="false"
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
      className="overflow-hidden border-y border-slate-200 bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="container-nicola">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-nicola-orange-dark">
            Relacionamentos
          </span>

          <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-tight text-nicola-navy sm:text-3xl lg:text-4xl">
            Experiência ao lado de grandes organizações
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:mt-4 sm:text-base sm:leading-7">
            Projetos que fortalecem operações críticas, governança de acessos e
            transformação digital segura.
          </p>
        </div>
      </div>

      <div
        className="logo-marquee mt-8 sm:mt-10 lg:mt-12"
        aria-label="Organizações com as quais temos experiência"
      >
        <div className="logo-marquee-track">
          <LogoGroup />
          <LogoGroup duplicate />
        </div>
      </div>
    </section>
  )
}

export default Relationships