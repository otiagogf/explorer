let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonSet = document.querySelector('.set')
let buttonSoundOn = document.querySelector('button.sound-on')
let buttonSoundOff = document.querySelector('button.sound-off')
let spanMinutes = document.querySelector('span.minutes')
let spanSeconds = document.querySelector('span.seconds')
let minutes = Number(spanMinutes.textContent)
let timerTimeOut


function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds) {
    spanMinutes.textContent = String(minutes).padStart(2, "0")
    spanSeconds.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countDown() {
    timerTimeOut = setTimeout(function() {
        let seconds = Number(spanSeconds.textContent)
        let minutes = Number(spanMinutes.textContent)
        
        updateTimerDisplay(minutes, 0)

        if(minutes <= 0) {
            resetControls()
            return
        }

        if(seconds <= 0) {
            seconds = 4
            --minutes
        }
        
        updateTimerDisplay(minutes, String(seconds -1))

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
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
    resetControls()
    resetTimer()
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
    let newMinutes = prompt('Quantos minutos?') || 0
    if (!newMinutes) {
        resetTimer()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0) 
})