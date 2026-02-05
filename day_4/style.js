

const sections = document.querySelectorAll('section')

for(const section of sections){
    section.style.border = '2px solid red'
    section.style.marginTop = '8px'
    section.style.borderRadius = '9px'
    section.style.padding = '8px'
    section.style.backgroundColor = 'lightGreen'
}

const place1 = document.getElementById('places_container')
place1.style.backgroundColor = 'yellow' 
place1.classList.add('yellow-bg')

const fruitss = document.getElementById('fruitss_container');
fruitss.classList.add('alignCenter')

console.log(fruitss.childNodes)

document.createElement('p')
document.createElement('div');
document.createElement('li')
document.createElement('section');

const li = document.createElement('li');
li.innerText = 'Hello Jan I love you very much';

place1.appendChild(li)
console.log(place1.innerHTML)