// callback function example 
// 1..
function welcomeMessage(name,greetHandler){
    console.log(greetHandler);
    greetHandler(name);
}
// const name = 'boka jamai'
// const name = ['boka jamai','poltu','dholu']
// const name = {nickName :'boka jamai',age : 80}
// const name = {nickName :'boka jamai',age : 80}
function greetMorning(name){
    console.log('good morning',name)
}
welcomeMessage('hero alam', greetMorning )