var compareNumbers = (firstNum, secondNum) => {
    if (firstNum < secondNum) {
        console.log(firstNum + ' ' + 'Это меньше');
    } else {
        console.log(secondNum + ' ' + 'Это меньше');
    }
}
compareNumbers(6, 5);

var userInput = prompt('Введите текст');
var getTextLength = (inputData) => {
    console.log(inputData.length);
}
getTextLength(userInput);

var calculate = (firstNum, secondNum, operator) => {
    if (operator === '+') {
        console.log(firstNum + secondNum);
    } else if (operator === '-') {
        console.log(firstNum - secondNum);
    } else if (operator === '*') {
        console.log(firstNum * secondNum);
    } else if (operator === '/') {
        if (secondNum === 0) {
            console.log('error');
        } else {
            console.log(firstNum / secondNum);
        }
    }
}
calculate(10, 2, '+');
