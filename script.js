'use strict';

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const guessNumber = function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let numberGuess = 10;
    console.log(randomNumber);

    const askUser = function() {
        if (numberGuess < 0) {
            const playAgain = confirm('Попытки закончились, хотите сыграть еще?');
            
            if (playAgain) {
                guessNumber();
                return;
            } else {
                alert('Пока!');
                return;
            }
        }
        
        const guess = prompt('Угадай число от 1 до 100');

        if (guess === null) {
            alert('Пока!');
            return;
        } else if (!isNumber(guess) || guess < 1 || guess > 100) {
            alert('Введи число от 1 до 100!');
            askUser();
        } else if (+guess === randomNumber) {
            const playAgain = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');

            if (playAgain) {
                guessNumber();
            } else {
                alert('Пока!');
            }
        } else if (+guess > randomNumber) {
            alert('Загаданное число меньше, осталось попыток: ' + numberGuess);
            numberGuess--;
            askUser();
        } else if (+guess < randomNumber) {
            alert('Загаданное число больше, осталось попыток: ' + numberGuess);
            numberGuess--;
            askUser();
        }
    };

    askUser();
};

guessNumber();