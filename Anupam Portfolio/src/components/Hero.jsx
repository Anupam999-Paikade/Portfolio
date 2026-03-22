import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-3/5 max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent"></span>
              <span className="text-xs font-medium text-gray-600 tracking-wide uppercase">MBA | Product Enthusiast | Builder</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.1] mb-6"
            >
              I build products that solve <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">real user problems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              From 50+ user interviews to real prototypes that cut wait time by 66%. I combine user-first thinking with business intuition and absolute execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-black transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-primary rounded-full font-medium border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right Side: Profile Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-[35%]"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/20 scale-[1.05]"></div>
              
              {/* Image Container */}
              <div className="w-full h-full rounded-full border-4 border-white shadow-2xl bg-gradient-to-tr from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center relative group">
                <span className="absolute text-sm text-gray-400 font-medium px-8 text-center" id="img-fallback">
                  Save your photo as <br/><strong className="text-gray-900">profile.png</strong><br/> in the public folder
                </span>
                
                <img 
                  src="/profile.png" 
                  alt="Anupam Paikade" 
                  className="w-full h-full object-cover object-top relative z-10 transition-transform duration-500 group-hover:scale-105" 
                  onLoad={(e) => {
                    const fallback = e.target.previousSibling;
                    if(fallback) fallback.style.display = 'none';
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none'; 
                    const fallback = e.target.previousSibling;
                    if(fallback) fallback.style.display = 'block';
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400"
      >
        <span className="text-xs font-medium uppercase tracking-widest mb-2">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
