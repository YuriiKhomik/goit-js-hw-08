import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-from-state';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textArea: document.querySelector('.feedback-form textarea'),
    emailInput: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};


function fillForm() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    const parsedFormData = JSON.parse(savedFormData);

    if (savedFormData) {
        refs.emailInput.value = parsedFormData.email;
        refs.textArea.value = parsedFormData.message;
    }
}

fillForm();

function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();

    const savedFormData = localStorage.getItem(STORAGE_KEY);
    const parsedFormData = JSON.parse(savedFormData);
    
    console.log(parsedFormData);

    localStorage.removeItem(STORAGE_KEY);
};


