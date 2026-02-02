"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Optimized background gradient that updates via GPU-accelerated motion values
    // avoiding heavy main-thread style recalculations
    const bgGradient = useMotionTemplate`radial-gradient(
        circle 800px at ${mouseX}px ${mouseY}px,
        rgba(120, 119, 198, 0.08) 0%,
        rgba(88, 86, 214, 0.04) 20%,
        transparent 60%
    )`;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Update motion values directly without triggering React renders
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 px-6 overflow-hidden"
        >
            {/* Background is handled by globals.css .stars class */}
            <div className="absolute inset-0 z-[-1] stars" />

            {/* Optimized Spotlight Effect */}
            <motion.div
                className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
                style={{ background: bgGradient }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 text-center flex flex-col items-center"
            >
                {/* Header tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mb-8 md:mb-12 text-[10px] md:text-xs text-emerald-400/80 font-mono tracking-[0.4em] flex items-center gap-2 uppercase"
                >
                    <span>{`{`}</span>
                    <span className="text-gray-300">Full Stack .NET Developer & Architect</span>
                    <span>{`}`}</span>
                </motion.div>

                {/* Huge Pixel Name - Stacked for impact */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center justify-center mb-12 tracking-tighter leading-[0.85] drop-shadow-[0_0_80px_rgba(255,255,255,0.1)]"
                >
                    <span className="text-[15vw] md:text-[11rem] lg:text-[13rem] font-pixel text-white">FASIL</span>
                    <span className="text-[13vw] md:text-[9rem] lg:text-[11rem] font-pixel text-slate-400/20 italic mt-[-2vw]">AHAMMED</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="max-w-2xl text-center text-gray-400 text-sm md:text-lg font-light mb-16 px-4 leading-relaxed"
                >
                    Engineering scalable enterprise solutions with <span className="text-emerald-400 font-medium">.NET Core</span>, <span className="text-white">Cloud Architecture</span>, and modern <span className="text-white">React</span> interfaces.
                </motion.p>

                {/* View Our Work Button Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="flex flex-col items-center gap-10"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <a
                            href="#projects"
                            className="group relative flex items-center justify-center px-12 py-5 border border-white/20 rounded-full bg-black/40 backdrop-blur-md hover:border-white hover:bg-white/5 transition-all duration-700 overflow-hidden"
                        >
                            <span className="relative z-10 text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-white">View My Work</span>
                            <ArrowUpRight className="relative z-10 ml-3 w-4 h-4 group-hover:rotate-45 transition-transform duration-500 ease-out text-white" />
                        </a>

                        <a
                            href="/fasil ahammedkm-Ats.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-center px-12 py-5 border border-emerald-500/20 rounded-full bg-emerald-950/10 backdrop-blur-md hover:border-emerald-500/50 hover:bg-emerald-900/20 transition-all duration-700 overflow-hidden"
                        >
                            <span className="relative z-10 text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-emerald-100">Download CV</span>
                            <div className="relative z-10 ml-3 w-4 h-4 border-l border-b border-emerald-100 transform -rotate-45 group-hover:translate-y-1 transition-transform duration-500" />
                        </a>
                    </div>

                    {/* Icon Navigation as seen in screenshot */}
                    <div className="flex items-center gap-20 pt-4">
                        <SocialIcon href="mailto:ahamedahamed1883@gmail.com" icon={<Mail size={36} strokeWidth={1.5} />} label="Email" />
                        <SocialIcon href="https://github.com/fasilahammed" icon={<Github size={36} strokeWidth={1.5} />} label="Github" />
                        <SocialIcon href="https://www.linkedin.com/in/fasil-ahammed-40696736a/" icon={<Linkedin size={36} strokeWidth={1.5} />} label="LinkedIn" />
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Year Indicator */}
            <div className="absolute bottom-12 left-12 text-sm md:text-xl font-medium text-gray-400 font-sans tracking-widest hidden md:block">
                © 2026
            </div>

            {/* Bottom Service Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-400 font-sans tracking-[0.5em] uppercase hidden md:block">
                Services
            </div>

            {/* Mascot in bottom right */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-12 right-12 cursor-pointer hidden md:block"
            >
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                >
                    <path
                        d="M8 2H10V6H8V2ZM14 2H16V6H14V2ZM6 6H18V10H20V18H18V20H6V18H4V10H6V6ZM8 10V12H10V10H8ZM14 10V12H16V10H14ZM10 14H14V16H10V14Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                </svg>
            </motion.div>

        </section>
    );
};

const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0.5 }}
        whileHover={{ opacity: 1, y: -8 }}
        className="flex flex-col items-center gap-4 text-white transition-all duration-300 group"
    >
        <div className="p-2 border border-white/5 rounded-full group-hover:border-white/20 transition-colors">
            {icon}
        </div>
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            {label}
        </span>
    </motion.a>
);
