//button click events
const buttons = document.getElementsByClassName('buttons')
for (const button of buttons) {
    button.addEventListener('click', function () {
        console.log(button.innerText);
    })
}
