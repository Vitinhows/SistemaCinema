import { useEffect, useState } from 'react';

export default function ListaIngressos() {
  const [ingressos, setIngressos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('ingressos')) || [];
    setIngressos(data);
  }, []);

  return (
    <div className="container">
      <h3 className="mb-4">Ingressos Vendidos</h3>
      {ingressos.length === 0 ? (
        <div className="alert alert-info">Nenhum ingresso vendido ainda.</div>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Sessão</th>
              <th>Cliente</th>
              <th>CPF</th>
              <th>Assento</th>
              <th>Pagamento</th>
            </tr>
          </thead>
          <tbody>
            {ingressos.map((i, index) => (
              <tr key={index}>
                <td>{i.sessao}</td>
                <td>{i.cliente}</td>
                <td>{i.cpf}</td>
                <td>{i.assento}</td>
                <td>{i.pagamento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
