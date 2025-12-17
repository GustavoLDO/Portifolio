import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import TimeLine from "./Sobre/TimeLine";
import Sobre from "./Sobre/Sobre";
import CardTec from "./Sobre/CardTec";
import Contato from "./Contatos/Contato";

function Home() {
    return (
        /* bg-transparent permite que o background-image do seu CSS (body) apareça */
        <div className="flex flex-col w-full bg-transparent text-white overflow-x-hidden font-outfit">
            <NavBar />

            {/* --- HERO SECTION --- */}
            <section className="relative flex items-center min-h-screen px-8 md:px-20 overflow-hidden">
                {/* Glows para dar cor e profundidade à imagem do Venom ao fundo */}
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] z-0 animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] z-0 animate-pulse" />

                <div className="relative z-10 max-w-5xl">
                    <h2 className="text-6xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tighter">
                        Construindo o <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                            Futuro
                        </span>, Linha por <br /> Linha de Código.
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light mb-10 drop-shadow-2xl">
                        Transformando requisitos complexos em código limpo e sistemas
                        eficientes. Especialista em arquiteturas modernas e escaláveis.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link 
                            to="/" 
                            className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                        >
                            Explorar Projetos
                        </Link>
                        <Link 
                            to="/" 
                            className="px-10 py-4 border border-zinc-700 hover:border-purple-500 text-white font-medium rounded-xl transition-all bg-zinc-900/30 backdrop-blur-md"
                        >
                            Entrar em Contato
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO SOBRE --- */}
            <section className="relative z-10 bg-black/20 backdrop-blur-[2px] py-10">
                <Sobre />
            </section>

            {/* --- SEÇÃO TECNOLOGIAS --- */}
            <section className="py-20 bg-gradient-to-b from-transparent via-black/60 to-transparent backdrop-blur-sm">
                <CardTec />
            </section>

            {/* --- SEÇÃO JORNADA (TIMELINE) --- */}
            <section className="relative py-20 bg-transparent">
                {/* Linha divisória sutil */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
                
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center mb-20">
                        <h3 className="text-4xl md:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 uppercase italic">
                            Minha Jornada
                        </h3>
                        <div className="w-24 h-1 bg-cyan-500 mt-4 rounded-full" />
                    </div>
                    <TimeLine />
                </div>
            </section>

            {/* --- SEÇÃO CONTATO --- */}
            <section className="relative py-24 backdrop-blur-md overflow-hidden">
                {/* Glows extras para o rodapé */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="relative z-10 container mx-auto px-6">
                    <Contato />
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-12 border-t border-zinc-900 bg-black/90 text-center text-zinc-500 text-sm backdrop-blur-xl">
                <p>Projetado e desenvolvido por Gustavo • {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}

export default Home;