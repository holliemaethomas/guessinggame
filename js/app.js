'use strict';

// Welcome message
alert('Hey there and welcome to my guessing game! Answer the following questions to learn some fun facts about me.');

var userName = prompt('Before you get to know me, I would like to get to know you a bit. Please tell me your name.');

console.log(userName);

// Enter Username
alert('Great, ' + userName + '. Let\'s begin!');

// Question 1 - Cat Person
var catPerson = prompt('Am I a cat person?' , 'type yes or no').toLowerCase();

console.log(catPerson);

if(catPerson === 'yes' || catPerson === 'y'){
    alert('Excellent job, ' + userName + '. I am indeed OBSESSED with cats and have an adorable orange tabby named Ponyo.');
} else {
    alert('I am definitely a cat person, ' + userName + ' and can\'t believe you would think otherwise!');
}

// Question 2 - Red Hair
var redHair = prompt ('Is red my natural hair color?' , 'type yes or no').toLowerCase();

console.log(redHair);

if(redHair === 'yes' || redHair ==='y'){
    alert('You are correct, ' + userName + '! I have never dyed my hair in my life.');
} else {
    alert('Incorrect! I have never dyed my hair in my life.');
}

// Question 3 - Snowboarder
var snowBoard = prompt('Am I a snowboarder?' , 'type yes or no').toLowerCase();

console.log(snowBoard);

if(snowBoard === 'no' || snowBoard === 'n'){
    alert('That\'s right, ' + userName + '! I prefer to ski my way down the slopes.');
} else {
    alert('No way, ' + userName + '! I am a ski bum :)');
}

// Question 4 - Morning Person
var morningPerson = prompt('Am I a morning person?').toLowerCase();

console.log(morningPerson);

if(morningPerson === "no"  || morningPerson === "n"){
    alert('You know me so well, ' + userName + '! I love sleep and dread waking up early.');
} else {
    alert('No way, ' + userName + '. I love sleeping in.');
}

// Question 5 - Favorite Cocktail
var manhattan = prompt('Is my favorite cocktail a Manhattan?' , 'type yes or no').toLowerCase();

console.log(manhattan);

if(manhattan === 'yes' || manhattan === 'y'){
    alert ('You guessed correct, ' + userName + '! My go-to order is a Manhattan with Maker\'s Mark.');
} else {
    alert('Wrong! Do you even know me, ' + userName + '?');
}

alert('Thanks for playing, ' + userName + '! I hope you got to know me a little better.');