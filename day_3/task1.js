
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const colorss = []
for(color of colors){
    colorss.unshift(color)
}
console.log(colors)
console.log(colorss)




const numbers = [12, 98, 5, 41, 23, 78, 46];
const even = []
for(let i = 0 ; i < numbers.length ; i++){
    let number = numbers[i];
    if(number % 2 === 1){
        even.push(number)
    }
    console.log(even)
  
}

var names = ['Tom', 'Tim', 'Tin', 'Tik'];
const namej = names.join('');
console.log(namej)

const statement = 'I am a hard working person'
let statementReversed = statement.split(' ')
console.log(statementReversed)
let statementReverseds = []
for(let i = 0; i< statementReversed.length; i++){
    statementReverseds.unshift(statementReversed[i])
}
console.log(statementReverseds.join(' '))