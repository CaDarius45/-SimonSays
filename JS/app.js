/*------------------------------------variables-----------------------------------------*/
let end,difficult,simonsList,round, seconds
/*-----------------------------------------querySelector--------------------------------*/
function getOne(selecto) {return document.querySelector(selecto)}
function getAll(getAll) {return document.querySelectorAll(getAll)}
function getId(getId) {return document.getElementById(getId)}
/*-------------------------------------screeen html elements--------------------------------*/
const gameScreen = getOne('#gamePage')
/*------------------------------------Button html elements-------------------------------------*/
const start = getOne('#startButton')
const reset = getOne('#resetButton')
/*-------------------------------------------other html elements----------------------------------*/
const code = getAll('.code')
const combos = getAll('.combo')
const checks = getAll('.check')
const masterCode = getAll('.masterCode')
const roundNum = getOne('#roundNum')

const c1 = getId('c1');
const c2 = getId('c2');
const c3 = getId('c3');
const c4 = getId('c4');
/*---------------------------------event listeners for the buttons------------------------------------------*/
start.addEventListener('click',startGame)
reset.addEventListener('click',playAgain)

code.forEach(element => {
    element.addEventListener('click', checkList)
});

function clickButton() {
    document.querySelector('#c1').click();
    console.log(1)
}

// Simulate a click every second
//setInterval(clickButton, 1000);

createGame();
/*-------------------------------- Functions --------------------------------*/
function createGame(){
    difficult = 4
    simonsList = []
    round = 0
    seconds = 0
    end = false
}
 
function startGame(){
    
    round++
    roundNum.textContent = round
    simonPick()
    displayList()
    
} 

//Picks a random color and adds it to the list
function simonPick() {
    simonsList.push(code[Math.floor(Math.random()*code.length)].id) 
    // console.log(simonsList)
}

function checkList(event) {
    const pick = event.target.id

    console.log(event.target.id);

    if (event.target.parentNode.id == `try${roundNum}`) {
        event.target.style.backgroundColor = select;
        tests.splice(hold,1,select)
    }
}

// play animations
function glowwing(elm,glo) {
    // Apply the animation class
    elm.classList.add(`${glo}`);

    // Listen for the end of the animation
    elm.addEventListener('animationend', function() {
      // Remove the animation class after the animation ends
      elm.classList.remove(`${glo}`);
    }); // Ensures the event listener is triggered only once
}

//High lights simons list of colors
function displayList() {


    const time = setInterval(() => {
        seconds++;
        if (seconds > round){
            console.log('roundStop');
            seconds = 0;
            clearInterval(time);
        }
        else{
            switch (simonsList[seconds-1]) {
                case 'c1':
                     console.log('c1')
                     glowwing(c1,'glowing-red');
                    break;
                 case 'c2':
                     console.log('c2')
                     glowwing(c2,'glowing-blue');
                      break;
                case 'c3':
                    console.log('c3')
                    glowwing(c3,'glowing-green');
                     break;
                case 'c4':
                    console.log('c4')
                    glowwing(c4,'glowing-yellow');
                    break;
                default:
                    break;
            }  
        } 
    }, 1000); 
}

function checkResults(){
   
}

function playAgain(){
    startGame()
}
