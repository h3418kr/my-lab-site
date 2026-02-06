"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Newspaper, ExternalLink } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const newsData = [
    {
        title: "인하대학교 허윤석 교수팀, 삼중수소 저장·분리·제거 동향 리뷰논문 발표",
        date: "2023.08.12",
        publisher: "한국강사신문",
        image: "/news/news1.png",
        link: "https://www.lecturernews.com/news/articleView.html?idxno=133252"
    },
    {
        title: "인하대, 폐슈퍼커패시터 재활용한 고성능 슈퍼커패시터 제작기술 개발",
        date: "2022.06.09",
        publisher: "인천신문",
        image: "/news/news2.png",
        link: "https://www.kmaeil.com/news/articleView.html?idxno=353637"
    }
];

export default function News() {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
        <section ref={containerRef} className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div ref={headerRef} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-lime/30 bg-brand-lime/10 mb-6">
                        <Newspaper className="w-4 h-4 text-brand-lime" />
                        <span className="text-brand-lime text-sm font-medium uppercase tracking-wider">Latest News</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-cyan">Reports</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {newsData.map((news, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="group flex flex-col bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden hover:border-brand-lime/50 transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-6">
                                    <span className="px-3 py-1 bg-brand-lime text-brand-dark text-xs font-bold rounded-full">
                                        {news.publisher}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <span className="text-gray-500 text-sm mb-3">{news.date}</span>
                                <h3 className="text-xl font-bold text-white mb-6 leading-relaxed group-hover:text-brand-lime transition-colors">
                                    {news.title}
                                </h3>

                                <div className="mt-auto pt-6 border-t border-neutral-800">
                                    <a
                                        href={news.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-lime transition-colors font-medium"
                                    >
                                        Read Article <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
