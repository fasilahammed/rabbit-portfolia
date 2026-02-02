"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black relative pt-24 pb-12 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
                    <div>
                        <h2 className="text-[15vw] md:text-[8rem] font-pixel text-white/10 leading-none select-none pointer-events-none">
                            FASIL
                        </h2>
                        <p className="text-gray-500 max-w-md mt-4 ml-2">
                            Full Stack Engineer specializing in robust backend systems and interactive modern frontends.
                        </p>
                    </div>

                    <div className="flex gap-8">
                        <SocialLink href="https://github.com/fasilahammed" icon={<Github size={20} />} label="GitHub" />
                        <SocialLink href="https://linkedin.com/in/fasil-ahammed-40696736a/" icon={<Linkedin size={20} />} label="LinkedIn" />
                        <SocialLink href="mailto:ahamedahamed1883@gmail.com" icon={<Mail size={20} />} label="Email" />
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-600 font-mono tracking-widest uppercase">
                        © {currentYear} Fasil Ahammed.
                    </p>

                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="group flex items-center gap-3 text-xs font-mono text-emerald-500 hover:text-white transition-colors uppercase tracking-widest bg-emerald-900/10 px-6 py-3 rounded-full hover:bg-emerald-900/20"
                    >
                        Return to Signal
                        <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon, label }: { href: string, icon: any, label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300"
    >
        {icon}
    </a>
);
