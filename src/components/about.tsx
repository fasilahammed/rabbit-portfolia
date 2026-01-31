"use client";

import React from "react";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="about" className="py-60 bg-black relative overflow-hidden">
            <div className="container mx-auto px-10 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-24"
                >
                    <div className="flex items-center gap-6 text-gray-500 font-pixel text-[10px] tracking-[0.5em] uppercase">
                        <span className="w-16 h-px bg-white/10" />
                        Philosophy
                    </div>

                    <h2 className="text-5xl md:text-8xl leading-[1.1] text-white tracking-tighter">
                        I architect digital <span className="font-pixel text-gray-500">ecosystems</span> with precision and <span className="font-pixel text-gray-500">scale</span>.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-24 border-t border-white/5 pt-24">
                        <div className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                            As a <span className="text-white">Full-Stack Engineer</span>, I don’t just write code; I craft scalable modular architectures. My focus lies at the intersection of robust backend systems and intuitive digital experiences.
                        </div>
                        <div className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                            Specializing in <span className="text-white">.NET Core</span> and <span className="text-white">React</span>, I bridge the gap between complex business logic and seamless front-end delivery. Every project is an exercise in performance optimization.
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
