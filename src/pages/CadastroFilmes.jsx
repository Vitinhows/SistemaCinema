import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import FormSelect from '../components/FormSelect';

export default function CadastroFilmes() {
  const navigate = useNavigate();
  const [filme, setFilme] = useState({
    titulo: '', descricao: '', genero: '', classificacao: '', duracao: '', estreia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilme({ ...filme, [name]: value });
  };

  const salvarFilme = () => {
    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    filmes.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmes));
    navigate('/');
  };

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">Cadastro de Filme</div>
      <div className="card-body">
        <FormInput label="Título" name="titulo" value={filme.titulo} onChange={handleChange} />
        <FormTextarea label="Descrição" name="descricao" value={filme.descricao} onChange={handleChange} />
        <FormSelect label="Gênero" name="genero" options={["Ação", "Comédia", "Drama", "Terror"]} value={filme.genero} onChange={handleChange} />
        <FormSelect label="Classificação Indicativa" name="classificacao" options={["Livre", "10+", "12+", "14+", "16+", "18+"]} value={filme.classificacao} onChange={handleChange} />
        <FormInput label="Duração (minutos)" name="duracao" type="number" value={filme.duracao} onChange={handleChange} />
        <FormInput label="Data de Estreia" name="estreia" type="date" value={filme.estreia} onChange={handleChange} />
        <button className="btn btn-success" onClick={salvarFilme}>Salvar Filme</button>
      </div>
    </div>
  );
}
