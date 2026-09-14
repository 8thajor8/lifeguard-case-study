import React from "react";

const ProjectFeatures = ({
  funcionalidades = [],
  proyecto,
}) => {
  if (!funcionalidades.length) return null;

  const esDestacado = proyecto?.destacado;

  const encabezado = esDestacado
    ? {
        etiqueta: "Funcionalidades",
        titulo: "Diseñado alrededor de la operación.",
        descripcion:
          "El sistema conecta las diferentes etapas del proceso y automatiza tareas que anteriormente requerían trabajo manual.",
      }
    : {
        etiqueta: "Funcionalidades",
        titulo: "Una experiencia pensada para el usuario.",
        descripcion:
          "El proyecto combina una interfaz clara, componentes reutilizables y una experiencia responsive orientada a facilitar cada interacción.",
      };

  return (
    <section className="mt-32">
      {/* Encabezado */}

      <div className="mb-14">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
          {encabezado.etiqueta}
        </p>

        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {encabezado.titulo}
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
          {encabezado.descripcion}
        </p>
      </div>

      {/* Lista */}

      <div className="divide-y divide-neutral-800 border-y border-neutral-800">
        {funcionalidades.map((funcionalidad, index) => (
          <article
            key={funcionalidad.titulo}
            className="
              group
              grid
              gap-6
              py-8
              md:grid-cols-[80px_1fr_auto]
              md:items-center
              md:py-10
            "
          >
            {/* Número */}

            <div className="text-sm font-medium text-neutral-700">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Contenido */}

            <div>
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                {funcionalidad.titulo}
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-500 md:text-base">
                {funcionalidad.descripcion}
              </p>
            </div>

            {/* Indicador */}

            <div
              className="
                hidden
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-neutral-800
                text-neutral-600
                transition-all
                duration-300
                group-hover:border-neutral-600
                group-hover:text-white
                md:flex
              "
            >
              →
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectFeatures;