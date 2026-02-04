
const numbers = [1, 2, 3, 4, 5];
function sum(numbers) {
    let summ = 0
    for (const number of numbers) {
        summ = summ + number
    }
    return summ
}

const result = sum(numbers);
console.log(result)


function inchToFeet(inch) {
    const feet = inch / 12;
    const inchh = inch % 12
    const result = Math.floor(feet) + ' ft ' + inch + ' inch'
    return result
}
const janH = inchToFeet(62)
console.log(janH)

// some mistake upper problem


//  2
// year will be a leap year if the year is divisible by 4

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true
    }
    else {
        return false
    }
}

const isLIpi = isLeapYear(2003)
console.log(isLIpi)

// 3

const numberss = [1, 2, 3, 4, 6, 7, 8]

function sum(numbers) {
    let summ = 0;
    for (number of numbers) {
        if (number % 2 === 0) {
            summ = summ + number;
        }
    }
    return summ
}

const sumOfNumbers = sum(numberss)
console.log(sumOfNumbers)

// 4
// 

const nnumber = [1, 2, 3, 4, 5, 6, 7, 2, 5, 10, 8, 9, 10]

function removeDupli(numbers) {
    let removedDupliArrayy = [];
    for (const num of numbers) {
        if (!removedDupliArrayy.includes(num)) {
            removedDupliArrayy.push(num)

        }
    }
    return removedDupliArrayy

}

const removedDupliArray = removeDupli(nnumber)
console.log(removedDupliArray)

const min = Math.min(22, 33, 6, 70,);
console.log(min)
const max = Math.max(23, 34, 6789, 34, 78, 906,)
console.log(max)
console.log(Math.PI);
console.log(Math.abs(-22))
console.log(Math.random() * 10)
const rand = Math.random() * 10
const randd = Math.floor(rand)
console.log(randd)

console.log(Date())
console.log(new Date())
const date = new Date('2062-10-03')

let x = 2;
let y = 3;
[x, y] = [y, x];
console.log(x, y)




// duplicate 2
const birayanikhor = ['abul', 'babul', 'kabul', 'babul', 'dabul', 'kabul', 'cabul'];

function noDuplicate(array) {
    const final = []
    for (const item of array) {
        if (!final.includes(item)) {
            final.push(item)
        }
    }
    return final
}

const uniqueArray = noDuplicate(birayanikhor);
console.log(uniqueArray)




// longest words

const jan = 'I love you very much jan. I can not live with out you';
let jann = jan.split(' ');

function findLongest(sentence) {
    let longest = '';
    for (const word of sentence) {
        if (word.length > longest.length) {
            longest = word
        }
    }
    return longest
}

const longestWord = findLongest(jann);
console.log(longestWord)


let random = Math.floor(Math.random() * 20)
console.log(random
)

const randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10
console.log(randomNumber)




const height = [11, 222, 33, 44, 66, 77, 88];

function getTallest(allHeight) {
    let tallestHeight = [0];
    for (const singleHeight of allHeight) {
        if (singleHeight > tallestHeight) {
            tallestHeight = singleHeight
        }
    }
    return tallestHeight
}


const tallest = getTallest(height);
console.log(tallest)





const mobiles = [
    { brand: "Apple", camera: "48MP", price: 1199 }, { brand: "Samsung", camera: "200MP", price: 999 }, { brand: "Google", camera: "50MP", price: 899 }, { brand: "OnePlus", camera: "64MP", price: 749 }, { brand: "Xiaomi", camera: "108MP", price: 5949 }, { brand: "Realme", camera: "64MP", price: 4249 }
];

function cheapestPhone(mobiles) {
    let cheapestMobile = mobiles[0]
    for (const mobile of mobiles) {
        if (mobile.price < cheapestMobile.price) {
            cheapestMobile = mobile
        }
    }
    return cheapestMobile

}

const cheapest = cheapestPhone(mobiles);
console.log(cheapest)






const products = [
     { name: "Laptop", quantity: 2, price: 900 },
     { name: "Phone", quantity: 5, price: 500 },
     { name: "Headphones", quantity: 10, price: 80 },
     { name: "Monitor", quantity: 3, price: 300 },
     { name: "Keyboard", quantity: 7, price: 40 },
     { name: "Mouse", quantity: 6, price: 25 }
];

function totalCost(products){
    let totalCostt = 0;
    for(const product of products){
        let thisProductCost = product.quantity * product.price;
        totalCostt = totalCostt + thisProductCost
    }
    return totalCostt
}
const allCost = totalCost(products);
console.log(allCost)




const heights2 = [167, 190, 120, 165, 137];

function lowest(heights2){
    let lowestNum = heights2[0];
    for(const height of heights2){
        if(height < lowestNum){
            lowestNum = height
        }
    }
    return lowestNum
}
console.log(lowest(heights2))





const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallName(names){
    let smallest = names[0];
    for(const name of names){
        if(name.length < smallest.length){
            smallest = name
        }
    }
    return smallest
}
console.log(smallName(names))




// part 2 5

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];



const a = 10000;
const b = 8000;
function tax(a, b){
  return (a - b) * (20/100)
  
}
console.log(tax(a,b))