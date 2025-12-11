import { 
  Building2, 
  Network, 
  Users, 
  Wallet, 
  Wifi, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook, 
  MessageSquare // Using for Discord approximation
} from 'lucide-react';
import { Benefit, NavItem, SocialLink, Startup, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sobre Nosotros', href: '#about' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contact' },
];

export const BENEFITS: Benefit[] = [
  {
    id: 'b1',
    title: 'Coworking Premium',
    description: 'Espacios flexibles diseñados para la productividad.',
    fullDescription: 'Oficinas privadas, hot desks y salas de reuniones equipadas con tecnología de punta en el corazón de Cartagena.',
    icon: Building2,
  },
  {
    id: 'b2',
    title: 'Conexión Empresarial',
    description: 'Puentes directos con la industria local y global.',
    fullDescription: 'Programas de innovación abierta que conectan tu startup con grandes corporativos que buscan soluciones.',
    icon: Network,
  },
  {
    id: 'b3',
    title: 'Networking Global',
    description: 'Eventos semanales y comunidad activa.',
    fullDescription: 'Acceso a una red de mentores internacionales, nómadas digitales y fundadores de alto impacto.',
    icon: Users,
  },
  {
    id: 'b4',
    title: 'Acceso a Fondos',
    description: 'Venture Capital y Ángeles Inversionistas.',
    fullDescription: 'Rondas de inversión exclusivas y preparación para pitch ante los fondos más importantes de Latam.',
    icon: Wallet,
  },
  {
    id: 'b5',
    title: 'Infraestructura Web3',
    description: 'Nodos, laboratorios IoT y Blockchain.',
    fullDescription: 'El primer hub en el Caribe con infraestructura dedicada para desarrollo de blockchain e IoT.',
    icon: Wifi,
  },
];

export const STARTUPS: Startup[] = [
  {
    id: 's1',
    name: 'CaribeDAO',
    description: 'Gobernanza descentralizada para turismo sostenible.',
    logo: 'https://picsum.photos/id/1018/200/200', 
  },
  {
    id: 's2',
    name: 'LogiPort',
    description: 'IA para optimización portuaria en tiempo real.',
    logo: 'https://picsum.photos/id/1025/200/200',
  },
  {
    id: 's3',
    name: 'EcoPay',
    description: 'Fintech de pagos transfronterizos sin fricción.',
    logo: 'https://picsum.photos/id/1033/200/200',
  },
  {
    id: 's4',
    name: 'AgroTech Mar',
    description: 'Biotecnología aplicada a la agricultura costera.',
    logo: 'https://picsum.photos/id/1048/200/200',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Mariana Pajón',
    role: 'CEO & Founder',
    company: 'LogiPort',
    quote: 'El Parque Tecnológico transformó nuestra startup. La conexión con inversores fue inmediata y el ambiente inspira innovación pura.',
    avatar: 'https://picsum.photos/id/1011/100/100',
  },
  {
    id: 't2',
    author: 'Carlos Vives',
    role: 'CTO',
    company: 'CaribeDAO',
    quote: 'Buscábamos un lugar que entendiera Web3 sin complicaciones. Aquí encontramos la infraestructura y el talento que necesitábamos.',
    avatar: 'https://picsum.photos/id/1005/100/100',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'LinkedIn', href: '#', icon: Linkedin },
  { platform: 'Twitter', href: '#', icon: Twitter },
  { platform: 'Instagram', href: '#', icon: Instagram },
  { platform: 'Facebook', href: '#', icon: Facebook },
  { platform: 'Discord', href: '#', icon: MessageSquare },
];