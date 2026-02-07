

const numbers = [1,2,3,4,5,6,7,8,9]

const total = numbers.reduce( (previous, current) => previous + current , 0)
console.log(total)

const products = [
    {id: 1, name : 'sonu' , price :1111},
    {id: 1, name : 'sonu' , price :2222},
    {id: 1, name : 'sonu' , price :3333},
    {id: 1, name : 'sonu' , price :4444},
]
const price = products.map(price => price.price)
console.log(price)
const total2 = products.reduce((pre , last) => pre + last.price , 0)
console.log(total2);

// has some properties, method
class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;

    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const bou = new Product('Sabiha');
console.log(bou)
bou.speak('oba kita kou')

//2

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching math')
    }
}

const tapan = new Teacher('Tapan Sir', 'Physics');
console.log(tapan)



// 3
const rashid = new Teacher('Rashid', 'English')
console.log(rashid)