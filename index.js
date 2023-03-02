const inputs = document.querySelectorAll('.contacto input, .contacto textarea');

inputs.forEach(input => {
  input.addEventListener('input', e => {
    const label = e.target.previousElementSibling;
    if (e.target.value) {
      label.classList.add('arriba');
    } else {
      label.classList.remove('arriba');
    }
  });
});