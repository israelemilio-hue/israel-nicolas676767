document.addEventListener('DOMContentLoaded', () => {
  const steps = Array.from(document.querySelectorAll('.form-step'));
  const nextBtns = document.querySelectorAll('.btn-next');
  const prevBtns = document.querySelectorAll('.btn-prev');
  const form = document.getElementById('multi-step-form');
  const stepIndicator = document.getElementById('step-indicator');
  const progressBar = document.querySelector('.progress-bar');
  let currentStep = 0;

  function updateStep(targetIndex) {
    steps[currentStep].hidden = true;
    steps[currentStep].classList.remove('active');

    currentStep = targetIndex;

    steps[currentStep].hidden = false;
    steps[currentStep].classList.add('active');

    const stepNumber = currentStep + 1;
    stepIndicator.textContent = `Etapa ${stepNumber} de ${steps.length}`;
    progressBar.setAttribute('aria-valuenow', stepNumber);

    const firstInput = steps[currentStep].querySelector('input, button');
    if (firstInput) firstInput.focus();
  }

  function validateStep(stepIndex) {
    const inputs = Array.from(steps[stepIndex].querySelectorAll('input'));
    let isValid = true;

    inputs.forEach((input) => {
      const errorSpan = document.getElementById(`error-${input.id}`);
      if (!input.checkValidity()) {
        isValid = false;
        if (errorSpan) errorSpan.textContent = 'Por favor, preencha este campo corretamente.';
      } else {
        if (errorSpan) errorSpan.textContent = '';
      }
    });

    return isValid;
  }

  nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        updateStep(currentStep + 1);
      }
    });
  });

  prevBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      updateStep(currentStep - 1);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      alert('Cadastro concluído com sucesso!');
      form.reset();
      updateStep(0);
    }
  });
});