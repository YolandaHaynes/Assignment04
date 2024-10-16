function calculate (num1, num2, operation){
    switch (operation){
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
        default:
            return "Invalid operation";
    }
}

do {
    let num1 = parseInt(prompt("Enter the first number"));
    if(isNaN(num1)){
        alert("Invalid number");
        continue;
    }
    let num2 = parseInt(prompt("Enter the second number"));
    if(isNaN(num2)){
        alert("Invalid number");
        continue;
    }

    let operation = prompt("Enter the operation (add, subtract, multiply, divide)");
    if(operation !== "add" && operation !== "subtract" && operation !== "multiply" && operation !== "divide"){
        alert("Invalid operation");
        continue;
    }

    results = calculate(num1, num2, operation);

    alert(`The result is ${results}`);

} while (confirm("Do you want to continue?"));