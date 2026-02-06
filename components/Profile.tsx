"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Profile() {
    const sectionRef = useRef(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const cards = cardsRef.current.filter(Boolean);

        gsap.fromTo(
            cards,
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    const positions = [
        {
            period: "2023 ~ 현재",
            title: "인하대학교 인하융합연구원 겸직",
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            period: "2023 ~ 현재",
            title: "인하대학교 바이오시스템융합학과 겸직",
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            period: "2023 ~ 현재",
            title: "인하대학교 첨단소재공정공학 조교수(연구중점교수)",
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            period: "2022 ~ 2023",
            title: "인하대학교 나노바이오하이테크소재 연구소 연구원",
            icon: <GraduationCap className="w-6 h-6" />
        }
    ];

    return (
        <section ref={sectionRef} className="relative py-24 px-4 bg-black overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-brand-dark/20 to-black pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-lime">Profile</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-lime mx-auto rounded-full"></div>
                </div>

                {/* Timeline */}
                <div className="space-y-6">
                    {positions.map((position, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="group relative bg-neutral-900/60 backdrop-blur-md border border-brand-cyan/20 rounded-2xl p-6 hover:border-brand-lime/50 transition-all duration-300 hover:shadow-neon-lime"
                        >
                            <div className="flex items-start gap-6">
                                {/* Icon */}
                                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-brand-cyan/20 to-brand-lime/20 rounded-xl border border-brand-cyan/30 group-hover:border-brand-lime/50 transition-colors">
                                    <div className="text-brand-cyan group-hover:text-brand-lime transition-colors">
                                        {position.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                                        <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-brand-lime transition-colors">
                                            {position.title}
                                        </h3>
                                        <span className="inline-flex items-center px-4 py-1.5 bg-brand-cyan/10 border border-brand-cyan/30 rounded-full text-brand-cyan text-sm font-medium whitespace-nowrap">
                                            {position.period}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Effect Line */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-cyan to-brand-lime group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
