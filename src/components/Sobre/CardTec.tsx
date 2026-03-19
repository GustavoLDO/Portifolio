/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
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
        <div className="group relative bg-zinc-900/40 backdrop-blur-md p-5 md:p-6 rounded-xl md:rounded-2xl border border-zinc-800/50 
                        transition-all duration-500 hover:scale-[1.03] hover:border-zinc-700
                        shadow-xl flex flex-col items-center justify-center text-center w-40 h-48 md:w-[220px] md:h-[260px] shrink-0">
            
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 ${isPurple ? 'bg-purple-500' : 'bg-cyan-400'} 
                            blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            <div className={`text-3xl md:text-5xl mb-3 md:mb-5 ${iconColor} transition-transform duration-500 group-hover:scale-110`}>
                <Icon className="drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]" />
            </div>

            <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-3 tracking-tight uppercase">
                {skill}
            </h3>

            <span className={`px-2 md:px-3 py-0.5 text-[7px] md:text-[9px] font-bold rounded-md border uppercase tracking-widest ${badgeBg}`}>
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
        <section className="py-12 md:py-20 bg-transparent font-outfit overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-3 uppercase italic">
                    Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Stack</span>
                </h2>
                <div className="w-12 md:w-16 h-1 bg-purple-600 mx-auto rounded-full" />
            </div>

            <div className="relative space-y-4 md:space-y-8 
                before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 md:before:w-32 before:bg-gradient-to-r before:from-black before:to-transparent 
                after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 md:after:w-32 after:bg-gradient-to-l after:from-black after:to-transparent">
                
                {/* Fileira 1 */}
                <div className="flex overflow-hidden group">
                    <div className="flex animate-marquee-scroll hover:[animation-play-state:paused] gap-4 md:gap-6 py-2">
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
                    <div className="flex animate-marquee-scroll-reverse hover:[animation-play-state:paused] gap-4 md:gap-6 py-2">
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