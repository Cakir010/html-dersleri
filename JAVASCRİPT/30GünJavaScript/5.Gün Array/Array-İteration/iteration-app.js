//! ==============ForEACH==================
// Diziler arasında döngü yapmak için olusturulmus yöntemlerdir.

// const names = ['Lincoln', 'Daniel', 'Tabitha', 'McLeod']
// let greeting = 'Hi'
// names.forEach((name, currentIndex, sourceArray) => {
//   if(currentIndex === sourceArray.length - 1) {
//     greeting += ` and ${name}.`
//   } else {
//     greeting += ` ${name},`
//   }
// })
// console.log(greeting)

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }

// const PRODUCTS =['laptop','phone','speaker','desktop','server','mouse','keybord']
// PRODUCTS.forEach((product , index,array) => array[index]= `${product.toUpperCase()}`)
// console.log(PRODUCTS);

// ==========================================================

// ==========================================================

const arr = ["ali", "veli", "deli"];
for (let i in arr){
    console.log(arr[i]);//her bir elemanın kendisini yazdırmak için i yaıyoruz
    console.log(i);
}

console.log("******************");


for(let x of arr){
    console.log(x);
}




// for(let value of numbers){
// total *= value

// }

// console.log(total);



// numbers.forEach(benimfonksiyonum)

// function benimfonksiyonum(value){
//     total *= value
//     return total
// }
// console.log((total));

// ======================
const numbers =[1,2,3,4,5,6,7,8,9]
total =1
numbers.forEach(value => total *= value)
console.log(total);

// ================================
// const prices =[150,200,300,190]
// let toplam =0
// prices.forEach(x => toplam += x)
// console.log(`${prices} sayılarının toplamı: ${toplam}`);
// ===============================

// const yolcu =["ali","veli","deli"]

// yolcu.forEach(value => console.log(value[0].toUpperCase()+value.slice(1))); 
// önce her elemanın birinci harfini büyük harf yaz sonra da diger kalan kısımlarını yazdır


//  const prices =[150,200,300,180]

//  const newPrice = prices.map(x => x*1.2)
// console.log(newPrice);



const yolcu =["ali","veli","deli","deli","veli","yunus","sezai"]


let isimbul = (name) =>{
    let arr =[]
    for (let aranan of yolcu){
        aranan === "ali" ? arr.push(name.toUpperCase()) :null
    }
    return arr
}
console.log(isimbul("ali"));




