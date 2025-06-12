// Imports
import { Modal } from './modal.js'
import { AlertError } from './alertError.js'
import { calculateIMC, notANumber } from './utils.js'

// Variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit =  (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNaN = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNaN) {
        AlertError.open()
        return;
    }

    hideErrorInput() 

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const messageResult = `Seu IMC é de ${result}`

    Modal.message.innerText = messageResult
    Modal.open()
}