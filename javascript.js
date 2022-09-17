// button pushing
const buttons = document.querySelectorAll(".button")

buttons.forEach((button) => {
    button.addEventListener("click", function(){
        this.style.backgroundColor = "rgb(255, 118, 141)";
        setTimeout(() => {
            this.style.backgroundColor = "pink"}
            ,100);       
    })
})

// create calculation function
let calculation = {
        operandOne:[],
        operator:"",
        operandTwo:[]
    }
let operandFill = 1
let allowOperator = true
let result;

function createCalculation(value) {

    const operators = ["+", "-", "*", "/"]
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
    if (operators.includes(value)) {
        if (allowOperator === true) {
            calculation.operator = value;
            operandFill = 2
            allowOperator = false
        }
        if (calculation.operandTwo.length > 0) {
            operate()
        }
    }
    if (operandFill === 1 && numbers.includes(value)) {
        calculation.operandOne.push(value)
    }
    if (operandFill === 2 && numbers.includes(value)) {
        calculation.operandTwo.push(value)
    }
    if (value === "=") {
        operate()
    }
    return(calculation)
}
// operate function will call another function based on the operator
function operate() {
    if (calculation.operator === "+") {
        add()
    }
    if (calculation.operator === "-") {
        subtract()
    }
    if (calculation.operator === "*") {
        multiply()
    }
    if (calculation.operator === "/") {
        divide()
    }
}
function add() {
    result = +calculation.operandOne + +calculation.operandTwo
    calculation = {
        operandOne:[],
        operator:"",
        operandTwo:[]
    }
    operandFill = 1
    allowOperator = true
}
function subtract() {
    if (calculation.operandOne > calculation.operandTwo) {
        result = +calculation.operandOne - +calculation.operandTwo
    }
    if (calculation.operandOne < calculation.operandTwo) {
        result = +calculation.operandTwo - +calculation.operandOne
    }
    calculation = {
        operandOne:[],
        operator:"",
        operandTwo:[]
    }
    operandFill = 1
    allowOperator = true
}