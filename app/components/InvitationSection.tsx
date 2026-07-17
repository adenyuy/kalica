"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MailOpen, Mail } from "lucide-react";

interface InvitationSectionProps {
  isOpened: boolean;
  setIsOpened: (val: boolean) => void;
}

export default function InvitationSection({ isOpened, setIsOpened }: InvitationSectionProps) {
  return (
    <section className="min-h-screen w-full bg-indigo-400 flex flex-col items-center justify-center p-8 text-white relative overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center z-10 max-w-2xl"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-8 brutal-shadow-sm rotate-2" style={{ textShadow: '4px 4px 0 #1e293b' }}>
          YOU ARE INVITED!
        </h2>
        
        <p className="text-2xl md:text-3xl font-bold text-slate-900 bg-yellow-300 p-6 brutal-border brutal-shadow mb-12 -rotate-1">
          To witness the most chaotic, beautiful, and absolutely fun day of our lives.
        </p>

        <button
          onClick={() => setIsOpened(true)}
          disabled={isOpened}
          className={`group relative inline-flex items-center justify-center gap-4 bg-pink-400 text-slate-900 font-black text-2xl md:text-3xl px-8 py-6 brutal-border brutal-shadow brutal-hover transition-transform ${isOpened ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isOpened ? <MailOpen className="w-8 h-8" /> : <Mail className="w-8 h-8 group-hover:animate-bounce" />}
          <span>{isOpened ? "SCROLL DOWN" : "OPEN INVITATION"}</span>
        </button>

        <AnimatePresence>
          {isOpened && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.8 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.8 }}
              className="mt-8 bg-white text-slate-900 p-8 brutal-border brutal-shadow text-left relative"
            >
              {/* Stamp Hashtag */}
              <motion.div 
                initial={{ scale: 5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 15 }}
                className="absolute -top-6 -right-4 md:-top-8 md:-right-8 bg-white brutal-border brutal-shadow px-4 py-2 rotate-12 border-4 border-red-600 z-20"
              >
                <h3 className="text-lg md:text-2xl font-black text-red-600 uppercase tracking-wider">
                  #BungaUntukFaisal
                </h3>
              </motion.div>

              <h3 className="text-3xl font-black mb-4 text-pink-500 mt-4 md:mt-0">Dear Friends & Family,</h3>
              <p className="text-xl font-medium leading-relaxed mb-4">
                We're throwing a massive party to celebrate our love, and you better be there! There will be food, music, dancing, and probably some embarrassing moments.
              </p>
              <p className="text-xl font-bold">
                Let's make some memories together! Scroll down for the details.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

    </section>
  );
}
