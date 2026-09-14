import ProjectFlow from "./ProjectFlow";
import ProjectGallery from "./ProjectGallery";
import ProjectVideo from "./ProjectVideo";
import ProjectFeatures from "./ProjectFeatures";
import ProjectIntegrations from "./ProjectIntegrations";
import ProjectArchitecture from "./ProjectArchitecture";
import ProjectImpact from "./ProjectImpact";
import ProjectRole from "./ProjectRole";

const ProjectDetail = ({ proyecto }) => {
  if (!proyecto) {
    return null;
  }

  return (
    <section className="min-h-screen bg-neutral-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Volver */}


        {/* =========================================
            HERO
        ========================================= */}

        <div className="max-w-5xl">

          <div className="flex flex-wrap items-center gap-3">

            <p
              className="
                text-sm font-medium
                uppercase tracking-[0.3em]
                text-neutral-500
              "
            >
              {proyecto.categoria}
            </p>

            {proyecto.tipo && (
              <>
                <span className="text-neutral-700">
                  /
                </span>

                <span
                  className="
                    rounded-full
                    bg-neutral-800
                    px-3 py-1
                    text-xs font-medium
                    text-neutral-300
                  "
                >
                  {proyecto.tipo}
                </span>
              </>
            )}

          </div>

          <h1
            className="
              mt-5
              text-5xl font-semibold
              tracking-[-0.04em]
              sm:text-6xl
              lg:text-8xl
            "
          >
            {proyecto.nombre}
          </h1>

          <p
            className="
              mt-5
              text-xl
              text-neutral-400
              md:text-2xl
            "
          >
            {proyecto.titulo}
          </p>

          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              leading-relaxed
              text-neutral-400
            "
          >
            {proyecto.descripcion}
          </p>

          {/* =========================================
              LINKS
          ========================================= */}

          {(proyecto.demoUrl ||
            proyecto.githubUrl) && (
            <div className="mt-10 flex flex-wrap gap-3">

              {proyecto.demoUrl && (
                <a
                  href={proyecto.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-full
                    bg-white
                    px-6 py-3
                    text-sm font-medium
                    text-neutral-950
                    transition
                    hover:bg-neutral-200
                  "
                >
                  Ver demo →
                </a>
              )}

              {proyecto.githubUrl && (
                <a
                  href={proyecto.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-full
                    border border-neutral-700
                    px-6 py-3
                    text-sm font-medium
                    text-white
                    transition
                    hover:border-neutral-500
                    hover:bg-neutral-900
                  "
                >
                  Ver código en GitHub →
                </a>
              )}

            </div>
          )}

        </div>

        {/* =========================================
            IMAGEN PRINCIPAL
        ========================================= */}

        {proyecto.imagenPrincipal && (
          <div
            className="
              mt-16
              overflow-hidden
              rounded-2xl
              border border-neutral-800
              bg-neutral-900
            "
          >
            <img
              src={proyecto.imagenPrincipal}
              alt={proyecto.nombre}
              className="
                h-auto
                w-full
                object-cover
              "
            />
          </div>
        )}

        {/* =========================================
            STATS
            Solo aparecen si el proyecto los tiene.
        ========================================= */}

        {proyecto.stats?.length > 0 && (
          <div
            className="
              mt-12
              grid
              grid-cols-2
              gap-px
              overflow-hidden
              rounded-2xl
              border border-neutral-800
              bg-neutral-800
              md:grid-cols-4
            "
          >
            {proyecto.stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  bg-neutral-950
                  px-6 py-8
                  md:px-8
                "
              >
                <div
                  className="
                    text-3xl
                    font-semibold
                    tracking-tight
                    md:text-4xl
                  "
                >
                  {stat.valor}
                </div>

                <div
                  className="
                    mt-2
                    text-sm
                    text-neutral-500
                  "
                >
                  {stat.etiqueta}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* =========================================
            PROYECTO DESTACADO
            Case study completo.
        ========================================= */}

        {proyecto.destacado && (
          <>

            {/* Problema / Solución */}

            {(proyecto.contexto ||
              proyecto.problema?.length ||
              proyecto.solucion) && (
              <div
                className="
                  mt-32
                  grid
                  gap-16
                  md:grid-cols-2
                "
              >

                {/* Problema */}

                {(proyecto.contexto ||
                  proyecto.problema?.length) && (
                  <div>

                    <p
                      className="
                        mb-4
                        text-sm font-medium
                        uppercase tracking-[0.3em]
                        text-neutral-500
                      "
                    >
                      El problema
                    </p>

                    <h2
                      className="
                        text-3xl
                        font-semibold
                        tracking-tight
                        md:text-4xl
                      "
                    >
                      {proyecto.problemaTitulo ||
                        "Una operación fragmentada."}
                    </h2>

                    {proyecto.contexto && (
                      <p
                        className="
                          mt-6
                          text-base
                          leading-7
                          text-neutral-400
                        "
                      >
                        {proyecto.contexto}
                      </p>
                    )}

                    {proyecto.problema?.length > 0 && (
                      <ul
                        className="
                          mt-8
                          space-y-4
                        "
                      >
                        {proyecto.problema.map(
                          (item) => (
                            <li
                              key={item}
                              className="
                                flex
                                gap-3
                                text-neutral-400
                              "
                            >
                              <span className="text-neutral-600">
                                —
                              </span>

                              <span>
                                {item}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    )}

                  </div>
                )}

                {/* Solución */}

                {proyecto.solucion && (
                  <div>

                    <p
                      className="
                        mb-4
                        text-sm font-medium
                        uppercase tracking-[0.3em]
                        text-neutral-500
                      "
                    >
                      La solución
                    </p>

                    <h2
                      className="
                        text-3xl
                        font-semibold
                        tracking-tight
                        md:text-4xl
                      "
                    >
                      {proyecto.solucionTitulo ||
                        "Una plataforma integral."}
                    </h2>

                    <p
                      className="
                        mt-6
                        text-base
                        leading-7
                        text-neutral-400
                      "
                    >
                      {proyecto.solucion}
                    </p>

                  </div>
                )}

              </div>
            )}

            {/* Flujo */}

            {proyecto.flujo?.length > 0 && (
              <ProjectFlow
                flujo={proyecto.flujo}
              />
            )}

            {/* Integraciones */}

            {proyecto.integraciones?.length > 0 && (
              <ProjectIntegrations
                integraciones={
                  proyecto.integraciones
                }
              />
            )}

          </>
        )}

        {/* =========================================
            FUNCIONALIDADES
            Compartidas por proyectos destacados
            y demos.
        ========================================= */}

        {proyecto.funcionalidades?.length > 0 && (
          <ProjectFeatures
            funcionalidades={
              proyecto.funcionalidades
            }
          />
        )}

        {/* =========================================
            GALERÍA
        ========================================= */}

        {proyecto.imagenes?.length > 0 && (
          <ProjectGallery
            imagenes={proyecto.imagenes}
          />
        )}

        {/* =========================================
            VIDEO
        ========================================= */}

        {proyecto.video && (
          <ProjectVideo
            video={proyecto.video}
          />
        )}

        {/* =========================================
            ARQUITECTURA + STACK
        ========================================= */}

        {(proyecto.arquitectura ||
          proyecto.stack?.length > 0) && (
          <ProjectArchitecture
            arquitectura={
              proyecto.arquitectura
            }
            stack={proyecto.stack}
          />
        )}

        {/* =========================================
            IMPACTO
        ========================================= */}

        {proyecto.impacto && (
          <ProjectImpact
            impacto={proyecto.impacto}
          />
        )}

        {/* =========================================
            PARTICIPACIÓN
        ========================================= */}

        {proyecto.participacion && (
          <ProjectRole
            participacion={
              proyecto.participacion
            }
          />
        )}

        {/* =========================================
            PRIVACIDAD
            Solo aparece si el proyecto la define.
        ========================================= */}

        {proyecto.privacidad && (
          <div
            className="
              mt-16
              rounded-2xl
              border border-neutral-800
              bg-neutral-900/50
              p-6
              text-sm
              leading-6
              text-neutral-500
            "
          >
            {proyecto.privacidad}
          </div>
        )}

        {/* =========================================
            CTA FINAL PARA DEMOS
        ========================================= */}

        {!proyecto.destacado &&
          (proyecto.demoUrl ||
            proyecto.githubUrl) && (
            <div
              className="
                mt-20
                border-t
                border-neutral-800
                pt-12
              "
            >

              <div className="max-w-2xl">

                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-neutral-500
                  "
                >
                  Proyecto
                </p>

                <h2
                  className="
                    mt-4
                    text-3xl
                    font-semibold
                    tracking-tight
                  "
                >
                  Probá el proyecto.
                </h2>

                <p
                  className="
                    mt-4
                    text-base
                    leading-7
                    text-neutral-400
                  "
                >
                  Explorá la aplicación y
                  conocé el código utilizado
                  para construirla.
                </p>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                {proyecto.demoUrl && (
                  <a
                    href={proyecto.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      rounded-full
                      bg-white
                      px-7 py-3.5
                      text-sm font-medium
                      text-neutral-950
                      transition
                      hover:bg-neutral-200
                    "
                  >
                    Ver demo →
                  </a>
                )}

                {proyecto.githubUrl && (
                  <a
                    href={proyecto.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      rounded-full
                      border border-neutral-700
                      px-7 py-3.5
                      text-sm font-medium
                      text-white
                      transition
                      hover:border-neutral-500
                      hover:bg-neutral-900
                    "
                  >
                    GitHub →
                  </a>
                )}

              </div>

            </div>
          )}

      </div>
    </section>
  );
};

export default ProjectDetail;