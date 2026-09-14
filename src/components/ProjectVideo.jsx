import React from "react";

const ProjectVideo = ({ video }) => {
  if (!video) return null;

  return (
    <section className="mt-32">
      <div className="mb-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
          Demo
        </p>

        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {video.titulo}
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
          {video.descripcion}
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-black shadow-2xl">
            <video
            controls
            playsInline
            preload="metadata"
            poster="/video/lifeguard-demo-poster.jpg"
            className="block h-auto w-full"
            >
            <source src={video.src} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
            </video>
      </div>
    </section>
  );
};

export default ProjectVideo;