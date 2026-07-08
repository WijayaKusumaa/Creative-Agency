import { motion } from 'framer-motion';
import { PenTool, MonitorPlay, Zap, TrendingUp } from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    description: 'We craft intuitive and engaging user experiences that combine beautiful aesthetics with seamless functionality.',
    icon: PenTool,
    color: 'text-neon-blue',
  },
  {
    title: 'Visual Graphic',
    description: 'Stunning visual identities and assets that communicate your brand message powerfully and clearly.',
    icon: MonitorPlay,
    color: 'text-neon-purple',
  },
  {
    title: 'Strategy',
    description: 'Data-driven insights and comprehensive planning to position your brand for long-term digital success.',
    icon: Zap,
    color: 'text-neon-blue',
  },
  {
    title: 'Business Growth',
    description: 'Scalable solutions and optimization techniques designed to accelerate your revenue and market reach.',
    icon: TrendingUp,
    color: 'text-neon-purple',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 w-full bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
            Services Built Specifically<br/>for your Business
          </h2>
          <p className="text-gray-400 font-light text-lg">
            We provide a comprehensive suite of digital solutions tailored to elevate your brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative p-10 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className={`mb-8 ${svc.color}`}>
                <svc.icon size={48} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{svc.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {svc.description}
              </p>

              <a href="#contact" className="mt-8 flex items-center gap-2 text-white font-medium text-sm group-hover:gap-4 transition-all duration-300 w-fit">
                Explore Service <span className="text-neon-blue">&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
