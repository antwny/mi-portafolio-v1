import { Code2, Package, Database, Server, MonitorSmartphone, TerminalSquare, Laptop, Cpu, Coffee } from 'lucide-react';

export default function TechStack() {
  const technologies = [
    { name: 'Java', icon: <Coffee size={24} /> },
    { name: 'C#', icon: <Code2 size={24} /> },
    { name: 'JavaScript', icon: <TerminalSquare size={24} /> },
    { name: 'TypeScript', icon: <Package size={24} /> },
    { name: 'Linux', icon: <Server size={24} /> },
    { name: 'Python', icon: <Laptop size={24} /> },
    { name: 'SQL Server', icon: <Database size={24} /> },
    { name: 'IT Essentials', icon: <MonitorSmartphone size={24} /> },
    { name: 'Ciberseguridad', icon: <Cpu size={24} /> },
  ];

  return (
    <section className="py-12 border-b border-white/10 relative z-10 overflow-hidden" id="tech">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-shrink-0 mb-6 md:mb-0 relative z-10 pr-8">
          <p className="text-sm font-bold text-white leading-tight opacity-90 uppercase tracking-widest text-[#27e9b5]">
            Herramientas<br/>& Habilidades
          </p>
        </div>
        
        {/* Animated Marquee Container */}
        <div className="flex-1 w-full overflow-hidden relative flex mask-image-fade">
          
          <div className="flex animate-marquee whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-300 w-max">
            {/* First Set */}
            <div className="flex items-center gap-12 px-6">
              {technologies.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-3 font-bold text-lg text-white">
                  {tech.icon} <span>{tech.name}</span>
                </div>
              ))}
            </div>
            {/* Cloned Set for Seamless Loop */}
            <div className="flex items-center gap-12 px-6">
              {technologies.map((tech, idx) => (
                <div key={`clone-${idx}`} className="flex items-center gap-3 font-bold text-lg text-white">
                  {tech.icon} <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
