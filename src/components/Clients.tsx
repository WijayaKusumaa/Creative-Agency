import { motion } from 'framer-motion';
import { Camera, ShoppingBag, Hexagon, Tv, Globe2, CreditCard } from 'lucide-react';

const clients = [
  { name: 'Instagram', icon: Camera },
  { name: 'Shopify', icon: ShoppingBag },
  { name: 'HubSpot', icon: Hexagon },
  { name: 'CNBC', icon: Tv },
  { name: 'BUSINESS INSIDER', icon: Globe2 },
  { name: 'stripe', icon: CreditCard },
];

// Duplicate for infinite scroll effect
const tickerItems = [...clients, ...clients, ...clients];

export default function Clients() {
  return (
    <section className="py-24 w-full bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col items-center">
        <div className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs font-bold tracking-widest uppercase text-neon-blue">Interested</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
          Trusted by 300+ businesses
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden py-10">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10"></div>
        
        <motion.div
          className="flex whitespace-nowrap items-center gap-16 md:gap-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {tickerItems.map((client, idx) => (
            <div key={idx} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
              <client.icon size={32} className="text-white" />
              <span className="text-2xl font-bold tracking-tight text-white">{client.name}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10"></div>
      </div>
    </section>
  );
}
