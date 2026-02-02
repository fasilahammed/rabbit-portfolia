"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Loader2, ArrowRight, Mail, MapPin, Phone } from "lucide-react";

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
        <section id="contact" className="py-32 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* Left Column - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-emerald-400 font-mono text-sm tracking-[0.4em] uppercase mb-6">
                            Contact Interface
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Let’s Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                The Future.
                            </span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
                            Have a complex project or a visionary idea? I'm currently available for freelance work and consulting.
                        </p>

                        <div className="space-y-8">
                            <ContactItem icon={<Mail />} label="Email Structure" value="ahamedahamed1883@gmail.com" />
                            <ContactItem icon={<MapPin />} label="Base of Operations" value="Kerala, India" />
                            <ContactItem icon={<Phone />} label="Comms Channel" value="+91 9946 811 493" />
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl"
                    >
                        {success ? (
                            <div className="text-center py-20">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <Send className="w-8 h-8 text-emerald-400" />
                                </motion.div>
                                <h4 className="text-2xl text-white font-bold mb-2">Transmission Received</h4>
                                <p className="text-gray-400 mb-8">I'll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setSuccess(false)}
                                    className="text-sm text-emerald-400 hover:text-emerald-300 font-mono tracking-widest uppercase border-b border-emerald-500/30 pb-1"
                                >
                                    Send New Message
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs text-gray-500 font-mono tracking-widest uppercase ml-1">Identity</label>
                                        <input
                                            type="text"
                                            name="from_name"
                                            required
                                            placeholder="John Doe"
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-white/20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs text-gray-500 font-mono tracking-widest uppercase ml-1">Signal Protocol</label>
                                        <input
                                            type="email"
                                            name="from_email"
                                            required
                                            placeholder="john@example.com"
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-white/20"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-gray-500 font-mono tracking-widest uppercase ml-1">Data Payload</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-white/20 resize-none"
                                    />
                                </div>

                                {error && (
                                    <p className="text-red-400 text-sm bg-red-900/10 p-3 rounded border border-red-900/20">
                                        {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <Loader2 className="animate-spin" />
                                    ) : (
                                        <>
                                            <span>Initialize</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ContactItem = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="flex items-center gap-6">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 border border-white/10">
            {icon}
        </div>
        <div>
            <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">{label}</p>
            <p className="text-white font-medium text-lg">{value}</p>
        </div>
    </div>
);


