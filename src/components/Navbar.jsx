import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">🎬 CineControl</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/cadastro-filmes">Cadastro de Filmes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cadastro-salas">Cadastro de Salas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cadastro-sessoes">Cadastro de Sessões</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/venda-ingressos">Venda de Ingressos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ingressos">Ingressos Vendidos</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}