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

//screen variables
const resultScreen = document.querySelector("#result")
const calculationScreen = document.querySelector("#calculation")

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
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
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
    calculationScreen.textContent = calculation.operandOne.join("") + calculation.operator + calculation.operandTwo.join("")
    return(calculation)
}
// operate function will call another function based on the operator
function operate() {
    calculation.operandOne = calculation.operandOne.join("")
    calculation.operandTwo = calculation.operandTwo.join("")
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
    resultScreen.textContent = result
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
    resultScreen.textContent = result
}
function multiply() {
    result = +calculation.operandOne * +calculation.operandTwo
    calculation = {
        operandOne:[],
        operator:"",
        operandTwo:[]
    }
    operandFill = 1
    allowOperator = true
    resultScreen.textContent = result
}
function divide() {
    result = +calculation.operandOne / +calculation.operandTwo
    calculation = {
        operandOne:[],
        operator:"",
        operandTwo:[]
    }
    operandFill = 1
    allowOperator = true
    resultScreen.textContent = result
}

// the 15 eventlisteners
buttons[3].addEventListener("click", () => createCalculation("+"))
buttons[4].addEventListener("click", () => createCalculation("-"))
buttons[5].addEventListener("click", () => createCalculation("*"))
buttons[6].addEventListener("click", () => createCalculation("/"))
buttons[7].addEventListener("click", () => createCalculation("="))

buttons[8].addEventListener("click", () => createCalculation("0"))
buttons[9].addEventListener("click", () => createCalculation("1"))
buttons[10].addEventListener("click", () => createCalculation("2"))
buttons[11].addEventListener("click", () => createCalculation("3"))
buttons[12].addEventListener("click", () => createCalculation("4"))
buttons[13].addEventListener("click", () => createCalculation("5"))
buttons[14].addEventListener("click", () => createCalculation("6"))
buttons[15].addEventListener("click", () => createCalculation("7"))
buttons[16].addEventListener("click", () => createCalculation("8"))
buttons[17].addEventListener("click", () => createCalculation("9"))
// decimal eventlistener
buttons[2].addEventListener("click", () => createCalculation("."))