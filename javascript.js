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