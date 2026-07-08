import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: 'Pixzen',
    category: 'Branding & UI/UX',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781522720269-Pixzen.webp'
  },
  {
    id: 2,
    name: 'Wander',
    category: 'App Design',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781631791578-Wander_Hero.webp'
  },
  {
    id: 3,
    name: 'Agentify',
    category: 'Web Platform',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781671943344-Agentify_Hero.webp'
  },
  {
    id: 4,
    name: 'Future',
    category: 'Interactive Experience',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781679053418-Future_Carousel.webp'
  },
  {
    id: 5,
    name: 'Genova',
    category: 'E-Commerce',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781670271708-Genova_Hero.webp'
  }
];

export default function Work() {
  const [activeItem, setActiveItem] = useState(3);

  return (
    <section id="work" className="py-32 w-full bg-primary">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
            Our Works
          </h2>
          <a href="#contact" className="group flex items-center gap-2 text-white font-medium border-b border-white/20 pb-1 hover:border-white transition-colors">
            View All Projects
            <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[400px] lg:h-[500px] gap-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              onHoverStart={() => setActiveItem(project.id)}
              onClick={() => setActiveItem(project.id)}
              className="relative overflow-hidden rounded-3xl cursor-pointer group"
              animate={{
                flex: activeItem === project.id ? 4 : 0.8,
              }}
              transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.6 }}
            >
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <motion.div
                className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
                animate={{ opacity: activeItem === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <span className="text-neon-blue text-sm font-bold tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                    {project.name}
                  </h3>
                </div>
                {activeItem === project.id && (
                  <a href="#contact" className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-transform whitespace-nowrap shadow-lg inline-block text-center">
                    View Case
                  </a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
