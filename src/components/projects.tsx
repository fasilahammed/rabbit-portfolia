"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Houra ERP - Wholesale Billing & Inventory",
        description: "A high-performance enterprise resource planning system engineered for wholesale distribution. Features a 'Backend-First' architecture using Dapper for raw SQL performance, bypassing EF Core overhead. Implements a complex Two-Level Stock Model (Physical vs. Reserved), Booking-based Billing, and a custom Stock Ledger. Includes Partial Payment tracking, QuestPDF for invoice generation, and TVP (Table Valued Parameters) for bulk inserts. Designed for massive scalability and speed.",
        tags: [".NET Core", "Dapper", "SQL Stored Procs", "Clean Arch", "QuestPDF", "MailKit", "JWT"],
        link: "https://github.com/fasilahammed",
        image: "/houra_erp.png",
        year: "2024"
    },
    {
        title: "SnapMob - Mobile First E-commerce",
        description: "A robust mobile-first e-commerce backend built with ASP.NET Core Web API using Clean Architecture principles. Features a Generic Repository pattern with AutoMapper for DTO contracts and 'Soft Delete' architecture everywhere. The system implements role-based JWT Auth, Cloudinary for image management, and snapshot logic for order items. Includes complex modules for Cart (stock validation), Wishlist, and Admin Dashboard with revenue analytics. Frontend built with React, Redux Toolkit, and Tailwind.",
        tags: [".NET Core", "Clean Arch", "Generic Repo", "Cloudinary", "AutoMapper", "SQL Server", "JWT", "Razorpay"],
        link: "https://github.com/fasilahammed/SnapMob_Backend.git",
        demo: "https://snapmob1.vercel.app/",
        image: "/snapmob.png",
        year: "2025"
    },
    {
        title: "Portfolio V2 - Interactive Digital Experience",
        description: "A high-performance interactive portfolio engineered with Next.js 15 (App Router) and React 19. Features a custom 'Rabbit Cursor' with physics-based follow mechanics, GPU-accelerated animations using Framer Motion, and a reusable component system built on Tailwind v4. Includes a Scroll Navigation Observer, fully responsive layouts, and a server-less email system integrated via EmailJS. The UI strictly adheres to a 'Dark Mode' aesthetic with glassmorphism effects and performance-first CSS.",
        tags: [".Next.js 15", "React 19", "Tailwind v4", "Framer Motion", "EmailJS", "Lucide React"],
        link: "https://github.com/fasilahammed/rabbit-portfolia.git",
        demo: "https://fasilahammed.netlify.app/",
        image: "/portfolio_new.png",
        year: "2026"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-black relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-emerald-500 font-mono text-xs tracking-widest uppercase">My Works</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Case Studies</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-0 md:gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative grid md:grid-cols-12 gap-8 items-center py-20 border-b border-white/5 last:border-0"
        >
            {/* Background Glow for each project */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/5 to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -z-10" />

            {/* Number Watermark */}
            <div className="absolute top-10 left-0 text-[5rem] md:text-[10rem] font-bold text-white/[0.02] font-pixel pointer-events-none select-none z-0 group-hover:text-white/[0.04] transition-colors">
                0{index + 1}
            </div>

            {/* Project Image - Large & Interactive */}
            <div className="md:col-span-7 relative z-10 order-2 md:order-1">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View source code for ${project.title}`}
                    className="block relative rounded-lg overflow-hidden border border-white/10 group-hover:border-emerald-500/50 transition-all duration-500 shadow-2xl"
                >
                    <div className="aspect-video relative bg-zinc-900 overflow-hidden">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-700 z-10" />

                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </a>
            </div>

            {/* Content Side */}
            <div className="md:col-span-5 relative z-10 order-1 md:order-2 flex flex-col justify-center pl-0 md:pl-10">
                <div className="mb-6 flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono tracking-widest uppercase">
                        {project.year}
                    </span>
                    <span className="h-px flex-1 bg-white/10" />
                </div>

                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors">
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Project: ${project.title}`}>
                        {project.title}
                    </a>
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 border-l-2 border-white/10 pl-4 group-hover:border-emerald-500 transition-colors duration-500">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-xs text-gray-500 font-mono">#{tag}</span>
                    ))}
                </div>

                <div className="flex items-center gap-8">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View Source Code on GitHub"
                        className="group/btn flex items-center gap-3 text-white font-medium text-sm hover:text-emerald-400 transition-colors"
                    >
                        <Github size={20} />
                        <span className="relative">
                            Source Code
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-400 transition-all duration-300 group-hover/btn:w-full" />
                        </span>
                    </a>

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View Live Demo"
                            className="group/btn flex items-center gap-3 text-white font-medium text-sm hover:text-emerald-400 transition-colors"
                        >
                            <ExternalLink size={20} />
                            <span className="relative">
                                Live Demo
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-400 transition-all duration-300 group-hover/btn:w-full" />
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
