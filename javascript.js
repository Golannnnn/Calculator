const itemOutput = document.querySelector('#item-output');
const itemEquals = document.querySelector('#item-equals');

const operate = function(operator, num1 ,num2) {
    switch (operator) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
    };
};

function input(button) {
    let x = button.value;
    let y = itemOutput;
    y.value += x;
}

function storeOperator(value){
    operator = value;
    num1 = Number(itemOutput.value);
    itemOutput.value = " ";
}

itemEquals.addEventListener("click", function() {
    num2 = Number(itemOutput.value);
    itemOutput.value = operate(operator, num1, num2);
});


