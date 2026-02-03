"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Lock, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Patents() {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const patents = [
        {
            title: "마찰전기 나노발전기 및 이의 제조방법\nTriboelectric nanogenerator and its manufacturing method",
            status: "출원 공개",
            code: "10-2024-0164248"
        },
        {
            title: "프러시안 블루 및 활성탄을 포함하는 음극 활물질 및 이의 제조 방법\nCATHODE ACTIVE MATERIAL FOR LITHIUM ION ADSORPTION COMPRISING PRUSSIAN BLUE AND ACTIVATED CARBON AND METHOD OF PREPARATION THEREOF",
            status: "출원 공개",
            code: "10-2023-0158403"
        },
        {
            title: "티탄산을 포함하는 리튬 이온 흡착용 음극 활물질 및 이의 제조 방법\nCATHODE ACTIVE MATERIAL FOR LITHIUM ION ADSORPTION COMPRISING TITANIC ACID AND METHOD OF PREPARATION THEREOF",
            status: "특허등록",
            code: "10-2023-0176360"
        },
        {
            title: "미세 액적 제조장치\nApparatus for manufacturing microdroplets",
            status: "특허등록",
            code: "10-2016-0054585"
        },
        {
            title: "고에너지 및 초안정 아연 이온 하이브리드 슈퍼커패시터용 전해질 및 이를 포함하는 아연 이온 하이브리드 슈퍼커패시터\nElectrolyte for high energy and superstable zinc ion hybrid supercapacitor and the zinc ion hybrid supercapacitor comprising the same",
            status: "특허등록",
            code: "10-2022-0121015"
        },
        {
            title: "POSS-맥신 복합체, 이의 제조방법 및 이를 포함하는 방사성 핵종 흡착제\nPOSS-MXene composite, preparation method thereof and radionuclide adsorbent comprising the same",
            status: "특허등록",
            code: "10-2022-0016355"
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

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section ref={containerRef} className="py-24 px-4 bg-brand-dark relative z-10 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto">
                <div ref={headerRef} className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 mb-6">
                            <ShieldCheck className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Intellectual Property</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                            Patents & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Inventions</span>
                        </h2>
                    </div>
                    <div className="text-gray-400 max-w-md text-right">
                        Pioneering technologies secured through global intellectual property rights.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {patents.map((item, index) => (
                        <div
                            key={index}
                            ref={addToRefs}
                            className="group p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-gray-600 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-2 py-1 text-xs font-bold rounded uppercase ${item.status === '특허등록' ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-yellow-500/20 text-yellow-500'}`}>
                                        {item.status}
                                    </span>
                                    {/* Date removed as requested */}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 text-balance line-clamp-4 group-hover:text-gray-200 transition-colors whitespace-pre-line">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-gray-500 font-mono">
                                {item.status === '특허등록' ? <Lock className="w-3 h-3" /> : <Globe className="w-3 h-3 text-yellow-500" />}
                                {item.code}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
