import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import 'lenis/dist/lenis.css';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
      <main className="bg-primary min-h-screen text-white font-sans overflow-x-hidden selection:bg-neon-blue/30 relative">
        <Navbar />
        <Hero />
        <Clients />
        <Services />
        <Work />
        <About />
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;

