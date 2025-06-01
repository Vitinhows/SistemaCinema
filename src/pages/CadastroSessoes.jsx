import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';

export default function CadastroSessoes() {
  const navigate = useNavigate();
  const [filmes, setFilmes] = useState([]);
  const [salas, setSalas] = useState([]);
  const [sessao, setSessao] = useState({
    filme: '',
    sala: '',
    dataHora: '',
    preco: '',
    idioma: '',
    formato: ''
  });

  useEffect(() => {
    setFilmes(JSON.parse(localStorage.getItem('filmes')) || []);
    setSalas(JSON.parse(localStorage.getItem('salas')) || []);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSessao({ ...sessao, [name]: value });
  };

  const salvarSessao = () => {
    const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
    sessoes.push(sessao);
    localStorage.setItem('sessoes', JSON.stringify(sessoes));
    navigate('/');
  };

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">Cadastro de Sessão</div>
      <div className="card-body">
        <FormSelect label="Filme" name="filme" options={filmes.map(f => f.titulo)} value={sessao.filme} onChange={handleChange} />
        <FormSelect label="Sala" name="sala" options={salas.map(s => s.nome)} value={sessao.sala} onChange={handleChange} />
        <FormInput label="Data e Hora" name="dataHora" type="datetime-local" value={sessao.dataHora} onChange={handleChange} />
        <FormInput label="Preço" name="preco" type="number" value={sessao.preco} onChange={handleChange} />
        <FormSelect label="Idioma" name="idioma" options={["Dublado", "Legendado"]} value={sessao.idioma} onChange={handleChange} />
        <FormSelect label="Formato" name="formato" options={["2D", "3D"]} value={sessao.formato} onChange={handleChange} />
        <button className="btn btn-success" onClick={salvarSessao}>Salvar Sessão</button>
      </div>
    </div>
  );
}
