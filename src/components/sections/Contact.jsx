import { Mail, MapPin, Phone, Send } from 'lucide-react'
import logo from '../../assets/nicolasec-logo.jpeg'

const inputClasses = [
  'mt-2 w-full min-w-0 rounded-xl border border-slate-200',
  'bg-slate-50 px-4 py-3.5 text-base text-nicola-navy',
  'outline-none transition placeholder:text-slate-400',
  'focus:border-nicola-orange focus:bg-white',
  'focus:ring-4 focus:ring-nicola-orange/10',
].join(' ')

function Contact() {
  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const nome = formData.get('nome')
    const empresa = formData.get('empresa')
    const email = formData.get('email')
    const telefone = formData.get('telefone')

    const subject = encodeURIComponent(
      `Solicitação de contato pelo site — ${empresa}`,
    )

    const body = encodeURIComponent(
      `Olá, equipe NicolaSec!

Gostaria de conversar com um especialista.

Nome do solicitante: ${nome}
Empresa: ${empresa}
E-mail de contato: ${email}
Número de contato: ${telefone}`,
    )

    window.location.href =
      `mailto:contato@nicolasec.com.br?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contato"
      className="relative scroll-mt-20 overflow-hidden bg-nicola-navy py-16 sm:py-20 lg:py-28"
    >
      {/* Elementos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-20 h-96 w-96 rounded-full bg-nicola-orange/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"
      />

      <div className="container-nicola relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Informações de contato */}
          <div className="text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-nicola-orange">
              Fale com um especialista
            </span>

            <h2 className="mx-auto mt-4 max-w-xl text-balance text-3xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:mx-0 lg:text-5xl">
              Vamos construir uma operação mais segura?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              Conte-nos um pouco sobre sua empresa. Nossa equipe entrará em
              contato para entender seus desafios e apresentar a abordagem mais
              adequada.
            </p>

            <address className="mx-auto mt-8 max-w-md space-y-4 text-left not-italic sm:mt-10 lg:mx-0">
              {/* E-mail */}
              <a
                href="mailto:contato@nicolasec.com.br"
                className="group flex min-w-0 items-center gap-4 rounded-2xl p-2 transition hover:bg-white/[0.04]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-nicola-orange transition group-hover:bg-nicola-orange group-hover:text-nicola-navy">
                  <Mail size={21} />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-slate-500">
                    E-mail
                  </span>

                  <strong className="mt-1 block break-all text-sm text-white sm:text-base">
                    contato@nicolasec.com.br
                  </strong>
                </span>
              </a>

              {/* Telefone */}
              <a
                href="tel:+5511934550221"
                className="group flex min-w-0 items-center gap-4 rounded-2xl p-2 transition hover:bg-white/[0.04]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-nicola-orange transition group-hover:bg-nicola-orange group-hover:text-nicola-navy">
                  <Phone size={21} />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-slate-500">
                    Telefone
                  </span>

                  <strong className="mt-1 block text-sm text-white sm:text-base">
                    +55 11 93455-0221
                  </strong>
                </span>
              </a>

              {/* Localização */}
              <div className="flex min-w-0 items-center gap-4 rounded-2xl p-2">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-nicola-orange">
                  <MapPin size={21} />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-slate-500">
                    Escritório
                  </span>

                  <strong className="mt-1 block text-sm text-white sm:text-base">
                    Pinheiros, São Paulo — SP
                  </strong>
                </span>
              </div>
            </address>
          </div>

          {/* Formulário */}
          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-[2.25rem] bg-nicola-orange/15 blur-3xl sm:-inset-5 sm:rounded-[2.5rem]"
            />

            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl bg-white p-5 shadow-2xl sm:p-8 lg:rounded-[2rem] lg:p-10"
            >
              {/* Cabeçalho do formulário */}
              <div className="mb-7 text-center sm:mb-8">
                <img
                  src={logo}
                  alt="NicolaSec"
                  className="mx-auto h-16 w-16 object-contain sm:h-20 sm:w-20"
                />

                <h3 className="mt-4 text-xl font-bold text-nicola-navy sm:text-2xl">
                  Solicite um contato
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Preencha seus dados para conversar com nossa equipe.
                </p>
              </div>

              {/* Campos */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="min-w-0 text-sm font-semibold text-nicola-navy">
                  Nome do solicitante

                  <input
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome"
                    autoComplete="name"
                    required
                    className={inputClasses}
                  />
                </label>

                <label className="min-w-0 text-sm font-semibold text-nicola-navy">
                  Empresa

                  <input
                    type="text"
                    name="empresa"
                    placeholder="Nome da empresa"
                    autoComplete="organization"
                    required
                    className={inputClasses}
                  />
                </label>

                <label className="min-w-0 text-sm font-semibold text-nicola-navy">
                  E-mail de contato

                  <input
                    type="email"
                    name="email"
                    placeholder="nome@empresa.com.br"
                    autoComplete="email"
                    inputMode="email"
                    required
                    className={inputClasses}
                  />
                </label>

                <label className="min-w-0 text-sm font-semibold text-nicola-navy">
                  Número de contato

                  <input
                    type="tel"
                    name="telefone"
                    placeholder="(11) 99999-9999"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    className={inputClasses}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-7 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-nicola-orange px-5 py-4 font-bold text-nicola-navy transition duration-300 hover:-translate-y-0.5 hover:bg-nicola-orange-light hover:shadow-lg active:translate-y-0"
              >
                Enviar solicitação
                <Send size={18} />
              </button>

              <p className="mx-auto mt-4 max-w-lg text-center text-xs leading-5 text-slate-400">
                Ao enviar, seu aplicativo de e-mail será aberto com os dados
                preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact