


const country = "Bangadesh";
const  division = "Dhaka";
const dist = `B-Baria`

const Zilla = new String('Demra')
console.log(typeof Zilla)
console.log(typeof country)
console.log(typeof dist)
console.log(typeof division)

const jan = 'I, love you';
console.log(typeof jan);

const numbers = [223,44,,77,88];
console.log(typeof numbers)


numbers[1] = 66
jan[2] = 'k'
console.log(jan[1])
console.log(numbers[1])
console.log(numbers.slice(0,2))
console.log(jan.slice(1,7))
console.log(jan.split(' '))
console.log(jan.includes('k'))
const friends = 'Rahim, karim, dahim ,akalim'
const friendss = friends.split(',')
console.log(friendss.join(' |'))
console.log(friendss)
const first = 'ABid';
const last = 'Nahid';
// console.log(first +' '+ last)
const full = first.concat(' ').concat(last)
console.log(full)
