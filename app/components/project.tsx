"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/app/types/project";

export default function Card({ project }: { project: Project }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4  backdrop-blur mt-20 "
        >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-gray-400 text-yellow-500">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2 text-white">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="mt-5 flex gap-4 text-white">
                <a href={project.liveUrl} target="_blank">
                    <ExternalLink size={18} />
                </a>
                <a href={project.githubUrl} target="_blank">
                    <Github size={18} />
                </a>
            </div>
        </motion.div>
    );
}
