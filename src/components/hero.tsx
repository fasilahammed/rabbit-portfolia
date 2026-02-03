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
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 pb-32 overflow-hidden bg-black"
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
                    <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-10">
                        <SocialIcon href="mailto:ahamedahamed1883@gmail.com" icon={<Mail className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />} label="Email" />
                        <SocialIcon href="https://github.com/fasilahammed" icon={<Github className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />} label="Github" />
                        <SocialIcon href="https://www.linkedin.com/in/fasil-ahammed-40696736a/" icon={<Linkedin className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />} label="LinkedIn" />
                        <SocialIcon href="https://wa.me/919946811493" icon={<WhatsappIcon className="w-6 h-6 md:w-8 md:h-8" />} label="WhatsApp" />
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

const WhatsappIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);
