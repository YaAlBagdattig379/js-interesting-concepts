/*
      ********  Data types  ********  
    {   7 types of data in js       }

    1. number
    2. string
    3. boolean
    4. undefined
    5. null
    6. object
    7. symbol

                 `Data`
                   /\     
                  /  \  
                 /    \  
                /      \  
               /        \  
              /          \  
      primitive         Non-primitive

    1. number             7. object
    2. string
    3. boolean
    4. undefined
    5. null
    6. symbol
*/


// primitive exaples
let a = 'hello';
let b = a;
// console.log(a,b) //op >>>  hello hello 
a ="gelo";
// console.log(a,b) //op >>> gelo hello **** emon holo because data rup niache imutable er.
/*  
  what is primitive type of data ?
  >>> jei datar gular single ekta value/man seitai primitive type data 
       mane bashi jotil noi.
*/




// Non-primitive exaples
let x = { job : "web developer"};
let y = x;
// console.log(x,y) //op >>>  { job: 'web developer' } { job: 'web developer' }
x.job="front-end-developer"
// console.log(x,y)//op>>> { job: 'front-end-developer' } { job: 'front-end-developer' }
y.job="front-end-developer"
console.log(y,x)//op>>> { job: 'front-end-developer' } { job: 'front-end-developer' }
/*  
what is Non-primitive data ?
>>>>> etar kono ek jaigai change korle ager pura value/man changed hoa jai but primitive hoina.
*/
