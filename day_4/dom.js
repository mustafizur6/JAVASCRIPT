

console.log('Hello from js')
document.getElementById('fruits_title').innerText = 'Those food like very much';
const same = document.getElementsByClassName('same')
for(const s of same){
    console.log(s.innerText)
}
const lii = document.querySelectorAll('.fruits_container li');
for(const li of lii){
    console.log(li.innerText)
}

document.getElementById('fruits_title').style.color = 'green'
 const title =  document.getElementById('fruits_title')
 console.log(title.classList);

 console.log(title.getAttribute('class'))
// title.setAttribute('title', 'set by javascript')
title.setAttribute('title', 'tooltip set by mustafizlur rahaman')

console.log(document.getElementsByClassName('fruits_container')[0].innerText)



document.getElementById('place_title').style.color = 'green'
document.getElementById('fruits_title').style.textAlign = 'center'
document.getElementById('fruits_title').style.backgroundColor = 'beige'

console.log(title.getAttribute('class'))

let place = document.getElementsByClassName('places_container')[0].innerHTML 

console.log(place)

