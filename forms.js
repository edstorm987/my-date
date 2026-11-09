const form = document.querySelector('[data-demo-form]');
const confirmation = form.nextElementSibling;

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
