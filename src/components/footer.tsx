import Link from "next/link";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-black py-32 px-12 border-t border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                <div className="text-gray-500 text-[10px] font-pixel tracking-[0.3em] uppercase">
                    © 2026 FASIL AHAMMED — CRAFTED WITH PRECISION
                </div>

                <div className="flex gap-16 text-[10px] font-pixel uppercase tracking-[0.4em]">
                    <a href="https://github.com/fasilahammed" className="text-gray-500 hover:text-white transition-colors">GH</a>
                    <a href="https://www.linkedin.com/in/fasil-ahammed-40696736a/" className="text-gray-500 hover:text-white transition-colors">LI</a>
                    <a href="https://www.instagram.com/fasil.ahamd/" className="text-gray-500 hover:text-white transition-colors">IG</a>
                </div>

                <button
                    onClick={scrollToTop}
                    className="group flex flex-col items-center gap-6"
                >
                    <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-700">
                        <ArrowUp className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-pixel tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">BACK TO TOP</span>
                </button>
            </div>
        </footer>
    );
};
