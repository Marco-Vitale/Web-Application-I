'use strict';

const scores = [20, 30, -5, -1, 100, -3, 50];       //also let could have been used

//!The const declaration creates block-scoped constants. 
//!However, if a constant is an object or array its properties or items can be updated or removed. 

const betterScores = [];
let NN = 0;

//Here we can use const because the variable is re created every loop

for (const s of scores){                            //of -> array , string and objects in
    if(s>0){
        betterScores.push(s);
    }
}

NN = scores.length - betterScores.length;

/*let minScore = Math.min(...betterScores);           //min doesn't take arrays
let index = betterScores.indexOf(minScore);
betterScores.splice(index,1);                       //remove 1 element at position index

minScore = Math.min(...betterScores);               
index = betterScores.indexOf(minScore);
betterScores.splice(index,1);*/

//!We have to tell in which way we want to sort the elements otherwise they would have been sorted alphabetically

betterScores.sort((a,b)=>a-b);

betterScores.shift();
betterScores.shift();

//OR betterScores.splice(0,2);

let avg = 0;

for (const s of betterScores){                            //of -> array , string and objects in
    avg += s;
}

avg = avg/betterScores.length;

avg = Math.round(avg);


for(let i=0; i<NN+2; i++){
    betterScores.push(avg);
}

console.log(scores);
console.log(betterScores);