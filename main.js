document.addEventListener('DOMContentLoaded', () => {
  // Elementos da Etapa 1
  const step1 = document.getElementById('step-1');
  const fullNameInput = document.getElementById('fullName');
  const btnStep1 = document.getElementById('btnStep1');

  // Elementos da Etapa 2
  const step2 = document.getElementById('step-2');
  const cepInput = document.getElementById('cepInput');
  const btnStep2 = document.getElementById('btnStep2');
  const btnBackStep2 = document.getElementById('btnBackStep2');

  // Função para alternar a exibição entre as etapas
  function goToStep(currentStep, nextStep) {
    currentStep.classList.remove('active');
    nextStep.classList.add('active');
  }

  // ================= LÓGICA DA ETAPA 1 =================
  btnStep1.addEventListener('click', () => {
    const name = fullNameInput.value.trim();

    if (!name) {
      fullNameInput.focus();
      fullNameInput.style.borderColor = '#dc2626';
      return;
    }

    // Avança para a Etapa 2
    goToStep(step1, step2);
  });

  fullNameInput.addEventListener('input', () => {
    if (fullNameInput.value.trim()) {
      fullNameInput.style.borderColor = '#cbd5e1';
    }
  });

  // ================= LÓGICA DA ETAPA 2 =================
  // Máscara dinâmica para o CEP (00000-000)
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

  // Voltar da Etapa 2 para a Etapa 1
  btnBackStep2.addEventListener('click', () => {
    goToStep(step2, step1);
  });

  // Avançar da Etapa 2 para a Etapa 3
  btnStep2.addEventListener('click', () => {
    const rawValue = cepInput.value.replace(/\D/g, '');

    if (rawValue.length !== 8) {
      cepInput.focus();
      cepInput.style.borderColor = '#dc2626';
      return;
    }

    console.log('CEP válido:', cepInput.value);
    // Aqui você adicionará o redirecionamento para a Etapa 3 quando criá-la
  });
});