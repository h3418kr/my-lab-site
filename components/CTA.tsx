"use client";
import { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section className="py-32 bg-gradient-to-b from-brand-dark to-black text-center px-4">
      <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-8">
        Let's Innovate Together
      </h2>
      <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
        Join our lab or collaborate on the next generation of energy materials.
      </p>

      <div className="h-20 flex justify-center items-center">
        {!showEmail ? (
          <button
            onClick={() => setShowEmail(true)}
            className="inline-flex items-center gap-3 bg-brand-cyan text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-neon"
          >
            Contact Us <ArrowRight />
          </button>
        ) : (
          <div className="animate-in fade-in zoom-in duration-500">
            <a
              href="mailto:h3418kr@gmail.com"
              className="inline-flex items-center gap-3 bg-neutral-900 border border-brand-cyan text-brand-cyan font-bold py-4 px-8 rounded-full text-lg hover:bg-brand-cyan/10 transition-all duration-300 shadow-neon-cyan"
            >
              <Mail className="w-5 h-5" />
              h3418kr@gmail.com
            </a>
          </div>
        )}
      </div>

      <footer className="mt-24 text-gray-600 text-sm">
        2026 Advanced Materials & Energy Lab. All rights reserved.
      </footer>
    </section>
  );
}
