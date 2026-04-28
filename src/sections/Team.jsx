import Label from '../components/Label'
import { team } from '../data/siteData'

function Team() {
  return (
    <section
      id="equipe"
      className="scroll-mt-32 relative overflow-hidden bg-[#F7F8FC] py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#F7F8FC] via-[#F7F8FC]/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F7F8FC] via-[#F7F8FC]/90 to-transparent" />
        <div className="absolute left-[-60px] top-24 h-80 w-80 rounded-full bg-[#6A1BFF]/18 blur-[110px]" />
        <div className="absolute right-[-80px] bottom-16 h-80 w-80 rounded-full bg-[#20B8FF]/10 blur-[110px]" />
        <div className="absolute left-[45%] top-[38%] h-64 w-64 rounded-full bg-[#4B34FF]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-[min(1160px,calc(100%-32px))]">
        <div className="max-w-3xl">
          <Label>Quem está por trás</Label>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl md:text-6xl">
            Desenvolvimento e tráfego trabalhando para transformar interesse em
            contato.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#666A73] sm:text-lg">
            A Rixto Digital une duas frentes essenciais: a criação de sites e
            páginas profissionais, e o tráfego pago para levar pessoas certas
            até essas estruturas.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {team.map((person) => (
            <article
              key={person.name}
              className="group rounded-[1.8rem] border border-white/70 bg-white/78 p-7 shadow-[0_22px_80px_rgba(75,52,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_26px_90px_rgba(75,52,255,0.14)]"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="grid size-20 shrink-0 place-items-center rounded-3xl bg-[#111111] text-xl font-semibold text-white transition duration-300 group-hover:bg-[#4B34FF]">
                  {person.initials}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                    {person.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-[#4B34FF]">
                    {person.role}
                  </p>

                  <p className="mt-5 leading-7 text-[#666A73]">
                    {person.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
