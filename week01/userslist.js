'use strict';

const user_string = "Luigi De Russis, Luca Mannella, Fulvio Corno, Juan Pablo Saenz Moreno, Enrico Masala, Antonio Servetti, Eros Fani";
const users = [];
//let users_sorted = [];
const appoggio = user_string.split(',');            //Dividing the names by the commas

for(let y of appoggio){
    y=y.trim();                                     //Removing white spaces at the beginning and at the end 
    users.push(y);
}

//users_sorted = [...users];
//users_sorted.sort();

const acronyms = [];
let acronyms_sorted = [];

let a = '';

for(let c of users){
    let appoggio = c.split(' ');
    for(let x of appoggio){
        a += x[0];                  //I'm taking the first letters for each name
    }
    acronyms.push(a);

    a = '';                         //Resetting a as the empty string
}

acronyms_sorted = [...acronyms];
acronyms_sorted.sort();

console.log("Printing users not sorted: ")

let N = users.length;

for(let i=0; i<N; i++){
    console.log(acronyms[i] + " " + users[i]);
}

//TODO: PRINT THE USERS ACCORDING TO THE ORDER OF THE ACRONIM