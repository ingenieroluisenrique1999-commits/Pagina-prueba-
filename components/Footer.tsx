import React from 'react';
import { Zap, MapPin, Mail, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white mb-4">
              <Zap className="text-tech-500" />
              <span className="font-bold text-xl">CartagenaTech</span>
            </div>
            <p className="text-sm text-slate-400">
              Impulsando la innovación en el Caribe a través de tecnología, comunidad y capital.
            </p>
            <div className="flex space-x-4 pt-4">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.platform} 
                  href={social.href}
                  className="text-slate-400 hover:text-tech-500 transition-colors"
                  aria-label={social.platform}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ecosistema</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-tech-400 transition-colors">Startups</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Inversores</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Coworking</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Eventos</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-tech-400 transition-colors">Términos de Uso</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Cookies</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-tech-500 mt-0.5" />
                <span>Anillo Vial, Zona Norte<br />Cartagena, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-tech-500" />
                <a href="mailto:hola@cartagenatech.com" className="hover:text-white">hola@cartagenatech.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-tech-500" />
                <span>+57 (300) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Parque Tecnológico de Cartagena. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;