import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="creative-agency" className="py-32 w-full bg-primary relative overflow-hidden">
      {/* Background Detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[1.1]">
              Design is not just what it looks like.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                It's how it feels.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              We are a team of visionary creators, strategic thinkers, and technical experts dedicated to pushing the boundaries of what's possible in the digital space. We build products that leave a lasting impression.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-5xl font-black text-white mb-2">10+</div>
                <div className="text-sm font-bold tracking-widest text-neon-blue uppercase">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-2">150+</div>
                <div className="text-sm font-bold tracking-widest text-neon-purple uppercase">Global Clients</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
