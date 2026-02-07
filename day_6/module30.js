

const a = 30 ;
const b = 33;

const result = `The cost of this product is ${a} and ${b} is  ${a+b}`
// console.log(result)

const email = 'Hello my wife \n' + 'I want to mary you agai \n n' + 'tui je amar sei sadhonar dhon \n' + 'you are my life do you know'

// console.log(email);


const sentence = ` Hellow you are my love 
You are my write person` 

// console.log(sentence)


//// arow funtion  -----------------------------------------------------



/**
 const sum = (a,b) => {
    return a+b
}

const resultt = sum(6,6)
console.log(resultt)

 function summm(a,b){
    return a+b
}

const total = summm(4,4)
console.log(total)
 */

const sum = (a,b) =>  a + b
console.log(sum(2,3))




const numbers = [11,22,334,44,66,77,88];
const arrayMax = Math.max(...numbers)
console.log(arrayMax)
console.log(numbers)
console.log(...numbers)
const numbers2 = [...numbers]
numbers.push(100)
console.log(numbers)
console.log(numbers2)
const more = [...numbers, 33,44, ...numbers2]
console.log(more)


const myLove = {
    name : 'Sabiha',
    class : 'Honors',
    cute : true
}

console.log(myLove)
const myJan = {...myLove, 
    height : 5.4,
    color : 'white'
}
console.log(myJan)

const { height, color, cute: cuteness, name: NickName} = myJan;
console.log(height,color,cuteness, NickName)


const [c,d,f] = numbers
console.log(c,d,f)

console.log(Object.keys(myJan))
console.log(Object.values(myJan))

// delete myJan.height;
// delete myJan.height;
console.log(myJan)

const {cute , ...rest} = myJan;
console.log(rest)


// freeze 

// Object.freeze(myJan)
Object.seal(myJan)
myJan.koliza = 'bou'
console.log(myJan)


// seal


// entries
 
Object.entries(myJan)

for(const key in myJan){
    const value = myJan[key]
    console.log(value)
}