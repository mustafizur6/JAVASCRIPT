

const placeLists = document.getElementById('placeList');

const li1 = document.createElement('li');
li1.innerText = 'SusurBari';

placeLists.appendChild(li1)


const mainContainer = document.getElementById('main');
const section = document.createElement('section')
section.innerHTML = 
 ` <h2>All of my Wife name</h2>
<ul>
   <li>Jann</li>
   <li>Koliza</li>
   <li>Bou</li>
   <li>Sona</li>
</ul> `

mainContainer.appendChild(section)