import React from 'react';
import { STARTUPS, TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Startup Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Startups que construyen el futuro
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Conoce a los innovadores que ya llaman a Cartagena su hogar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STARTUPS.map((startup) => (
              <motion.div 
                key={startup.id}
                whileHover={{ y: -5 }}
                className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100 hover:border-tech-200 hover:shadow-lg transition-all"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-white shadow-sm p-1">
                    <img 
                        src={startup.logo} 
                        alt={startup.name} 
                        className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{startup.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{startup.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 p-12 opacity-10">
                <Quote size={200} className="text-white" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="text-left md:pr-12">
                    <h3 className="text-3xl font-bold text-white mb-6">
                        Lo que dicen los fundadores
                    </h3>
                    <p className="text-slate-400 text-lg">
                        No tomes solo nuestra palabra. Escucha a quienes viven el ecosistema día a día.
                    </p>
                    <button className="mt-8 text-tech-400 font-semibold hover:text-white transition-colors">
                        Ver todas las historias &rarr;
                    </button>
                </div>

                <div className="space-y-6">
                    {TESTIMONIALS.map((testimonial) => (
                        <div key={testimonial.id} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                            <p className="text-slate-300 italic mb-4">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                <img 
                                    src={testimonial.avatar} 
                                    alt={testimonial.author} 
                                    className="w-10 h-10 rounded-full mr-4 border border-tech-500"
                                />
                                <div>
                                    <h4 className="text-white font-semibold text-sm">{testimonial.author}</h4>
                                    <p className="text-slate-500 text-xs">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;