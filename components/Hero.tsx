"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, BookOpen, Award, FileText, Star } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(titleRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
        )
            .fromTo(subRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
                "-=1.0"
            );

    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/mxene-neon.png"
                    alt="MXene Nanostructure"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
            </div>

            <div className="z-10 text-center px-4 max-w-6xl mx-auto">
                <div className="mb-8 flex justify-center">
                    <div className="p-3 border border-brand-lime/30 rounded-full backdrop-blur-md shadow-neon-lime bg-black/50">
                        <Zap className="w-8 h-8 text-brand-lime" />
                    </div>
                </div>
                <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter text-white mb-6 drop-shadow-2xl">
                    Prof. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-lime filter drop-shadow-lg">Seung Kyu Hwang</span>
                </h1>
                <p ref={subRef} className="text-xl md:text-3xl text-gray-200 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
                    Pioneering the Future of <span className="text-brand-cyan font-medium drop-shadow-neon">Advanced Materials</span> & <span className="text-brand-lime font-medium drop-shadow-neon">Sustainable Energy</span>
                </p>

                {/* Stats Dashboard */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    <div className="bg-neutral-900/60 backdrop-blur-md border border-brand-cyan/20 p-6 rounded-2xl flex flex-col items-center hover:border-brand-cyan/50 transition-colors group">
                        <BookOpen className="w-8 h-8 text-brand-cyan mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-3xl md:text-4xl font-bold text-white">4,592</span>
                        <span className="text-sm text-gray-400 uppercase tracking-widest mt-1">Citations</span>
                    </div>
                    <div className="bg-neutral-900/60 backdrop-blur-md border border-brand-lime/20 p-6 rounded-2xl flex flex-col items-center hover:border-brand-lime/50 transition-colors group">
                        <Award className="w-8 h-8 text-brand-lime mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-3xl md:text-4xl font-bold text-white">38</span>
                        <span className="text-sm text-gray-400 uppercase tracking-widest mt-1">h-index</span>
                    </div>
                    <div className="bg-neutral-900/60 backdrop-blur-md border border-yellow-500/20 p-6 rounded-2xl flex flex-col items-center hover:border-yellow-500/50 transition-colors group">
                        <Star className="w-8 h-8 text-yellow-500 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-3xl md:text-4xl font-bold text-white">68</span>
                        <span className="text-sm text-gray-400 uppercase tracking-widest mt-1">i10-index</span>
                    </div>
                    <div className="bg-neutral-900/60 backdrop-blur-md border border-purple-500/20 p-6 rounded-2xl flex flex-col items-center hover:border-purple-500/50 transition-colors group">
                        <FileText className="w-8 h-8 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-3xl md:text-4xl font-bold text-white">4</span>
                        <span className="text-sm text-gray-400 uppercase tracking-widest mt-1">Patents</span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 animate-bounce text-gray-500">
                <span className="text-sm tracking-widest uppercase">Scroll to Explore</span>
            </div>
        </section>
    );
}
