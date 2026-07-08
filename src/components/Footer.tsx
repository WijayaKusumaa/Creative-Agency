import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="pt-32 pb-8 w-full bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-32"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-white mb-10 leading-[0.9]">
            Let's create<br />something epic.
          </h2>
          <a
            href="https://www.instagram.com/haswaltch_/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] block text-center"
          >
            Start a Project
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pt-16 border-t border-white/10">
          <div className="lg:col-span-1">
            <div className="text-2xl font-black tracking-tighter text-white mb-6">CREATIVE AGENCY.</div>
            <p className="text-gray-400 font-light leading-relaxed">
              Elevating brands through premium design and cutting-edge technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {['Services', 'Work', 'Creative Agency', 'Careers'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Socials</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: 'Instagram', href: 'https://www.instagram.com/haswaltch_/' },
                { name: 'Twitter (X)', href: '#' },
                { name: 'LinkedIn', href: '#' },
                { name: 'Dribbble', href: 'https://dribbble.com/Wijaya_Kusuma' }
              ].map(social => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target={social.href !== '#' ? '_blank' : undefined}
                    rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="mailto:hello@creativeagency.com" className="text-gray-400 hover:text-white transition-colors">hello@creativeagency.com</a>
              </li>
              <li>
                <span className="text-gray-400">1 (800) 123-4567</span>
              </li>
              <li className="text-gray-400 mt-2">
                Jawa Timur,<br />10012, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-gray-500 text-sm font-light gap-4">
          <p>&copy; {new Date().getFullYear()} Wijaya Creative Studio Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
