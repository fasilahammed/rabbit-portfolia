"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Enterprise ERP",
        category: "Architecture",
        year: "2024",
        image: "/ecommerce.png",
        link: "#"
    },
    {
        title: "Aura E-Commerce",
        category: "Full Stack",
        year: "2023",
        image: "/ecommerce.png",
        link: "https://snapmob1.vercel.app/"
    },
    {
        title: "Portfolio V2",
        category: "Web Studio",
        year: "2024",
        image: "/portfolio.png",
        link: "https://fasilahammed.github.io/portfolio/"
    },
    {
        title: "Travel Hub",
        category: "Interface",
        year: "2023",
        image: "/TASK Photo.png",
        link: "#"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-60 bg-black">
            <div className="container mx-auto px-10">
                <div className="flex flex-col mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <span className="w-12 h-[1px] bg-white/20" />
                        <span className="text-[10px] font-pixel text-gray-400 tracking-[0.5em] uppercase">Selected Works</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-[8rem] font-pixel text-white tracking-tighter leading-none"
                    >
                        ARCHIVE
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-x-24 gap-y-60">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="group"
                        >
                            <a href={project.link} target="_blank" rel="noreferrer" className="block relative">
                                <div className="aspect-[16/10] overflow-hidden bg-zinc-950/50 border border-white/5 relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                                    />
                                    <div className="absolute top-6 left-6 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-[9px] font-pixel text-white/50">
                                        {project.year}
                                    </div>
                                </div>

                                <div className="mt-12 flex justify-between items-end">
                                    <div>
                                        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.category}</p>
                                        <h4 className="text-3xl md:text-5xl font-pixel text-white group-hover:pl-4 transition-all duration-500">{project.title}</h4>
                                    </div>
                                    <div className="text-white/20 group-hover:text-white group-hover:rotate-45 transition-all duration-500">
                                        <ArrowUpRight size={48} strokeWidth={1} />
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
