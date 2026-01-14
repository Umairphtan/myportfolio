"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="container mx-auto px-6 py-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold text-white">
          About <span className="text-indigo-500">Me</span>
        </h1>

        <p className="mt-6 text-gray-300 leading-relaxed text-lg">
          I am a passionate <b className="text-white">Full Stack MERN Developer</b> 
          with strong experience in building modern, scalable, and responsive web 
          applications. I focus on clean UI, smooth animations, and maintainable code.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {["React", "Next.js", "Node.js", "MongoDB"].map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/20 bg-white/5 py-4 text-white font-medium shadow-md backdrop-blur-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
