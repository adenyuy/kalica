"use client";

import { motion } from "framer-motion";

const photos = [
  { src: "/assets/foto1.jpeg", alt: "Foto 1", rotate: -3, quote: "Cintaku padamu seperti utang, makin hari makin numpuk." },
  { src: "/assets/foto2.jpeg", alt: "Foto 2", rotate: 4, quote: "You are the WiFi to my device, I can't connect without you." },
  { src: "/assets/foto3.jpeg", alt: "Foto 3", rotate: -5, quote: "Kalau kamu itu bumi, aku adalah atmosfer yang selalu melindungimu." },
  { src: "/assets/foto4.jpeg", alt: "Foto 4", rotate: 2, quote: "Cinta kita bagai indomie, seleraku sepanjang masa." },
  { src: "/assets/foto5.jpeg", alt: "Foto 5", rotate: -4, quote: "I love you more than pizza, and that's saying a lot." },
  { src: "/assets/foto6.jpeg", alt: "Foto 6", rotate: 6, quote: "Satu tambah satu sama dengan dua. Aku tambah kamu sama dengan bahagia." },
  { src: "/assets/foto7.jpeg", alt: "Foto 7", rotate: -2, quote: "Mencintaimu itu kaya nafas, gak bisa berhenti walau sedetik." },
  { src: "/assets/foto8.jpeg", alt: "Foto 8", rotate: 5, quote: "No it's not our son, it's our lovely keponakan! 😂" },
];

function PhotoCard({ photo, index }: {
  photo: typeof photos[0];
  index: number;
}) {
  // Even index slides from left, odd slides from right
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ x: isEven ? -200 : 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ type: "spring", stiffness: 70, damping: 20 }}
      className={`bg-white p-5 brutal-border brutal-shadow w-[300px] md:w-[450px] flex flex-col items-center z-10 ${
        isEven ? "md:self-start" : "md:self-end"
      }`}
      style={{ rotate: `${photo.rotate}deg` }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-auto brutal-border border-2 object-contain"
      />
      <div className="mt-4 text-center">
        <p className="text-base md:text-lg font-medium text-slate-800 italic mb-2">
          &ldquo;{photo.quote}&rdquo;
        </p>
        <span className="text-sm font-bold bg-yellow-300 px-2 py-1 brutal-border border-2">
          #{index + 1}
        </span>
      </div>
    </motion.div>
  );
}

export default function PhotoDump() {
  return (
    <section className="relative w-full bg-pink-300 py-20 overflow-clip">
      
      {/* Background Marquee pinned to viewport */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center opacity-[0.12] gap-4">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ x: i % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="whitespace-nowrap text-[15vw] leading-none font-black text-pink-800"
            >
              LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-16 md:gap-32 w-full max-w-5xl mx-auto px-6">
        
        <h2 className="text-5xl md:text-7xl font-black text-white px-6 py-3 bg-indigo-500 brutal-border brutal-shadow -rotate-3 mb-10">
          THE DUMP
        </h2>

        {photos.map((photo, index) => (
          <PhotoCard
            key={index}
            photo={photo}
            index={index}
          />
        ))}

      </div>
    </section>
  );
}
