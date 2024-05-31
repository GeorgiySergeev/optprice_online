const handleFormSubmit = async event => {
  event.stopPropagation();
  event.preventDefault();

  const form = event.target;
  const submit = form.querySelector('.submit');
  const data = new FormData();
  const files = form.querySelectorAll('input[type=file]');

  // Генерация уникального номера заказа
  const orderNumber = '_' + Date.now();
  const name = form.querySelector('[name="name"]').value;

  // submit.value = 'Отправка...';
  form
    .querySelectorAll('input, textarea')
    .forEach(input => input.setAttribute('disabled', ''));

  data.append('Имя', form.querySelector('[name="name"]').value);
  data.append('Телефон', form.querySelector('[name="phone"]').value);
  data.append('Количество', form.querySelector('[name="quantity"]').value);

  // Добавляем номер заказа в FormData
  data.append('Номер заказа', orderNumber);

  files.forEach(file => {
    Array.from(file.files).forEach(value => {
      data.append(file.name, value);
    });
  });



  try {
    const response = await fetch('../php-middleware.php', {
      method: 'POST',
      body: data,
      cache: 'no-cache',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();

    // Перенаправляем на страницу thanks.html с номером заказа
    window.location.href = `thanks.html?order_number=${encodeURIComponent(
      orderNumber
    )}&name=${encodeURIComponent(name)}`;
  } catch (error) {
    console.error('Error: ' + error.message);
  } finally {
    console.log('Complete');
    form.reset();
  }
};

// Добавим слушатель события submit к форме
document.addEventListener('DOMContentLoaded', () => {
  const telegramForm = document.querySelector('.telegram-form');
  if (telegramForm) {
    telegramForm.addEventListener('submit', handleFormSubmit);
  }
});


export default handleFormSubmit