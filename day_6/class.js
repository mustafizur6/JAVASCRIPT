

const products = [
    {id: 1, name: 'Sabiha', price : 200000},
    {id: 2, name: 'Kabiha', price : 300000},
    {id: 3, name: 'Habiha', price : 400000},
    {id: 4, name: 'Jabiha', price : 500000},
    {id: 5, name: 'Labiha', price : 600000}
]

// similar 

class Products{
    country = 'Bangladesh';
    constructor(name){
        this.name  = name
    }
    speak(talk){
        console.log(`kotha hocche ${talk}`)
    }
}

const result = new Products('Ahalu', 'dfj')
console.log(result)
result.speak('Sabihar bepare')


//

class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject
    }
    lecture(){
        console.log('sir is teachgn')
    }
}

const tapan = new Teacher('Tapan Sir', 'Physics')
console.log(tapan)
const sada  = new Teacher('Sada Sir', 'Somajbiggan')
console.log(sada)