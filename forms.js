const form = document.querySelector('[data-demo-form]');
const confirmation = form.nextElementSibling;
const feetPhoto = form.querySelector('#feet-photo');

feetPhoto?.addEventListener('change', () => {
  const file = feetPhoto.files[0];
  const invalid = file && !file.type.startsWith('image/');
  feetPhoto.setCustomValidity(invalid ? 'Choose an image for the feet pic.' : '');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  form.hidden = true;
  confirmation.hidden = false;
  confirmation.focus();
});

confirmation.querySelector('[data-reset]').addEventListener('click', () => {
  confirmation.hidden = true;
  form.hidden = false;
  form.elements.name.focus();
});
