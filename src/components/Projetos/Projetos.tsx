/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
import { useState } from "react";

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
  {
    id: 5,
    nome: "Pokedex",
    descricao: "Uma pokedex completa com busca e filtragem de pokémons, via terminal, utilizando a API pública PokeAPI.",
    tags: ["Spring Boot", "PostgreSQL" ],
    link: "https://github.com/GustavoLDO/Pokedex.git",
  },
  {
    id: 6,
    nome: "MegaSena",
    descricao: "Projeto de simulação de apostas da MegaSena, permitindo aos usuários escolher números e verificar resultados.",
    tags: ["PHP", "CSS", "HTML"],
    link: "https://github.com/GustavoLDO/AtividadeMegaSena.git",
  },
  {
    id: 7,
    nome: "Banco Spring Boot",
    descricao: "Aplicação backend desenvolvida em Java com Spring Boot para gerenciamento de endereços.",
    tags: ["Spring Boot", "PostgreSQL"],
    link: "https://github.com/GustavoLDO/Banco-Spring-Boot.git",
  }
];

function Projetos() {
  const [limite, setLimite] = useState(3);
  const estaExibindoTudo = limite >= meusProjetos.length;

  const handleToggleProjetos = () => {
    if (estaExibindoTudo) {
      setLimite(3);
      const section = document.getElementById("projects-title");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setLimite(meusProjetos.length);
    }
  };

  return (
    <div className="w-full font-outfit max-w-6xl mx-auto"> {/* Container centralizado */}
      {/* Título da Seção Ajustado */}
      <div id="projects-title" className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
          Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projetos</span>
        </h2>
        <div className="w-16 h-1.5 bg-cyan-500 rounded-full mb-6"></div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {meusProjetos.slice(0, limite).map((projeto) => (
          <div 
            key={projeto.id}
            className="group relative flex flex-col justify-between bg-zinc-900 border border-zinc-800 rounded-[2rem] p-0.5 transition-all duration-500 hover:scale-[1.02] shadow-2xl"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2rem] opacity-0 group-hover:opacity-30 transition duration-500 blur-sm"></div>

            <div className="relative bg-zinc-950 rounded-[1.9rem] p-7 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors"></div>
                  </div>
                  <div className="p-1.5 bg-zinc-900 rounded-md text-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {projeto.nome}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal line-clamp-3">
                  {projeto.descricao}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {projeto.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-zinc-900 text-zinc-300 text-[9px] font-bold rounded-md uppercase tracking-wider border border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-zinc-900 text-white text-sm font-bold rounded-xl text-center border border-zinc-800 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group/btn"
              >
                Ver Repositório
                <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Botão Ver Mais Redimensionado */}
      {meusProjetos.length > 3 && (
        <div className="flex justify-center mt-12">
          <button 
            type="button"
            onClick={handleToggleProjetos}
            className="flex items-center gap-3 px-8 py-3.5 bg-transparent border border-zinc-800 text-white text-sm font-bold rounded-xl hover:bg-white hover:text-black transition-all shadow-lg uppercase tracking-widest group"
          >
            {estaExibindoTudo ? "Ver Menos" : "Ver Mais Projetos"}
            <svg 
              className={`w-4 h-4 transition-transform duration-500 ${estaExibindoTudo ? "rotate-180" : ""}`} 
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