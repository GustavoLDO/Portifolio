
import React from "react";

function Sobre() {
  return (
    <section className="relative w-full max-w-6xl mx-auto py-24 px-6 font-outfit">
      {/* Background Decorativo */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px]"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* LADO ESQUERDO: Conteúdo Textual (7 colunas) */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Transformando Ideias em <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Sistemas Reais.
              </span>
            </h2>
            <div className="w-20 h-1.5 bg-cyan-500 rounded-full"></div>
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed font-light">
            <p>
              Olá! Eu sou o <span className="text-white font-semibold">Gustavo</span>, um desenvolvedor Full Stack focado em criar soluções que unem a robustez do processamento de dados com interfaces de alto nível.
            </p>
            <p>
              A minha jornada é movida pela curiosidade técnica e pelo desejo de resolver problemas complexos. Não me limito a apenas "escrever código"; eu procuro entender as necessidades do negócio para arquitetar sistemas que sejam <span className="text-cyan-400 font-medium">escaláveis</span>, <span className="text-purple-400 font-medium">seguros</span> e <span className="text-white font-medium">centrados no utilizador</span>.
            </p>
            <p>
              Atualmente, especializo-me em ecossistemas modernos como <span className="text-white border-b border-zinc-700">React, TypeScript e Spring Boot</span>, garantindo uma transição fluida entre a lógica do servidor e a experiência visual do utilizador final.
            </p>
          </div>

          {/* Pilares de Trabalho */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 transition-colors">
              <h4 className="text-cyan-400 font-bold mb-2">Performance</h4>
              <p className="text-sm text-zinc-500">Código otimizado para carregamentos instantâneos.</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 transition-colors">
              <h4 className="text-purple-400 font-bold mb-2">Escalabilidade</h4>
              <p className="text-sm text-zinc-500">Arquiteturas preparadas para o crescimento.</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-white/30 transition-colors">
              <h4 className="text-white font-bold mb-2">Clean Code</h4>
              <p className="text-sm text-zinc-500">Manutenibilidade e clareza em cada linha.</p>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Info Card (5 colunas) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="relative bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 overflow-hidden shadow-2xl">
            {/* Brilho decorativo interno */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm italic">
                inf
              </span>
              Dados de Contacto
            </h3>

            <ul className="space-y-6">
              <li className="flex flex-col">
                <span className="text-xs text-zinc-500 uppercase tracking-widest">Localização</span>
                <span className="text-white text-lg font-medium">Praia Grande, São Paulo</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-zinc-500 uppercase tracking-widest">Experiência Principal</span>
                <span className="text-white text-lg font-medium">Desenvolvimento Full Stack</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-zinc-500 uppercase tracking-widest">Interesses</span>
                <span className="text-white text-lg font-medium">IA, Arquitetura de Software e UX</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-zinc-500 uppercase tracking-widest">Status</span>
                <div className="flex items-center gap-2 text-green-400 font-medium">
                   <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                   Disponível para novos projetos
                </div>
              </li>
            </ul>

            <button type="submit" className="w-full mt-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-all transform hover:-translate-y-1">
              Descarregar CV
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Sobre;