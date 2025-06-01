import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListaSessoes() {
  const navigate = useNavigate();
  const [sessoes, setSessoes] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('sessoes')) || [];
    setSessoes(stored);
  }, []);

  const handleCompra = (index) => {
    navigate(`/venda-ingressos?sessao=${index}`);
  };

  return (
    <div className="container">
      <h3 className="mb-4">Sessões Disponíveis</h3>
      {sessoes.length === 0 ? (
        <div className="alert alert-info">Nenhuma sessão cadastrada.</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {sessoes.map((s, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{s.filme}</h5>
                  <p className="card-text">
                    <strong>Sala:</strong> {s.sala}<br/>
                    <strong>Data e Hora:</strong> {s.dataHora}<br/>
                    <strong>Preço:</strong> R$ {Number(s.preco).toFixed(2)}<br/>
                    <strong>Idioma:</strong> {s.idioma} - {s.formato}
                  </p>
                  <button className="btn btn-primary" onClick={() => handleCompra(index)}>
                    Comprar Ingresso
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
