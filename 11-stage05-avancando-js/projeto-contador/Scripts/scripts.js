let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonSet = document.querySelector('.set')
let buttonSoundOn = document.querySelector('button.sound-on')
let buttonSoundOff = document.querySelector('button.sound-off')
let minutes
let spanMinutes = document.querySelector('.span.minutes')
let spanSeconds = document.querySelector('.span.seconds')


function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
}

function countDown() {
    setTimeout(function() {
        let seconds = Number(spanSeconds.textContent)
        let minutes = Number(spanMinutes.textContent)
        
        spanSeconds.textContent = "00"

        if(minutes <= 0) {
            resetControls()

            return
        }

        if(seconds <= 0) {
            seconds = 60
            spanMinutes.textContent = String(minutes -1).padStart(2, '0')
        }
        
        spanSeconds.textContent = String(seconds - 1).padStart(2, '0')

        countDown()
    }, 1000)
}

buttonPlay.addEventListener('click', function () {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

    countDown()
})

buttonPause.addEventListener('click', function () {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
})

buttonStop.addEventListener('click', function () {
    resetControls()
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
    minutes = prompt('Quantos minutos?')
    spanMinutes.textContent = String(minutes).padStart(2, "0")
})