let delayInSeconds = 3;


function generateRandomNumberWithDelay(delayInSeconds) {
    
    let countdown = delayInSeconds;
    let countdownInterval = setInterval(function() {
        console.log("Time remaining:", countdown, "seconds");
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            setTimeout(function() {
                let randomNumber = Math.floor(Math.random() * 100); 
                console.log("Random number generated:", randomNumber);
            }, delayInSeconds * 1000);
        }
    }, 1000);
}

generateRandomNumberWithDelay(delayInSeconds);
