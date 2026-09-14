import React from "react";

const ProjectRole = ({ participacion }) => {
  if (!participacion) return null;

  return (
    <section className="mt-32">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-start">

        {/* Encabezado */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
            Mi participación
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Desarrollo integral.
          </h2>
        </div>

        {/* Contenido */}
        <div className="border-t border-neutral-800 pt-8 md:pt-0 md:border-t-0">
          <p className="text-xl leading-8 text-neutral-300 md:text-2xl">
            {participacion.descripcion}
          </p>

          {participacion.responsabilidades?.length > 0 && (
            <div className="mt-10 divide-y divide-neutral-800 border-y border-neutral-800">
              {participacion.responsabilidades.map(
                (responsabilidad, index) => (
                  <div
                    key={responsabilidad}
                    className="grid gap-3 py-6 md:grid-cols-[60px_1fr]"
                  >
                    <span className="text-sm font-medium text-neutral-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-base leading-7 text-neutral-400">
                      {responsabilidad}
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectRole;