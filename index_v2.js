// Code your solutions in this file
let names = ['Lisa', 'Kaitlin', 'Jan'];
const eventName = 'surprise';

function writeCards(names,eventName){
    let results = [];
    for (let i = 0; i < names.length; i++){
        results.push (`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)  
    }
    return results;
}
let finishedCards = writeCards (names,eventName);
console.log (finishedCards);

function countDown(){
    let number = 10;
    while (number >= 0) {
        console.log (number--);
    }
}

countDown(10);