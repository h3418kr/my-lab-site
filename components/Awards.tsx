"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Award, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Awards() {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const awards = [
        {
            title: "교육부장관 표창 (Minister of Education Award)",
            issuer: "부총리 겸 교육부장관 (Deputy Prime Minister and Minister of Education)",
            date: "2022.12.30",
            description: "4단계 BK21 사업 참여기간 동안 뛰어난 연구역량과 발전가능성을 보여 국가경쟁력 제고에 기여함.",
            context: "Phase 4 BK21 Project"
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

            cardsRef.current.filter(Boolean).forEach((card, index) => {
                gsap.fromTo(card,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-4 bg-black relative z-10 border-t border-neutral-800">
            <div className="max-w-6xl mx-auto px-4">
                <div ref={headerRef} className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 mb-6">
                            <Trophy className="w-4 h-4 text-brand-cyan" />
                            <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Recognition</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">Honors</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {awards.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="group p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-brand-cyan/50 transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Award className="w-24 h-24 text-brand-cyan" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                                        {item.date}
                                    </span>
                                    <span className="text-gray-500 text-sm font-medium">
                                        {item.context}
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-brand-cyan transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed italic">
                                    {item.issuer}
                                </p>
                                <div className="p-4 rounded-xl bg-black/40 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                        "{item.description}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
