const person = {
    name: "Mustafizur",
    greet: function(city, country){
        console.log(`Hello, I'm ${this.name} from ${city}, ${country}`)
    }
}
const another = {name : "Saidur"}

// using call()
person.greet.call(another, "Dhaka", "Bangladesh")
// output: Hello, I'm Saidur from Dhaka, Bangladesh

// using apply
person.greet.apply(another, ["London", "UK"])

// using bind
const boundFunc = person.greet.bind(another, "Toronto", "Canada");
boundFunc()