"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-white">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Full-Stack MERN
          </span>{" "}
          Developer
        </h1>

        <p className="mt-6 text-gray-400 text-lg md:text-xl">
          I build modern, scalable & high-performance web applications
          using MongoDB, Express, React & Node.js.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 font-semibold hover:scale-105 transition">
            View Projects
          </button>

          <button className="px-8 py-4 rounded-xl border text-white border-white hover:bg-cyan-600 transition">
            Download CV
          </button>
        </div>
      </motion.div>
    </section>
  );
}
