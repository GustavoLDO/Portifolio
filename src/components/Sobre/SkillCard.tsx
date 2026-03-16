/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
import React from "react";

interface SkillCardProps {
  skill: string;
  icon: React.ElementType;
  color: 'purple' | 'cyan';
  proficiency: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, icon: Icon, color, proficiency }) => {
  const isPurple = color === 'purple';
  
  // Mapeamento de cores para manter a consistência da Land Page
  const themeClasses = isPurple 
    ? {
        text: 'text-purple-500',
        border: 'group-hover:border-purple-500/50',
        glow: 'bg-purple-500/10',
        badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
      }
    : {
        text: 'text-cyan-400',
        border: 'group-hover:border-cyan-400/50',
        glow: 'bg-cyan-400/10',
        badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
      };

  return (
    <div className={`group relative bg-zinc-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-zinc-800/50 
                    transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2
                    shadow-2xl flex flex-col items-center justify-center text-center ${themeClasses.border}`}>
      
      {/* Efeito de Brilho Interno (Glow) no Hover */}
      <div className={`absolute inset-0 rounded-[2rem] ${themeClasses.glow} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10`}></div>

      {/* Ícone com Animação */}
      <div className={`text-6xl mb-6 ${themeClasses.text} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        <Icon className="drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]" />
      </div>

      {/* Título Estilizado */}
      <h3 className="text-2xl font-black text-white mb-4 tracking-tighter uppercase italic group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-500 transition-all">
        {skill}
      </h3>

      {/* Badge de Proficiência */}
      <span className={`px-4 py-1 text-[10px] font-bold rounded-full border uppercase tracking-[0.2em] ${themeClasses.badge}`}>
        {proficiency}
      </span>

      {/* Detalhe de linha decorativa no topo */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] ${isPurple ? 'bg-purple-500' : 'bg-cyan-400'} 
                      opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`}></div>
    </div>
  );
};

export default SkillCard;