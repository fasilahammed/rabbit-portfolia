"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Github, Download, Terminal, Database, Cpu } from "lucide-react";

export const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const bgGradient = useMotionTemplate`radial-gradient(
        circle 800px at ${mouseX}px ${mouseY}px,
        rgba(16, 185, 129, 0.05) 0%,
        rgba(5, 150, 105, 0.02) 20%,
        transparent 60%
    )`;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
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
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden bg-black"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <motion.div
                className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
                style={{ background: bgGradient }}
            />

            <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content - Typography */}
                <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        <span className="text-emerald-500 font-mono text-xs tracking-widest uppercase">System Online // Ready for Production</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
                        FASIL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800">AHAMMED</span>
                    </h1>

                    <div className="h-px w-32 bg-emerald-500/50 mb-8" />

                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-xl leading-relaxed mb-10">
                        <span className="text-white font-medium">Full Stack Architect</span> specialized in high-performance <span className="text-emerald-400">.NET Core</span> backends and immersive <span className="text-blue-400">React</span> ecosystems.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <a
                            href="#projects"
                            aria-label="View My Work"
                            className="group relative flex items-center justify-center px-8 md:px-12 py-4 md:py-5 border border-white/20 rounded-full bg-black/40 backdrop-blur-md hover:border-white hover:bg-white/5 transition-all duration-700 overflow-hidden w-full md:w-auto"
                        >
                            <span className="relative z-10 text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-white">View My Work</span>
                            <ArrowUpRight className="relative z-10 ml-3 w-4 h-4 group-hover:rotate-45 transition-transform duration-500 ease-out text-white" />
                        </a>

                        <a
                            href="/fasil ahammedkm-Ats.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download CV"
                            className="group relative flex items-center justify-center px-8 md:px-12 py-4 md:py-5 border border-emerald-500/20 rounded-full bg-emerald-950/10 backdrop-blur-md hover:border-emerald-500/20 hover:bg-emerald-900/20 transition-all duration-700 overflow-hidden w-full md:w-auto"
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
                </div>

                {/* Right Content - Abstract Tech Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden lg:flex justify-center items-center relative"
                >
                    {/* Decorative Circles */}
                    <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                    <div className="absolute w-[350px] h-[350px] border border-dashed border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

                    {/* Tech Stack Floating Chips */}
                    <TechChip icon={<Terminal />} label=".NET Core API" x={-120} y={-80} delay={0.5} />
                    <TechChip icon={<Cpu />} label="Clean Arch" x={140} y={-40} delay={0.7} />
                    <TechChip icon={<Database />} label="SQL Server" x={-100} y={100} delay={0.9} />

                    <div className="relative z-10 p-8 glass-card rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                        <code className="text-sm font-mono text-emerald-400">
                            class Architect {'{'}<br />
                            &nbsp;&nbsp;Stack = "Full-Stack";<br />
                            &nbsp;&nbsp;Focus = "Scalability";<br />
                            &nbsp;&nbsp;Status = "Available";<br />
                            {'}'}
                        </code>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500/50">Scroll</span>
            </motion.div>
        </section>
    );
};

const TechChip = ({ icon, label, x, y, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ opacity: 1, x, y }}
        transition={{ delay, duration: 1, type: "spring" }}
        className="absolute z-20 flex items-center gap-2 px-4 py-2 bg-black/50 border border-white/10 rounded-full backdrop-blur-md shadow-xl"
    >
        <div className="text-emerald-400 w-4 h-4">{icon}</div>
        <span className="text-xs font-mono text-white/80 whitespace-nowrap">{label}</span>
    </motion.div>
);

const SocialIcon = ({ href, icon, label }: any) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
    >
        {icon}
    </a>
);
