// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    console.log(e.key)
    if(e.key == 'Enter') {
        handleResetClick()
    }
})

// funções
function handleTryClick(event) {
    event.preventDefault() // não enviará o form

    const inputTentativaNumber = document.querySelector("#inputTentativaNumber")

    if (Number(inputTentativaNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
    }

    inputTentativaNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}