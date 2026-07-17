"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, Copy, CheckCircle } from "lucide-react";

export default function GiftSection() {
  const [copied, setCopied] = useState(false);
  const rekNumber = "1570012143898";

  const handleCopy = () => {
    navigator.clipboard.writeText(rekNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 w-full bg-yellow-300 flex flex-col items-center justify-center p-8 text-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full text-center"
      >
        <div className="inline-block bg-pink-400 p-6 brutal-border brutal-shadow mb-8 rotate-3">
          <Gift className="w-16 h-16 mx-auto mb-2 text-white" />
          <h2 className="text-4xl font-black text-white" style={{ textShadow: '3px 3px 0 #1e293b' }}>
            WEDDING GIFT
          </h2>
        </div>

        <p className="text-2xl font-bold mb-8">
          Your presence is the best gift we could ask for! But if you'd like to contribute to our new life together, you can send it here:
        </p>

        <div className="bg-white p-8 brutal-border brutal-shadow-sm flex flex-col items-center relative -rotate-1">
          <p className="text-xl font-bold text-gray-500 mb-2">Bank Mandiri</p>
          <p className="text-3xl md:text-5xl font-black tracking-widest text-indigo-600 mb-2">{rekNumber}</p>
          <p className="text-xl font-bold mb-6">a.n MARVIN RADITYA NUGRA</p>
          
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 bg-lime-400 text-slate-900 font-bold px-6 py-3 brutal-border brutal-shadow-sm brutal-hover transition-transform"
          >
            {copied ? <CheckCircle className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
            <span>{copied ? "COPIED!" : "COPY REKENING"}</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
