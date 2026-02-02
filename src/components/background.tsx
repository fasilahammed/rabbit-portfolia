"use client";

import React, { useEffect, useRef } from "react";

export const Background = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let stars: Star[] = [];
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            stars = [];

            const isMobile = width < 768;
            const divisor = isMobile ? 15000 : 10000;
            const starCount = Math.floor((width * height) / divisor);

            for (let i = 0; i < starCount; i++) {
                stars.push(new Star(width, height));
            }
        };

        const animate = () => {
            if (!ctx) return;

            // Smooth mouse movement for camera effect
            targetX += (mouseX - targetX) * 0.05;
            targetY += (mouseY - targetY) * 0.05;

            // Clear with trail effect for a bit of motion blur
            ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
            ctx.fillRect(0, 0, width, height);

            // Draw generic galaxy glow
            const gradient = ctx.createRadialGradient(
                width / 2 - targetX * 0.2,
                height / 2 - targetY * 0.2,
                0,
                width / 2 - targetX * 0.2,
                height / 2 - targetY * 0.2,
                width
            );
            gradient.addColorStop(0, "rgba(16, 185, 129, 0.05)"); // Emerald center
            gradient.addColorStop(0.4, "rgba(5, 150, 105, 0.02)");
            gradient.addColorStop(1, "transparent");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Update and draw stars
            stars.forEach((star) => {
                star.update(width, height, targetX, targetY);
                star.draw(ctx);
            });

            requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse position from -1 to 1
            mouseX = (e.clientX - width / 2) * 0.5;
            mouseY = (e.clientY - height / 2) * 0.5;
        };

        init();
        animate();

        window.addEventListener("resize", init);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", init);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none bg-black"
        />
    );
};

class Star {
    x: number;
    y: number;
    z: number;
    size: number;
    brightness: number;

    constructor(w: number, h: number) {
        this.x = (Math.random() - 0.5) * w * 2;
        this.y = (Math.random() - 0.5) * h * 2;
        this.z = Math.random() * w; // Depth
        this.size = Math.random() * 1.5;
        this.brightness = Math.random();
    }

    update(w: number, h: number, mx: number, my: number) {
        // Move star towards screen (Z axis)
        this.z -= 2;

        // Reset if too close or out of bounds
        if (this.z <= 0) {
            this.z = w;
            this.x = (Math.random() - 0.5) * w * 2;
            this.y = (Math.random() - 0.5) * h * 2;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        let w = ctx.canvas.width;
        let h = ctx.canvas.height;

        // Perspective projection
        let sx = (this.x / this.z) * w + w / 2;
        let sy = (this.y / this.z) * h + h / 2;

        // Parallax offset
        // We move the stars opposite to the mouse slightly for depth
        // But the Z-movement is the main effect (Warp speed style) or Galaxy rotation?
        // Let's stick to a 3D Starfield effect which feels like "moving through space"

        // Calculate size based on depth
        let r = (1 - this.z / w) * 2.5 * this.size;

        // Check bounds
        if (sx < 0 || sx > w || sy < 0 || sy > h) return;

        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);

        // Color based on depth (Emerald to White fade)
        const alpha = (1 - this.z / w);
        ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
        ctx.fill();
    }
}
