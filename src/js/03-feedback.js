import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-from-state';



const refs = {
    form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function getLsData() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
};

function onFormInput(e) {
    const formData = getLsData();
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};


function fillForm() {
    const formData = getLsData();

    for (let key in formData) {
        refs.form.elements[key].value = formData[key];
    }
}

fillForm();

function onFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);


    // const myFormData = new FormData(event.target);

    // const formDataObj = {};
    // myFormData.forEach((value, key) => (formDataObj[key] = value));
    // console.log(formDataObj);


    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
};


