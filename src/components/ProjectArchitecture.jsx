import React from "react";

const ProjectArchitecture = ({
  arquitectura,
  stack = [],
}) => {
  if (!arquitectura && !stack.length) return null;

  return (
    <section className="mt-32">
      {/* Encabezado */}

      {arquitectura && (
        <div className="mb-14">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
            Arquitectura
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {arquitectura.titulo ||
              "Una base sólida para crecer."}
          </h2>

          {arquitectura.descripcion && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
              {arquitectura.descripcion}
            </p>
          )}
        </div>
      )}

      {/* Información de arquitectura */}

      {arquitectura && (
        <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
          <div className="grid md:grid-cols-3">
            {/* Tipo */}

            <div className="border-b border-neutral-800 p-8 md:border-b-0 md:border-r">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
                Arquitectura
              </p>

              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {arquitectura.tipo}
              </h3>
            </div>

            {/* Descripción */}

            <div className="p-8 md:col-span-2">
              {arquitectura.descripcion && (
                <p className="max-w-3xl text-base leading-7 text-neutral-400">
                  {arquitectura.descripcion}
                </p>
              )}
            </div>
          </div>

          {/* Diagrama */}

          {arquitectura.diagrama?.length > 0 && (
            <div className="border-t border-neutral-800 p-8 md:p-10">
              <div className="flex flex-col items-stretch gap-3 md:flex-row">
                {arquitectura.diagrama.map(
                  (bloque, index) => (
                    <React.Fragment key={bloque.nombre}>
                      {/* Bloque */}

                      <div className="flex-1 rounded-xl border border-neutral-800 bg-neutral-950 p-6 text-center">
                        <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                          {bloque.nombre}
                        </p>

                        {bloque.descripcion && (
                          <p className="mt-2 font-medium text-white">
                            {bloque.descripcion}
                          </p>
                        )}
                      </div>

                      {/* Flecha */}

                      {index <
                        arquitectura.diagrama.length -
                          1 && (
                        <div className="flex h-8 items-center justify-center text-2xl text-neutral-600 md:h-auto md:w-10 md:shrink-0">
                          <span className="md:hidden">
                            ↓
                          </span>

                          <span className="hidden md:inline">
                            →
                          </span>
                        </div>
                      )}
                    </React.Fragment>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Stack tecnológico */}

      {stack.length > 0 && (
        <div className="mt-16">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
            Stack tecnológico
          </p>

          <div className="flex flex-wrap gap-2">
            {stack.map((tecnologia) => (
              <span
                key={tecnologia}
                className="
                  rounded-lg
                  border
                  border-neutral-800
                  bg-neutral-900
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-neutral-400
                  transition-colors
                  hover:border-neutral-700
                  hover:text-white
                "
              >
                {tecnologia}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectArchitecture;