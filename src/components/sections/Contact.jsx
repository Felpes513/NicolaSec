import { Mail, MapPin, Phone, Send } from 'lucide-react'
import logo from '../../assets/nicolasec-logo.jpeg'

const inputClasses =
  'mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-nicola-navy outline-none transition placeholder:text-slate-400 focus:border-nicola-orange focus:bg-white focus:ring-4 focus:ring-nicola-orange/10'

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
      className="scroll-mt-20 bg-nicola-navy py-24 sm:py-28"
    >
      <div className="container-nicola">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-nicola-orange">
              Fale com um especialista
            </span>

            <h2 className="mt-4 max-w-xl text-balance text-4xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              Vamos construir uma operação mais segura?
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Conte-nos um pouco sobre sua empresa. Nossa equipe entrará em
              contato para entender seus desafios e apresentar a abordagem mais
              adequada.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="mailto:contato@nicolasec.com.br"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-nicola-orange transition group-hover:bg-nicola-orange group-hover:text-nicola-navy">
                  <Mail size={21} />
                </span>

                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">
                    E-mail
                  </span>

                  <strong className="mt-1 block text-white">
                    contato@nicolasec.com.br
                  </strong>
                </span>
              </a>

              <a
                href="tel:+5511934550221"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-nicola-orange transition group-hover:bg-nicola-orange group-hover:text-nicola-navy">
                  <Phone size={21} />
                </span>

                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">
                    Telefone
                  </span>

                  <strong className="mt-1 block text-white">
                    +55 11 93455-0221
                  </strong>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-nicola-orange">
                  <MapPin size={21} />
                </span>

                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">
                    Escritório
                  </span>

                  <strong className="mt-1 block text-white">
                    Pinheiros, São Paulo — SP
                  </strong>
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-nicola-orange/15 blur-3xl" />

            <form
              onSubmit={handleSubmit}
              className="relative rounded-[2rem] bg-white p-6 shadow-2xl sm:p-10"
            >
              <div className="mb-8 text-center">
                <img
                  src={logo}
                  alt="NicolaSec"
                  className="mx-auto h-20 w-20 object-contain"
                />

                <h3 className="mt-4 text-2xl font-bold text-nicola-navy">
                  Solicite um contato
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Preencha seus dados para conversar com nossa equipe.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-nicola-navy">
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

                <label className="text-sm font-semibold text-nicola-navy">
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

                <label className="text-sm font-semibold text-nicola-navy">
                  E-mail de contato
                  <input
                    type="email"
                    name="email"
                    placeholder="nome@empresa.com.br"
                    autoComplete="email"
                    required
                    className={inputClasses}
                  />
                </label>

                <label className="text-sm font-semibold text-nicola-navy">
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
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-nicola-orange px-6 py-4 font-bold text-nicola-navy transition hover:-translate-y-0.5 hover:bg-nicola-orange-light hover:shadow-lg"
              >
                Enviar solicitação
                <Send size={18} />
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-slate-400">
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