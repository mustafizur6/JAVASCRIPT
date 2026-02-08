

function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast
    }
}
const firstServer = kitchen();
console.log('first',firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log('last',firstServer())


function rannaghor (){
    let kacci  = 0;
    return function(){
        kacci ++;
        return kacci
    }
}

const secondServer = rannaghor();
console.log(secondServer())
console.log(secondServer())