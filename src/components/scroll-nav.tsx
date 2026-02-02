"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Arsenal" },
    { id: "projects", label: "Works" },
    { id: "contact", label: "Contact" },
];

export const ScrollNav = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6 items-end">
            {sections.map((section) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center gap-4 text-right"
                >
                    <span
                        className={`text-[10px] font-mono uppercase tracking-widest transition-all duration-300 ${activeSection === section.id
                                ? "text-white opacity-100 translate-x-0"
                                : "text-gray-500 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                            }`}
                    >
                        {section.label}
                    </span>
                    <div
                        className={`w-1.5 h-1.5 rounded-full border transition-all duration-300 ${activeSection === section.id
                                ? "bg-emerald-500 border-emerald-500 scale-125"
                                : "border-gray-600 bg-transparent group-hover:border-white"
                            }`}
                    />
                </a>
            ))}
        </div>
    );
};
