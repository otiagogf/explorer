import Sound from './sounds.js'
export default function Timer( {
    spanMinutes,
    spanSeconds, 
    resetControls
} ) {

    let timerTimeOut    
    let minutes = Number(spanMinutes.textContent)

    function updateTimerDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 :seconds
        spanMinutes.textContent = String(newMinutes).padStart(2, "0")
        spanSeconds.textContent = String(seconds).padStart(2, "0")
    }
    
    function reset() {
        updateTimerDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }
    
    function countDown() {
        timerTimeOut = setTimeout(function() {
            let seconds = Number(spanSeconds.textContent)
            let minutes = Number(spanMinutes.textContent)
            let isFinished = minutes <= 0 && seconds <= 0
            
            updateTimerDisplay(minutes, 0)
    
            if(isFinished) {
                resetControls()
                updateTimerDisplay()
                Sound().timeEnd()
                return
            }
    
            if(seconds <= 0) {
                seconds = 60
                --minutes
            }
            
            updateTimerDisplay(minutes, String(seconds -1))
    
            countDown()
        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold() {        
        clearTimeout(timerTimeOut)
    }

    return {
        countDown,
        reset,
        updateTimerDisplay,
        updateMinutes,
        hold
    }
}