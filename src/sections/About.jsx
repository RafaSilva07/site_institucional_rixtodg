import Label from '../components/Label'

function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-32 relative overflow-hidden bg-[#111111] py-20 text-white md:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#111111] via-[#111111]/92 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#111111] via-[#111111]/92 to-transparent" />
        <div className="absolute right-[8%] top-16 h-72 w-72 rounded-full bg-[#6A1BFF]/18 blur-[110px]" />
        <div className="absolute left-[-40px] bottom-8 h-72 w-72 rounded-full bg-[#20B8FF]/9 blur-[110px]" />
      </div>

      <div className="relative mx-auto grid w-[min(1160px,calc(100%-32px))] gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Label light>Sobre a Rixto</Label>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl md:text-6xl">
            Criamos estruturas digitais para empresas se apresentarem melhor e
            venderem com mais confiança.
          </h2>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.22)] backdrop-blur md:p-8">
          <div className="space-y-6 text-base leading-8 text-white/65 md:text-lg">
            <p>
              A Rixto Digital nasce para ajudar empresas, profissionais e
              negócios locais que precisam de uma apresentação mais profissional
              na internet.
            </p>

            <p>
              Nosso foco é criar sites, páginas e campanhas que deixem claro o
              que a empresa oferece, transmitam mais credibilidade e facilitem o
              contato com possíveis clientes.
            </p>

            <p>
              Unimos desenvolvimento e tráfego pago para construir uma estrutura
              simples, bem apresentada e preparada para receber pessoas
              interessadas no seu produto ou serviço.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
