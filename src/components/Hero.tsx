import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  const clipPathSize = useTransform(smoothProgress, [0, 1], ['0%', '150%']);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={containerRef} className="relative h-[140vh] w-full bg-primary">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Base Layer - Outline City */}
        <div className="absolute inset-0 w-full h-full">
          <motion.img
            src="https://res.cloudinary.com/dprydfxok/image/upload/v1782890197/hero_city_outline_fzg37d.jpg"
            alt="City Outline"
            className="w-full h-full object-cover"
            style={{ scale: bgScale }}
          />
          <div className="absolute inset-0 bg-primary/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white/50 text-center uppercase">
              Imagine<br/>the Future
            </h1>
          </div>
        </div>

        {/* Top Layer - Realistic Reveal */}
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            clipPath: useTransform(clipPathSize, (size) => `circle(${size} at center)`),
          }}
        >
          <motion.img
            src="https://res.cloudinary.com/dprydfxok/image/upload/v1782890197/hero_city_iglhwn.jpg"
            alt="Realistic City"
            className="w-full h-full object-cover"
            style={{ scale: bgScale }}
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white leading-tight text-center uppercase drop-shadow-2xl">
              Build the<br/>Reality
            </h1>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs font-bold tracking-widest uppercase text-white/60">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} className="text-white/80" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
