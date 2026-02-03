const persons = ['jan', 'koliza', 'lokkhi', 'tia', 'pakhi', 'bou', 'humaira'];

const sortedPersons = persons.sort();
console.log(sortedPersons)


const numbers = [2,7,4,5,9,10,33,2,3];
const accending = numbers.sort();
console.log(accending)

const number_asc = [...numbers].sort(function (a,b) {return a - b})
const number_dsc = [...numbers].sort(function(a,b){return b - a})
console.log(number_asc)
console.log(number_dsc)