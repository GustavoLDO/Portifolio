import React from "react";

function Sobre() {
  return (
    <section className="relative w-full max-w-6xl mx-auto py-24 px-6 font-outfit">
      {/* Background Decorativo */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px]"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* LADO ESQUERDO: Conteúdo Textual (7 colunas) */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
              Transformando Ideias em <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Sistemas Reais.
              </span>
            </h2>
            <div className="w-24 h-2 bg-cyan-500 rounded-full"></div>
          </div>

          {/* Aumento significativo na legibilidade do parágrafo */}
          <div className="space-y-8 text-xl md:text-2xl text-gray-300 leading-relaxed font-normal">
            <p>
              Olá! Eu sou o <span className="text-white font-bold border-b-2 border-cyan-500/30">Gustavo</span>, um desenvolvedor Full Stack focado em criar soluções que unem a robustez do processamento de dados com interfaces de alto nível.
            </p>
            <p>
              A minha jornada é movida pela curiosidade técnica e pelo desejo de resolver problemas complexos. Não me limito a apenas "escrever código"; eu procuro entender as necessidades do negócio para arquitetar sistemas que sejam <span className="text-cyan-400 font-semibold">escaláveis</span>, <span className="text-purple-400 font-semibold">seguros</span> e <span className="text-white font-semibold">centrados no utilizador</span>.
            </p>
            <p className="text-lg md:text-xl text-gray-400 italic">
              Atualmente, especializo-me em ecossistemas modernos como <span className="text-white font-medium not-italic">React, TypeScript e Spring Boot</span>, garantindo uma transição fluida entre a lógica do servidor e a experiência visual do utilizador final.
            </p>
          </div>

          {/* Pilares de Trabalho - Cards maiores e com mais contraste */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/50 transition-all group">
              <h4 className="text-cyan-400 text-xl font-bold mb-3">Performance</h4>
              <p className="text-base text-zinc-400 group-hover:text-zinc-300 transition-colors">Código otimizado para carregamentos instantâneos.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/50 transition-all group">
              <h4 className="text-purple-400 text-xl font-bold mb-3">Escalabilidade</h4>
              <p className="text-base text-zinc-400 group-hover:text-zinc-300 transition-colors">Arquiteturas preparadas para o crescimento.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-white/30 transition-all group">
              <h4 className="text-white text-xl font-bold mb-3">Clean Code</h4>
              <p className="text-base text-zinc-400 group-hover:text-zinc-300 transition-colors">Manutenibilidade e clareza em cada linha.</p>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Info Card (5 colunas) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 overflow-hidden shadow-2xl">
            {/* Brilho decorativo interno */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4 text-white">
              <span className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-base italic shadow-inner">
                inf
              </span>
              Dados de Contato
            </h3>

            <ul className="space-y-8">
              <li className="flex flex-col gap-1">
                <span className="text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold">Localização</span>
                <span className="text-white text-xl font-semibold">Praia Grande, São Paulo</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold">Experiência Principal</span>
                <span className="text-white text-xl font-semibold">Desenvolvimento Full Stack</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold">Interesses</span>
                <span className="text-white text-xl font-semibold">IA, Arquitetura e UX</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold">Status</span>
                <div className="flex items-center gap-3 text-green-400 text-lg font-bold bg-green-500/5 w-fit px-4 py-1 rounded-full border border-green-500/20">
                   <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                   </span>
                   Disponível para projetos
                </div>
              </li>
            </ul>

            <button type="button" className="w-full mt-12 py-5 bg-white text-black text-lg font-black rounded-2xl hover:bg-cyan-400 transition-all transform hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(6,182,212,0.3)]">
              Descarregar CV
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Sobre;