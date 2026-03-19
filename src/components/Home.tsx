/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
import React from "react";
import { NavHashLink } from "react-router-hash-link";
import NavBar from "./NavBar/NavBar";
import TimeLine from "./Sobre/TimeLine";
import Sobre from "./Sobre/Sobre";
import CardTec from "./Sobre/CardTec";
import Contato from "./Contatos/Contato";
import Projetos from "./Projetos/Projetos";
import fotoProfissional from "../assets/foto_Profissional.jpg";

function Home() {
    return (
        <div
            id="home"
            className="flex flex-col w-full bg-transparent text-white overflow-x-hidden font-outfit"
        >
            <NavBar />

            {/* --- HERO SECTION: NOVA ESCALA MICRO --- */}
            {/* Reduzido pt-32 para pt-20 para aproximar do topo */}
            <section className="relative flex min-h-[85vh] px-6 md:px-12 lg:px-20 overflow-hidden pt-20 lg:pt-0 items-center">
                {/* SEUS GLOWS ORIGINAIS - Reduzidos sutilmente para acompanhar a escala */}
                <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] z-0 animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] z-0 animate-pulse" />

                {/* Gap reduzido de 12 para 10. Centralizado com max-w-6xl */}
                <div className="relative z-10 w-full flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-10 max-w-6xl mx-auto">
                    
                    {/* LADO ESQUERDO: Conteúdo Textual Compacto */}
                    <div className="w-full text-center lg:text-left lg:max-w-xl order-2 lg:order-1">
                        {/* Reduzido text-4xl/6xl para text-3xl/5xl */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight tracking-tighter text-white uppercase italic">
                            Construindo o <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                                Futuro
                            </span>
                            , Linha por <br className="hidden md:block" /> Linha de Código.
                        </h2>

                        {/* Reduzido text-base/xl para text-sm/base (text-sm no mobile) */}
                        <p className="text-sm md:text-base lg:text-lg text-zinc-400 max-w-xl font-normal mb-8 leading-relaxed mx-auto lg:mx-0">
                            Transformando requisitos complexos em código limpo e sistemas
                            eficientes. Especialista em arquiteturas modernas e escaláveis.
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            {/* Reduzido text-xs font-black e px-6 */}
                            <NavHashLink
                                smooth
                                to="/#projetos"
                                className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-black rounded-lg transition-all hover:scale-105 uppercase tracking-widest shadow-lg shadow-cyan-500/10"
                            >
                                Explorar Projetos
                            </NavHashLink>
                            <NavHashLink
                                smooth
                                to="/#contatos"
                                className="px-6 py-2.5 border border-zinc-800 hover:border-purple-500/50 text-white text-xs font-bold rounded-lg transition-all bg-zinc-900/30 backdrop-blur-md uppercase tracking-widest"
                            >
                                Entrar em Contato
                            </NavHashLink>
                        </div>
                    </div>

                    {/* LADO DIREITO: Foto Significativamente Reduzida */}
                    <div className="flex justify-center w-full lg:w-auto z-10 order-1 lg:order-2">
                        <div className="relative group p-1 rounded-full bg-zinc-900/40 backdrop-blur-sm border border-white/5 transition-all duration-300 hover:border-cyan-500/30 shadow-xl">
                            
                            {/* Detalhe Superior Ciano sutil */}
                            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            {/* Foto REDUZIDA: w-52/380px -> w-48/280px no desktop */}
                            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-[280px] lg:h-[280px] rounded-full overflow-hidden bg-black border-4 border-[#050505]">
                                <img
                                    src={fotoProfissional}
                                    alt="Gustavo Lemos"
                                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>

                            {/* Detalhe Inferior Roxo sutil */}
                            <div className="absolute bottom-1.5 right-3 w-8 h-8 border-b-2 border-r-2 border-purple-500/20 rounded-br-[1.5rem]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO SOBRE --- */}
            {/* Reduzido py-16 para py-12 */}
            <section
                id="sobre"
                className="relative z-10 bg-black/10 py-12 scroll-mt-20"
            >
                <Sobre />
            </section>

            {/* --- SEÇÃO TECNOLOGIAS --- */}
            {/* Reduzido py-24 para py-16 */}
            <section className="py-16 bg-gradient-to-b from-transparent via-black/40 to-transparent">
                <CardTec />
            </section>

            {/* --- SEÇÃO JORNADA (TIMELINE) --- */}
            {/* Reduzido py-24 para py-16 */}
            <section className="relative py-16 bg-transparent">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center mb-12">
                        {/* Reduzido text-3xl/5xl para text-3xl/4xl */}
                        <h3 className="text-3xl md:text-4xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 uppercase italic tracking-tighter leading-none">
                            Minha Jornada
                        </h3>
                        <div className="w-12 h-1 bg-cyan-500 mt-3 rounded-full opacity-30" />
                    </div>
                    <TimeLine />
                </div>
            </section>

            {/* --- SEÇÃO: MEUS PROJETOS --- */}
            {/* Reduzido py-24 para py-16 */}
            <section
                id="projetos"
                className="relative py-16 bg-transparent scroll-mt-20"
            >
                <div className="relative z-10 container mx-auto px-6">
                    <Projetos />
                </div>
            </section>

            {/* --- SEÇÃO CONTATO --- */}
            {/* Reduzido py-24 para py-16 */}
            <section
                id="contatos"
                className="relative py-16 overflow-hidden scroll-mt-20"
            >
                <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-purple-600/5 rounded-full blur-[70px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-cyan-500/5 rounded-full blur-[70px] pointer-events-none" />
                
                <div className="relative z-10 container mx-auto px-6">
                    <Contato />
                </div>
            </section>

            {/* Footer Compacto com Fonte Micro-Premiu, */}
            <footer className="py-8 border-t border-white/5 bg-black/95 text-center text-zinc-600 text-[9px] uppercase tracking-[0.4em] backdrop-blur-xl">
                <p>Projetado e desenvolvido por Gustavo • {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}

export default Home;