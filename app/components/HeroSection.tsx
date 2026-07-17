"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-cyan-300">
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        className="text-center z-10 p-8"
      >
        <h1 className="text-6xl md:text-8xl font-black text-white brutal-shadow mb-6 tracking-wider" style={{ textShadow: '4px 4px 0 #1e293b' }}>
          WE'RE GETTING<br />HITCHED!
        </h1>
        
        <div className="bg-pink-400 brutal-border brutal-shadow inline-block px-8 py-4 rotate-2">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Kalica Bunga Serlinda
          </h2>
        </div>
        
        <div className="my-4 text-4xl font-black text-slate-900">&amp;</div>
        
        <div className="bg-lime-400 brutal-border brutal-shadow inline-block px-8 py-4 -rotate-2">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Faisal Rahman
          </h2>
        </div>

        <div className="mt-12 bg-white brutal-border brutal-shadow-sm inline-block px-6 py-2 rotate-3">
          <h3 className="text-2xl md:text-3xl font-black text-pink-600">
            #BungaUntukFaisal
          </h3>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-xl font-bold bg-white brutal-border brutal-shadow-sm px-4 py-2 rotate-[-5deg]">
          Scroll for the Mess!
        </span>
        <ArrowDown className="w-10 h-10 text-slate-900" />
      </motion.div>
    </section>
  );
}
