import React from "react";

const ProjectGallery = ({ imagenes = [] }) => {
  if (!imagenes.length) return null;

  const imagenPrincipal = imagenes[0];
  const imagenesSecundarias = imagenes.slice(1);

  return (
    <section className="mt-32">
      {/* Encabezado */}
      <div className="mb-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
          Plataforma
        </p>

        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Una mirada al sistema.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
          Algunas de las principales interfaces y herramientas desarrolladas
          para gestionar la operación.
        </p>
      </div>

      {/* Imagen principal */}
      <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
        <div className="overflow-hidden">
          <img
            src={imagenPrincipal.src}
            alt={imagenPrincipal.titulo}
            className="
              w-full
              object-cover
              transition-transform
              duration-700
              hover:scale-[1.02]
            "
          />
        </div>

        <div className="border-t border-neutral-800 px-6 py-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
            {imagenPrincipal.categoria}
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {imagenPrincipal.titulo}
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-500 md:text-base">
            {imagenPrincipal.descripcion}
          </p>
        </div>
      </div>

      {/* Imágenes secundarias */}
      {imagenesSecundarias.length > 0 && (
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {imagenesSecundarias.map((imagen) => (
            <article
                key={`${imagen.id}-${imagen.src}`}
                className="
                    overflow-hidden
                    rounded-2xl
                    border border-neutral-800
                    bg-neutral-900
                "
            >
              <div className="overflow-hidden">
                <img
                  src={imagen.src}
                  alt={imagen.titulo}
                  className="
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.02]
                  "
                />
              </div>

              <div className="border-t border-neutral-800 p-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
                  {imagen.categoria}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {imagen.titulo}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {imagen.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;