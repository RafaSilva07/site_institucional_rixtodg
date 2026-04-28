import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#F5F5F7_0%,#F7F8FA_100%)] py-12">
      <div className="mx-auto grid w-[min(1160px,calc(100%-32px))] gap-10 rounded-[2rem] bg-white px-6 py-8 shadow-[0_18px_60px_rgba(17,17,17,0.04)] md:grid-cols-[1.4fr_0.8fr_0.8fr] md:px-8">
        <div>
          <img src={logo} alt="Rixto Digital" className="w-28" />

          <p className="mt-4 max-w-sm leading-7 text-[#666A73]">
            Rixto Digital — sites e tráfego pago para empresas que querem vender
            com mais credibilidade.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Empresa</h3>

          <div className="mt-4 space-y-2 text-sm text-[#666A73]">
            <a href="#sobre" className="block hover:text-[#111111]">
              Sobre
            </a>
            <a href="#equipe" className="block hover:text-[#111111]">
              Quem somos
            </a>
            <a href="#servicos" className="block hover:text-[#111111]">
              Serviços
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Soluções</h3>

          <div className="mt-4 space-y-2 text-sm text-[#666A73]">
            <p>Sites institucionais</p>
            <p>Landing pages</p>
            <p>Tráfego pago</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
