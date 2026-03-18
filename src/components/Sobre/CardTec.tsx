/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import React from "react";
import {
    SiHtml5, SiCss3, SiJavascript, SiPython, SiPhp, SiSpring, SiDjango,
    SiLaravel, SiReact, SiOracle, SiMysql, SiPostgresql,
    SiMongodb, SiRedis, SiGit, SiGithub, SiTypescript, SiTailwindcss
} from "react-icons/si";

const tecs = [
    { icon: SiHtml5, nome: "HTML5", categoria: "Front-end", cor: "cyan" },
    { icon: SiCss3, nome: "CSS3", categoria: "Front-end", cor: "cyan" },
    { icon: SiJavascript, nome: "JavaScript", categoria: "Front-end", cor: "cyan" },
    { icon: SiTypescript, nome: "TypeScript", categoria: "Front-end", cor: "purple" },
    { icon: SiTailwindcss, nome: "Tailwind CSS", categoria: "Front-end", cor: "cyan" },
    { icon: SiReact, nome: "React", categoria: "Front-end", cor: "purple" },
    { icon: SiSpring, nome: "Spring Boot", categoria: "Back-end", cor: "purple" },
    { icon: SiDjango, nome: "Django", categoria: "Back-end", cor: "purple" },
    { icon: SiPython, nome: "Python", categoria: "Back-end", cor: "cyan" },
    { icon: SiPostgresql, nome: "PostgreSQL", categoria: "Banco de Dados", cor: "purple" },
    { icon: SiGit, nome: "Git", categoria: "Versionamento", cor: "purple" },
    { icon: SiGithub, nome: "GitHub", categoria: "Versionamento", cor: "cyan" },
    { icon: SiMysql, nome: "MySQL", categoria: "Banco de Dados", cor: "cyan" },
    { icon: SiMongodb, nome: "MongoDB", categoria: "Banco de Dados", cor: "cyan" },
    { icon: SiRedis, nome: "Redis", categoria: "Banco de Dados", cor: "cyan" },
    { icon: SiOracle, nome: "Oracle", categoria: "Banco de Dados", cor: "purple" },
    { icon: SiPhp, nome: "PHP", categoria: "Back-end", cor: "cyan" },
    { icon: SiLaravel, nome: "Laravel", categoria: "Back-end", cor: "cyan" },
];

const SkillCard = ({ skill, icon: Icon, color, proficiency }) => {
    const isPurple = color === 'purple';
    const iconColor = isPurple ? 'text-purple-500' : 'text-cyan-400';
    const badgeBg = isPurple ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';

    return (
        // Ajustado: Largura e altura agora são menores no mobile (w-48 h-56) e voltam ao normal no desktop (md:w-[280px] md:h-[320px])
        <div className="group relative bg-zinc-900/40 backdrop-blur-md p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-zinc-800 
                        transition-all duration-500 hover:scale-[1.05] hover:border-zinc-600
                        shadow-2xl flex flex-col items-center justify-center text-center w-48 h-56 md:w-[280px] md:h-[320px] shrink-0">
            
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 ${isPurple ? 'bg-purple-500' : 'bg-cyan-400'} 
                            blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            {/* Ícone menor no mobile */}
            <div className={`text-4xl md:text-6xl mb-4 md:mb-6 ${iconColor} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <Icon className="drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
            </div>

            <h3 className="text-lg md:text-2xl font-black text-white mb-2 md:mb-4 tracking-tight uppercase italic">
                {skill}
            </h3>

            <span className={`px-3 md:px-4 py-1 text-[8px] md:text-[10px] font-bold rounded-full border uppercase tracking-widest ${badgeBg}`}>
                {proficiency}
            </span>
        </div>
    );
};

function CardTec() {
    const midIndex = Math.ceil(tecs.length / 2);
    const tecsTop = tecs.slice(0, midIndex);
    const tecsBottom = tecs.slice(midIndex);

    const row1 = [...tecsTop, ...tecsTop, ...tecsTop];
    const row2 = [...tecsBottom, ...tecsBottom, ...tecsBottom];

    return (
        <section className="py-16 md:py-24 bg-transparent font-outfit overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20 text-center">
                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 italic uppercase leading-none">
                    Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Stack</span>
                </h2>
                <div className="w-20 md:w-24 h-1.5 md:h-2 bg-purple-600 mx-auto rounded-full" />
            </div>

            {/* Ajustado: Gradientes laterais menores no mobile (w-10) para não tampar os cards */}
            <div className="relative space-y-6 md:space-y-10 
                before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 md:before:w-40 before:bg-gradient-to-r before:from-black before:to-transparent 
                after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-10 md:after:w-40 after:bg-gradient-to-l after:from-black after:to-transparent">
                
                {/* Fileira 1 */}
                <div className="flex overflow-hidden group">
                    {/* gap reduzido no mobile (gap-4) */}
                    <div className="flex animate-marquee-scroll hover:[animation-play-state:paused] gap-4 md:gap-8 py-4">
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

                {/* Fileira 2 */}
                <div className="flex overflow-hidden group">
                    <div className="flex animate-marquee-scroll-reverse hover:[animation-play-state:paused] gap-4 md:gap-8 py-4">
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