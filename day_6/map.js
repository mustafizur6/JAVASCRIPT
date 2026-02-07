
/**]
 const numbers = [2,3,4,5,6,7,8,9];

const doubled = [];
for(const num of numbers){
    const double = num * 2;
    doubled.push(double)
    
}
console.log(doubled)

 */

const numbers = [2,3,4,5,6,7,8,9];

const result = numbers.map(number => number*2)
// console.log(result)
const result2 = numbers.filter(number => number % 2 === 0)
// console.log(result2)
const result3 = numbers.find(number => number > 3)
// console.log(result3)

const friends = ['jan', 'suna', 'koliza', 'bou', 'lokkhi'];

const lengths = friends.map(length => length[0])
// console.log(lengths)

const forEach = numbers.forEach(n => n)
console.log(forEach)

