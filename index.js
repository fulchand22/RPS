let user_choice ;
let computer_choice ;

let result = document.getElementById("result");
let screen = document.getElementById("screen");

let isWinner = false

function playComputer(){
    let num = Math.random()
   if(num < 0.3){
    computer_choice = "rock"
   }else if (num<0.6){
    computer_choice = "paper"
   }else{
       computer_choice = "scissor"
    }
    console.log(computer_choice);

}


function playRock(){
    user_choice = "rock"
     playComputer()

     if(computer_choice == "rock"){
        result.innerText = "Both Are selected Rock , Game Tied !!"
     }else  if(computer_choice == "paper"){
        result.innerText = "You selected Rock and Computer Selected Paper so Computer Wins the Game !!"
     }else{
        result.innerText = "You selected Rock and Computer Selected Scissor so You Wins the Game !!"
        isWinner = "true"

         duration = 2 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
     }
    screen.style.display="flex"    
}

function playScissor(){
    user_choice = "paper"
         playComputer()
    if(computer_choice == "paper"){
        result.innerText = "Both Are selected Paper , Game Tied !!"
     }else  if(computer_choice == "scissor"){
        result.innerText = "You selected Paper and Computer Selected Scissor so Computer Wins the Game !!"
     }else{
        result.innerText = "You selected Paper and Computer Selected Rock so You Wins the Game !!"
        isWinner = "true"

         duration = 2 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
     }
    screen.style.display="flex"  
     

}

function playPaper(){
    user_choice = "scissor"
         playComputer()
            if(computer_choice == "scissor"){
        result.innerText = "Both Are selected Scissor , Game Tied !!"
     }else  if(computer_choice == "Rock"){
        result.innerText = "You selected Scissor and Computer Selected Rock so Computer Wins the Game !!"
     }else{
        result.innerText = "You selected Scissor and Computer Selected Paper so You Wins the Game !!"
        isWinner = "true"

         duration = 2 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
     }
    screen.style.display="flex"    

}

function playAgain(){
    screen.style.display = "none"
}







