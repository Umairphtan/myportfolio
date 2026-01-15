"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                formRef.current!,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                () => {
                    setSuccess("Message sent successfully 🚀");
                    setLoading(false);
                    formRef.current?.reset();
                },
                () => {
                    setSuccess("Something went wrong ❌");
                    setLoading(false);
                }
            );
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <motion.form
                ref={formRef}
                onSubmit={sendEmail}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-lg bg-white/5 p-8 rounded-2xl border border-white/10 space-y-5"
            >
                <h2 className="text-3xl font-bold text-white text-center">
                    Contact Me
                </h2>

                <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white"
                />

                <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white"
                />

                <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white"
                />

                <button
                    disabled={loading}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                    <p className="text-center text-sm text-green-400">{success}</p>
                )}
            </motion.form>
        </section>
    );
}
