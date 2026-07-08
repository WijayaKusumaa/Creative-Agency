import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 50], [0.02, 0.08]);
  const blurValue = useTransform(scrollY, [0, 50], [8, 24]);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        style={{
          backgroundColor: useTransform(bgOpacity, (op) => `rgba(255, 255, 255, ${op})`),
          backdropFilter: useTransform(blurValue, (b) => `blur(${b}px)`),
        }}
        className={`w-full max-w-5xl border border-white/10 transition-all duration-300 ${
          isOpen ? 'rounded-3xl' : 'rounded-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 md:px-8">
          <div className="text-xl font-bold tracking-tighter">CREATIVE AGENCY.</div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Work', 'Creative Agency', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a
              href="https://www.instagram.com/haswaltch_/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] block text-center"
            >
              Start Project
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden px-6 pb-6 pt-2">
            <div className="flex flex-col gap-4">
              {['Services', 'Work', 'Creative Agency', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-lg font-medium text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="https://www.instagram.com/haswaltch_/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium w-full mt-4 block text-center"
              >
                Start Project
              </a>
            </div>
          </div>
        )}
      </motion.nav>
    </div>
  );
}
