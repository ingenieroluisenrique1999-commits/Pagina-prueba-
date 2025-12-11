import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-tech-600 to-tech-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Listo para escalar tu proyecto?
        </h2>
        <p className="text-xl text-tech-100 mb-10 max-w-2xl mx-auto">
          Únete a la comunidad de innovadores más vibrante del Caribe. Agenda una visita o aplica para tu membresía hoy mismo.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-tech-700 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-transform transform hover:-translate-y-1 flex items-center justify-center">
            Solicitar Membresía
          </button>
          <button className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
            Contactar Soporte
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;