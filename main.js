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

// Elementos da Etapa 3
  const step3 = document.getElementById('step-3');
  const phoneInput = document.getElementById('phoneInput');
  const btnStep3 = document.getElementById('btnStep3');
  const btnBackStep3 = document.getElementById('btnBackStep3');

  // Atualização no botão da Etapa 2 para redirecionar para a Etapa 3
  btnStep2.addEventListener('click', () => {
    const rawValue = cepInput.value.replace(/\D/g, '');

    if (rawValue.length !== 8) {
      cepInput.focus();
      cepInput.style.borderColor = '#dc2626';
      return;
    }

    goToStep(step2, step3);
  });

  // ================= LÓGICA DA ETAPA 3 =================
  // Máscara dinâmica para o Telefone: (00) 00000-0000
  phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d{0,2})/, '($1');
    }

    e.target.value = value;
    phoneInput.style.borderColor = '#cbd5e1';
  });

  // Voltar da Etapa 3 para a Etapa 2
  btnBackStep3.addEventListener('click', () => {
    goToStep(step3, step2);
  });

  // Avançar da Etapa 3 para a Etapa 4
  btnStep3.addEventListener('click', () => {
    const rawValue = phoneInput.value.replace(/\D/g, '');

    if (rawValue.length < 10) { // Aceita números com DDD (mínimo 10 dígitos)
      phoneInput.focus();
      phoneInput.style.borderColor = '#dc2626';
      return;
    }

    console.log('Telefone válido inserido:', phoneInput.value);
    // Próximo passo: goToStep(step3, step4);
  });