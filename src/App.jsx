import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CadastroFilmes from './pages/CadastroFilmes';
import CadastroSalas from './pages/CadastroSalas';
import CadastroSessoes from './pages/CadastroSessoes';
import VendaIngressos from './pages/VendaIngressos';
import ListaSessoes from './pages/ListaSessoes';
import ListaIngressos from './pages/ListaIngressos';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ListaSessoes />} />
          <Route path="/cadastro-filmes" element={<CadastroFilmes />} />
          <Route path="/cadastro-salas" element={<CadastroSalas />} />
          <Route path="/cadastro-sessoes" element={<CadastroSessoes />} />
          <Route path="/venda-ingressos" element={<VendaIngressos />} />
          <Route path="/ingressos" element={<ListaIngressos />} />
        </Routes>
      </div>
    </Router>
  );
}