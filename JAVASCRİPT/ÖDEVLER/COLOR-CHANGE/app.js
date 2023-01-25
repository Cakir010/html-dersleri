let element = document.querySelector('#p1')
let element2 = document.querySelector('#p2')
let element3 = document.querySelector('#p3')

let body = document.querySelector('#container')

document.addEventListener('keydown', change = (i) => {
    
    element.innerText = 'Klavyeden Basılan Tuş :' + i.key;
let renk1 =Math.floor(Math.random()*255)
let renk2 =Math.floor(Math.random()*255)
let renk3 =Math.floor(Math.random()*255)
let renk4 =Math.floor(Math.random()*255)

let color = `rgba(${renk1}, ${renk2} , ${renk3} , ${renk4})`



    body.style.backgroundColor = color;

    element2.innerText = 'KEY ASCII:' + i.keyCode;

    element3.innerText = color
}) 





