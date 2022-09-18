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

// console.log button 
let consoleToggle = false
function toggleConsole() {
    if (consoleToggle === false) {consoleToggle = true}
    else {consoleToggle = false}
}

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
            calculation.operandOne = result.toString().split("")
            calculation.operator = value
            operandFill = 2
        }
    }
    if (operandFill === 1 && numbers.includes(value)) {
        calculation.operandOne.push(value)
    }
    if (operandFill === 2 && numbers.includes(value)) {
        calculation.operandTwo.push(value)
    }
    if (value === "=" && calculation.operandTwo.length <= 0) {
        if (consoleToggle === true) {
            console.log ("calculation was not filled out")
        }
        return("no")
    }
    if (value === "=" && calculation.operandTwo.length > 0) {
        operate()
        allowOperator = true
    } 
    calculationScreen.textContent = calculation.operandOne.join("") + calculation.operator + calculation.operandTwo.join("")
    return(calculation)
}

function back() {
    if (operandFill === 1) {
        if (calculation.operandOne.length === 0) {
            return
        } 
        if (calculation.operandOne.length > 0) {
            calculation.operandOne.pop()
            calculationScreen.textContent = calculation.operandOne.join("") + calculation.operator + calculation.operandTwo.join("")
        }
    }
    if (operandFill === 2) {
        if (calculation.operandTwo.length === 0) {
            calculation.operator = ""
            operandFill = 1
            allowOperator = true
            calculationScreen.textContent = calculation.operandOne.join("") + calculation.operator + calculation.operandTwo.join("")
        }
        if (calculation.operandTwo.length > 0) {
            calculation.operandTwo.pop()
            calculationScreen.textContent = calculation.operandOne.join("") + calculation.operator + calculation.operandTwo.join("")
        }
    }
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
    resultScreen.textContent = result
    if (consoleToggle === true) {console.log(result)}
}
function subtract() {
    if (+calculation.operandOne > +calculation.operandTwo) {
        result = +calculation.operandOne - +calculation.operandTwo
    }
    if (+calculation.operandOne < +calculation.operandTwo) {
        result = +calculation.operandTwo - +calculation.operandOne
    }
    calculation = {
        operandOne:[],
        operator:"",
        operandTwo:[]
    }
    operandFill = 1
    resultScreen.textContent = result
    if (consoleToggle === true) {console.log(result)}
}
function multiply() {
    result = +calculation.operandOne * +calculation.operandTwo
    calculation = {
        operandOne:[],
        operator:"",
        operandTwo:[]
    }
    operandFill = 1
    resultScreen.textContent = result
    if (consoleToggle === true) {console.log(result)}
}
function divide() {
    result = +calculation.operandOne / +calculation.operandTwo
    calculation = {
        operandOne:[],
        operator:"",
        operandTwo:[]
    }
    operandFill = 1
    resultScreen.textContent = result
    if (consoleToggle === true) {console.log(result)}
}
function clearCalculation() {
    calculation = {
        operandOne:[],
        operator:"",
        operandTwo:[]
    }
    result = 0
    operandFill = 1
    calculationScreen.textContent = calculation.operandOne.join("") + calculation.operator + calculation.operandTwo.join("")
    resultScreen.textContent = ""
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
// console.log eventlistner
buttons[1].addEventListener("click", () => toggleConsole())
// clear eventlistener 
buttons[18].addEventListener("click", () => clearCalculation())
// back eventlistener
buttons[19].addEventListener("click", () => back())