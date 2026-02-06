"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Battery, Search, Droplets } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const researchAreas = [
    {
        title: "Tritium & Radionuclide Remediation",
        description: "Developing advanced adsorbent materials for the efficient removal of radioactive tritium and other radionuclides from aqueous environments. Our research focuses on high-capacity, selective sequestration technologies for nuclear waste management.",
        icon: <Droplets className="w-6 h-6 text-brand-cyan" />,
        image: "/research/tritium.png",
        tags: ["Nuclear Waste", "Adsorption", "Radionuclides"]
    },
    {
        title: "Next-Generation Energy Storage",
        description: "Engineering high-performance materials for the next generation of batteries and supercapacitors. We utilize advanced 2D nanostructures like MXenes to achieve superior energy density, power performance, and long-term cyclic stability.",
        icon: <Battery className="w-6 h-6 text-brand-lime" />,
        image: "/research/energy.png",
        tags: ["Batteries", "Supercapacitors", "MXenes"]
    },
    {
        title: "Precision Electrochemical Sensing",
        description: "Developing ultra-sensitive electrochemical sensors for real-time monitoring of biological and environmental molecules. Our sensors leverage the unique electronic properties of nanomaterials for precise and rapid detection.",
        icon: <Search className="w-6 h-6 text-yellow-500" />,
        image: "/research/sensor.png",
        tags: ["Biosensors", "Real-time Monitoring", "Nanotech"]
    },
    {
        title: "Sustainable Lithium Recovery",
        description: "Innovating technologies for the sustainable recovery of lithium from seawater and brine sources. Our research aims to secure critical mineral resources through efficient, selective extraction processes using tailored ion-sieves.",
        icon: <Zap className="w-6 h-6 text-brand-cyan" />,
        image: "/research/lithium.png",
        tags: ["Lithium Extraction", "Resource Recovery", "Ion-Sieve"]
    }
];

export default function Solution() {
    const sectionRef = useRef(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const cards = cardRefs.current.filter(Boolean);

        gsap.fromTo(cards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-black relative z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Breakthrough <span className="text-brand-cyan">Research</span> & <span className="text-brand-lime">Innovation</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Pushing the boundaries of material science to solve global challenges in energy and environment.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {researchAreas.map((area, idx) => (
                        <div
                            key={idx}
                            ref={(el) => { cardRefs.current[idx] = el; }}
                            className="group relative bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden hover:border-brand-cyan/50 transition-all duration-500"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="relative h-64 md:h-full min-h-[300px]">
                                    <div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
                                    <Image
                                        src={area.image}
                                        alt={area.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-transparent hidden md:block"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent md:hidden"></div>
                                </div>
                                <div className="p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        {area.icon}
                                        <div className="flex flex-wrap gap-2">
                                            {area.tags.map((tag, i) => (
                                                <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">
                                        {area.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {area.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-brand-lime text-xs font-bold uppercase tracking-widest">
                                        <span>Explore Research</span>
                                        <div className="w-12 h-[1px] bg-brand-lime group-hover:w-24 transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Glows */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-lime/10 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
}
