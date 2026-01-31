"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
    { category: "Frameworks", items: ["ASP.NET Core", "React", "Next.js", "Redux Toolkit"] },
    { category: "Languages", items: ["C#", "SQL", "JavaScript", "TypeScript"] },
    { category: "Back-End", items: ["Dapper", "EF Core", "ADO.NET", "Microservices"] },
    { category: "Architecture", items: ["Clean Architecture", "CQRS", "Onion Arch", "MVC"] },
    { category: "Cloud & Dev", items: ["Docker", "Vercel", "Render", "Git & Github"] },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-40 bg-black border-y border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                    {skills.map((skillGroup, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <span className="text-[10px] font-mono text-white tracking-[0.4em] uppercase mb-8 block opacity-30">
                                {skillGroup.category}
                            </span>
                            <ul className="space-y-4">
                                {skillGroup.items.map((skill, j) => (
                                    <li key={j} className="text-lg text-gray-500 hover:text-white transition-colors cursor-default flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-gray-900 group-hover:bg-white rounded-full transition-colors" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
