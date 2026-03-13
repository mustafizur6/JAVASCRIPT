// Higher Order Function 
// Example 1: Passing a function as an argument
function greet(name) {
  return `Hello, ${name}`;
}

function processUserInput(callback) {
  const name = "Mustafizur Rahman";
  console.log(callback(name));
}

processUserInput(greet);
// Output: Hello, Mustafizur

// Example 2: Returning a function
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
console.log(double(3))
const tripple = multiplier(3);
console.log(tripple(10))




//   call, apply, bind

const person = {
  name: "Mustafizur",
  greet() {
    console.log("Hello " + this.name);
  }
};

person.greet(); // Hello Mustafizur

const greetFunc = person.greet;
greetFunc(); // Hello undefined




// call()
function greet(city){
    console.log(`${this.name} form ${city}`)
}

const person1 = {name : "Saidur"};
greet.call(person1, "Mymensingh")

// apply
function greet2(city, country){
    console.log(this.name + ' from ' + city + ', ' + country);

}
const person2 = {name: 'Sadia'};

greet2.apply(person2, ['Sylhet', "Bangladesh"])


// bind()

function greet3(){
    console.log("Hello " + this.name);
}

const person3 = {name : 'Sabiha'}
const newGreet = greet3.bind(person3);
newGreet()


// real use case 

const person4 = {
  name: "Karim"
};

const person5 = {
  name: "Rahim"
};

function greet4() {
  console.log("Hello " + this.name);
}

greet4.call(person4);
greet4.call(person5);