import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tech-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-base text-tech-600 font-semibold tracking-wide uppercase">Por qué nosotros</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-slate-900 sm:text-4xl">
            Todo lo que necesitas para escalar
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Un entorno físico y digital optimizado para acelerar el crecimiento de tu startup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-tech-200 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-tech-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              
              <div className="w-14 h-14 bg-tech-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-tech-500 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-tech-500 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-tech-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed group-hover:opacity-0 absolute transition-opacity duration-300">
                {benefit.description}
              </p>
              
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-slate-600 leading-relaxed">
                  {benefit.fullDescription}
                </p>
                <div className="mt-4 flex items-center text-tech-600 font-medium text-sm cursor-pointer">
                  Saber más <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;