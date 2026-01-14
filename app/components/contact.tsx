"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold mb-6"
      >
        Let's Work Together
      </motion.h2>

      <p className="text-gray-400 mb-8">
        Email: umairkhan@email.com
      </p>

      <a className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition">
        Contact Me
      </a>
    </section>
  );
}
