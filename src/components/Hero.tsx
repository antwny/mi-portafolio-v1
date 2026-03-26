import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-6 min-h-screen flex items-center justify-center overflow-hidden" id="inicio">

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 relative z-10 items-center">

        {/* Left Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 border border-[#27e9b5]/40 bg-[#27e9b5]/10 text-[#27e9b5] px-4 py-1.5 rounded-full text-xs font-bold mb-8 uppercase tracking-wider backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#27e9b5] animate-pulse"></span>
            Disponible para nuevos proyectos
          </div>

          <p className="font-semibold mb-2 text-lg text-white/70">Hola, soy</p>

          <h1 className="text-6xl md:text-[6rem] lg:text-[7.5rem] font-black leading-[0.9] tracking-tighter mb-6 relative">
            <span className="text-white block">Antony</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#27e9b5] to-[#14b8a6] drop-shadow-[0_0_15px_rgba(39,233,181,0.2)] block mt-2">Benites</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-tight">Software & IT Support.</h2>

          <p className="text-white/60 max-w-lg text-lg leading-relaxed mb-10 font-medium">
            Becario del Programa BCP y estudiante de Computación e Informática. Orientado a implementar soluciones tecnológicas eficientes e innovadoras con un enfoque en escalabilidad.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#proyectos" className="bg-[#27e9b5] text-[#191919] hover:bg-white hover:text-[#191919] px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(39,233,181,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95">
              Ver Proyectos
            </a>
            <a href="/cv" target="_blank" className="bg-transparent border border-white/20 text-white hover:border-[#27e9b5] hover:text-[#27e9b5] hover:bg-[#27e9b5]/5 px-8 py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-105 active:scale-95">
              Descargar CV
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visuals & Orbits */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center lg:ml-auto w-full max-w-[500px] aspect-square"
        >
          {/* Subtle glow behind everything */}
          <div className="absolute inset-0 bg-[#27e9b5]/5 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Orbit Rings */}
          <div className="absolute inset-4 border border-white/5 rounded-full"></div>
          <div className="absolute inset-12 border border-[#27e9b5]/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute inset-24 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

          {/* Floating Pill Badges (attached to imaginary orbits) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-16 right-12 z-20 border border-white/10 bg-[#162936]/80 backdrop-blur-md px-4 py-2 rounded-xl text-[#27e9b5] text-sm font-bold shadow-xl"
          >
            Python
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 left-8 z-20 border border-white/10 bg-[#162936]/80 backdrop-blur-md px-4 py-2 rounded-xl text-[#27e9b5] text-sm font-bold shadow-xl"
          >
            Linux
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-16 right-24 z-20 border border-white/10 bg-[#162936]/80 backdrop-blur-md px-4 py-2 rounded-xl text-[#27e9b5] text-sm font-bold shadow-xl"
          >
            SQL
          </motion.div>

          {/* Central Glassmorphism Card */}
          <div className="relative z-10 w-64 h-64 bg-gradient-to-br from-[#162936]/90 to-[#051824]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl flex flex-col items-center justify-center p-8 backdrop-blur-xl group hover:border-[#27e9b5]/30 transition-colors duration-500 overflow-hidden">

            {/* Decorative code lines inside card */}
            <div className="absolute top-6 left-6 flex flex-col gap-2 opacity-30">
              <div className="h-1.5 w-16 bg-[#27e9b5] rounded-full"></div>
              <div className="h-1.5 w-24 bg-white/50 rounded-full"></div>
              <div className="h-1.5 w-12 bg-white/50 rounded-full"></div>
              <div className="h-1.5 w-20 bg-white/50 rounded-full mt-2"></div>
            </div>

            {/* Glowing Code Icon */}
            <div className="text-[#27e9b5] mt-8 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_25px_rgba(39,233,181,0.8)]">
              <Code2 size={72} strokeWidth={1.5} />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
