

const friends = [ 'Elon', 'Bill', 'Mark', 'Waren']

// for(const friend of friends){
//     console.log(friend)
// }

for(let i = 0; i < friends.length; i ++){
   let friend = friends[i]
   console.log(friend)
}


const numbers = [1,2,3,4,5,6,7,8,9];
// numbers.reverse()
// console.log(numbers);

const rev_numbers = []

for (const number of numbers){
    rev_numbers.unshift(number)
}
console.log(rev_numbers)

const reversedNumber = [];
for(let i = 0 ; i<numbers.length; i++){
    let num = numbers[i];
    reversedNumber.unshift(num)
}
console.log(reversedNumber)