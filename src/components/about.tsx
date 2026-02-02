"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Zap } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-32 bg-black relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-emerald-500 font-mono text-xs tracking-widest uppercase">My Philosophy</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            Architecting <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                                Digital Resilience
                            </span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                I don't just write code; I engineer <span className="text-white font-medium">systems</span>.
                                My approach is rooted in the belief that software should be robust, scalable, and intuitive.
                            </p>
                            <p>
                                Specializing in the <span className="text-white font-medium">.NET Ecosystem</span> and modern <span className="text-white font-medium">React</span> frontends,
                                I bridge the gap between complex backend logic and seamless user experiences. Every database schema,
                                every API endpoint, and every component is crafted with performance and maintainability in mind.
                            </p>
                        </div>

                        <div className="flex gap-8 mt-12">
                            <Feature icon={<Server />} title="Backend First" desc="Solid Architecture" />
                            <Feature icon={<Code />} title="Clean Code" desc="Maintainable" />
                            <Feature icon={<Zap />} title="High Perf" desc="Optimized" />
                        </div>
                    </motion.div>

                    {/* Right - Glass Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Ambient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 blur-3xl rounded-full -z-10" />

                        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-3xl relative overflow-hidden">
                            {/* Scanning Line Effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-[scan_3s_linear_infinite]" />

                            <div className="grid grid-cols-2 gap-10">
                                <StatItem number="01+" label="Years of Exp." />
                                <StatItem number="05+" label="Projects Built" />
                                <StatItem number="10+" label="Enterprise Tools" />
                                <StatItem number="100%" label="Commitment" />
                            </div>

                            <div className="mt-10 pt-10 border-t border-white/10">
                                <p className="font-mono text-xs text-center text-gray-500 uppercase tracking-widest">
                                    System Status: <span className="text-emerald-400">Optimal</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Feature = ({ icon, title, desc }: any) => (
    <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 border border-white/5">
            {icon}
        </div>
        <div>
            <h3 className="text-white font-bold text-sm">{title}</h3>
            <span className="text-gray-500 text-xs">{desc}</span>
        </div>
    </div>
);

const StatItem = ({ number, label }: any) => (
    <div className="text-center">
        <h3 className="text-4xl md:text-5xl font-pixel text-white mb-2">{number}</h3>
        <p className="text-emerald-500 font-mono text-xs uppercase tracking-widest">{label}</p>
    </div>
);
