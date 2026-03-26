import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative min-h-screen text-[#f5f5f5] font-sans selection:bg-[#27e9b5] selection:text-[#191919] overflow-x-hidden">
      
      {/* Background ambient glow behind the sections (Glassmorphism effect) */}
      <div className="fixed top-0 left-0 w-full h-screen bg-[#191919] -z-30 pointer-events-none"></div>

      {/* Glowing Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#27e9b5]/10 blur-[120px] -z-20 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#3b5265]/20 blur-[150px] -z-20 pointer-events-none animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      <div className="fixed top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-[#051824]/50 blur-[100px] -z-20 pointer-events-none"></div>
      
      {/* Subtle frosted glass overlay pattern to mix the colors on scrolling */}
      <div className="fixed inset-0 bg-white/[0.01] backdrop-blur-[20px] -z-10 pointer-events-none"></div>

      <div className="relative z-10">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
        </main>
        <Contact />
      </div>
    </div>
  );
}

export default App;
