const formelement = document.querySelector('form')
formelement.addEventListener('submit', validateForm)
function validateForm(event) {
    const { email, password } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені!");
    } else {
        const sabmitObject = {
            email: email.value,
            password: email.value,
      }
    }
    console.log(sabmitObject);
     event.currentTarget.reset();
}