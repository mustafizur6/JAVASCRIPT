

// 8 wasy to get undefined

/**
 * 
 1. variable that is not initialized will give undefined
 2. funciton with no return
 3. parameter that is not passed will bve undefined
 4. if return has nothing on the right side wil retrun undefined
 5. property that doesn't exists on an objedt wil give you undefijnredd
 6. accessing array elements outsied of the index range
 7. deleting and eldmnt insie ian array
 8 set a value directly to undefine
 */

let firest;
console.log(firest)


function second(a,b){
    const total =  a + b
}
console.log('second', second(2,3))

function f(a,b){
   console.log(a,b)
}
console.log('f', f(2,))

console.log(typeof undefined)
console.log(typeof null)