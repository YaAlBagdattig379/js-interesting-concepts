/* 
what is call back function ?
>>>> jokhon ekti function er parameter ar ekti function er value ba
jekho trasfer kora jai ba pathano jai etai call-back function.
*/

 //callback function and pass different function 
function welcomeingMessage(hero,greetHandler){
          greetHandler(hero);
        //  console.log(name);
}
// 1..function
function goodMorning(name){
   console.log("good morning bro !",name)
}
// 2..function
function goodEvening(name){
   console.log("good evening bro !",name)
}
// 3..function
function goodNight(name){
   console.log("good night bro !",name)
}
// call in here 
welcomeingMessage('hero alam ',goodMorning);//op>>> good morning bro ! hero alam
welcomeingMessage('hero alam ',goodEvening);//op>>> good evening bro ! hero alam
welcomeingMessage('hero alam ',goodNight);//op>>> good night bro ! hero alam