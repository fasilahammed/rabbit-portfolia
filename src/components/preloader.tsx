"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootWeb = [
    "Initializing Core Systems...",
    "Loading Neural Interface...",
    "Optimizing GPU threads...",
    "Establishing Secure Connection...",
    "Syncing Digital Assets...",
    "System Ready."
];

export const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Text cycling
        const textInterval = setInterval(() => {
            setTextIndex(prev => (prev + 1) % bootWeb.length);
        }, 800);

        // Progress loader
        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + Math.floor(Math.random() * 5) + 1;
                if (next >= 100) {
                    clearInterval(interval);
                    clearInterval(textInterval);
                    setTimeout(() => setIsLoading(false), 800);
                    return 100;
                }
                return next;
            });
        }, 150);

        return () => {
            clearInterval(interval);
            clearInterval(textInterval);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: '-100%',
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center font-mono"
                >
                    <div className="w-64">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-emerald-500 text-xs tracking-widest uppercase">System Boot</span>
                            <span className="text-white text-2xl md:text-4xl font-bold">{progress}%</span>
                        </div>

                        <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                            <motion.div
                                className="h-full bg-emerald-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                            />
                        </div>

                        <div className="h-6 flex items-center">
                            <span className="text-gray-500 text-xs animate-pulse">
                                {'>'} {bootWeb[textIndex]}
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
