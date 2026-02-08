
// always tripple === eqaul
// equal comparisoin doesn't work for non primitive

// const a = 1;
// const b = true;

// const a = 0;
// const b = false;

// const a = {};
// const b = {};
const a = [];
const b = [];

if(a == b){
    console.log('a and b is equal')
}
else{
    console.log('a and b not equal')
}
// type coercion




// array like object argument and paramerter 

function total(a,b,c){
    console.log(arguments)
    const argu = [...arguments];
    console.log(argu)
}
const sum = total(22,33,44,11,33)

console.log(total.length)