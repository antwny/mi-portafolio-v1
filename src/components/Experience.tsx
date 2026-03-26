import { motion } from 'framer-motion';

export default function Experience() {
  const exps = [
    {
      year: "Ene 2021 - Ene 2026",
      role: "Soporte Técnico de HW y SW",
      company: "Freelance",
      desc: "Gestión integral de mantenimiento preventivo y correctivo, recuperando el 90% de equipos críticos mediante la optimización de Windows y Linux. Alcancé un 95% de satisfacción de clientes."
    },
    {
      year: "Jun 2024 - Mar 2025",
      role: "Operario de Producción",
      company: "PAMOLSA",
      desc: "Superé constantemente las cuotas de producción diaria en un 15%, manteniendo estrictos estándares de calidad y seguridad industrial."
    },
    {
      year: "Nov 2023 - Abr 2024",
      role: "Operario de Producción",
      company: "Machu Picchu Foods S.A.C.",
      desc: "Identifiqué cuellos de botella en la línea de envasado, lo que permitió una mejora del 10% en la fluidez del proceso operativo."
    },
    {
      year: "Dic 2022 - Jun 2023",
      role: "Operario de Producción",
      company: "AJINOMOTO DEL PERU S.A.",
      desc: "Responsable del área de mezclado y envasado, contribuyendo a mantener un récord de cero accidentes liderando la seguridad preventiva."
    }
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5 relative z-10" id="experiencia">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="mb-16 md:mb-24"
        >
           <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">Experiencia Laboral</h2>
           <p className="text-white/70 text-lg">Un recorrido por mi desarrollo profesional e impacto.</p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {exps.map((exp, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.5, delay: idx * 0.2 }}
               className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
             >
               <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-[#27e9b5]/20 bg-[#162936] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110 group-hover:border-[#27e9b5] group-hover:bg-[#27e9b5]/10 group-hover:shadow-[0_0_15px_rgba(39,233,181,0.5)]">
                 {idx === 0 && <div className="absolute w-10 h-10 rounded-full bg-[#27e9b5]/40 animate-ping"></div>}
                 <div className="w-2.5 h-2.5 rounded-full bg-[#27e9b5] group-hover:shadow-[0_0_10px_rgba(39,233,181,0.8)] relative z-10"></div>
               </div>
               
               <div 
                 className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-[2rem] bg-[#162936]/40 border border-white/5 hover:border-[#27e9b5]/40 transition-colors duration-300 relative overflow-hidden group/card"
                 onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
                   const rect = e.currentTarget.getBoundingClientRect();
                   const x = e.clientX - rect.left;
                   const y = e.clientY - rect.top;
                   e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                   e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                 }}
               >
                 {/* Mouse trail glow effect */}
                 <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(39, 233, 181, 0.08), transparent 40%)' }} />
                 <div className="flex flex-col mb-4 relative z-10">
                   <time className="text-sm text-[#27e9b5] font-bold uppercase tracking-wider mb-2">{exp.year}</time>
                   <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                   <div className="text-sm font-semibold text-white/50">{exp.company}</div>
                 </div>
                 <p className="text-white/80 leading-relaxed font-medium relative z-10">{exp.desc}</p>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
