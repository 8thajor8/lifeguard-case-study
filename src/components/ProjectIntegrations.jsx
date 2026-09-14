import React from "react";

const ProjectIntegrations = ({ integraciones = [] }) => {
  if (!integraciones.length) return null;

  return (
    <section className="mt-32">
      <div className="mb-14">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
          Integraciones
        </p>

        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Conectado con servicios externos.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
          La plataforma integra diferentes servicios para extender sus
          capacidades y automatizar procesos clave de la operación.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {integraciones.map((integracion, index) => (
          <article
            key={integracion.nombre}
            className="
              group
              rounded-2xl
              border
              border-neutral-800
              bg-neutral-900
              p-7
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-neutral-700
              hover:bg-neutral-800
            "
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="text-xs font-medium tracking-[0.2em] text-neutral-600">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-neutral-800
                  text-sm
                  text-neutral-600
                  transition-colors
                  duration-300
                  group-hover:border-neutral-600
                  group-hover:text-white
                "
              >
                ↗
              </span>
            </div>

            <h3 className="text-xl font-semibold text-white">
              {integracion.nombre}
            </h3>

            <p className="mt-4 text-sm leading-6 text-neutral-500">
              {integracion.descripcion}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectIntegrations;