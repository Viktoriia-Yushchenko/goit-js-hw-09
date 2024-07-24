const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const email = form.elements.email;
const textMessage = form.elements.message;
const submit = document.querySelector('button');

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', handleFormInput);

const savedData = localStorage.getItem(storageKey);

if (savedData) {
  try {
    let parsedData = JSON.parse(savedData);
    email.value = parsedData.email || '';
    textMessage.value = parsedData.message || '';
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  } catch (error) {}
}

function handleFormInput(event) {
  formData.email = email.value.trim();
  formData.message = textMessage.value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
}
function handleFormSubmit(event) {
  event.preventDefault();
  if (!email.value.trim() || !textMessage.value.trim()) {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem(storageKey);
  formData.email = '';
  formData.message = '';
  form.reset();
}
