/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import React from "react";
import {
    SiHtml5, SiCss3, SiJavascript, SiPython, SiPhp, SiSpring, SiDjango,
    SiLaravel, SiReact, SiOracle, SiMysql, SiPostgresql,
    SiMongodb, SiRedis, SiGit, SiGithub, SiTypescript, SiTailwindcss
} from "react-icons/si";

// 1. Dados das Tecnologias
const tecs = [
    { icon: SiHtml5, nome: "HTML5", categoria: "Avançado", cor: "cyan" },
    { icon: SiCss3, nome: "CSS3", categoria: "Avançado", cor: "cyan" },
    { icon: SiJavascript, nome: "JavaScript", categoria: "Avançado", cor: "cyan" },
    { icon: SiTypescript, nome: "TypeScript", categoria: "Avançado", cor: "purple" },
    { icon: SiTailwindcss, nome: "Tailwind CSS", categoria: "Avançado", cor: "cyan" },
    { icon: SiReact, nome: "React", categoria: "Avançado", cor: "purple" },
    { icon: SiSpring, nome: "Spring Boot", categoria: "Intermediário", cor: "purple" },
    { icon: SiDjango, nome: "Django", categoria: "Intermediário", cor: "purple" },
    { icon: SiPython, nome: "Python", categoria: "Intermediário", cor: "cyan" },
    { icon: SiPostgresql, nome: "PostgreSQL", categoria: "Avançado", cor: "purple" },
    { icon: SiGit, nome: "Git", categoria: "Avançado", cor: "purple" },
    { icon: SiGithub, nome: "GitHub", categoria: "Avançado", cor: "cyan" },
];

// 2. Componente de Card Individual
const SkillCard = ({ skill, icon: Icon, color, proficiency }) => {
    const isPurple = color === 'purple';
    const iconColor = isPurple ? 'text-purple-500' : 'text-cyan-400';
    const badgeBg = isPurple ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';

    return (
        <div className="group relative bg-zinc-900/40 backdrop-blur-md p-8 rounded-[2rem] border border-zinc-800 
                        transition-all duration-500 hover:scale-[1.05] hover:border-zinc-600
                        shadow-2xl flex flex-col items-center justify-center text-center w-[280px] h-[320px]">
            
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 ${isPurple ? 'bg-purple-500' : 'bg-cyan-400'} 
                            blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            <div className={`text-6xl mb-6 ${iconColor} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <Icon className="drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
            </div>

            <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase italic italic">
                {skill}
            </h3>

            <span className={`px-4 py-1 text-[10px] font-bold rounded-full border uppercase tracking-widest ${badgeBg}`}>
                {proficiency}
            </span>
        </div>
    );
};

// 3. Componente Principal do Carrossel
function CardTec() {
    // Dividimos o array para ter duas fileiras rodando em sentidos opostos
    const midIndex = Math.ceil(tecs.length / 2);
    const tecsTop = tecs.slice(0, midIndex);
    const tecsBottom = tecs.slice(midIndex);

    // Duplicamos os itens para o efeito de loop infinito
    const row1 = [...tecsTop, ...tecsTop, ...tecsTop];
    const row2 = [...tecsBottom, ...tecsBottom, ...tecsBottom];

    return (
        <section className="py-24 bg-transparent font-outfit overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 italic uppercase">
                    Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Stack</span>
                </h2>
                <div className="w-24 h-2 bg-purple-600 mx-auto rounded-full" />
            </div>

            {/* Container das fileiras com Máscara de Gradiente Lateral */}
            <div className="relative space-y-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-40 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-40 after:bg-gradient-to-l after:from-black after:to-transparent">
                
                {/* Fileira 1 - Direita para Esquerda */}
                <div className="flex overflow-hidden group">
                    <div className="flex animate-marquee-scroll hover:[animation-play-state:paused] gap-8 py-4">
                        {row1.map((tec, index) => (
                            <SkillCard
                                key={`row1-${index}`}
                                skill={tec.nome}
                                icon={tec.icon}
                                color={tec.cor}
                                proficiency={tec.categoria}
                            />
                        ))}
                    </div>
                </div>

                {/* Fileira 2 - Esquerda para Direita */}
                <div className="flex overflow-hidden group">
                    <div className="flex animate-marquee-scroll-reverse hover:[animation-play-state:paused] gap-8 py-4">
                        {row2.map((tec, index) => (
                            <SkillCard
                                key={`row2-${index}`}
                                skill={tec.nome}
                                icon={tec.icon}
                                color={tec.cor}
                                proficiency={tec.categoria}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardTec;