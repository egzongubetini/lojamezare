// Se pari i krijojme variablat per lojen
let lojtari1score = 0
let lojtari2score = 0
let lojtari1Turn = true




//Prompti per inputin e emrave te lojtareve
lojtaripare.name = prompt("Lojtari i par : ");
lojtaridyte.name = prompt("Lojtari i dyt : ");
alert("Loje te mbare");
 







// Variablat 
const lojtari1 = document.getElementById("lojtari1")
const lojtari2 = document.getElementById("lojtari2")
const lojtari1tabela = document.getElementById("lojtari1tabela")
const lojtari2tabela = document.getElementById("lojtari2tabela")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

/* Rolli. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (lojtari1Turn) {
        lojtari1score += randomNumber
        lojtari1tabela.textContent = lojtari1score
        lojtari1.textContent = randomNumber
        lojtari1.classList.remove("active")
        lojtari2.classList.add("active")
        message.textContent = "Rradha e " + lojtaridyte.name
    } else {
        lojtari2score += randomNumber
        lojtari2tabela.textContent = lojtari2score
        lojtari2.textContent = randomNumber
        lojtari2.classList.remove("active")
        lojtari1.classList.add("active")
        message.textContent = "Rradha e " + lojtaripare.name
    }
    
    if (lojtari1score >= 20) {
        message.textContent = lojtaripare.name + " e fitoi 🥳"
        showResetButton()
    }  else if (lojtari2score >= 20) {
        message.textContent = lojtaridyte.name + " e fitoi 🎉"
        showResetButton()
    }
    lojtari1Turn = !lojtari1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
     
    lojtari1score = 0
    lojtari2score = 0
    lojtari1Turn = true
    lojtari1tabela.textContent = 0
    lojtari2tabela.textContent = 0
    lojtari1.textContent = "-"
    lojtari2.textContent = "-"
    message.textContent = "Rradha e " + lojtaripare.name
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    lojtari2.classList.remove("active")
    lojtari1.classList.add("active")
}
