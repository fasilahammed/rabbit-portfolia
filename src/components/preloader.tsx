"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 100);

        return () => clearInterval(interval);
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
                    className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center"
                >
                    <div className="relative flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8"
                        >
                            <svg
                                width="60"
                                height="60"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-white animate-pulse"
                            >
                                <path
                                    d="M8 2H10V6H8V2ZM14 2H16V6H14V2ZM6 6H18V10H20V18H18V20H6V18H4V10H6V6ZM8 10V12H10V10H8ZM14 10V12H16V10H14ZM10 14H14V16H10V14Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h2
                                className="text-4xl md:text-6xl font-pixel text-white"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {progress}%
                            </motion.h2>
                        </div>

                        <div className="w-48 h-[2px] bg-white/10 mt-4 relative overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-white"
                                initial={{ x: "-100%" }}
                                animate={{ x: `${progress - 100}%` }}
                                transition={{ ease: "linear" }}
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 text-[10px] uppercase tracking-[0.4em] text-gray-500 font-mono"
                        >
                            Initializing Experience
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
