

// has some property , method = kisu kaj
class Products{
    country = 'Bangladesh'
    bou = 'sabiha'
    constructor(name, age , dini){
        this.name = name
        this.age = age
        this.dini = dini
    }
    speak(talk){
        console.log(`talking about ${talk}`)
        
    }

}

const lenovo = new Products('Sabhia', 20, true)
const second = new Products('Anzu', '21', true)
console.log(second)
console.log(lenovo)
lenovo.speak('Oba kita kou')
second.speak('heollo biai')






class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log(`Sir ${this.name} is teaching ${this.subject} `)
    }
}

const hakim = new Teacher('Hakim','Physics');
const Jahid = new Teacher('Jahid', 'English')
hakim.lecture()
console.log(hakim)
console.log(Jahid)