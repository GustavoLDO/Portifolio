/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import React from "react";

function Sobre() {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-outfit overflow-hidden">
      {/* Background Decorativo - Ajustado para não quebrar o scroll no mobile */}
      <div className="absolute -top-10 -left-10 w-48 h-48 md:w-72 md:h-72 bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
        
        {/* LADO ESQUERDO: Conteúdo Textual */}
        <div className="lg:col-span-7 space-y-8 md:space-y-12 order-2 lg:order-1">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
              Transformando Ideias em <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Sistemas Reais.
              </span>
            </h2>
            <div className="w-16 md:w-24 h-1.5 md:h-2 bg-cyan-500 rounded-full"></div>
          </div>

          {/* Texto com tamanhos fluidos */}
          <div className="space-y-6 md:space-y-8 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-normal">
            <p>
              Olá! Eu sou o <span className="text-white font-bold border-b-2 border-cyan-500/30">Gustavo</span>, um desenvolvedor Full Stack focado em criar soluções que unem a robustez do processamento de dados com interfaces de alto nível.
            </p>
            <p>
              A minha jornada é movida pela curiosidade técnica e pelo desejo de resolver problemas complexos. Procuro arquitetar sistemas que sejam <span className="text-cyan-400 font-semibold">escaláveis</span>, <span className="text-purple-400 font-semibold">seguros</span> e <span className="text-white font-semibold">centrados no utilizador</span>.
            </p>
            <p className="text-base md:text-xl text-gray-400 italic">
              Atualmente, especializo-me em ecossistemas modernos como <span className="text-white font-medium not-italic">React, TypeScript e Spring Boot</span>.
            </p>
          </div>

          {/* Pilares de Trabalho - 1 coluna no mobile, 3 no desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/50 transition-all group">
              <h4 className="text-cyan-400 text-lg md:text-xl font-bold mb-2">Performance</h4>
              <p className="text-sm md:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors">Código otimizado para carregamentos rápidos.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/50 transition-all group">
              <h4 className="text-purple-400 text-lg md:text-xl font-bold mb-2">Escalabilidade</h4>
              <p className="text-sm md:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors">Arquiteturas prontas para o crescimento.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-white/30 transition-all group sm:col-span-2 md:col-span-1">
              <h4 className="text-white text-lg md:text-xl font-bold mb-2">Clean Code</h4>
              <p className="text-sm md:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors">Manutenibilidade e clareza absoluta.</p>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Info Card */}
        {/* Adicionado 'order-1' no mobile para os dados aparecerem antes do texto longo, ou 'order-2' se preferir manter abaixo */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 order-1 lg:order-2">
          <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 flex items-center gap-4 text-white">
              <span className="hidden sm:flex w-10 h-10 rounded-xl bg-cyan-500/20 items-center justify-center text-cyan-400 text-base italic shadow-inner">
                inf
              </span>
              Dados de Contato
            </h3>

            <ul className="space-y-6 md:space-y-8">
              {[
                { label: "Localização", value: "Praia Grande, São Paulo" },
                { label: "Experiência Principal", value: "Full Stack Developer" },
                { label: "Interesses", value: "IA, Arquitetura e UX" }
              ].map((item, index) => (
                <li key={index} className="flex flex-col gap-1">
                  <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold">{item.label}</span>
                  <span className="text-white text-lg md:text-xl font-semibold">{item.value}</span>
                </li>
              ))}
              
              <li className="flex flex-col gap-2">
                <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold">Status</span>
                <div className="flex items-center gap-3 text-green-400 text-base md:text-lg font-bold bg-green-500/5 w-fit px-4 py-1 rounded-full border border-green-500/20">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    Disponível para projetos
                </div>
              </li>
            </ul>

            <button type="button" className="w-full mt-8 md:mt-12 py-4 md:py-5 bg-white text-black text-base md:text-lg font-black rounded-xl md:rounded-2xl hover:bg-cyan-400 transition-all active:scale-95 shadow-lg">
              Descarregar CV
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Sobre;