document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('fullName');
  const nextBtn = document.getElementById('nextBtn');

  nextBtn.addEventListener('click', () => {
    const name = input.value.trim();

    if (!name) {
      input.focus();
      input.style.borderColor = '#dc2626';
      return;
    }

    // Avançar para a próxima etapa do formulário
    console.log('Nome inserido:', name);
  });

  input.addEventListener('input', () => {
    if (input.value.trim()) {
      input.style.borderColor = '#1d4ed8';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cepInput = document.getElementById('cepInput');
  const nextBtn = document.getElementById('nextBtn');
  const backBtn = document.getElementById('backBtn');

  // Máscara dinâmica para o formato de CEP (00000-000)
  cepInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 8) {
      value = value.slice(0, 8);
    }

    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    }

    e.target.value = value;
    cepInput.style.borderColor = '#cbd5e1';
  });

  // Botão de voltar
  backBtn.addEventListener('click', () => {
    // Ação para retornar à etapa anterior
    console.log('Navegando para Etapa 1');
  });

  // Botão de avançar com validação
  nextBtn.addEventListener('click', () => {
    const rawValue = cepInput.value.replace(/\D/g, '');

    if (rawValue.length !== 8) {
      cepInput.focus();
      cepInput.style.borderColor = '#dc2626';
      return;
    }

    console.log('CEP válido inserido:', cepInput.value);
    // Navegar para Etapa 3
  });
});