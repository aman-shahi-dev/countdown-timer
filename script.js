const tickingAudio = document.getElementById('ticking')

const stopAudio = document.getElementById('stop')



const countdownStartBtn = document.getElementById('countdownStartBtn')

const startBtn = document.getElementById('startBtn')

const stopBtn = document.getElementById('stopBtn')

const resetBtn = document.getElementById('resetBtn')

const inputTime = document.getElementById('inputTime')

const result = document.getElementById('result')

let timer = null

let isRunning = false

let valueInSeconds = 0

startBtn.disabled = true

function startTimer(){

    result.innerText = `Clock's ticking ⏰`;
    result.style.fontSize='1.6rem'
    result.style.zIndex = '1111';
    
    valueInSeconds = Number(inputTime.value)
    
    if ( isNaN(valueInSeconds) || !Number.isFinite(valueInSeconds) || inputTime.value.trim() === "" ) {
        result.innerText = `Please enter a valid time`; 
        result.style.zIndex = '1111';
        result.style.fontSize='1.2rem'
        return;
    }

    if ( valueInSeconds <= 0 ){
        result.innerText = `Please enter a time > 0`;
        result.style.zIndex = '1111';
        result.style.fontSize='1.2rem'
        return
    }

    clearInterval(timer)

    countdownStartBtn.disabled = true 
    
    timer = setInterval( function(){

        isRunning = true

        valueInSeconds-=1

        result.style.zIndex = '1111';
        result.style.fontSize = '5rem'
        result.innerText = valueInSeconds

        if ( valueInSeconds > 0 ){
            tickingAudio.play()
        } else {
            result.style.fontSize = '2rem'
            result.style.zIndex = '1111';
            result.innerText = `Time's Up ⏰`
            stopAudio.play()
            isRunning = false
            clearInterval(timer)
        }

    }, 1 * 1000 )

}

countdownStartBtn.addEventListener('click',startTimer)

startBtn.addEventListener('click', () => {
    if( isRunning === false){

        if (valueInSeconds <= 0) {
            result.innerText = `Please start a new timer first ⏱️`
            result.style.fontSize = '1rem'
            result.style.zIndex = '1111'
            return
        }

        isRunning = true

        clearInterval(timer); 

        startBtn.disabled = true

        timer = setInterval( () => {
            
            valueInSeconds-=1

            result.style.zIndex = '1111';
            result.style.fontSize = '5rem'
            result.innerText = valueInSeconds

            if ( valueInSeconds > 0 ){
                tickingAudio.play()
            } else {
                result.style.fontSize = '2rem'
                result.style.zIndex = '1111';
                result.innerText = `Time's Up ⏰`
                stopAudio.play()
                isRunning = false
                clearInterval(timer)
            }

        } , 1 * 1000)
    }
})

stopBtn.addEventListener( 'click', () => {
    if(valueInSeconds > 0){
        result.style.zIndex = '1111'
        result.innerText = `Paused ⏸️ (${valueInSeconds}s left)`
        result.style.fontSize = '1.5rem'
        clearInterval(timer)
        isRunning = false
        startBtn.disabled = false
    }

})

resetBtn.addEventListener('click', () => {
            result.style.zIndex = '-1111'
            clearInterval(timer)
            inputTime.value = ''
            isRunning = false
            countdownStartBtn.disabled = false 
            startBtn.disabled = true
})
