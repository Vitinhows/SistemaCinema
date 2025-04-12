document.getElementById('form-filme').addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value.trim();
    const descricao = document.getElementById('descricao').value.trim();
    const genero = document.getElementById('genero').value;
    const classificacao = document.getElementById('classificacao').value;
    const duracao = parseInt(document.getElementById('duracao').value);
    const estreia = document.getElementById('estreia').value;

    if (!titulo || !descricao || !genero || !classificacao || !duracao || !estreia) {
      alert("Preencha todos os campos!");
      return;
    }

    const novoFilme = { titulo, descricao, genero, classificacao, duracao, estreia };

    let filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    filmes.push(novoFilme);
    localStorage.setItem('filmes', JSON.stringify(filmes));

    alert("🎉 Filme cadastrado com sucesso!");
    this.reset();
  });