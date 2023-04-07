// Assigning value to JS
let btnDOM = document.querySelector('.inputField-btn')


btnDOM.addEventListener('click', (event) => {
    console.log(event);
})



document.addEventListener('keypress', (event) => {
    let keyCode = event.key ? event.key : event.which;

    if (keyCode === 13) {
        btnDOM.click()
    }
})