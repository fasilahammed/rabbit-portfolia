"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const RabbitCursor = () => {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Slower spring for a "following" effect
    const springConfig = { damping: 15, stiffness: 100, mass: 1 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') ||
                target.closest('a')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[50] hidden md:block"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: 20, // Offset to not cover the cursor
                translateY: 20,
            }}
        >
            <motion.div
                animate={{
                    scale: isHovering ? 1.2 : 1,
                    rotate: isHovering ? 10 : 0,
                }}
                className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            >
                {/* Pixel Rabbit Mascot */}
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                >
                    <path
                        d="M8 2H10V6H8V2ZM14 2H16V6H14V2ZM6 6H18V10H20V18H18V20H6V18H4V10H6V6ZM8 10V12H10V10H8ZM14 10V12H16V10H14ZM10 14H14V16H10V14Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                </svg>
            </motion.div>
        </motion.div>
    );
};
