
function clearDisplay() {
    document.querySelector('.display-input').value = '0';
}

function append(value) {
    let displayInput = document.querySelector('.display-input');
    
    displayInput.value = displayInput.value === '0' ? value : displayInput.value + value;
}

function calculate() {
    let displayInput = document.querySelector('.display-input');
    
    try {
        let result = eval(displayInput.value);

        displayInput.value = result;
    } catch (error) {
        displayInput.value = 'Error';
    }
}

