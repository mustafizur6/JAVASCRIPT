

const line = 'I love you.'
let reverse = ''
// for(const letter of line){
//     reverse = letter + reverse
// }
// console.log(reverse)

for(i = 0 ; i < line.length; i++){
    reverse = line[i] + reverse
}
console.log(reverse)

const reversed = line.split('').reverse().join('')
console.log(reversed)