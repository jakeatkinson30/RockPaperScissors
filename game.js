
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock') {
        return userInput;
    } else if (userInput === 'paper') {
        return userInput;
    } else if (userInput === 'scissors') {
        return userInput;
    } else {
        return 'Please enter a valid input: rock, paper or scissors.';
    }
}

const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1: 
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        case 3: 
            return '';
            break;
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie.'; 
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'You won!';
        } else {
            return 'The computer won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'You won!';
        } else {
            return 'The computer won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You won!';
        } else {
            return 'The computer won!';
        }
    }
    // if (userChoice === '') {
    //     document.getElementById('computerThrowImage').innerHTML = '';
    //     document.getElementById('bothThrows').innerHTML = 'Please enter a valid throw.'
    // }
}

let userScore = 0;
let computerScore = 0;

function playGame() {
    
    const userChoice = document.getElementById("user-choice").value;
    const computerChoice = getComputerChoice();

    if (userChoice === 'rock') {
        document.getElementById('userThrowImage').innerHTML = "<img src='./rockFlipped.png' width='416px' height='344px'>"
    } else if (userChoice === 'scissors') {
        document.getElementById('userThrowImage').innerHTML = "<img src='./scissorsFlipped.png' width='416px' height='344px'>"
    } else if (userChoice === 'paper') {
        document.getElementById('userThrowImage').innerHTML = "<img src='./paperFlipped.png' width='416px' height='344px'>"
    }

    if (computerChoice === 'rock') {
        document.getElementById('computerThrowImage').innerHTML = "<img src='./rock.png' width='416px' height='344px'>"
    } else if (computerChoice === 'scissors') {
        document.getElementById('computerThrowImage').innerHTML = "<img src='./scissors.png' width='416px' height='344px'>"
    } else if (computerChoice === 'paper') {
        document.getElementById('computerThrowImage').innerHTML = "<img src='./paper.png' width='416px' height='344px'>"
    } 

    document.getElementById("winning-text").innerHTML = determineWinner(userChoice, computerChoice);

    if (document.getElementById("winning-text").innerHTML === 'You won!') {
        userScore ++ ;
        document.getElementById("user-score").innerHTML = userScore;
    } else if (document.getElementById("winning-text").innerHTML === 'The computer won!') {
        computerScore ++ ;
        document.getElementById("computer-score").innerHTML = computerScore;
    } else if (userChoice === '') {
        document.getElementById("winning-text").innerHTML = "Please enter a valid throw.";
    }
}

