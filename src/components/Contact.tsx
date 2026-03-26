import { motion } from 'framer-motion';
import { ArrowRight, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <footer className="pt-32 pb-12 px-6 relative overflow-hidden z-10" id="contact">
      {/* Background glow for footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-[#27e9b5]/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Construyamos<br />algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#27e9b5] to-[#3b5265] drop-shadow-[0_0_15px_rgba(39,233,181,0.4)]">asombroso</span>.
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-16 text-lg md:text-xl font-medium">
            Actualmente disponible para oportunidades laborales e implementaciones tecnológicas.
            ¿Tienes un proyecto en mente o buscas un perfil técnico? Hablemos.
          </p>

          <a href="mailto:antonyatalayabenites@gmail.com" aria-label="Enviar correo a Antony" className="glow-btn group pl-8 pr-3 py-3 text-lg md:text-xl mb-24 md:mb-32 flex flex-row items-center cursor-none">
            <span className="relative z-10 font-bold">antwnyab@gmail.com</span>
            <div className="relative z-10 bg-portfolio-primary/20 text-portfolio-primary p-2.5 rounded-full group-hover:rotate-45 transition-transform group-hover:bg-portfolio-dark group-hover:text-portfolio-primary ml-4">
              <ArrowRight size={20} strokeWidth={3} />
            </div>
          </a>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-white/50 text-sm font-semibold">
          <p>© {new Date().getFullYear()} Antony A. Benites. Todos los derechos reservados.</p>

          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="https://www.linkedin.com/in/antony-a-benites-b2b16b1ab/" target="_blank" rel="noreferrer" aria-label="Perfil de LinkedIn" className="hover:text-white hover:scale-110 transition-all duration-300 cursor-none"><Linkedin size={22} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
