console.log("***** SELECTORS *****")


document.title= '👹 DOM 👹'

//*===========================================
//*            GETELEMENTBYID()
//*===========================================


const myHeader = document.getElementById('header')
console.log(myHeader);

myHeader.style.color = 'red'
myHeader.style.backgroundColor = 'yellow'


const button= document.getElementById('btn')
const textınput= document.getElementById('input')
button.style.backgroundColor = 'red'
button.style.padding = '0.7rem'
button.style.border = 'none'
button.style.borderRadius = '10px'
button.style.fontSize = '20px'
button.style.color = 'white'
textınput.style.padding = '0.7rem'



//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================
const list = document.getElementsByTagName('li')
console.log(list);  //!HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]

list[0].style.color = 'red'
list[list.length-1].style.color = 'blue'

const header = document.getElementsByTagName('header')
console.log(header[0]);

list[3].textContent = 'REACT / VUE'
list[3].innerText = 'REACT / VUE / Swilte'

console.log(list[2].textContent);
console.log(list[2].innerText);

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================



//* ========================================
//*              QUERYSELECTOR()
//* ========================================

// 1
const myLi = document.querySelector('li')
console.log(myLi);
myLi.style.color= 'purple'
// 2
const addıtem = document.querySelector('.add-item')
console.log(addıtem);
// 3
const addBtn = document.querySelector('#btn')
addBtn.style.cursor='pointer'
console.log(addBtn);
// 4
const itemH2 = document.querySelector('.item-list h2')
console.log(itemH2);

const addBtnType = document.querySelector('input[type="button"]')
console.log(addBtnType);
//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
const lists = document.querySelectorAll('ul li')
console.log(lists);

lists.forEach((li)=> console.log((li.textContent)))

console.log(document.querySelectorAll( 'section.item-list ul li:nth-child(4)')[0].innerText)


document.querySelector('section.item-list ul li:nth-child(4)').innerHTML='<p>paragraf</p>'












