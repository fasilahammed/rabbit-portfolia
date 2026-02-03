"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-[60] py-10 px-12 flex items-center justify-between bg-transparent pointer-events-none">
            {/* Top Left - Visualizer Bars */}
            <div className="flex items-center gap-1 pointer-events-auto cursor-pointer group h-6">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            height: [8, 16, 12, 20, 10][(i + Math.floor(Math.random() * 5)) % 5],
                        }}
                        transition={{
                            duration: 0.5 + Math.random(),
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                        className="w-[3px] bg-white opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                ))}
            </div>

            {/* Top Right Actions */}
            <div className="flex items-center gap-12 pointer-events-auto">
                <a
                    href="#contact"
                    className="group flex items-center gap-3 text-xs font-pixel tracking-[0.2em] text-white hover:text-gray-400 transition-colors uppercase cursor-pointer"
                >
                    Contact
                    <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                </a>
            </div>
        </nav>
    );
};
