/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import React from "react";

const timelineData = [
	{
		ano: "2023",
		titulo: "Início da Carreira em React/TS",
		descricao:
			"Transição completa para o ecossistema JavaScript moderno, focando em React e TypeScript para aplicações escaláveis.",
	},
	{
		ano: "2024",
		titulo: "Especialização em Tailwind CSS",
		descricao:
			"Domínio de utilitários de CSS para desenvolvimento rápido e consistente de UI/UX.",
	},
	{
		ano: "Presente",
		titulo: "Desenvolvedor Full-Stack & Simbionte Digital",
		descricao:
			"Construção de soluções de ponta a ponta e otimização de performance.",
	},
];

function TimeLine() {
	return (
		<section className="py-16font-outfit text-white">
			<div className="max-w-3xl mx-auto px-4">
				<h2 className="text-4xl font-extrabold mb-12 text-center text-purple-600">
					Minha Jornada Minimalista
				</h2>

				<ul className="relative">
					<div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-px bg-cyan-400/50"></div>

					{timelineData.map((item, index) => (
						<li
							key={index}
							className={`mb-12 relative w-full sm:w-1/2 
                          ${index % 2 === 0 ? "sm:pr-10 sm:left-0" : "sm:pl-10 sm:left-1/2"}`}
						>
							<div
								className={`absolute w-3 h-3 rounded-full bg-purple-600 
                            left-0 top-1/2 transform -translate-y-1/2 
                            sm:left-1/2 sm:-translate-x-1/2 
                            shadow-lg shadow-black/70 border-2 border-cyan-400`}
							></div>

							<div
								className={`p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm 
                            ${index % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}
							>
								<time className="block text-sm font-semibold leading-none text-cyan-400 mb-1">
									{item.ano}
								</time>
								<h3 className="text-xl font-bold text-gray-50 mt-2 mb-2">
									{item.titulo}
								</h3>
								<p className="text-base font-normal text-gray-400">
									{item.descricao}
								</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default TimeLine;
