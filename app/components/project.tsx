"use client";
import Link from "next/link";
import { projects } from "@/app/data/project";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="py-32">
            <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="rounded-2xl p-[1px] bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500"
                    >
                        <Link
                            href={`/projects/${project.slug}`}
                            className="block bg-black rounded-2xl p-6 hover:bg-gray-900 transition"
                        >
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-400 mt-2">{project.description}</p>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
