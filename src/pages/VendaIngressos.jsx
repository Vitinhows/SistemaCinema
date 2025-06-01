import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';

export default function VendaIngressos() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sessoes, setSessoes] = useState([]);
  const [ingresso, setIngresso] = useState({
    sessao: '',
    cliente: '',
    cpf: '',
    assento: '',
    pagamento: ''
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('sessoes')) || [];
    setSessoes(stored);
    const params = new URLSearchParams(location.search);
    const sessaoId = params.get('sessao');
    if (sessaoId) setIngresso(i => ({ ...i, sessao: sessaoId }));
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIngresso({ ...ingresso, [name]: value });
  };

  const confirmarVenda = () => {
    const ingressos = JSON.parse(localStorage.getItem('ingressos')) || [];
    ingressos.push(ingresso);
    localStorage.setItem('ingressos', JSON.stringify(ingressos));
    navigate('/');
  };

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">Venda de Ingressos</div>
      <div className="card-body">
        <FormSelect
          label="Sessão"
          name="sessao"
          options={sessoes.map((s, i) => `#${i + 1} - ${s.filme} - ${s.dataHora}`)}
          value={ingresso.sessao}
          onChange={handleChange}
        />
        <FormInput label="Nome do Cliente" name="cliente" value={ingresso.cliente} onChange={handleChange} />
        <FormInput label="CPF" name="cpf" value={ingresso.cpf} onChange={handleChange} />
        <FormInput label="Assento (ex: A10)" name="assento" value={ingresso.assento} onChange={handleChange} />
        <FormSelect
          label="Tipo de Pagamento"
          name="pagamento"
          options={["Cartão", "Pix", "Dinheiro"]}
          value={ingresso.pagamento}
          onChange={handleChange}
        />
        <button className="btn btn-success" onClick={confirmarVenda}>Confirmar Venda</button>
      </div>
    </div>
  );
}
