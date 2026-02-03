

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors['golden rod'])


const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car['passenger capacity'] = 5;
console.log(car)



// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics.marks)




let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

console.log(Object.keys(student).length)




let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(const keys in myObject){
    console.log('key',':', keys , "|" , 'type:', typeof(keys))
} 









// string task

const string = 'I love you jan suborna Akter';
const stringg = string.toLowerCase()
let times = 0;
for(const l of stringg){
    if(l === 'a'){
        times++
    }
}
console.log(times)




const linee = 'I want to marry you';
let lineee = linee.toLowerCase();
let howManyTimes = 0;
for(i = 0; i <= lineee.length; i ++){
    if(lineee[i] === 'o'){
        howManyTimes++
    }
}
console.log(howManyTimes)






const sentence = "dlkfsdkjfp[";
const sentencee = sentence.toLowerCase();

let hasA = sentencee.includes('a')
let hasE = sentencee.includes('e')
let hasI = sentencee.includes('i')
let hasO = sentencee.includes('o')
let hasU = sentencee.includes('u')

if(hasA && hasE && hasI && hasO && hasU){
    console.log('The string constains all vowels')
}
else{
    console.log('The string does not coantin all vowels')
}





let str = 'eXample test with x and X'
str = str.replace(/x/g, 'y').replace(/X/g, 'Y')
// console.log(str)

let str2 = 'eXample test with x and X'
str2 = str2.split('x').join('y');
str2 = str2.split('X').join('Y')
// console.log(str2)


let str3 = 'eXample test with x and X'
let result = '';

for(let i = 0; i<str3.length; i++){
    if(str3[i] === 'x'){
        result+= 'y'
    }
    else if(str3[i] === 'X'){
        result+= 'Y'
    }
   else{
    result+= str3[i]
   }
}
console.log(result)





let sentence2 = "now i am learning";

let words = sentence2.split(' ')
let capitalizedWords = [];
for(const word of words){
    let capi  = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capi)
}
console.log(capitalizedWords.join(' '))