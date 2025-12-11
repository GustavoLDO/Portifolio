/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import React from "react";
import {
    SiHtml5, SiCss3, SiJavascript, SiPython, SiPhp, SiSpring, SiDjango,
    SiLaravel, SiReact, SiOracle, SiMysql, SiPostgresql,
    SiMongodb, SiRedis, SiGit, SiGithub, SiTypescript, SiTailwindcss
} from "react-icons/si";

interface SkillCardProps {
  skill: string;
  icon: React.ElementType;
  color: 'purple' | 'cyan';
  proficiency: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, icon: Icon, color, proficiency }) => {
  const highlightColor = color === 'purple' ? 'text-purple-500' : 'text-cyan-400';
  const borderColor = color === 'purple' ? 'border-purple-600' : 'border-cyan-400';
  const proficiencyBg = color === 'purple' ? 'bg-purple-600' : 'bg-cyan-400';

  return (
    <div
      className={`bg-gray-800/50 p-6 rounded-lg shadow-xl h-full
                  transition duration-300 transform
                  hover:scale-[1.05] hover:shadow-2xl
                  border border-gray-700 hover:${borderColor}`}
    >
      <div className={`text-4xl mb-4 ${highlightColor} `}>
        <Icon className="drop-shadow-lg" />
      </div>

      <h3 className="text-xl font-bold text-gray-50 mb-2">
        {skill}
      </h3>

      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full
                      text-black ${proficiencyBg}`}>
        {proficiency}
      </span>
    </div>
  );
};

interface SkillItem {
  icon: React.ElementType;
  nome: string;
  categoria: string;
  cor: 'purple' | 'cyan';
}

const tecs: SkillItem[] = [
    { icon: SiHtml5, nome: "HTML5", categoria: "Avançado", cor: "cyan" },
    { icon: SiCss3, nome: "CSS3", categoria: "Avançado", cor: "cyan" },
    { icon: SiJavascript, nome: "JavaScript", categoria: "Avançado", cor: "cyan" },
    { icon: SiTypescript, nome: "TypeScript", categoria: "Avançado", cor: "purple" },
    { icon: SiTailwindcss, nome: "Tailwind CSS", categoria: "Avançado", cor: "cyan" },
    { icon: SiReact, nome: "React", categoria: "Avançado", cor: "purple" },
    { icon: SiSpring, nome: "Spring Boot", categoria: "Intermediário", cor: "purple" },
    { icon: SiDjango, nome: "Django", categoria: "Intermediário", cor: "purple" },
    { icon: SiLaravel, nome: "Laravel", categoria: "Básico", cor: "purple" },
    { icon: SiPython, nome: "Python", categoria: "Intermediário", cor: "cyan" },
    { icon: SiPhp, nome: "PHP", categoria: "Intermediário", cor: "cyan" },
    { icon: SiPostgresql, nome: "PostgreSQL", categoria: "Avançado", cor: "purple" },
    { icon: SiMysql, nome: "MySQL", categoria: "Intermediário", cor: "cyan" },
    { icon: SiOracle, nome: "Oracle", categoria: "Intermediário", cor: "purple" },
    { icon: SiMongodb, nome: "MongoDB", categoria: "Básico", cor: "purple" },
    { icon: SiRedis, nome: "Redis", categoria: "Básico", cor: "cyan" },
    { icon: SiGit, nome: "Git", categoria: "Avançado", cor: "purple" },
    { icon: SiGithub, nome: "GitHub", categoria: "Avançado", cor: "cyan" },
];

function CardTec() {

    const midIndex = Math.ceil(tecs.length / 2);
    const tecsTop = tecs.slice(0, midIndex);
    const tecsBottom = tecs.slice(midIndex);

    const tecsTopDuplicados = [...tecsTop, ...tecsTop];
    const tecsBottomDuplicados = [...tecsBottom, ...tecsBottom];

    const cardWidthWithMargin = 300;

    return (
        <section className="py-16 font-outfit">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-extrabold mb-12 text-center text-cyan-400">
                    Fluxo de Habilidades Bidirecional
                </h2>
            </div>

            <div className="overflow-x-hidden space-y-8">

                <div className="flex">
                    <div
                        className="flex carousel-container"
                        style={{
                            animation: 'marquee-scroll 40s linear infinite',
                            width: `${tecsTop.length * cardWidthWithMargin * 2}px`,
                        }}
                    >
                        {tecsTopDuplicados.map((tec, index) => (
                            <div key={`top-${index}`} className="flex-shrink-0 w-72 h-full mx-3">
                                <SkillCard
                                    skill={tec.nome}
                                    icon={tec.icon}
                                    color={tec.cor as "purple" | "cyan"}
                                    proficiency={tec.categoria}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex">
                    <div
                        className="flex carousel-container"
                        style={{
                            animation: 'marquee-scroll-reverse 40s linear infinite',
                            width: `${tecsBottom.length * cardWidthWithMargin * 2}px`,
                        }}
                    >
                        {tecsBottomDuplicados.map((tec, index) => (
                            <div key={`bottom-${index}`} className="flex-shrink-0 w-72 h-full mx-3">
                                <SkillCard
                                    skill={tec.nome}
                                    icon={tec.icon}
                                    color={tec.cor as "purple" | "cyan"}
                                    proficiency={tec.categoria}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default CardTec;