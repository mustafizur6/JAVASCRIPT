

const makeGreen  = document.getElementById('green');
makeGreen.onclick = makeGreenColor
function makeGreenColor(){
    document.body.style.backgroundColor = 'green';
}

const makeBlueBtn = document.getElementById('blue')
makeBlueBtn.onclick = function (){
    document.body.style.backgroundColor = 'blue'
}

document.getElementById('lightBlue').addEventListener('click', function makeLightBlue(){
    document.body.style.backgroundColor = 'lightBlue'
})