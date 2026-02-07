
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }
    activity(){
        this.sleep()
    }
}

const kodom = new Person('kodom ali', 22);
console.log(kodom)
kodom.sleep()
const badam = new Person('badam ali', 22)
console.log(badam)
badam.sleep()
badam.activity()



// vejal

const lazy = kodom.sleep;
