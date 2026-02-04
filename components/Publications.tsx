"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Star, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Publications() {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const publications = [
        {
            title: "Efficient sequestration of cesium ions using phosphoric acid-modified activated carbon fibers from aqueous solutions",
            journal: "Chemosphere",
            year: "2024",
            role: "Co-First Author",
            citations: "-",
            impact: "~8",
            tags: ["Cesium Removal", "Adsorption", "Environmental"],
            url: "https://www.sciencedirect.com/science/article/pii/S0045653524019465"
        },
        {
            title: "Recovery of Li from seawater using Li1.33Mn1.67O4 immobilized multi-stage column system",
            journal: "Desalination",
            year: "2024",
            role: "Co-First Author",
            citations: "-",
            impact: "~9",
            tags: ["Lithium Recovery", "Seawater Mining", "Resource Recovery"],
            url: "https://doi.org/10.1016/j.desal.2024.117656"
        },
        {
            title: "MXene: An emerging two-dimensional layered material for removal of radioactive pollutants",
            journal: "Chemical Engineering Journal",
            year: "2020",
            role: "First Author",
            citations: "203",
            impact: "~13",
            tags: ["Radioactive Removal", "MXene", "Environmental"],
            url: "https://doi.org/10.1016/j.cej.2020.125428"
        },
        {
            title: "An aqueous high-performance hybrid supercapacitor with MXene and polyoxometalates electrodes",
            journal: "Chemical Engineering Journal",
            year: "2022",
            role: "First Author",
            citations: "106",
            impact: "~13",
            tags: ["Supercapacitor", "Energy Storage", "MXene"],
            url: "https://doi.org/10.1016/j.cej.2021.131854"
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 80%",
                    }
                }
            );

            cardsRef.current.forEach((card, index) => {
                gsap.fromTo(card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: index * 0.2,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section ref={containerRef} className="py-24 px-4 bg-neutral-900 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[20rem] h-[20rem] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-brand-lime/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto">
                <div ref={headerRef} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-6">
                        <BookOpen className="w-4 h-4 text-brand-cyan" />
                        <span className="text-brand-cyan text-sm font-medium uppercase tracking-wider">Research Highlights</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-lime">Publications</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        Impactful research contributions in advanced materials and environmental engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {publications.map((pub, index) => (
                        <div
                            key={index}
                            ref={addToRefs}
                            className="group relative p-8 rounded-2xl bg-neutral-800/50 border border-neutral-600 hover:border-brand-cyan/50 transition-all duration-300 hover:shadow-neon hover:-translate-y-1"
                        >
                            <div className="absolute top-4 right-4 flex gap-2">
                                <span className="px-3 py-1 text-xs font-bold text-brand-dark bg-brand-lime rounded-full">IF {pub.impact}</span>
                            </div>

                            <div className="mb-4">
                                <span className="text-brand-cyan text-sm font-medium">{pub.journal} • {pub.year}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 leading-relaxed group-hover:text-brand-cyan transition-colors">
                                {pub.url ? (
                                    <a
                                        href={pub.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline flex items-center gap-2 inline-flex"
                                    >
                                        {pub.title}
                                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ) : (
                                    pub.title
                                )}
                            </h3>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {pub.tags.map((tag, i) => (
                                    <span key={i} className="text-xs px-2 py-1 rounded bg-neutral-700 text-gray-300 border border-neutral-600">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-neutral-700/50">
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span>{pub.citations} Citations</span>
                                </div>
                                <div className="text-sm text-brand-lime font-medium">
                                    {pub.role}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
