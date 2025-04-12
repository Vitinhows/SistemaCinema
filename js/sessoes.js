const lista = document.getElementById("lista-sessoes");
    const sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];

    if (sessoes.length === 0) {
      lista.innerHTML = "<p class='text-muted'>Nenhuma sessão cadastrada.</p>";
    }

    sessoes.forEach((s, index) => {
      const card = document.createElement("div");
      card.className = "col-md-6";

      card.innerHTML = `
        <div class="card bg-secondary text-light h-100">
          <div class="card-body">
            <h5 class="card-title">${s.filme}</h5>
            <p class="card-text">
              <strong>Sala:</strong> ${s.sala}<br>
              <strong>Data e Hora:</strong> ${new Date(s.dataHora).toLocaleString()}<br>
              <strong>Idioma:</strong> ${s.idioma} | <strong>Formato:</strong> ${s.formato}<br>
              <strong>Preço:</strong> R$ ${parseFloat(s.preco).toFixed(2)}
            </p>
            <a href="venda-ingressos.html?sessao=${index}" class="btn btn-success">Comprar Ingresso</a>
          </div>
        </div>
      `;
      lista.appendChild(card);
    });