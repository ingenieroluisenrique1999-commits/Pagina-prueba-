import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=2070&auto=format&fit=crop"
          alt="Cartagena Skyline Futuristic"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Text Readability & Style */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-tech-500/30 bg-tech-500/10 backdrop-blur-sm text-tech-100 text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-tech-400 mr-2 animate-pulse"></span>
            El Hub de Innovación del Caribe
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            Construye el futuro desde <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-400 to-teal-400">Cartagena</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed max-w-2xl">
            Conectamos startups, capital y talento en un ecosistema diseñado para la economía digital y Web3. Sin barreras, solo crecimiento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="flex items-center justify-center gap-2 bg-tech-500 hover:bg-tech-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transform hover:-translate-y-1">
              Únete al Hub
              <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all">
              Descubre los beneficios
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Descubre Más</span>
        <ChevronDown className="animate-bounce" />
      </motion.div>
    </div>
  );
};

export default Hero;