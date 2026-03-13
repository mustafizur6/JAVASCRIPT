
const me = {
    name : 'mustafizur',
    age: 22,
    color: 'white'
}

const {name : userName} = me;
console.log(userName)
// const { n, , c} = me

const age = [11,22,33,44]
const [a,,,c] = age;
console.log(c)

// default values;
const [x,y = 3] = [3]
console.log(y);

const arr = [1, 2, 3, 4, 5];

// slice()
const part = arr.slice(1, 4);
console.log(part); // [2, 3, 4]
console.log(arr);  // [1, 2, 3, 4, 5] (unchanged)

// splice()
const removed = arr.splice(1, 2, 99, 100);
console.log(removed); // [2, 3]
console.log(arr); // [1, 99, 100, 4, 5]
console.log('remove duplicate...............')
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)]
console.log(unique); // [1, 2, 3, 4, 5]

const numbers1 = [1, 2, 2, 3, 4, 4, 5, 4, 3];
const uniqueArr = numbers1.filter((num, index) => numbers1.indexOf(num) === index);
console.log(uniqueArr); // [1, 2, 3, 4, 5] ;



const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const merged = [...arr1, ...arr2, ...arr3];
console.log(merged); // [1, 2, 3, 4, 5, 6]

const mergedWithConcate = arr1.concat(arr2, arr3);
console.log(mergedWithConcate)