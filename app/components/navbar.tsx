"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent ">
          Dev-UMAIR KHAN
        </Link>

        <div className="space-x-6 text-sm text-xl text-white">
          <Link href="/" className="hover:text-pink-400">Skills</Link>
          <Link href="/projects" className="hover:text-purple-400">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}
