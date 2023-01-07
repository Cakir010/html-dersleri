// KARAR YAPILARI IF ELSE TERNARY SWITCH


// IF

// ÖR :

// const gun = 14

// if (gun <= 11) {
//     console.log('gunaydın');
// } else {
//     console.log('iyigünler');
// }

// ===================================

// ÖR 2 :

// const n = +prompt('enter a number')

// if (n <= 10) {
//     console.log('günaydın');
// } else if (n <= 17) {
//     console.log('iyi günler');
// } else {
//     console.log('iyi aksamlar');
// }

// ======================================================


// let a = 5
// a = 8;
// console.log(a);

// const ile degişmez let ile degişir

//*=================EN BÜYÜK KİM  =================================

// const fikret = +prompt('fikret : enter your number')
// const sezai = +prompt('sezai : enter your number')
// const kerrim = +prompt('kerrim : enter your number')

// if (fikret > sezai && fikret > kerrim) {
//     console.log('fikret en böyük');
// } else if (sezai > fikret && sezai > kerrim) {
//     console.log('sezai en böyük');
// } else if (kerrim > fikret && kerrim > sezai) {
//     console.log('kerrim en böyük');
// } else {
//     console.log('hepsi eşit');
// }


//*================EHLİYET ÖRNEGİ=======================================

// const yas = +prompt('Enter your yas')
// const saglikDurumu = confirm('saglik belgen varmı')
// const sınav =+prompt('bitirme notun')


// const sonuc = yas >= 18 && saglikDurumu ===true && sınav >= 70

// if (sonuc === true) {
//     console.log('ehliyet alabilir');
// } else {
//     console.log('***********N0N0N0N0***********');
// }

//!======================= ! TERNARY  !=====================

// const num = +prompt ('Enter your number ')

// const sonuc = num > 70 ? 'geçtin' : 'kaldın'

// console.log(sonuc);

// !====================SWİTCH CASE ===============================

// const gün = +prompt('gün 1-7')

// switch (gün ) {
//     case 1:
//     bugun='pzrtsi'
//         break;
//     case 2:
//         bugun='salı'
//         break;
//     case 3:
//         bugun='crsmb'
//         break;
//     case 4:
//         bugun='prsmb'
//         break;
//     case 5:
//         bugun='cuma'
//         break;
//     case 6:
//         bugun='cmtesi'
//         break;
//     case 7:
//         bugun='pazar'
//         break;

//     default:
//         break;
// }
// alert(bugun);


// ====================FOR WHİLE DO WHİLE ==============================

// for (let i = 0; i <= 10; i++){
//     console.log(`${i} marhaba`);
// }
// ===========================================
// for (let i = 10; i >= 1 ; i--) {
//     console.log(i);
// }

// const n = Number(prompt('enter a number'))
// let sum = 0;
// for (let i = 1; i <= n; i++){
//     console.log(`${i}`);
//     sum += i
// }

// =========================WHİLE ===================


// let text
// let i = 0
// while (i < 10) {
//     text += console.log(`the number ${i}`);
//     i++;
// }

// ======================DO WHİLE ===================

// let i = 2
// let n = 5
// do {
//     console.log(i);
//     i++
// } while (i>5)
// console.log(i);



// ======================FUNCTION================


// const num = +prompt ('Enter your number ')

// const sonuc = num > 70 ? 'geçtin' : 'kaldın'

// console.log(sonuc);






// let x = "sadi"
// let y = "hadi"
// function anagram (x, y) {
//   return x.split("").sort().join("") === y.split("").sort().join("")
// } 
// console.log(anagram(x,y));



// let anagram1 = prompt('kelimegir')
// let anagram2 = prompt('kelimegir')
// function deger(anagram1, anagram2) {
//     return anagram1.split('').sort().join('')=== anagram2.split('').sort().join('')
// }
// console.log(deger (anagram1,anagram2));

