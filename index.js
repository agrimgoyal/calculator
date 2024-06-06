let display = document.getElementById("press");

function append(number) {
    if (display.innerHTML.length < 15) {
        display.innerHTML += number;
    }
}

function appendOperator(operator) {
    if (display.innerHTML.length < 15) {
        display.innerHTML += operator;
    }
}

function calculate() {
    try {
        display.innerHTML = eval(display.innerHTML).toString().slice(0, 15); 
    } catch (e) {
        display.innerHTML = 'Error';
    }
}

function clearScreen() {
    display.innerHTML = '';
}
