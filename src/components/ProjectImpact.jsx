import React from "react";

const ProjectImpact = ({ impacto }) => {
  if (!impacto) return null;

  return (
    <section className="mt-32">
      {/* Encabezado */}

      <div className="mb-14">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
          {impacto.etiqueta || "Impacto"}
        </p>

        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {impacto.titulo || "Resultados del proyecto."}
        </h2>

        {impacto.descripcion && (
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-400">
            {impacto.descripcion}
          </p>
        )}
      </div>

      {/* Tarjetas */}

      {impacto.tarjetas?.length > 0 && (
        <div className="grid gap-5 md:grid-cols-3">
          {impacto.tarjetas.map((tarjeta) => (
            <div
              key={tarjeta.titulo}
              className="
                rounded-2xl
                border
                border-neutral-800
                bg-neutral-900
                p-8
              "
            >
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-neutral-600
                "
              >
                {tarjeta.etiqueta}
              </p>

              <p className="mt-5 text-xl font-semibold text-white">
                {tarjeta.titulo}
              </p>

              {tarjeta.descripcion && (
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {tarjeta.descripcion}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectImpact;