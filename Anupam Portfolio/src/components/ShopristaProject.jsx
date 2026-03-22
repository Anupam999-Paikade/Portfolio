import React from 'react';
import { Lightbulb, CheckCircle2, Mic, Book, TrendingUp, ArrowRight, ExternalLink } from 'lucide-react';

const ShopristaProject = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-16 group" data-aos="fade-up">
      
      {/* Visual Left (Simple Vertical List) */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 py-10 md:py-0 mt-8 md:mt-0">
        
        {/* Top Image */}
        <div className="w-full rounded-2xl shadow-lg border border-gray-200 overflow-hidden bg-white">
          <img src="/shoprista-voice.png" alt="Voice/Admin" className="w-full h-auto block" />
        </div>

        {/* Main Middle Image */}
        <div className="w-full rounded-2xl shadow-2xl border border-gray-200 bg-white overflow-hidden">
          <div className="h-8 md:h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2 w-full">
             <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400"></div>
             <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
             <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400"></div>
          </div>
          <img src="/shoprista-main.png" alt="ShopRista Ordering Interface" className="w-full h-auto block" />
        </div>

        {/* Bottom Image */}
        <div className="w-full rounded-2xl shadow-lg border border-gray-200 overflow-hidden bg-white">
          <img src="/shoprista-tracking.png" alt="Delivery Tracking" className="w-full h-auto block" />
        </div>
      </div>

      {/* Story Right */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center mt-12 md:mt-0">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wider rounded-full">Self-Initiated</span>
          <span className="px-3 py-1 bg-purple-50 text-purple-600 text-sm font-bold uppercase tracking-wider rounded-full">Zero &rarr; One Product</span>
        </div>
        
        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">ShopRista<span className="text-accent">.</span></h3>
        
        {/* Hook */}
        <p className="text-xl md:text-2xl text-primary font-semibold mb-6 leading-snug">
          "Helping kirana stores compete with quick commerce by building a hyperlocal digital network."
        </p>

        {/* Problem & Insight */}
        <div className="space-y-4 mb-8">
          <div>
            <strong className="text-gray-900 block mb-1">Problem:</strong>
            <span className="text-gray-600 leading-relaxed">Kirana stores are losing customers to quick commerce platforms due to lack of digital presence, poor discoverability, and no delivery infrastructure.</span>
          </div>
          
          <div className="bg-purple-50/50 p-4 md:p-5 rounded-xl border border-purple-100 relative overflow-hidden group-hover:bg-purple-50 transition-colors">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-purple-400"></div>
            <strong className="text-purple-900 block mb-2 flex items-center gap-2 pt-0.5"><Lightbulb className="w-4 h-4 text-purple-500" /> The Insight:</strong>
            <p className="text-purple-800 text-base font-medium">Local kiranas already have inventory and proximity advantage — they just lack aggregation and digital ordering systems.</p>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-8">
          <strong className="text-gray-900 block mb-3">Solution Engineered:</strong>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2.5"><CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" /> <span className="pt-0.5">Order digitally from connected nearby kirana hubs.</span></li>
            <li className="flex items-start gap-2.5"><Mic className="w-5 h-5 text-accent shrink-0 mt-0.5" /> <span className="pt-0.5">Voice-based grocery input for extreme accessibility.</span></li>
            <li className="flex items-start gap-2.5"><Book className="w-5 h-5 text-accent shrink-0 mt-0.5" /> <span className="pt-0.5">Maintain a digital khata (ledger) seamlessly.</span></li>
          </ul>
        </div>

        {/* Impact Box */}
        <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8 transform transition-transform duration-300 group-hover:scale-[1.02]">
          <strong className="text-primary block mb-2 font-bold flex items-center gap-2"><TrendingUp className="w-5 h-5 text-accent" /> Impact Delivered:</strong>
          <p className="text-gray-800 font-medium leading-relaxed">Enabled offline kiranas to operate like a connected, tech-enabled network and structurally compete with 10-minute quick commerce convenience.</p>
        </div>

        {/* Metrics Strip */}
        <div className="flex flex-wrap gap-3 mb-8">
           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium text-gray-700 shadow-sm"><span className="text-lg">🏪</span> Kirana Focused</span>
           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium text-gray-700 shadow-sm"><span className="text-lg">🎤</span> Voice Input Enabled</span>
           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium text-gray-700 shadow-sm"><span className="text-lg">📦</span> Hyperlocal Delivery</span>
           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium text-gray-700 shadow-sm"><span className="text-lg">⚙️</span> Built on Lovable</span>
        </div>

        {/* CTA */}
      <div className="flex flex-wrap items-center gap-6">
        <a href="https://shoprista12.lovable.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-lg font-semibold text-accent hover:text-primary transition-colors hover:gap-3 gap-2 w-max group">
          View Live Prototype <ExternalLink className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
      </div>
    </div>
  );
};

export default ShopristaProject;
