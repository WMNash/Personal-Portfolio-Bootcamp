// Assigning value to JS
let btnDOM = document.querySelector('.inputField-btn')
let inputFieldDOM = document.querySelector('.inputField')

btnDOM.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
        btnDOM.click();
    }
})





function handleMe()