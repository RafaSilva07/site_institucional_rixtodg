import Label from '../components/Label'
import { pillars } from '../data/siteData'

function Pillars() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#111111] via-[#111111]/92 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#111111] via-[#111111]/92 to-transparent" />
        <div className="absolute left-[8%] top-16 h-72 w-72 rounded-full bg-[#4B34FF]/12 blur-[105px]" />
        <div className="absolute right-[8%] bottom-8 h-72 w-72 rounded-full bg-[#20B8FF]/8 blur-[105px]" />
      </div>

      <div className="relative mx-auto w-[min(1160px,calc(100%-32px))] rounded-[2rem] bg-[#111111]/90 px-0 py-4 md:px-4">
        <div className="max-w-3xl px-0 md:px-4">
          <Label light>Nossos pilares</Label>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl md:text-6xl">
            O que torna uma página mais profissional e comercial.
          </h2>

          <p className="mt-5 text-base leading-8 text-white/60 sm:text-lg">
            Um bom site não precisa ser complicado. Ele precisa apresentar bem a
            empresa, transmitir segurança, explicar a oferta e facilitar o
            contato.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="bg-[#151515] p-7 transition duration-300 hover:bg-[#1E1E1E]"
            >
              <span className="text-sm font-bold text-[#20B8FF]">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="mt-14 text-2xl font-semibold tracking-[-0.04em]">
                {pillar.title}
              </h3>

              <p className="mt-4 leading-7 text-white/58">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pillars
