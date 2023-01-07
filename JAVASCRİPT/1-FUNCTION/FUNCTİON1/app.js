// =============== 22.12.2022 =======================
// ==============  FUNCTIONS  ======================

// ORNEK1
// ==========================================
function printHello (){
    console.log('hello');
}
printHello()
printHello()
printHello()
printHello()




// ORNEK2
// ====================================================

// function greet(firstName , lastName){
// console.log(`Hi ,${firstName} ${lastName}`);
// }
// greet('yunusemre' , 'T022245')
// greet('hasan' , 'huseyın')
// greet('ali' , 'veli')

// const name = prompt('your name:')
// const surname = prompt('your surname')
// // const firstName = prompt('your name:')
// // const lastName = prompt('your surname')

// greet (name , surname)

//! ilk satıda tanımladgımız fırstname degişkeni son satırda name oldu, bu olabilir buna fucntıon da buna pas by value deniliyor bu iş tamamen degişkene göre yani value ye göre yapılıyor. yani greet bölümüne x , y de yazılablir.  greet(x,y ) aynı şekilde yazdırır.

// !bir parametreyi cagırma sırasında kullanmaz isek onun yerine default parametreyi atayabiliriz.

// ORNEK 3
// ==============================================

// function calculate (name , yearofbird){
//     const age=2022 - yearofbird
//     console.log(`${name}'s age is ${age}`);
// }
// calculate('elif', 20)


function calculate (name , yearofbird){              //!ANA PROGRAM 
    const age=new Date(). getFullYear() - yearofbird           //!ALT PROGRAM
    return(`${name}'s age is ${age}`);
}
const elif = calculate('elif', 1990)
console.log(elif)                                   //!ANA PROGRAM 
console.log(calculate('rose', 2010));

// !ORNEK4  ========================================

//! conseolden girilen bi sayının tek veya cıft oldgunu hesaprlayan ve sonucu ana programa donduren sonucu fonksaıyonlar ile  ekrana yazdırınz 

// function oddOrEven(num){
//     // return num % 2 ? 'odd' : 'even'
//     // return num % 2  === 0 ? 'even' : 'odd' // !-2.YÖNTEMDİR. EŞİTLEYEREK YAPTIK

// if (num % 2 === 0){
//     return "even'{
//         else {
//             return'odd'
//         }
//     }
// }

// }

// const number = +prompt('please enter a number to check odd or even:')
// const oddEven = oddOrEven(number)
// console.log(`${number} is ${oddEven}`);



// ==================FUNCTION EXPRESSION=================

// const printHello = function(){
//     console.log("hello");
// }
// printHello() //!invoke , call

//!ÖRNEK 1 ================================
//! GİRİLEN 3 SAYIDAN EN BUYUGU 
const findBiggest = function(n1,n2,n3){
let biggest = n1
if (n2 >= biggest){
    biggest= n2;
}
if (n3>= biggest){
    biggest=n3
}
return biggest
}
console.log(`The Biggest : ${findBiggest(2,1,4)}`);
console.log(`The Biggest : ${findBiggest(7,2,9)}`);
console.log(`The Biggest : ${findBiggest(1,2,3)}`);
console.log(`The Biggest : ${findBiggest(7,2,9)}`);
console.log(`The Biggest : ${findBiggest(4,2,3)}`);
console.log(`The Biggest : ${findBiggest(-7,-2,11414314546363262625652662652625562)}`);
console.log(`The Biggest : ${findBiggest(-3,-5)}`);

// !============FONKSIYON ICERISINDE FONKSIYON YAZDIRMA ===============

const add = function (n1, n2){
    return n1+ n2
}
const sub = function (n1 , n2){
    return n1-n2
}
const div = function (n1 , n2){
    return n1/n2
}
const mul = function (n1 , n2){
    return n1*n2
}
const compute = function (n1 , n2,op){
   let result =0

switch (op) {
    case"+":
        result=add(n1 , n2)
        break;
    case"-":
        result=sub(n1 , n2)
        break;
    case"/":
        result=div(n1 , n2)
        break;
    case"*":
        result=mul(n1 , n2)
        break;

    default:
        break;
}
return result
}
console.log(compute(4,3,"/"));
console.log(compute(2,4,"*"));
console.log(compute(4,3,"+"));
console.log(compute(4,3,"-"));










