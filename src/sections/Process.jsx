import Label from '../components/Label'
import { steps } from '../data/siteData'

function Process() {
  return (
    <section
      id="processo"
      className="scroll-mt-32 relative overflow-hidden bg-[#F5F5F7] py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#F5F5F7] via-[#F5F5F7]/90 to-transparent" />
        <div className="absolute right-[10%] top-14 h-64 w-64 rounded-full bg-[#4B34FF]/7 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid w-[min(1160px,calc(100%-32px))] gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal="left">
          <Label>Como trabalhamos</Label>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl md:text-6xl">
            Um processo direto para tirar sua empresa do improviso.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#666A73] sm:text-lg">
            Primeiro entendemos o que sua empresa vende e como ela precisa ser
            apresentada. Depois, criamos a estrutura e direcionamos pessoas
            interessadas até ela.
          </p>
        </div>

        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={step}
              data-reveal="right"
              style={{ '--reveal-delay': `${120 + index * 80}ms` }}
              className="flex gap-5 rounded-3xl border border-white/60 bg-white/75 p-5 shadow-[0_16px_50px_rgba(17,17,17,0.045)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(17,17,17,0.06)]"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#F2F4F8] text-sm font-bold text-[#4B34FF]">
                {String(index + 1).padStart(2, '0')}
              </span>

              <p className="self-center font-medium leading-7 text-[#222222]">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
