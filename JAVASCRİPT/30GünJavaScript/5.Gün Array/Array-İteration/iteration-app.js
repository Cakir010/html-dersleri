//! ==============ForEACH==================
// Diziler arasında döngü yapmak için olusturulmus yöntemlerdir.



const names = ['Lincoln', 'Daniel', 'Tabitha', 'McLeod']
let greeting = 'Hi'
names.forEach((name, currentIndex, sourceArray) => {
  if(currentIndex === sourceArray.length - 1) {
    greeting += ` and ${name}.`
  } else {
    greeting += ` ${name},`
  }
})
console.log(greeting)


// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }



const PRODUCTS =['laptop','phone','speaker','desktop','server','mouse','keybord']
PRODUCTS.forEach((product , index,array) => array[index]= `${product.toUpperCase()}`)
console.log(PRODUCTS);












