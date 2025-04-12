document.getElementById('form-sala').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nomeSala').value.trim();
    const capacidade = parseInt(document.getElementById('capacidade').value);
    const tipo = document.getElementById('tipoSala').value;

    if (!nome || !capacidade || !tipo) {
      alert("Preencha todos os campos!");
      return;
    }

    const novaSala = { nome, capacidade, tipo };

    let salas = JSON.parse(localStorage.getItem('salas')) || [];
    salas.push(novaSala);
    localStorage.setItem('salas', JSON.stringify(salas));

    alert("✅ Sala cadastrada com sucesso!");
    this.reset();
  });s