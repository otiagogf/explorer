//default import
import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    spanMinutes,
    spanSeconds
} from './elements.js'

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet
})
const timer = Timer({
    spanMinutes,
    spanSeconds, 
    resetControls : controls.reset
})

const sound = Sound()

Events({ controls, timer, sound })

