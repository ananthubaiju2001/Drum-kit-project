var drumClick = document.getElementsByClassName('drum');

// Function to play the sound
function playSound(selector) {
    switch (selector) {
        case 'w':
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case 'a':
            var audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        case 's':
            var audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
        case 'd':
            var audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
        case 'j':
            var audio5 = new Audio("sounds/snare.mp3");
            audio5.play();
            break;
        case 'k':
            var audio6 = new Audio("sounds/crash.mp3");
            audio6.play();
            break;
        case 'l':
            var audio7 = new Audio("sounds/kick-bass.mp3");
            audio7.play();
            break;
        default:
            alert("Press any drum key for sound");
            break;
    }
}

// Add click event listener 
for (var i = 0; i < drumClick.length; i++) {
    drumClick[i].addEventListener('click', function() {
        var selector = this.innerHTML.toLowerCase(); 
        playSound(selector);
        buttonAnimation(selector); 
    });
}

// Add key press event listener
document.addEventListener('keydown', function(event) {
    var keyPressed = event.key.toLowerCase();
    playSound(keyPressed);
    buttonAnimation(keyPressed); 
});

// Function to add an animation
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
