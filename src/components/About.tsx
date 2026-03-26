import { motion } from 'framer-motion';
import { Terminal, Lightbulb, Coffee } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-6 border-t border-white/5 relative z-10" id="sobre-mi">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <p className="text-[#27e9b5] font-bold mb-4 tracking-wide text-sm font-sans drop-shadow-[0_0_8px_rgba(39,233,181,0.4)] uppercase">Mi Perfil Profesional</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-8">
            Innovación y Seguridad Informática
          </h2>
          
          <div className="text-lg text-white/80 leading-relaxed font-medium space-y-6">
            <p>
              Estudiante de alto rendimiento en Computación e Informática en Cibertec y becario del Programa de Becas BCP. Orientado a la excelencia técnica.
            </p>
            <p>
              Cuento con certificaciones Cisco en IT Essentials y Ciberseguridad, además de sólidas competencias tanto en el desarrollo de software como en el diagnóstico y soporte técnico de hardware. Busco aportar mis habilidades en entornos que valoren la innovación tecnológica.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          {[
            { icon: <Terminal className="text-[#27e9b5]" size={32} />, title: "Desarrollo de Software", desc: "Creación de aplicaciones y optimización de código, con certificaciones en lenguajes como Python." },
            { icon: <Lightbulb className="text-[#27e9b5]" size={32} />, title: "Soporte IT", desc: "Mantenimiento preventivo y diagnóstico de fallas técnicas en hardware y software con alta tasa de efectividad." },
            { icon: <Coffee className="text-[#27e9b5]" size={32} />, title: "Administración", desc: "Instalación y configuración en Windows/Linux, administración de redes e IT Essentials." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#162936]/40 p-8 rounded-[2rem] border border-[#27e9b5]/10 hover:border-[#27e9b5]/40 hover:bg-[#162936]/80 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#27e9b5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="mb-6 p-4 rounded-2xl bg-[#051824] inline-block shadow-[0_0_15px_rgba(39,233,181,0.05)] group-hover:shadow-[0_0_20px_rgba(39,233,181,0.3)] group-hover:-translate-y-1 transition-all duration-300 border border-white/5 relative z-10">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
