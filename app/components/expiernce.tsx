"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-white">
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-white">
          {[
            {
              title: "Frontend Development",
              desc: "Modern, responsive & animated UI using React & Next.js",
            },
            {
              title: "Backend Development",
              desc: "Secure REST APIs with Node.js, Express & MongoDB",
            },
            {
              title: "Full-Stack Solutions",
              desc: "Complete MERN stack applications from idea to deployment",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-yellow-200 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
