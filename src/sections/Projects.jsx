import Label from '../components/Label'
import { projects } from '../data/siteData'

function Projects() {
  function handleImageError(event) {
    event.currentTarget.style.opacity = '0'
  }

  return (
    <section
      id="projetos"
      className="scroll-mt-32 relative overflow-hidden bg-[#F5F5F7] py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#F5F5F7] via-[#F5F5F7]/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F5F5F7] via-[#F5F5F7]/90 to-transparent" />
        <div className="absolute left-[-80px] top-20 h-80 w-80 rounded-full bg-[#6A1BFF]/14 blur-[115px]" />
        <div className="absolute right-[-70px] bottom-10 h-80 w-80 rounded-full bg-[#20B8FF]/10 blur-[115px]" />
        <div className="absolute left-[42%] top-[34%] h-72 w-72 rounded-full bg-[#4B34FF]/7 blur-[110px]" />
      </div>

      <div className="relative mx-auto w-[min(1160px,calc(100%-32px))]">
        <div className="max-w-3xl" data-reveal="right">
          <Label>Sites desenvolvidos</Label>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl md:text-6xl">
            Projetos realizados
          </h2>

          <p className="mt-5 text-base leading-8 text-[#666A73] sm:text-lg">
            Conheça alguns sites e páginas desenvolvidos para empresas que
            precisavam se apresentar melhor, transmitir mais credibilidade e
            facilitar o contato com novos clientes.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              data-reveal={index % 2 === 0 ? 'left' : 'right'}
              style={{ '--reveal-delay': `${120 + index * 90}ms` }}
              className="group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/78 shadow-[0_22px_80px_rgba(75,52,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_26px_90px_rgba(75,52,255,0.14)]"
            >
              <div className="p-3 pb-0">
                <div className="overflow-hidden rounded-[1.35rem] border border-black/5 bg-[#EEF1F8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                  <div className="flex h-8 items-center gap-1.5 border-b border-black/5 bg-white/75 px-4">
                    <span className="size-2.5 rounded-full bg-[#FF6B6B]" />
                    <span className="size-2.5 rounded-full bg-[#FFD166]" />
                    <span className="size-2.5 rounded-full bg-[#20B8FF]" />
                  </div>

                  <div className="relative aspect-[16/10] overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(106,27,255,0.18),transparent_34%),radial-gradient(circle_at_80%_12%,rgba(32,184,255,0.18),transparent_32%),linear-gradient(135deg,#F8FAFF_0%,#E9EDF8_100%)]">
                    <div className="absolute inset-x-6 top-7 h-5 rounded-full bg-white/70" />
                    <div className="absolute left-6 top-20 h-20 w-[46%] rounded-2xl bg-white/60" />
                    <div className="absolute right-6 top-20 h-28 w-[32%] rounded-2xl bg-white/50" />
                    <div className="absolute inset-x-6 bottom-7 grid grid-cols-3 gap-3">
                      <span className="h-10 rounded-xl bg-white/55" />
                      <span className="h-10 rounded-xl bg-white/45" />
                      <span className="h-10 rounded-xl bg-white/55" />
                    </div>

                    <img
                      src={project.image}
                      alt={`Captura de tela do projeto ${project.name}`}
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, calc(100vw - 56px)"
                      className="absolute inset-0 h-full w-full object-cover opacity-100 transition duration-500 group-hover:scale-[1.03]"
                      onError={handleImageError}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="text-sm font-semibold text-[#4B34FF]">
                  {project.type}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#111111]">
                  {project.name}
                </h3>

                <p className="mt-4 leading-7 text-[#666A73]">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-[#111111] px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#4B34FF] active:translate-y-0"
                >
                  Ver site
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
