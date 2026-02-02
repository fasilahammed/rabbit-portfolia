"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black relative pt-24 pb-12 px-6 md:px-12 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-pixel text-white mb-6 block tracking-tight">FASIL.</Link>
                        <p className="text-gray-400 font-light leading-relaxed max-w-sm text-sm md:text-base">
                            Architecting digital ecosystems with precision, scalability, and modern aesthetics.
                            Let's build something extraordinary together.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-mono text-emerald-500/80 uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm font-light">
                            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300">About</a></li>
                            <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300">Skills</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300">Projects</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-xs font-mono text-emerald-500/80 uppercase tracking-widest mb-6">Connect</h4>
                        <ul className="space-y-4 text-sm font-light">
                            <li><a href="https://linkedin.com/in/fasil-ahammed-40696736a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300">LinkedIn</a></li>
                            <li><a href="https://github.com/fasilahammed" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300">GitHub</a></li>
                            <li><a href="https://www.instagram.com/fasil.ahamd/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300">Instagram</a></li>
                            <li><a href="mailto:ahamedahamed1883@gmail.com" className="text-gray-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300">Email</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-xs text-gray-600 font-mono">
                        © {currentYear} Fasil Ahammed. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 text-xs font-mono text-gray-500 hover:text-white transition-colors"
                    >
                        BACK TO TOP
                        <div className="w-8 h-8 border border-white/10 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <ArrowUp className="w-3 h-3" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};
