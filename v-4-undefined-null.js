/*
undefined and null are both of false;


undefiend ti 7/8 rokomer case hote pare  examples soho
*/
/*
1. variale value not assigned
2. function but did't write "return"
3. just wrote 'return' but did't return anything.
4. parameter that isn't passed
5. property that doesn't exists in an object
6. accessing array element out of range
7. accessing deleted array element 
*/
// 1.
let hello ; // op >>>> undefined
// console.log(hello);
// 2.
function second (x,y){
    const sum = x * y;
}
const result = second(3 * 3);
// console.log(result);// op >>> undefined 
// 3.
function add (a,b){
    const add = a * b;
    return;
    
}
const multiple = add(11,4);
// console.log(multiple); // op >>>>>  undefined
// 4.
function substruction(x,y){
    const subs = x * 2;
    // console.log(y);
    return subs;
}
const calc = substruction(22);
// console.log(calc); //undefined 44   duita answer
// 5.
const fifth = {mamu : 'akbar', height:'6feet',phone:'nai',bankBalance:'000'};
// console.log(fifth.price); // op>>> undefined    beconz property te nai.
// 6.
const array = [33,55,66,1000,7];
// console.log(array[5]); // op >>> undefined  oto gula array idexnumber nai.
// 7.
const roll = [33,55,66,1000,7];
delete roll[2];
// console.log(roll[2]); // op >>>> undefined
// 8.
const voda = undefined;
// console.log(voda); //  op >>> undefined




// null with examples \
const faltu = { name:'samad',profession:null};
console.log(faltu.profession); // op.>>> null        this is specified .
/*
null and undefiend er moddhe different ::::

1.. null >>> nulll holo kono specified nirdito kore valuo bujaiya thake
ja ekhono tumi dao nai eta kei bujai;
2.. undefined >>> undefined onek kichu valuo bujaiya thake ba thakte pare;

*/