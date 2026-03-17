import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Projetos from "../components/Projetos/Projetos";
import Contato from "../components/Contatos/Contato";
import Sobre from "../components/Sobre/Sobre";

function AppRouter() {
    return (
        <Routes>
            {/* Rota principal que renderiza a Landing Page completa */}
            <Route path="/" element={<Home />} />

            {/* Rotas individuais caso queira acessar apenas uma seção específica */}
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            
            {/* Rota de "Não Encontrado" (Opcional) */}
            <Route path="*" element={<div className="text-white">Página não encontrada.</div>} />
        </Routes>
    );
}

export default AppRouter;