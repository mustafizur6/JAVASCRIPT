

const myJan = {
    age: 17,
    name: 'Suborna',
    class: 10,
    school: 'KBMSS',
    briliant: true,
}
console.log(myJan.name)

Suborna =  {}
Suborna.name = 'Suborna Akter';
Suborna['age'] = 17;
console.log(Suborna)

for(const jan in myJan){
    console.log(jan , ':',myJan[jan])
}

const keys = Object.keys(myJan)
console.log(keys)
const values = Object.values(myJan)
console.log(values)

const koliza = new Object()
console.log(koliza)
const rubber = Object.create({})
console.log(rubber)