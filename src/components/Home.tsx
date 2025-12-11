import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import TimeLine from "./Sobre/TimeLine";
import Sobre from "./Sobre/Sobre";


function Home() {
	return (
		<div className="flex flex-col w-full font-sans">
			<NavBar />

			<section
				className="relative flex items-center justify-start min-h-[700px] p-8 font-outfit">

				
				<div className="relative z-10 text-white max-w-4xl mx-auto md:mx-0">
					
					<h2 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
						Construindo o Futuro, Linha por Linha de Código.
					</h2>

					<p className="text-xl md:text-2xl text-gray-300">
						Transformando requisitos complexos em código limpo e sistemas
						eficientes.
					</p>
				</div>
			</section>

			<section >
			<Sobre/>
			<TimeLine/>

			</section>


		</div>
	);
}
export default Home;
