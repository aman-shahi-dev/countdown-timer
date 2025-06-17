const startBtn = document.getElementById('startBtn')

const inputTime = document.getElementById('inputTime')

const result = document.getElementById('result')

function startTimer(){

    let valueInSeconds = Number(inputTime.value)
    
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
        return // agar yeh nahi likhoge toh negative aur zero ka if conditions dono chalega aur dono statements print honge
    }

    const timer = setInterval( function(){

        valueInSeconds-=1

        result.style.zIndex = '1111';
        result.innerText = valueInSeconds

        if ( valueInSeconds <=0 ){
            result.style.fontSize = '2rem'
            result.style.zIndex = '1111';
            result.innerText = `Time's Up ⏰`
            clearInterval(timer)
        }

    }, 1 * 1000 )

}

startBtn.addEventListener('click',startTimer)
