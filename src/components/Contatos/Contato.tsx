/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contato() {
  const form = useRef<HTMLFormElement>(null);
  const [enviado, setEnviado] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_uhq24vk',
        'template_20r0kjd',
        form.current,
        'UnkAfSKaMeQlDf_fI'
      )
      .then((result) => {
          console.log(result.text);
          setEnviado(true);
          form.current?.reset();
          setTimeout(() => setEnviado(false), 4000);
      }, (error) => {
          console.log(error.text);
          alert("Erro ao enviar, tenta novamente.");
      });
    }
  };

  return (
    <section className="py-20  text-white font-outfit">
      <div className="max-w-3xl mx-auto px-6  p-12 rounded-3xl border border-white/5 shadow-2xl">
        <h2 className="text-4xl font-black mb-12 text-center md:text-left">
          Vamos <span className="text-cyan-400">Conversar?</span>
        </h2>

        {enviado ? (
          <div className="bg-green-500/20 border border-green-500 p-6 rounded-xl text-green-400 text-center">
            Mensagem enviada com sucesso! Entrarei em contacto em breve.
          </div>
        ) : (
          /* Aumentado o space-y para 10 para dar mais respiro entre os campos */
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-10">
            
            {/* Campo Nome */}
            <div className="flex flex-col gap-3">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-1">Nome Completo</label>
              <input 
                type="text" 
                name="user_name" 
                required 
                className="bg-black/50 border border-zinc-800 p-5 rounded-2xl focus:border-cyan-500 outline-none transition-all text-white placeholder:text-zinc-700"
                placeholder="Ex: Gustavo Silva"
              />
            </div>

            {/* Campo Email */}
            <div className="flex flex-col gap-3">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-1">Email de Contacto</label>
              <input 
                type="email" 
                name="user_email" 
                required 
                className="bg-black/50 border border-zinc-800 p-5 rounded-2xl focus:border-purple-500 outline-none transition-all text-white placeholder:text-zinc-700"
                placeholder="seu@email.com"
              />
            </div>

            {/* Campo Mensagem */}
            <div className="flex flex-col gap-3">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-1">Sua Mensagem</label>
              <textarea 
                name="message" 
                rows={6} 
                required 
                className="bg-black/50 border border-zinc-800 p-5 rounded-2xl focus:border-cyan-500 outline-none transition-all resize-none text-white placeholder:text-zinc-700"
                placeholder="Descreva brevemente o seu projeto ou dúvida..."
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-black uppercase tracking-widest rounded-2xl hover:opacity-90 transition-all transform hover:scale-[1.01] active:scale-[0.98] shadow-lg shadow-cyan-500/10"
            >
              Enviar Mensagem
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contato;