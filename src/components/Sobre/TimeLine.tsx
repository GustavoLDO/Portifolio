/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

const timelineData = [
    {
        ano: "2024",
        titulo: "O Início: Fundamentos Front-end",
        descricao:
            "Início da jornada na programação com foco na tríade essencial: HTML5, CSS3 e JavaScript. Desenvolvimento das primeiras interfaces estáticas e lógica de programação voltada para a web.",
    },
    {
        ano: "2025",
        titulo: "Mergulho no Back-end & Java",
        descricao:
            "Transição para o desenvolvimento de sistemas robustos. Especialização em Java, integração com bancos de dados relacionais, criação de APIs RESTful e persistência de dados.",
    },
    {
        ano: "2026",
        titulo: "Domínio Full Stack Moderno",
        descricao:
            "Aventura completa no ecossistema Full Stack. Desenvolvimento de aplicações de alta performance utilizando React com TypeScript no front-end e Spring Boot com PostgreSQL no back-end.",
    },
    {
        ano: "Presente",
        titulo: "Simbionte Digital & Inovação",
        descricao:
            "Focado em arquitetura de software, escalabilidade e na criação de soluções de ponta a ponta que unem design de alto nível com processamento de dados eficiente.",
    },
];

function TimeLine() {
    return (
        <section className="py-12 font-outfit text-white">
            <div className="max-w-3xl mx-auto px-6">
                
                <ul className="relative">
                    {/* Linha Central com Gradiente */}
                    <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/30 via-purple-500/30 to-transparent"></div>

                    {timelineData.map((item, index) => (
                        <li
                            key={index}
                            className={`mb-12 relative w-full sm:w-1/2 flex
                          ${index % 2 === 0 ? "sm:pr-10 sm:left-0 sm:justify-end" : "sm:pl-10 sm:left-1/2 sm:justify-start"}`}
                        >
                            {/* Card com Fontes Reduzidas */}
                            <div
                                className={`group relative p-5 rounded-xl bg-zinc-900/40 backdrop-blur-md 
                                transition-all duration-300 hover:scale-[1.01]
                                border border-white/5 hover:border-cyan-500/20
                                shadow-lg w-[calc(100%-2rem)] sm:w-auto ml-8 sm:ml-0
                                ${index % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}
                            >
                                {/* Brilho Superior sutil */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <time className="block text-xs font-bold leading-none text-cyan-400 mb-2 tracking-[0.2em] uppercase italic">
                                    {item.ano}
                                </time>
                                
                                <h3 className="text-lg font-bold text-white mt-1 mb-2 tracking-tight group-hover:text-purple-400 transition-colors uppercase">
                                    {item.titulo}
                                </h3>
                                
                                <p className="text-sm font-normal text-zinc-400 leading-relaxed group-hover:text-zinc-200 transition-colors">
                                    {item.descricao}
                                </p>

                                {/* Detalhe na Quina Menor */}
                                <div className={`absolute bottom-1.5 ${index % 2 === 0 ? 'left-1.5' : 'right-1.5'} w-6 h-6 border-b-2 border-purple-500/10 rounded-br-lg`}></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default TimeLine;