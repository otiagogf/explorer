import { Modal } from './modal.js'
// Variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit =  (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = imc(weight, height)
    const messageResult = `Seu IMC é de ${result}`

    Modal.message.innerText = messageResult
    Modal.open()
}

function imc(weight, height) {
    return (weight /((height / 100) ** 2).toFixed(2))
}