import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import TimeLine from "./Sobre/TimeLine";
import Sobre from "./Sobre/Sobre";
import CardTec from "./Sobre/CardTec";
import Contato from "./Contatos/Contato";
import Projetos from "./Projetos/Projetos"; // Importando o componente que criamos
// Importando a imagem do assets
import fotoProfissional from "../assets/foto_Profissional.jpg";

function Home() {
	return (
		<div className="flex flex-col w-full bg-transparent text-white overflow-x-hidden font-outfit">
			<NavBar />

			{/* --- HERO SECTION --- */}
			<section className="relative flex min-h-screen px-6 md:px-12 lg:px-20 overflow-hidden pt-32 lg:pt-0">
				<div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] z-0 animate-pulse" />
				<div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] z-0 animate-pulse" />

				<div className="relative z-10 w-full flex flex-col items-center justify-center lg:flex-row lg:justify-start gap-12">
					<div className="w-full text-center lg:text-left">
						<h2 className="text-6xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tighter">
							Construindo o <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
								Futuro
							</span>
							, Linha por <br /> Linha de Código.
						</h2>

						<p className="text-2xl md:text-3xl text-gray-300 max-w-2xl font-light mb-10 drop-shadow-2xl leading-relaxed mx-auto lg:mx-0">
							Transformando requisitos complexos em código limpo e sistemas
							eficientes. Especialista em arquiteturas modernas e escaláveis.
						</p>

						<div className="flex flex-wrap gap-4 justify-center lg:justify-start">
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

					<div className="flex justify-center w-full lg:order-last">
						<div className="relative w-64 h-64 md:w-[450px] md:h-[450px] rounded-full p-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-2xl overflow-hidden group">
							<div className="w-full h-full rounded-full border-2 border-zinc-900/50 overflow-hidden bg-zinc-900">
								<img
									src={fotoProfissional}
									alt="Foto Profissional"
									className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
								/>
							</div>
						</div>
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

			{/* --- SEÇÃO: MEUS PROJETOS (LIMPA) --- */}
			<section className="relative py-32 bg-transparent">
				{/* Removido o background translúcido e o ruído para focar apenas nos cards */}
				<div className="relative z-10 container mx-auto px-6">
					<Projetos />
				</div>
			</section>
            
			{/* --- SEÇÃO CONTATO --- */}
			<section className="relative py-24 backdrop-blur-md overflow-hidden">
				<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
				<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
				<div className="relative z-10 container mx-auto px-6">
					<Contato />
				</div>
			</section>

			<footer className="py-12 border-t border-zinc-900 bg-black/90 text-center text-zinc-500 text-sm backdrop-blur-xl">
				<p>Projetado e desenvolvido por Gustavo • {new Date().getFullYear()}</p>
			</footer>
		</div>
	);
}

export default Home;
