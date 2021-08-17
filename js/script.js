// get screen value
const screen = document.getElementById('screen');

//button click events
const buttons = document.getElementsByClassName('buttons');
for (const button of buttons) {
    button.addEventListener('click', function () {
        let buttonText = button.innerText;
        if (buttonText != '=') {
            if (buttonText == 'X') {
                screen.value += '*';
            } else if (buttonText == 'AC') {
                screen.value = ' ';
            } else if (buttonText == '%') {
                screen.value = screen.value / 100;
            } else {
                screen.value += buttonText;
            }
        }
        else if (buttonText == '=') {
            screen.value = eval(screen.value);
        }

    });

    //console.log(button.innerText);
}

