
import React from 'react';

export default function CodiceCeremonial() {
  const base = import.meta.env.BASE_URL;
  const codiceImgs = [
    `${base}06_Codice_Ceremonial/Codice_SrRiley.png`,
    `${base}06_Codice_Ceremonial/Codice_NiñoEmperador.png`,
    `${base}06_Codice_Ceremonial/Codice_GodPrompts.png`
  ];

  return (
    <section className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#0B0C10] text-white">
      {codiceImgs.map((src, idx) => (
        <section
          key={idx}
          className="snap-start min-h-screen flex flex-col justify-center items-center py-16 px-6"
        >
          <img
            src={src}
            alt={`Codice ${idx + 1}`}
            className="max-w-4xl w-full h-auto object-contain shadow-lg opacity-0 animate-fade-in"
          />
          <p className="mt-12 text-[#00CFFD] text-sm animate-pulse uppercase tracking-widest">
            ☍ SCROLL PARA EL SIGUIENTE ☍
          </p>
        </section>
      ))}
    </section>
  );
}
