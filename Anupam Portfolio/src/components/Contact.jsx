import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-primary rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Let's build something.</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-md">
              Currently seeking Product Management roles where I can bring my user-first, execution-driven approach to your team.
            </p>
            
            <div className="space-y-4 text-gray-300 font-medium">
              <a href="mailto:anupam@example.com" className="flex items-center gap-3 hover:text-white transition-colors group w-max">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail size={18} />
                </div>
                <span>anupam@example.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-white transition-colors group w-max">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Phone size={18} />
                </div>
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

          <div className="md:w-5/12 w-full">
            <a 
              href="https://linkedin.com/in/anupampaikade" 
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full bg-white p-6 md:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden text-center"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="w-16 h-16 bg-[#0077b5]/10 text-[#0077b5] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Linkedin size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Connect on LinkedIn</h3>
              <p className="text-gray-500 mb-6 text-sm">Let's chat about product strategy, user research, or the cricket team.</p>
              
              <div className="inline-flex items-center justify-center gap-2 text-accent font-semibold group-hover:text-primary transition-colors">
                View Profile <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
