/* 

    formatos de criar e atribuir função a um evento * 

        form.onsubmit = function() {}

        form.onsubmit = (event) => {
            event.preventDefault()

            const weight = inputWeight.value
            const height = inputHeight.value

            console.log(weight, height)
        }

        form.onsubmit = handleSubmit()
        function handleSubmit() {
            event.preventDefault()

            const weight = inputWeight.value
            const height = inputHeight.value

            console.log(weight, height)
        }
*/

export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event) {
    if(event.key === 'Escape') {
        Modal.close()
    }
}