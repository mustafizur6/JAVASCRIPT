/**
 

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}

const kodom = new Person('kodom Ali', 22)
console.log(kodom);
kodom.sleep();

const badam = new Person('badam ali', 33 );
badam.sleep()


// vejal

const lazy = kodom.sleep;
lazy()


 */

const person = {
    name: 'Mustafizur Rahman',
    greet(){
        console.log(this.name)
    }
}

person.greet()



function sayHello(){
    console.log(this)
}
sayHello()

const person2 = {
    name2: 'chadmaam',
    greet : () =>{
        console.log(this.name2)
    }
}
person2.greet()