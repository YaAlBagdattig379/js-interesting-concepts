// closure example 
/*
what is closure ?
>>> ekti function theke jodi ar ekti function jodi ami return kori tahole  tar nijosso ekta closure ba capsulation ba notun ekta private reference toiri hoi  seta kei bole closure .
*/
function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
let clock1 = stopWatch();
console.log(clock1)// op >>>>> [Function (anonymous)]
console.log(clock1()); // op >>>>> 1
console.log(clock1()); // op >>>>> 2
console.log(clock1()); // op >>>>> 3
let clock2 = stopWatch();//
console.log(clock2) // op >>>> [Function (anonymous)]
console.log(clock2()) // op >>>> 1
console.log(clock2()) // op >>>> 2
console.log(clock1()) // op >>>> 4 this is op bcoz>> clock1 4 time console log kora hoiche.
console.log(clock2())/// op >>>> 3 this is op bcoz>> clock1 3 time console log kora hoiche.