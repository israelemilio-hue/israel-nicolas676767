document.addEventListener('DOMContentLoaded', () => {
  // Páginas/Etapas
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const step3 = document.getElementById('step-3');

  // Campos de Input
  const fullNameInput = document.getElementById('fullName');
  const cepInput = document.getElementById('cepInput');
  const phoneInput = document.getElementById('phoneInput');

  // Botões
  const btnStep1 = document.getElementById('btnStep1');
  const btnStep2 = document.getElementById('btnStep2');
  const btnBackStep2 = document.getElementById('btnBackStep2');
  const btnStep3 = document.getElementById('btnStep3');
  const btnBackStep3 = document.getElementById('btnBackStep3');

  // Função genérica de navegação
  function goToStep(currentStep, nextStep) {
    currentStep.classList.remove('active');
    nextStep.classList.add('active');
    window.scrollTo(0, 0); // Garante que a página inicie do topo
  }

  // ================= LÓGICA DA ETAPA 1 =================
  btnStep1.addEventListener('click', () => {
    if (!fullNameInput.value.trim()) {
      fullNameInput.focus();
      fullNameInput.style.borderColor = '#dc2626';
      return;
    }
    goToStep(step1, step2);
  });

  fullNameInput.addEventListener('input', () => {
    if (fullNameInput.value.trim()) {
      fullNameInput.style.borderColor = '#cbd5e1';
    }
  });

  // ================= LÓGICA DA ETAPA 2 =================
  cepInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    if (value.length > 5) value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    
    e.target.value = value;
    cepInput.style.borderColor = '#cbd5e1';
  });

  btnBackStep2.addEventListener('click', () => {
    goToStep(step2, step1);
  });

  btnStep2.addEventListener('click', () => {
    const rawCep = cepInput.value.replace(/\D/g, '');

    // Valida se o CEP tem exatamente 8 dígitos
    if (rawCep.length !== 8) {
      cepInput.focus();
      cepInput.style.borderColor = '#dc2626';
      return;
    }

    // Transição para a Etapa 3
    goToStep(step2, step3);
  });

  // ================= LÓGICA DA ETAPA 3 =================
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

  btnBackStep3.addEventListener('click', () => {
    goToStep(step3, step2);
  });

  btnStep3.addEventListener('click', () => {
    const rawPhone = phoneInput.value.replace(/\D/g, '');

    if (rawPhone.length < 10) {
      phoneInput.focus();
      phoneInput.style.borderColor = '#dc2626';
      return;
    }

    console.log('Telefone aceito! Preparado para a Etapa 4.');
  });
});document.addEventListener('DOMContentLoaded', () => {
  // Páginas/Etapas
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const step3 = document.getElementById('step-3');
  const step4 = document.getElementById('step-4');

  // Campos de Input
  const fullNameInput = document.getElementById('fullName');
  const cepInput = document.getElementById('cepInput');
  const phoneInput = document.getElementById('phoneInput');
  const emailInput = document.getElementById('emailInput');

  // Botões
  const btnStep1 = document.getElementById('btnStep1');
  const btnStep2 = document.getElementById('btnStep2');
  const btnBackStep2 = document.getElementById('btnBackStep2');
  const btnStep3 = document.getElementById('btnStep3');
  const btnBackStep3 = document.getElementById('btnBackStep3');
  const btnSubmit = document.getElementById('btnSubmit');
  const btnBackStep4 = document.getElementById('btnBackStep4');

  // Função genérica de navegação
  function goToStep(currentStep, nextStep) {
    currentStep.classList.remove('active');
    nextStep.classList.add('active');
    window.scrollTo(0, 0);
  }

  // ================= ETAPA 1 =================
  btnStep1.addEventListener('click', () => {
    if (!fullNameInput.value.trim()) {
      fullNameInput.focus();
      fullNameInput.style.borderColor = '#dc2626';
      return;
    }
    goToStep(step1, step2);
  });

  fullNameInput.addEventListener('input', () => {
    if (fullNameInput.value.trim()) fullNameInput.style.borderColor = '#cbd5e1';
  });

  // ================= ETAPA 2 =================
  cepInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    if (value.length > 5) value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    
    e.target.value = value;
    cepInput.style.borderColor = '#cbd5e1';
  });

  btnBackStep2.addEventListener('click', () => goToStep(step2, step1));

  btnStep2.addEventListener('click', () => {
    const rawCep = cepInput.value.replace(/\D/g, '');
    if (rawCep.length !== 8) {
      cepInput.focus();
      cepInput.style.borderColor = '#dc2626';
      return;
    }
    goToStep(step2, step3);
  });

  // ================= ETAPA 3 =================
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

  btnBackStep3.addEventListener('click', () => goToStep(step3, step2));

  btnStep3.addEventListener('click', () => {
    const rawPhone = phoneInput.value.replace(/\D/g, '');
    if (rawPhone.length < 10) {
      phoneInput.focus();
      phoneInput.style.borderColor = '#dc2626';
      return;
    }
    goToStep(step3, step4);
  });

  // ================= ETAPA 4 =================
  btnBackStep4.addEventListener('click', () => goToStep(step4, step3));

  emailInput.addEventListener('input', () => {
    emailInput.style.borderColor = '#cbd5e1';
  });

  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      emailInput.focus();
      emailInput.style.borderColor = '#dc2626';
      return;
    }

    // Sucesso no envio do formulário
    alert('Cadastro concluído com sucesso!');
  });
});