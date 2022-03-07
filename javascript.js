const itemOutput = document.querySelector('#item-output');
const itemOutput2 = document.querySelector('#item-output2');
const itemEquals = document.querySelector('#item-equals');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#item-clear');
const back = document.querySelector('#item-back');
const dot = document.querySelector('#item-dot');

let operator = '';
let previousNumber = '';
let currentNumber = '';
let sum = '';

const operate = function(operator, previousNumber ,currentNumber) {
    switch (operator) {
        case "+":
            return previousNumber + currentNumber;
        case "-":
            return previousNumber - currentNumber;
        case "*":
            return previousNumber * currentNumber;
        case "/":
            return previousNumber / currentNumber;
    };
};

itemOutput.onkeypress = function (e) {
    if (e.keyCode === 46 && this.value.split('.').length >= 2) {
        dot.disabled = true;
        return false;
    } else if (e.charCode > 31 && (e.charCode < 46 || e.charCode > 57 || e.charCode === 47)) {
        return false;
    }
}

function input(button) {
    let x = button.value;
    let y = itemOutput;
    y.value += x;
    operators.forEach(el => el.disabled = false);
    if (y.value.split('.').length >= 2) {
        dot.disabled = true;
    } else {
        dot.disabled = false;
    }

}

function storeOperator(value){
    if (previousNumber == '' && currentNumber == '') {
        previousNumber = Number(itemOutput.value);
        operator = value;
        itemOutput2.value = `${previousNumber} ${operator}`;
        itemOutput.value = ``;
    } else if (previousNumber != '' && currentNumber == '') {
        currentNumber = Number(itemOutput.value);
        sum = Math.round(Number(operate(operator, previousNumber, currentNumber)) * 100) / 100;
        previousNumber = sum;
        operator = value;
        itemOutput2.value = `${previousNumber} ${operator}`;
        itemOutput.value = ``;
        currentNumber = '';
        
    }
    // } else if (previousNumber != '' && currentNumber != '') {
    //     itemOutput.value = Math.round(Number(operate(operator, previousNumber, currentNumber)) * 100) / 100;
    //     currentNumber = Number(itemOutput.value);
    // }
    operators.forEach(el => el.disabled = true);
}

itemEquals.addEventListener("click", function() {
    currentNumber = Number(itemOutput.value);
    if (operator == '/' && currentNumber == '0') {
        itemOutput.value = `NOPE..`;
    } else {
        itemOutput.value = Math.round(Number(operate(operator, previousNumber, currentNumber)) * 100) / 100;
        itemOutput2.value = `${previousNumber} ${operator} ${currentNumber} =`;
        previousNumber = '';
        currentNumber = '';
        
    }
});

clear.addEventListener("click", function() {
    itemOutput.value = '';
    itemOutput2.value = '';
    operator = '';
    previousNumber = '';
    currentNumber = '';
    operators.forEach(el => el.disabled = false);
    dot.disabled = false;
});

back.addEventListener("click", function() {
    itemOutput.value = itemOutput.value.slice(0, -1);
});


/*

    make 2 outputs
    the lower one will output the current
    the upper one will output the previous, operator and sum

*/
