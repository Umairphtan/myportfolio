"use client";
import { motion } from "framer-motion";

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"],
  backend: ["Node.js", "Express.js", "MongoDB", "REST API"],
  tools: ["Git", "GitHub", "JWT", "Postman", "Vercel"],
};

export default function Skills() {
  return (
    <section className="py-32 px-6">
      <h2 className="text-4xl text-white font-bold text-center mb-16">
        Skills & Technologies
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="rounded-2xl p-[1px] bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600"
          >
            <div className=" rounded-2xl p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 capitalize">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10 hover:border-emerald-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
