import IMask from 'imask';

function phoneMask() {
  const phoneInput = document.getElementById('phone');

  const mask = new IMask(phoneInput, {
    mask: '+38(000)000-00-00',
  });
}

phoneMask();

export default phoneMask;
