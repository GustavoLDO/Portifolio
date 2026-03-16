/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
import React, { useState } from "react";

const meusProjetos = [
  {
    id: 1,
    nome: "PG360",
    descricao: "Plataforma de mapeamento turístico para Praia Grande. Desenvolvida com Spring Boot, PostgreSQL e React.",
    tags: ["Spring Boot", "PostgreSQL", "React"],
    link: "https://github.com/GustavoLDO/pg360-site.git",
  },
  {
    id: 2,
    nome: "CTC Hawks",
    descricao: "E-commerce completo com dashboard administrativo e autenticação, focado em performance e UX.",
    tags: ["Django", "Python", "E-commerce"],
    link: "https://github.com/GustavoLDO/CTC-Hawks",
  },
  {
    id: 3,
    nome: "Cameras Monitoramento",
    descricao: "Cameras é um projeto web simples desenvolvido para monitoramento visual em tempo real.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/GustavoLDO/Cameras",
  },
  {
    id: 4,
    nome: "To-Do-List",
    descricao: "O ToDo_List é um aplicativo simples, mas poderoso, projetado para organizar tarefas diárias e aumentar a produtividade.",
    tags: ["Django", "Python", "Redis", "TailWind"],
    link: "https://github.com/GustavoLDO/ToDo_List.git",
  },
];

function Projetos() {
  const [limite, setLimite] = useState(3);
  
  // Verifica se todos os projetos cadastrados estão visíveis
  const estaExibindoTudo = limite >= meusProjetos.length;

  const handleToggleProjetos = () => {
    if (estaExibindoTudo) {
      setLimite(3);
      // Scroll suave para o título da seção ao recolher
      const section = document.getElementById("projects-title");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setLimite(meusProjetos.length);
    }
  };

  return (
    <div className="w-full font-outfit">
      {/* Título da Seção com ID para scroll */}
     
<div id="projects-title" className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-4">
          Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projetos</span>
        </h2>
        <div className="w-24 h-2 bg-cyan-500 rounded-full mb-6"></div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {meusProjetos.slice(0, limite).map((projeto) => (
          <div 
            key={projeto.id}
            className="group relative flex flex-col justify-between bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-1 transition-all duration-500 hover:scale-[1.02] shadow-2xl"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2.5rem] opacity-0 group-hover:opacity-40 transition duration-500 blur-sm"></div>

            <div className="relative bg-zinc-950 rounded-[2.4rem] p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors"></div>
                  </div>
                  <div className="p-2 bg-zinc-900 rounded-lg text-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {projeto.nome}
                </h3>

                <p className="text-xl text-zinc-400 leading-relaxed mb-8 font-light line-clamp-3">
                  {projeto.descricao}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {projeto.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-zinc-900 text-zinc-300 text-[10px] font-bold rounded-lg uppercase tracking-[0.2em] border border-zinc-800 group-hover:border-cyan-500/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-zinc-900 text-white font-bold rounded-2xl text-center border border-zinc-800 hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 group/btn"
              >
                Ver Repositório
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Botão Dinâmico Ver Mais / Ver Menos */}
      {meusProjetos.length > 3 && (
        <div className="flex justify-center mt-20">
          <button 
            type="button"
            onClick={handleToggleProjetos}
            className="flex items-center gap-4 px-12 py-5 bg-transparent border-2 border-zinc-800 text-white text-lg font-black rounded-2xl hover:bg-white hover:text-black hover:border-white transition-all transform hover:-translate-y-2 active:scale-95 shadow-xl uppercase tracking-widest group"
          >
            {estaExibindoTudo ? "Ver Menos" : "Ver Mais Projetos"}
            <svg 
              className={`w-6 h-6 transition-transform duration-500 ${estaExibindoTudo ? "rotate-180" : ""}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Projetos;