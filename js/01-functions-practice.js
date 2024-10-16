//STEP 1
function halfNumber (number) {
    let result = number / 2;
    console.log(`Half of ${number} is ${result}`);
};
halfNumber(10);

//STEP 2
function squareNumber (number) {
    let result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}`);
};
squareNumber(3);

//STEP 3
function percentOf (num1, num2) {
    let result = (num1 / num2) * 100;
    console.log(`${num1} is ${result}% of ${num2}`);
};
percentOf(2, 4);

//STEP 4
function findModulus (num1, num2) {
    let result = num2 % num1;
    console.log(`${result} is the modulus of ${num1} and ${num2}`);
};
findModulus(4, 10);
