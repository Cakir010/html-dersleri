// ?==================================================================

// !=================STRİNG METHOD======================== 


// console.log(*******STRİNG METHOD*******);


// let str1= 'this is a string'
// let str2= 'this is a string'
// let str3= 'this is a string'
// let str4=  new String ('this is a string')

// console.log(typeof str1); // string 
// console.log(typeof str2); // string
// console.log(typeof str3); // string 
// console.log(typeof str4); // object
// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);

//! ÖR ========******=========******======******========******=====

/* let str1= 'Clarusway'
let str2= 'Full Stack'
let str3= ''
let str4= (str1 + (' '+ str2))
console.log(str1.concat(' ', str2));
console.log(str4);


console.log(str1.length);  //9
console.log(str2.length);  //10
console.log(str3.length);  //0
console.log(str4.length);  //20 */

// !==============================================

// let str = 'Hello World'

// console.log(str[0]); // H
// console.log(str[6]); // W

// console.log(str[str.length -1 ]);  //d // !BİZİ SON ELEMANA ULAŞTIRIYOR. -1 DEMEK SONDAN BİRDİR. -3 OLSA SONDAN ÜÇÜNCÜYÜ DÖDÜRÜR.

//! ============================================================


// let a =5;
// let b= a;
// console.log({a},{b});
//                                      // String are İMMUTABLE 
// b = 10 ;
// console.log({a},{b});

// !===============================================================

//?Escape Sequences (Kaçış Dizileri)

// alert ('Merhaba\tDünya')
// console.log('Merhaba\nDünya')
// console.log('Merhaba\0Dünya')
// console.log('Merhaba\nDünya')
// console.log('Merhaba\\Dünya')
// console.log('Merhaba\bDünya')
// console.log('Merhaba\`Dünya')

// !===================SLİCE METHOD=============================================


/* let str1= 'Clarusway'

console.log(str1.slice(1,5));  // laru 
console.log(str1.slice(-8 , -4));  // laru
console.log(str1.slice(-5 , 8));  //uswa
console.log(str1.slice(5));  //sway */

// !======================SUBSTRİNG========================================

// const str = 'Orange';

// console.log(str.substring(0,4));  
// console.log(str.substring(4,0));  // sola dogru gidemeyecegi için değişmiyor.
// console.log(str.substring(2,0));
// console.log(str.substring(0,2));

//! ====================CONCAT METHOD=======================================

// let str1= 'Clarusway';
// let str2= 'Full'
// let str3= 'Stack'

// const result = str1.concat('cohort 13' , str2, ' JS Session 8 ' , str3)
// console.log({result} , {str1});

// !======================İNCLUDES METHOD ================================

/* let email= 'ysckr01@gmail.com'
// let email= 'ysckr01-gmail.com'

console.log(email.includes('@'));  //true

if(email.includes('@')){
    console.log('Email is valid');
}else{
    console.log('ınvalid email');
} */

//! =========================İNDEXOF METHOD========================

// ÖDEV
// let str = 'You do not KNOW what you do not know until you know.';

// !========================LASTİNDEXOF==================================
//! Sagdan sola dogru arar  ilk buldugunun index ini GeolocationPositionError. bulamazsa -1 döndürür.

// let str = 'You do not KNOW what you do not know until you know.';
// console.log(str.lastIndexOf('t'));  //39
// console.log(str.lastIndexOf('t', 38));   //30

//! ====================SEARCH METHO========================

// let str = 'You do not KNOW what you do not know until you know.';
// console.log(str.search('knowt')); // -1
// console.log(str.search('know')); // 32

// !========================REPLACE METHOD====================

// let str = 'You do not know what you do not know until you know.';

// let newStr = str.replace("what" , "DEGİŞEN");
// let newStr2 = str.replace(/do/ig , "DEGİŞEN");  // bütün do ları degişir
// let newStr3 = str.replace(/know/i , "DEGİŞEN");

// console.log(newStr);
// console.log(newStr2);
// console.log(newStr3);

//!=====================SPLİT METHOD=====================

// let str = 'welcome to Full Stack'

// console.log(str.split(''));  // her bir harfi ayrı ayrı ayırdı --> boş split
// console.log(str.split(' '));  // araya bir boşluk kelimeleri tek tek yazdırır.
// console.log(str.split(','));  //'welcome to Full Stack
// console.log(str.split('welcome'));   //',' to Full Stack
// console.log(str.split('Full'));  // 'welcome to ',' Stack'
// console.log(str.split('' , 8)); // ['w', 'e', 'l', 'c', 'o', 'm', 'e', ' ']

// !=====================toLowerCase()==================================

// let str = 'Welcome To Full Stack'

// console.log(str.toLowerCase())  //welcome to full stack  (tamamını küçük harf)

// console.log(str.toUpperCase())  //WELCOME TO FULL STACK  (tamamını büyük harf)

//! =================================================================








































