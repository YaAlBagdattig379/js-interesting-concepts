// local value/ scope eample 
// 1..
function addLocal(a,b){
    const total = a + b;
    // console.log(total);
    return total;
} 
const result = addLocal(11,33);
// console.log(total); // total k out of function dara access kora jaina bcoz local
//local scope mamla
// console.log(result); // eta to normally hoi.  op >>>>   44 


// global scope/ value eample 
// 2..
const global = 22; // global scope 
function addGlobal(x,y){
    const calc = x + y; // local scope 
    // console.log(global);// / global scope ti local scope theke access kora jai op.....22  
    return calc;
}
addGlobal(3,5);
// console.log(calc); //  local scope k global a scope a  access kora jai na op..undefiend 


// block scope/ value eample 
// 3..

function add(c,d){
    const plus = c * d; // local scope 
    if(c > 2){
        var ab = "wow 'C' is greater than 2";
        // console.log(ab)
    }
    console.log(ab)//op jodi "ab"variable ti cons/let thake tahole globally leak hobe na but jodi vaiable ti var dia thake tahole globally hobe.tao tao abar function er vitorei thakbe.
    return plus;
}
const pls = add(3,5);