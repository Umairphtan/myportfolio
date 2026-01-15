"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Music2 } from "lucide-react";

const socials = [
    {
        name: "GitHub",
        icon: Github,
        link: "https://github.com/Umairphtan",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        link: "https://www.linkedin.com/in/umair-khan-65484838b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        name: "TikTok",
        icon: Music2,
        link: "https://www.tiktok.com/@codewithumair2?_r=1&_t=ZS-935YKrXqA4b",
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-10">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

                {/* Social Icons */}
                <div className="flex gap-6">
                    {socials.map((social, i) => {
                        const Icon = social.icon;
                        return (
                            <motion.a
                                key={i}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition"
                            >
                                <Icon size={22} />
                            </motion.a>
                        );
                    })}
                </div>

                {/* Divider Glow */}
                <div className="h-px w-40 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40" />

                {/* Copyright */}
                <p className="text-sm text-gray-500 text-center">
                    © 2026 <span className="text-white font-medium">Umair Khan</span> —
                    Built with <span className="text-purple-400">Next.js</span> &{" "}
                    <span className="text-pink-400">Framer Motion</span>
                </p>
            </div>
        </footer>
    );
}
