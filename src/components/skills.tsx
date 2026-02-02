"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Cloud, Cpu, Globe, Terminal } from "lucide-react";

const skillCategories = [
    {
        title: ".NET Ecosystem",
        icon: <Terminal className="w-6 h-6 text-emerald-400" />,
        skills: ["C#", "ASP.NET Core", "Web API", "Dapper", "Entity Framework", "SQL Server", "T-SQL", "Stored Procedures", "Swagger"]
    },
    {
        title: "Frontend Development",
        icon: <Layout className="w-6 h-6 text-blue-400" />,
        skills: ["JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "Framer Motion"]
    },
    {
        title: "Tools & Workflow",
        icon: <Cloud className="w-6 h-6 text-cyan-400" />,
        skills: ["Git", "GitHub", "Visual Studio", "Postman", "Figma", "Notion", "Jira"]
    },
    {
        title: "This Project Stack",
        icon: <Code2 className="w-6 h-6 text-purple-400" />,
        skills: ["Next.js 15", "React 19", "Tailwind v4", "Framer Motion", "EmailJS", "Lucide React"]
    },
    {
        title: "Architecture",
        icon: <Cpu className="w-6 h-6 text-orange-400" />,
        skills: ["MVC", "Clean Architecture", "RESTful APIs", "SOLID Principles", "OOP"]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-black relative overflow-hidden">
            {/* Background embellishments */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-sm font-mono text-emerald-500 tracking-[0.3em] uppercase mb-4">
                        Technical Arsenal
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-pixel text-white">
                        Expertise
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ category, index }: { category: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-500"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            <div className="relative z-10">
                <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg border border-white/10 group-hover:border-white/20 transition-colors">
                    {category.icon}
                </div>

                <h4 className="text-xl font-bold text-white mb-6 tracking-tight">
                    {category.title}
                </h4>

                <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill: string, idx: number) => (
                        <span
                            key={idx}
                            className="px-3 py-1.5 text-xs font-mono text-gray-400 bg-white/5 rounded border border-white/5 group-hover:border-white/10 group-hover:text-gray-200 transition-all cursor-default hover:bg-white/10"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
