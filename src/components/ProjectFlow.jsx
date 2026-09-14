import React from "react";

const ProjectFlow = ({ flujo = [] }) => {
  const primeraFila = flujo.slice(0, 4);
  const segundaFila = flujo.slice(4, 8).reverse();

  const Paso = ({ paso, numero }) => (
    <div
      className="
        min-w-0
        flex-1
        rounded-xl
        border border-neutral-800
        bg-neutral-900
        p-6
      "
    >
      <div className="
        mb-5
        text-xs
        font-medium
        text-neutral-600
      ">
        {String(numero).padStart(2, "0")}
      </div>

      <h3 className="
        font-semibold
        text-white
      ">
        {paso.titulo}
      </h3>

      <p className="
        mt-3
        text-sm
        leading-6
        text-neutral-500
      ">
        {paso.descripcion}
      </p>
    </div>
  );

  return (
    <section className="mt-32">

      {/* Encabezado */}
      <div className="mb-12">
        <p className="
          mb-4
          text-sm font-medium
          uppercase tracking-[0.3em]
          text-neutral-500
        ">
          Flujo de operación
        </p>

        <h2 className="
          text-3xl
          font-semibold
          tracking-tight
          md:text-5xl
        ">
          Del caso a la facturación.
        </h2>

        <p className="
          mt-5
          max-w-2xl
          text-lg
          leading-relaxed
          text-neutral-400
        ">
          Todos los procesos están conectados dentro de un mismo flujo
          operativo.
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">

        {/* Primera fila */}
        <div className="flex items-stretch gap-3">

          {primeraFila.map((paso, index) => (
            <React.Fragment key={paso.titulo}>

              <Paso
                paso={paso}
                numero={index + 1}
              />

              {index < primeraFila.length - 1 && (
                <div className="
                  flex
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  text-2xl
                  font-light
                  text-neutral-500
                ">
                  →
                </div>
              )}

            </React.Fragment>
          ))}

        </div>

        {/* Conexión entre filas */}
        <div className="
          flex
          justify-end
          pr-8
          py-4
        ">
          <div className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border border-neutral-800
            bg-neutral-900
            text-xl
            text-neutral-500
          ">
            ↓
          </div>
        </div>

        {/* Segunda fila */}
        <div className="flex items-stretch gap-3">

          {segundaFila.map((paso, index) => (
            <React.Fragment key={paso.titulo}>

              <Paso
                paso={paso}
                numero={8 - index}
              />

              {index < segundaFila.length - 1 && (
                <div className="
                  flex
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  text-2xl
                  font-light
                  text-neutral-500
                ">
                  ←
                </div>
              )}

            </React.Fragment>
          ))}

        </div>

      </div>

      {/* Mobile */}
      <div className="
        flex
        flex-col
        items-stretch
        gap-3
        md:hidden
      ">

        {flujo.map((paso, index) => (
          <React.Fragment key={paso.titulo}>

            <Paso
              paso={paso}
              numero={index + 1}
            />

            {index < flujo.length - 1 && (
              <div className="
                flex
                h-6
                items-center
                justify-center
                text-xl
                text-neutral-600
              ">
                ↓
              </div>
            )}

          </React.Fragment>
        ))}

      </div>

    </section>
  );
};

export default ProjectFlow;