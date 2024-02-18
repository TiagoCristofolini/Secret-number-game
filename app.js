let drawnNumers = [];
let maxNumber = 10;
let secretNumber = createNumber ();
let tentativas = 1;

function textOnScreen (tag, texto){
     let campo = document.querySelector (tag);
     campo.innerHTML = texto;
     responsiveVoice.speak (texto, "UK English Female", {rate: 1.2} );
 }
function firstMessage() {
    textOnScreen ("h1", "Secret number game");
    textOnScreen ("p","Type a number between 1 and 10");
}
    firstMessage();
 

function checkGuess () {
     let guess = document.querySelector("input").value;
    
if (guess == secretNumber) {
         textOnScreen ("h1", "You've got it!");
         let differenceAttempts = tentativas > 1 ? "attempts" : "attempt";
         let message = `You've found out the secret number with ${tentativas} ${differenceAttempts} !!`; 
         textOnScreen ("p", message);
         document.getElementById ("restart").removeAttribute ("disabled");

}else {
         if (guess > secretNumber){ 
            textOnScreen ("p", "The secret number is lower!");
}else {
        textOnScreen ("p", "The secret number is higher!");
     } tentativas ++;
     clearScreen();
 }  
 }


function createNumber () {
    let rightNumber = parseInt ((Math.random() * maxNumber + 1));
    let numbersIn = drawnNumers.length;

if (numbersIn == maxNumber){
    drawnNumers = [];
}



if (drawnNumers.includes (rightNumber)) {
    return createNumber ();
}else {
    drawnNumers.push (rightNumber);
    console.log (drawnNumers);
    return rightNumber;
}
}


function clearScreen() {
    guess = document.querySelector("input");
    guess.value = "";
}


function restartGame() {
    secretNumber = createNumber();
    clearScreen();
    tentativas = 1;
    firstMessage ();
    document.getElementById ("reiniciar").setAttribute ("disabled", true)
   }
   

