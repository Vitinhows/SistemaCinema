import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';

export default function CadastroSalas() {
  const navigate = useNavigate();
  const [sala, setSala] = useState({
    nome: '',
    capacidade: '',
    tipo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSala({ ...sala, [name]: value });
  };

  const salvarSala = () => {
    const salas = JSON.parse(localStorage.getItem('salas')) || [];
    salas.push(sala);
    localStorage.setItem('salas', JSON.stringify(salas));
    navigate('/');
  };

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">Cadastro de Sala</div>
      <div className="card-body">
        <FormInput label="Nome da Sala" name="nome" value={sala.nome} onChange={handleChange} />
        <FormInput label="Capacidade" name="capacidade" type="number" value={sala.capacidade} onChange={handleChange} />
        <FormSelect label="Tipo" name="tipo" options={["2D", "3D", "IMAX"]} value={sala.tipo} onChange={handleChange} />
        <button className="btn btn-success" onClick={salvarSala}>Salvar Sala</button>
      </div>
    </div>
  );
}
