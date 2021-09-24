let ans = document.querySelector('p');
let buttonRock = document.querySelector('#ro');
let buttonPap = document.querySelector('#pap');
let buttonScis = document.querySelector('#scis');
let playerPoint = document.querySelector('#player');
let cmpPoint = document.querySelector('#cmp');
const lets = document.querySelector('#lets');
const points = document.querySelector('#points');
const playAgain = document.querySelector('#playAgain');

const history=document.querySelector('article')

let computerChoice = ['Rock', 'Paper', 'Scissor'];
let values = '';
let computerChoi = '';
let userPoints = 0;
let ComputerPoints = 0;
let point = '';
let counter = 0;

function starter() {
    lets.remove();
    points.addEventListener('change', function () {
        points.disabled = false;
        playAgain.disabled = true;
        point = 0;
        point = parseInt(points.value);
        userPoints = 0;
        ComputerPoints = 0;
        counter = 0;
        buttonPap.disabled = false;
        buttonRock.disabled = false;;
        buttonScis.disabled = false;
        computerChoi = ''
        values = '';
        points.disabled = true;
        
    })
}

lets.addEventListener('click', function () {
    const show = lets.nextElementSibling
    show.classList.add('starter');
    show.style.backgroundColor = '#0b0c0c';
    document.body.style.backgroundColor = 'rgb(1, 45, 30)';
    buttonPap.disabled = true;
    buttonRock.disabled = true;
    buttonScis.disabled = true;
    playAgain.disabled = true;
    starter();
})

buttonRock.addEventListener('click', function (e) {
    values = buttonRock.textContent;
    computerChoi = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    
    animation()
    if (computerChoi === values) {
        ans.textContent = 'TIE!';
        counter += 1

    }
    else if (computerChoi === 'Paper') {
        ans.textContent = `Computer chose ${computerChoi} and Computer Wins!`;
        ComputerPoints += 1;
        cmpPoint.textContent = ComputerPoints
        counter += 1;
        console.log(computerChoi, values)
    }
    else {
        ans.textContent = `Computer chose ${computerChoi} and Player Wins!`
        userPoints += 1;
        playerPoint.textContent = userPoints;
        counter += 1;
        console.log(computerChoi, values);

    }
    if (counter === point) {
        animationOff()
        DecideWinner(userPoints, ComputerPoints);
    }
    

})

buttonPap.addEventListener('click', function (e) {
    values = buttonPap.textContent;
    computerChoi = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    animation()
    if (computerChoi === values) {
        ans.textContent = 'TIE!';
        counter += 1;
    }
    else if (computerChoi === 'Scissor') {
        ans.textContent = `Computer chose ${computerChoi} and Computer Wins!`;
        ComputerPoints += 1;
        cmpPoint.textContent = ComputerPoints;
        counter += 1;
        animationOff()

    }
    else {
        ans.textContent = `Computer chose ${computerChoi} and Player Wins!`;
        userPoints += 1;
        playerPoint.textContent = userPoints;
        counter += 1;
    }
    if (counter === point) {
        animationOff()
        DecideWinner(userPoints, ComputerPoints);
    }
})

buttonScis.addEventListener('click', function () {
    values = buttonScis.textContent;
    computerChoi = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        
    animation()
    if (computerChoi === values) {
        ans.textContent = 'TIE!';
        counter += 1;
    }
    else if (computerChoi === 'Paper') {
        
        ans.textContent = `Computer chose ${computerChoi} and Player Wins!`;
        userPoints += 1;
        playerPoint.textContent = userPoints;
        counter += 1;
    }
    else {
        ans.textContent = `Computer chose ${computerChoi} and Computer Wins!`;
        ComputerPoints += 1;
        cmpPoint.textContent = ComputerPoints;
        counter += 1;
        }
    if (counter === point) {
        animationOff()
        DecideWinner(userPoints, ComputerPoints);
    }
})  

function DecideWinner(userPoints, ComputerPoints) {
    playAgain.disabled = false;
    if (userPoints === ComputerPoints) {
        ans.textContent = 'The game is TIED!';
        buttonPap.disabled = true;
        buttonRock.disabled = true;
        buttonScis.disabled = true;
    }
    else if (userPoints > ComputerPoints) {
        ans.textContent = 'Player Wins!';
        buttonPap.disabled = true;
        buttonRock.disabled = true;
        buttonScis.disabled = true;
    }
    else if(userPoints < ComputerPoints) {
        ans.textContent = 'Computer Wins!'
        buttonPap.disabled = true;
        buttonRock.disabled =true;
        buttonScis.disabled = true;
    }
}

playAgain.addEventListener('click', function () {
    cmpPoint.textContent = 0;
    playerPoint.textContent = 0;
    ans.textContent = '';
    points.disabled = false;
    starter();
})

function animation() {
    ans.style.animation='ani 1.5s ease-in-out forwards '
}
function animationOff() {
    ans.style.animation=''
}