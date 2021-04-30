function writeCards (names, event){
    let doneCards = [];
    for (let i=0; i< names.length; i++){
        doneCards.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    } return doneCards;
};


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i = 0; // the initialization moves OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }

// wrapGifts(gifts);

// To get more acquainted with while, your task is to write a function, countDown, that takes in any positive integer and, starting from that number, counts down to zero using console.log(). Note that this means that running countdown(10); would actually log 11 times:

function countDown (x){
    let countdown = x;
    while (countdown >= 0) {
        console.log (countdown--)

    }
}

countDown(35)