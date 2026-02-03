"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { filter: "blur(10px)", color: "#555" },
      {
        filter: "blur(0px)",
        color: "#fff",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-red-900/5 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center text-red-500 tracking-tight">
            The Critical Challenge
        </h2>
        <div ref={textRef} className="text-2xl md:text-4xl font-light leading-relaxed max-w-5xl mx-auto text-center space-y-12">
          <p>
            <span className="font-bold text-red-400">Radioactive waste</span> threatens our global ecosystem.
          </p>
          <p>
             Current <span className="font-bold text-gray-300">Energy Storage</span> has reached its physical limits.
          </p>
          <p className="text-white border-l-4 border-brand-lime pl-6 italic">
             &quot;We need a fundamental breakthrough in material science.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
