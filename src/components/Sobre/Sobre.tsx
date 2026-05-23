/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
import { SiGithub, SiLinkedin } from "react-icons/si";

function Sobre() {
    return (
        <section
            id="sobre"
            className="relative w-full max-w-6xl mx-auto py-12 md:py-20 px-6 font-outfit overflow-hidden"
        >
            {/* Background Decorativo sutil */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* LADO ESQUERDO: Conteúdo Textual */}
                <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
                            Transformando Ideias em <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                Sistemas Reais.
                            </span>
                        </h2>
                        <div className="w-12 h-1.5 bg-cyan-500 rounded-full"></div>
                    </div>

                    <div className="space-y-5 text-sm md:text-base text-gray-400 leading-relaxed font-normal">
                        <p>
                            Olá! Eu sou o{" "}
                            <span className="text-white font-bold border-b border-cyan-500/30">
                                Gustavo
                            </span>
                            , um desenvolvedor Full Stack especialista em Back-end, focado em
                            construir arquiteturas de dados robustas e processamentos
                            eficientes, sem abrir mão de interfaces de alto nível.
                        </p>
                        <p>
                            Minha trajetória é impulsionada pelo desafio de solucionar problemas complexos através do código.
                            Especializo-me em arquitetar sistemas que sejam{" "}
                            <span className="text-cyan-400 font-medium">
                                altamente escaláveis
                            </span>
                            , <span className="text-purple-400 font-medium">seguros</span> e{" "}
                            <span className="text-white font-medium">
                                focados na experiência do usuário
                            </span>
                            .
                        </p>
                        <p className="text-xs md:text-sm text-zinc-500 italic">
                            Atualmente, foco em ecossistemas como{" "}
                            <span className="text-zinc-300 font-medium not-italic">
                                React, TypeScript e Spring Boot
                            </span>
                            .
                        </p>
                    </div>

                    {/* Pilares de Trabalho Redimensionados */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        {[
                            { title: "Performance", desc: "Código otimizado.", color: "hover:border-cyan-500/40", text: "text-cyan-400" },
                            { title: "Escalabilidade", desc: "Pronto para crescer.", color: "hover:border-purple-500/40", text: "text-purple-400" },
                            { title: "Clean Code", desc: "Clareza absoluta.", color: "hover:border-white/20", text: "text-white" }
                        ].map((pilar, i) => (
                            <div key={i} className={`p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50 transition-all group ${pilar.color}`}>
                                <h4 className={`${pilar.text} text-sm font-bold mb-1`}>
                                    {pilar.title}
                                </h4>
                                <p className="text-[11px] text-zinc-500 group-hover:text-zinc-400 transition-colors">
                                    {pilar.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* LADO DIREITO: Info Card compactado */}
                <div className="lg:col-span-5 lg:sticky lg:top-24 order-1 lg:order-2">
                    <div className="relative bg-zinc-900/30 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-3xl"></div>

                        <h3 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-3 text-white">
                            <span className="flex w-8 h-8 rounded-lg bg-cyan-500/10 items-center justify-center text-cyan-400 text-[10px] italic">
                                inf
                            </span>
                            Dados de Contato
                        </h3>

                        <ul className="space-y-5">
                            {[
                                { label: "Localização", value: "Praia Grande, SP" },
                                { label: "Experiência", value: "Full Stack Developer" },
                                { label: "Interesses", value: "Back-End & Architecture" },
                            ].map((item, index) => (
                                <li key={index} className="flex flex-col gap-0.5">
                                    <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold">
                                        {item.label}
                                    </span>
                                    <span className="text-zinc-200 text-sm md:text-base font-medium">
                                        {item.value}
                                    </span>
                                </li>
                            ))}

                            <li className="flex flex-col gap-2 pt-2">
                                <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold">
                                    Status
                                </span>
                                <div className="flex items-center gap-2 text-green-400 text-xs font-bold bg-green-500/5 w-fit px-3 py-1 rounded-lg border border-green-500/10">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    Disponível para projetos
                                </div>
                            </li>
                        </ul>

                        {/* Redes Sociais Compactas */}
                        <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/GustavoLDO"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-zinc-800/50 text-white text-xs rounded-lg hover:bg-zinc-700 transition-all border border-white/5"
                                >
                                    <SiGithub className="text-base" />
                                    <span className="font-bold">GitHub</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/gustavolemosoliveira/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#0077b5]/80 text-white text-xs rounded-lg hover:brightness-110 transition-all"
                                >
                                    <SiLinkedin className="text-base" />
                                    <span className="font-bold">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;