"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Send, Loader2, CheckCircle2, ArrowUpRight } from "lucide-react";

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (!formRef.current) return;

            // Updated with credentials from your screenshots
            await emailjs.sendForm(
                'service_6t73qxr',
                'template_hdw4zgb',
                formRef.current,
                'pDKpttsGzOGY75O0Z'
            );
            setSuccess(true);
            formRef.current.reset();
        } catch (error) {
            console.error(error);
            setError("Failed to send message. Please check your connection or try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-60 bg-black relative">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-[0.5em] mb-6">Inquiry</p>
                    <h2 className="text-5xl md:text-8xl font-light text-white tracking-tight mb-12">
                        Have a vision? <br /> Let's build it <span className="font-pixel italic text-white/40">Together</span>.
                    </h2>
                    <a href="mailto:ahamedahamed1883@gmail.com" className="text-2xl md:text-3xl font-light text-white underline decoration-white/20 hover:decoration-white transition-all underline-offset-[12px]">
                        ahamedahamed1883@gmail.com
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto"
                >
                    {success ? (
                        <div className="py-12 flex flex-col items-center gap-4">
                            <CheckCircle2 className="w-12 h-12 text-white" />
                            <p className="text-xl font-light text-white">Message successfully dispatched.</p>
                            <Button onClick={() => setSuccess(false)} variant="outline" className="mt-4 text-white border-white/20 hover:bg-white/10">
                                Send another
                            </Button>
                        </div>
                    ) : (
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-10">
                                <InputGroup label="Identity" name="from_name" placeholder="Name" />
                                <InputGroup label="Channel" name="from_email" placeholder="Email" type="email" />
                            </div>
                            <InputGroup label="Intent" name="message" placeholder="Tell me about your project..." textarea />

                            {error && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded text-red-200 text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex items-center gap-4 text-white text-lg font-medium mx-auto mt-20"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : "Dispatch Message"}
                                <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

const InputGroup = ({ label, name, placeholder, type = "text", textarea = false }: any) => (
    <div className="text-left group">
        <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-4 block group-focus-within:text-white transition-colors">
            {label}
        </label>
        {textarea ? (
            <textarea
                name={name}
                required
                rows={4}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none placeholder:text-gray-800"
            />
        ) : (
            <input
                type={type}
                name={name}
                required
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder:text-gray-800"
            />
        )}
    </div>
)
