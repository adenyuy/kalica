"use client";

import { motion } from "framer-motion";
import { CalendarHeart, MapPin } from "lucide-react";

export default function DetailsSection() {
  return (
    <section className="min-h-screen w-full bg-lime-300 flex flex-col items-center justify-center p-8 text-slate-900 relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.4 }}
        className="max-w-3xl w-full bg-white p-8 md:p-16 brutal-border brutal-shadow"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-10 text-center">
          SAVE THE DATE!
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex-1 bg-yellow-300 p-6 brutal-border brutal-shadow-sm flex flex-col items-center text-center rotate-2">
            <CalendarHeart className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">When?</h3>
            <p className="text-xl font-bold">31 Oktober 2026</p>
            <p className="text-lg mt-2">Mark your calendars!</p>
          </div>
          
          <div className="flex-1 bg-cyan-300 p-6 brutal-border brutal-shadow-sm flex flex-col items-center text-center -rotate-2">
            <MapPin className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Where?</h3>
            <p className="text-xl font-bold">Bumi kita tercinta</p>
            <p className="text-lg mt-2">TBA soon!</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-3xl font-black mb-4">See you there!</h3>
          <p className="text-xl">
            Don't forget to bring your biggest smile and best dancing shoes!
          </p>
        </div>
      </motion.div>
    </section>
  );
}
