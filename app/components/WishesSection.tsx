"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WishesSection() {
  const [wishes, setWishes] = useState([
    { name: "John Doe", message: "Selamat menempuh hidup baru! Jangan lupa traktiran." },
    { name: "Jane Smith", message: "Semoga samawa dan cepet dapet momongan! ✨" }
  ]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message) {
      setWishes([{ name, message }, ...wishes]);
      setName("");
      setMessage("");
    }
  };

  return (
    <section className="min-h-screen w-full bg-cyan-300 flex flex-col items-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-12 text-center text-white brutal-shadow-sm" style={{ textShadow: '4px 4px 0 #1e293b' }}>
          SEND US SOME LOVE!
        </h2>

        <div className="bg-white p-8 md:p-12 brutal-border brutal-shadow mb-12">
          <h3 className="text-2xl font-bold mb-6">Leave a Wish 💌</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 text-xl brutal-border bg-gray-50 focus:outline-none focus:ring-4 focus:ring-pink-300"
              required
            />
            <textarea 
              placeholder="Your Wish..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 text-xl brutal-border bg-gray-50 h-32 resize-none focus:outline-none focus:ring-4 focus:ring-pink-300"
              required
            ></textarea>
            <button 
              type="submit"
              className="self-start bg-lime-400 text-slate-900 font-bold text-xl px-8 py-4 brutal-border brutal-shadow-sm brutal-hover transition-transform"
            >
              SEND WISH
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishes.map((wish, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={index} 
              className={`p-6 brutal-border brutal-shadow-sm ${index % 2 === 0 ? 'bg-yellow-200 rotate-1' : 'bg-pink-200 -rotate-1'}`}
            >
              <p className="text-xl font-bold mb-2">{wish.name}</p>
              <p className="text-lg">{wish.message}</p>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
