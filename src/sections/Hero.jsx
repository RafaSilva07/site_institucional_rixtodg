import Label from '../components/Label'
import InfoRow from '../components/InfoRow'
import { whatsappLink } from '../data/siteData'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F5F5F7_0%,#F5F5F7_100%)] pt-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_14%,rgba(106,27,255,0.22),transparent_24rem),radial-gradient(circle_at_8%_82%,rgba(32,184,255,0.12),transparent_22rem),radial-gradient(circle_at_50%_45%,rgba(75,52,255,0.08),transparent_28rem)]" />

      <div className="absolute right-[-100px] top-10 h-80 w-80 rounded-full bg-[#6A1BFF]/16 blur-[95px]" />
      <div className="absolute left-[-100px] bottom-0 h-80 w-80 rounded-full bg-[#20B8FF]/10 blur-[95px]" />
      <div className="absolute left-[42%] top-[18%] h-72 w-72 rounded-full bg-[#4B34FF]/10 blur-[105px]" />

      <div className="relative mx-auto grid w-[min(1160px,calc(100%-32px))] gap-10 py-16 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-24 lg:py-28">
        <div className="min-w-0">
          <div className="hero-reveal hero-reveal-left">
            <Label>Rixto Digital</Label>
          </div>

          <h1
            className="hero-reveal hero-reveal-left mt-6 max-w-4xl text-[1.95rem] font-semibold leading-[1.06] tracking-[-0.035em] text-[#111111] sm:text-5xl sm:tracking-[-0.055em] md:text-7xl"
            style={{ '--reveal-delay': '80ms' }}
          >
            <span className="block sm:inline">Sites profissionais e</span>{' '}
            <span className="block sm:inline">tráfego pago para empresas</span>{' '}
            <span className="block sm:inline">que querem vender com</span>{' '}
            <span className="block sm:inline">mais credibilidade.</span>
          </h1>

          <p
            className="hero-reveal hero-reveal-left mt-7 max-w-2xl text-base leading-8 text-[#666A73] sm:text-lg"
            style={{ '--reveal-delay': '160ms' }}
          >
            A Rixto Digital cria sites, páginas institucionais, landing pages e
            campanhas de tráfego pago para ajudar sua empresa a se apresentar
            melhor, atrair novos clientes e facilitar o contato com quem tem
            interesse no que você oferece.
          </p>

          <div
            className="hero-reveal hero-reveal-left mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ '--reveal-delay': '240ms' }}
          >
            <a
              href={whatsappLink}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#111111] px-6 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1E1E1E] active:translate-y-0"
            >
              Falar com a Rixto
            </a>

            <a
              href="#sobre"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 text-sm font-semibold text-[#111111] shadow-[0_14px_40px_rgba(17,17,17,0.04)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-black/20 active:translate-y-0"
            >
              Conhecer a empresa
            </a>
          </div>
        </div>

        <div
          className="hero-reveal hero-reveal-right min-w-0 rounded-[2rem] border border-white/70 bg-white/78 p-5 shadow-[0_24px_90px_rgba(75,52,255,0.12)] backdrop-blur-xl md:p-8"
          style={{ '--reveal-delay': '180ms' }}
        >
          <div className="rounded-[1.5rem] bg-[#111111] p-7 text-white">
            <p className="text-sm text-white/55">Nossa direção</p>

            <h2 className="mt-16 max-w-md text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
              Apresentar melhor. Passar confiança. Atrair novos clientes.
            </h2>
          </div>

          <div className="mt-5 grid gap-3">
            <InfoRow
              title="Site"
              text="Sua empresa melhor apresentada"
              className="hero-reveal hero-reveal-right"
              style={{ '--reveal-delay': '320ms' }}
            />
            <InfoRow
              title="Credibilidade"
              text="Mais confiança para o cliente"
              className="hero-reveal hero-reveal-right"
              style={{ '--reveal-delay': '390ms' }}
            />
            <InfoRow
              title="Tráfego"
              text="Mais pessoas chegando até você"
              className="hero-reveal hero-reveal-right"
              style={{ '--reveal-delay': '460ms' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
