"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const papers = [
    {
        title: "Engineering the photocatalytic performance of B-C3N4@Bi2S3 hybrid heterostructures",
        journal: "Chemical Engineering Journal",
        year: "2023",
        citations: "121",
        link: "#"
    },
    {
        title: "Polypyrrole-MXene supported gold nanoparticles for nitrofurantoin detection",
        journal: "Chemical Engineering Journal",
        year: "2023",
        citations: "67",
        link: "#"
    },
    {
        title: "Palladium nanoparticles anchored MoS2-MXene composite",
        journal: "Chemical Engineering Journal",
        year: "2023",
        citations: "50",
        link: "#"
    },
    {
        title: "Realizing superior redox kinetics of metal-metal carbides/carbon",
        journal: "Chemical Engineering Journal",
        year: "2023",
        citations: "49",
        link: "#"
    },
    {
        title: "Recent progress in functional nanomaterials towards tritium storage/separation",
        journal: "Advanced Materials",
        year: "2023",
        citations: "46",
        link: "#"
    }
];

export default function Solution() {
    const sectionRef = useRef(null);
    const cardRefs = useRef<any[]>([]);
    const [patentCount, setPatentCount] = useState(0);

    useEffect(() => {
        // Parallax for cards
        cardRefs.current.forEach((card, i) => {
            if (!card) return;
            gsap.fromTo(card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Patent counter
        const counterObj = { val: 0 };
        gsap.to(counterObj, {
            val: 4,
            duration: 2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
            },
            onUpdate: () => {
                setPatentCount(Math.floor(counterObj.val));
            }
        });

    }, []);

    const addToRefs = (el: any) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    return (
        <section ref={sectionRef} className="py-24 bg-brand-dark relative z-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white max-w-xl">
                        Breakthrough <span className="text-brand-cyan">Research</span> & <span className="text-brand-lime">Innovation</span>
                    </h2>
                    <div className="mt-8 md:mt-0 text-right">
                        <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-cyan">
                            {patentCount}+
                        </div>
                        <div className="text-sm text-gray-400 uppercase tracking-widest mt-2">Patents Held</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {papers.map((paper, idx) => (
                        <div
                            key={idx}
                            ref={addToRefs}
                            className="group relative bg-[#111] border border-gray-800 p-8 rounded-2xl hover:border-brand-cyan/50 transition-all duration-300 hover:shadow-neon"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-brand-lime text-sm font-mono">{paper.year}</span>
                                <ArrowUpRight className="text-gray-500 group-hover:text-brand-cyan transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                                {paper.title}
                            </h3>
                            <div className="flex justify-between items-center text-gray-400 font-light text-sm">
                                <span>{paper.journal}</span>
                                <span className="text-brand-cyan font-medium">{paper.citations} Citations</span>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
