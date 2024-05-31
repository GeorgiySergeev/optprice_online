 function validateOrderForm() {
  document.querySelectorAll('.order_form').forEach(form => {
    form.addEventListener('submit', event => {
      const nameInput = form.querySelector("input[name='name']");
      const phoneInput = form.querySelector("input[name='phone']");

      if (!nameInput.value && !phoneInput.value) {
        alert('Введите Ваши имя и телефон');
        nameInput.focus();
        event.preventDefault();
      } else if (!nameInput.value) {
        alert('Введите Ваше имя');
        nameInput.focus();
        event.preventDefault();
      } else if (!phoneInput.value) {
        alert('Введите Ваш телефон');
        phoneInput.focus();
        event.preventDefault();
      }
    });
  });
}

export default validateOrderForm