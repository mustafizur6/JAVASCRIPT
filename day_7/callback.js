
function greet(name, callback){
    // console.log('Hi my DArlingt' + name);
    callback();
}

function sayBye(){
    // console.log('By Darling')
}

// greet(' Sabiha', sayBye)


// console.log('Start');

// setTimeout(function(){
//     //  console.log('I am inside SetTimeout')
// },2000)
// console.log('End')


// setTimeout(function(){
//     // console.log('darling amar tumake aj onek cute lagtese ')
// },1000)


function processUserInput(callback2){
    const name = 'john';
    callback2(name)
}

processUserInput((name) => {
    // console.log('hello', name)
})

// // Named
// function printMessage(msg) {
//     // console.log(msg);
//   }
//   setTimeout(printMessage, 1000, "Hello");
  
//   // Anonymous
//   setTimeout(() => {
//     // console.log("Hi after 1 sec");
//   }, 1000);
  






  function greetings(greetinghandler){
   greetinghandler()
   }

//   const number= [22,33,44,121]
// const object = {
//     name: 'swa',
//     age: 33
// }
function greetingHandlera(){
    console.log('good morning')
}

  greetings(greetingHandlera)