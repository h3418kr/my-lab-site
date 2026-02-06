"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Battery, Search, Droplets, X, ExternalLink } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const researchAreas = [
    {
        title: "Tritium & Radionuclide Remediation",
        description: "Developing advanced adsorbent materials for the efficient removal of radioactive tritium and other radionuclides from aqueous environments. Our research focuses on high-capacity, selective sequestration technologies for nuclear waste management.",
        icon: <Droplets className="w-6 h-6 text-brand-cyan" />,
        image: "/research/tritium.png",
        tags: ["Nuclear Waste", "Adsorption", "Radionuclides"],
        publications: [
            {
                title: "Recent progress in functional nanomaterials towards the storage, separation, and removal of tritium",
                journal: "Advanced Materials",
                year: "2023",
                citations: "46",
                impact: "~27",
                url: "https://doi.org/10.1002/adma.202301589"
            },
            {
                title: "MXene: An emerging two-dimensional layered material for removal of radioactive pollutants",
                journal: "Chemical Engineering Journal",
                year: "2020",
                citations: "203",
                impact: "~13",
                url: "https://doi.org/10.1016/j.cej.2020.125428"
            },
            {
                title: "Efficient sequestration of cesium ions using phosphoric acid-modified activated carbon fibers from aqueous solutions",
                journal: "Chemosphere",
                year: "2024",
                citations: "13",
                impact: "~8",
                url: "https://www.sciencedirect.com/science/article/pii/S0045653524019465"
            },
            {
                title: "Development of Inorganic Adsorbent for Tritium Contaminated Water Treatment",
                journal: "한국산업기술학회논문지",
                year: "2023",
                citations: "-",
                impact: "-",
                url: "#"
            }
        ]
    },
    {
        title: "Next-Generation Energy Storage",
        description: "Engineering high-performance materials for the next generation of batteries and supercapacitors. We utilize advanced 2D nanostructures like MXenes to achieve superior energy density, power performance, and long-term cyclic stability.",
        icon: <Battery className="w-6 h-6 text-brand-lime" />,
        image: "/research/energy.png",
        tags: ["Batteries", "Supercapacitors", "MXenes"],
        publications: [
            {
                title: "An aqueous high-performance hybrid supercapacitor with MXene and polyoxometalates electrodes",
                journal: "Chemical Engineering Journal",
                year: "2022",
                citations: "106",
                impact: "~13",
                url: "https://doi.org/10.1016/j.cej.2021.131854"
            },
            {
                title: "Realizing superior redox kinetics of metal-metal carbides/carbon coordination supported heterointerface for stable solid-state hybrid supercapacitor",
                journal: "Chemical Engineering Journal",
                year: "2023",
                citations: "49",
                impact: "~13",
                url: "https://doi.org/10.1016/j.cej.2022.140246"
            },
            {
                title: "Transition nickel/cobalt phosphates: an advanced cathode for hybrid supercapacitors",
                journal: "Journal of Materials Chemistry A",
                year: "2023",
                citations: "38",
                impact: "~11",
                url: "https://pubs.rsc.org/en/content/articlehtml/2003/gj/d3ta02335d"
            },
            {
                title: "Electrolyte ions-matching hierarchically porous biochar electrodes with an extended potential window for next-generation supercapacitors",
                journal: "Journal of Materials Chemistry A",
                year: "2023",
                citations: "32",
                impact: "~11",
                url: "https://pubs.rsc.org/en/content/articlehtml/2023/ta/d3ta01829f"
            },
            {
                title: "Two-dimensional nanosheets of bimetallic chalcogenide-tagged nitrogen-doped carbon as a cathode for high-performance and durable zinc-ion capacitors",
                journal: "Journal of Materials Chemistry A",
                year: "2023",
                citations: "21",
                impact: "~11",
                url: "https://pubs.rsc.org/en/content/articlehtml/2023/ta/d2ta07524e"
            },
            {
                title: "Rapid preparation of nickel fluoride motif via solution-free plasma route for high-energy aqueous hybrid supercapacitor",
                journal: "Chemical Engineering Journal",
                year: "2023",
                citations: "14",
                impact: "~13",
                url: "https://doi.org/10.1016/j.cej.2022.140764"
            },
            {
                title: "High energy superstable hybrid capacitor with a self‐regulated Zn/electrolyte interface and 3D graphene‐like carbon cathode",
                journal: "InfoMat",
                year: "2022",
                citations: "24",
                impact: "~10",
                url: "https://doi.org/10.1002/inf2.12344"
            },
            {
                title: "Refurbished carbon materials from waste supercapacitors as industrial-grade electrodes: Empowering electronic waste",
                journal: "Energy Storage Materials",
                year: "2022",
                citations: "42",
                impact: "~18",
                url: "https://doi.org/10.1016/j.ensm.2022.05.057"
            },
            {
                title: "Ultra-stable flexible Zn-ion capacitor with pseudocapacitive 2D layered niobium oxyphosphides",
                journal: "Energy Storage Materials",
                year: "2022",
                citations: "61",
                impact: "~18",
                url: "https://doi.org/10.1016/j.ensm.2022.10.051"
            },
            {
                title: "Sodium-ion batteries: Charge storage mechanisms and recent advancements in diglyme-based electrolytes",
                journal: "Journal of Energy Storage",
                year: "2023",
                citations: "38",
                impact: "~9",
                url: "https://doi.org/10.1016/j.est.2023.109411"
            },
            {
                title: "Zn‐ion Batteries: Charge Storing Mechanism and Development Challenges",
                journal: "ChemSusChem",
                year: "2023",
                citations: "26",
                impact: "~8",
                url: "https://doi.org/10.1002/cssc.202300730"
            },
            {
                title: "Structural effects of conductive additives on the molecular shuttles in lithium–organic batteries",
                journal: "Carbon Letters",
                year: "2024",
                citations: "3",
                impact: "-",
                url: "https://link.springer.com/article/10.1007/s42823-023-00687-w"
            }
        ]
    },
    {
        title: "Precision Electrochemical Sensing",
        description: "Developing ultra-sensitive electrochemical sensors for real-time monitoring of biological and environmental molecules. Our sensors leverage the unique electronic properties of nanomaterials for precise and rapid detection.",
        icon: <Search className="w-6 h-6 text-yellow-500" />,
        image: "/research/sensor.png",
        tags: ["Biosensors", "Real-time Monitoring", "Nanotech"],
        publications: [
            {
                title: "Polypyrrole-MXene supported gold nanoparticles for the trace-level detection of nitrofurantoin",
                journal: "Chemical Engineering Journal",
                year: "2023",
                citations: "68",
                impact: "~13",
                url: "https://doi.org/10.1016/j.cej.2022.139980"
            },
            {
                title: "Palladium nanoparticles anchored MoS2-MXene composite modified electrode for rapid sensing of toxic bisphenol A in aqueous media",
                journal: "Chemical Engineering Journal",
                year: "2023",
                citations: "50",
                impact: "~13",
                url: "https://doi.org/10.1016/j.cej.2023.144017"
            },
            {
                title: "Photovoltaic induced self-powered gas sensor based on 2D MoS2 incorporated NbSe2 nanorods heterostructure for NH3 gas sensing at room temperature",
                journal: "Chemical Engineering Journal",
                year: "2024",
                citations: "33",
                impact: "~13",
                url: "https://doi.org/10.1016/j.cej.2024.151795"
            },
            {
                title: "Hybridized 1D–2D MnMoO4–MXene nanocomposites as high-performing electrochemical sensing platform for the sensitive detection of dihydroxybenzene isomers in wastewater samples",
                journal: "Journal of Hazardous Materials",
                year: "2022",
                citations: "131",
                impact: "~13",
                url: "https://doi.org/10.1016/j.jhazmat.2021.126775"
            },
            {
                title: "Interface engineering of MoS2 nanopetal grown on carbon nanofibers for the electrocatalytic sensing of mercury (II) and efficient hydrogen evolution",
                journal: "Materials Today Nano",
                year: "2022",
                citations: "17",
                impact: "~20",
                url: "https://doi.org/10.1016/j.mtnano.2022.100262"
            },
            {
                title: "Hierarchical Hybridized network of MnMoO4-MXene nanocomposites for high-performing electrochemical detection of toxic pollutants in wastewater",
                journal: "대한화학회지",
                year: "2022",
                citations: "-",
                impact: "-",
                url: "#"
            },
            {
                title: "Manganese-doped zinc sulfide microspheres for improved electrocatalytic sensing ability toward carbendazim in food samples",
                journal: "Microchemical Journal",
                year: "2022",
                citations: "6",
                impact: "~5",
                url: "https://doi.org/10.1016/j.microc.2022.107204"
            },
            {
                title: "Gold nanoparticle decorated patronite on rGO for the quantification of sulfadiazine at nanomolar levels in contaminated water",
                journal: "Chemical Engineering Journal",
                year: "2022",
                citations: "29",
                impact: "~13",
                url: "https://doi.org/10.1016/j.cej.2022.135782"
            }
        ]
    },
    {
        title: "Sustainable Lithium Recovery",
        description: "Innovating technologies for the sustainable recovery of lithium from seawater and brine sources. Our research aims to secure critical mineral resources through efficient, selective extraction processes using tailored ion-sieves.",
        icon: <Zap className="w-6 h-6 text-brand-cyan" />,
        image: "/research/lithium.png",
        tags: ["Lithium Extraction", "Resource Recovery", "Ion-Sieve"],
        publications: [
            {
                title: "Recovery of Li from seawater using Li1.33Mn1.67O4 immobilized multi-stage column system",
                journal: "Desalination",
                year: "2024",
                citations: "15",
                impact: "~9",
                url: "https://doi.org/10.1016/j.desal.2024.117656"
            },
            {
                title: "Efficient lithium extraction using redox-active Prussian blue nanoparticles-anchored activated carbon intercalation electrodes via membrane capacitive deionization",
                journal: "Chemosphere",
                year: "2023",
                citations: "29",
                impact: "~8",
                url: "https://doi.org/10.1016/j.chemosphere.2023.139256"
            }
        ]
    }
];

export default function Solution() {
    const sectionRef = useRef(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [selectedArea, setSelectedArea] = useState<number | null>(null);

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

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedArea(null);
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <>
            <section ref={sectionRef} className="py-24 bg-black relative z-10 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="max-w-full">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 whitespace-nowrap">
                                Breakthrough <span className="text-brand-cyan">Research</span> & <span className="text-brand-lime">Innovation</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg">
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
                                        <button
                                            onClick={() => setSelectedArea(idx)}
                                            className="flex items-center gap-2 text-brand-lime text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all duration-300 group/btn"
                                        >
                                            <span>Explore Research</span>
                                            <div className="w-12 h-[1px] bg-brand-lime group-hover/btn:w-24 transition-all duration-500"></div>
                                        </button>
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

            {/* Modal */}
            {selectedArea !== null && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedArea(null)}
                >
                    <div
                        className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-4xl w-full max-h-[80vh] overflow-y-auto animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-neutral-900 border-b border-neutral-800 p-6 flex justify-between items-start z-10">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {researchAreas[selectedArea].title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Related Publications
                                </p>
                            </div>
                            <button
                                onClick={() => setSelectedArea(null)}
                                className="p-2 hover:bg-neutral-800 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-400" />
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            {researchAreas[selectedArea].publications.map((pub, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 bg-neutral-800/50 border border-neutral-700 rounded-2xl hover:border-brand-cyan/50 transition-all duration-300 group"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-brand-lime text-sm font-mono">{pub.year}</span>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-1 text-xs font-bold text-brand-dark bg-brand-lime rounded-full">
                                                IF {pub.impact}
                                            </span>
                                            <span className="px-2 py-1 text-xs font-bold text-brand-cyan bg-brand-cyan/10 rounded-full border border-brand-cyan/20">
                                                {pub.citations} Citations
                                            </span>
                                        </div>
                                    </div>

                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                                        {pub.title}
                                    </h4>

                                    <p className="text-gray-400 text-sm mb-4">{pub.journal}</p>

                                    <a
                                        href={pub.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-lime transition-colors text-sm font-medium"
                                    >
                                        View Publication <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
