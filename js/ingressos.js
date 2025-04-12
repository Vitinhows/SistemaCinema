const selectSessao = document.getElementById('sessao');

    function carregarSessoes() {
      const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
      sessoes.forEach((sessao, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.textContent = `${sessao.filme} - ${sessao.sala} - ${sessao.dataHora}`;
        selectSessao.appendChild(opt);
      });
    }

    carregarSessoes();

    document.getElementById('form-ingresso').addEventListener('submit', function(e) {
      e.preventDefault();

      const sessaoIndex = selectSessao.value;
      const cliente = document.getElementById('cliente').value.trim();
      const cpf = document.getElementById('cpf').value.trim();
      const assento = document.getElementById('assento').value.trim().toUpperCase();
      const pagamento = document.getElementById('pagamento').value;

      const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];

      if (!sessoes[sessaoIndex]) {
        alert("Sessão inválida.");
        return;
      }

      const ingresso = {
        sessao: sessoes[sessaoIndex],
        cliente,
        cpf,
        assento,
        pagamento,
        dataVenda: new Date().toISOString()
      };

      let ingressos = JSON.parse(localStorage.getItem('ingressos')) || [];
      ingressos.push(ingresso);
      localStorage.setItem('ingressos', JSON.stringify(ingressos));

      alert("🎟️ Ingresso vendido com sucesso!");
      this.reset();
    });