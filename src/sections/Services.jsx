import Label from '../components/Label'
import BorderBeam from '../components/BorderBeam'
import { services } from '../data/siteData'

function Services() {
  return (
    <section
      id="servicos"
      className="scroll-mt-32 relative overflow-hidden bg-[#111111] py-20 text-white md:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#111111] via-[#111111]/92 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#111111] via-[#111111]/92 to-transparent" />
        <div className="absolute left-[10%] top-14 h-72 w-72 rounded-full bg-[#4B34FF]/10 blur-[105px]" />
        <div className="absolute right-[8%] bottom-8 h-72 w-72 rounded-full bg-[#20B8FF]/7 blur-[105px]" />
      </div>

      <div className="relative mx-auto w-[min(1160px,calc(100%-32px))]">
        <div className="max-w-3xl" data-reveal>
          <Label light>O que fazemos</Label>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl md:text-6xl">
            Sites e campanhas para apresentar melhor sua empresa e atrair novos
            clientes.
          </h2>

          <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg">
            Trabalhamos com soluções objetivas para empresas que precisam
            mostrar seus serviços com mais profissionalismo e levar mais pessoas
            até seus canais de contato.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              data-reveal={index % 2 === 0 ? 'left' : 'right'}
              style={{ '--reveal-delay': `${120 + index * 80}ms` }}
              className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
            >
              <span className="text-sm font-bold text-[#20B8FF]">
                {service.number}
              </span>

              <h3 className="mt-14 text-2xl font-semibold tracking-[-0.045em] text-white sm:text-3xl">
                {service.title}
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-white/62">
                {service.text}
              </p>

              <BorderBeam
                size={76}
                duration={7.2 + index * 0.55}
                delay={index * 0.5}
                colorFrom="rgba(106, 27, 255, 0.52)"
                colorTo="rgba(32, 184, 255, 0.5)"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
