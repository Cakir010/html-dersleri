console.log("**** CREATE NODE ****")


const newPar = document.createElement('p')
const text = document.createTextNode('Bu bir p elementidir.')
newPar.appendChild(text)
console.log(newPar);

const h2 = document.querySelector('.item-list h2')
h2.after(newPar)
// h2.before(newPar)

const myInput = document.getElementById('input')
console.log(myInput.value);

newPar.id = 'par'
newPar.className = 'center red'


newPar.classList.add('bg-tomato' ,'left' , 'blue')
newPar.classList.remove('left')


console.log(newPar.getAttribute('class'));
console.log(newPar.getAttribute('id'));

console.log(myInput.getAttribute('name'));




















