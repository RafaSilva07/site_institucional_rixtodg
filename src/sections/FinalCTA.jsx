import Label from '../components/Label'
import { whatsappLink } from '../data/siteData'

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F7] py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#F5F5F7] via-[#F5F5F7]/90 to-transparent" />
        <div className="absolute left-[12%] top-16 h-64 w-64 rounded-full bg-[#4B34FF]/8 blur-[100px]" />
      </div>

      <div
        data-reveal="right"
        className="relative mx-auto w-[min(1160px,calc(100%-32px))] rounded-[2rem] bg-white/88 p-5 shadow-[0_24px_80px_rgba(17,17,17,0.07)] backdrop-blur md:p-8"
      >
        <div className="rounded-[1.5rem] bg-[#111111] px-6 py-14 text-center text-white md:px-12 md:py-20">
          <Label light>Próximo passo</Label>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl md:text-6xl">
            Vamos criar uma estrutura mais profissional para sua empresa vender
            melhor?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Se sua empresa precisa de um site, uma página de venda ou campanhas
            para atrair novos clientes, a Rixto pode ajudar você a dar esse
            próximo passo.
          </p>

          <a
            href={whatsappLink}
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#111111] transition duration-300 hover:-translate-y-0.5 hover:bg-[#F2F4F8] active:translate-y-0"
          >
            Chamar a Rixto no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
