//! ===================LOOPS (DÖGÜLER)====================================
// !>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// !=====================BASİT ALIŞTIRMALAR==================================
// !=================================================================
// !======================================================
//  !==========================================
// !===============================
// ! ======================
//  !============
//  !======

// for (let i =0 ; i<=10 ; i++){
//     console.log(i);
// }

// let i = 0
// while (i <= 5) {
//   console.log(i)
//   i++
// }

// let sayi =0;
// while(sayi < 10){
//     sayi ++;
//     console.log(sayi);
// }

// N KADAR SAYI

// let number = prompt('sayı giriniz')
// for(let i=0 ; i<= number ; i ++){
//     console.log(i);
// }
// ====================================

// for (let i =1 ; i<10 ; i++){
//     if(i%2==1){
//         console.log('yavrum');
//     }else{
//         console.log(`${i} nerdesin`);
//     }
// }
// =================================
// let toplam = 0;
// for (let i = 50; i > 0; i--) {
//   toplam += i;
//   console.log(i);
// }
// console.log("toplam", toplam);

// ================================

// let ifade = ' ';
// for(i=1 ; i<8 ; i++){
//     ifade += '#'
//     console.log(ifade);
// }

// ASAL SAYI ===================

// let primeNum =+prompt('enter a number')

// let isPrime = true
// if(primeNum< 2){
//     console.log('sayi 1 den büyük ');
// }else {
//     for ( let i = 2 ; i < primeNum ; i++){
//         if(primeNum % i === 0 ){
//             console.log('is not prime' );
//             isPrime=false
//         }
//     }
// }
// if ( isPrime=== true){
//     console.log('prime number');
// }

// ========================0-100 ARASI TÜM SAYILARIN TOPLAMI ==============

// let toplam = 0 ;
// for(i=0 ; i <=100 ; i++){
//     toplam += i
// }
// console.log(toplam);

// ===============100 E KADAR TEK VE ÇİFT TOPLAMI ==================

// let toplamCift = 0;
// for (i = 0; i <= 100; i += 2) {
//   toplamCift += i;
// }
// console.log(`Çiflerin topalam Sonucu=${toplamCift}`);
// let toplamTek = 0;
// for (i = 1; i <= 100; i += 2) {
//   toplamTek += i;
// }
// console.log(`Teklerin topalam Sonucu=${toplamTek}`);

// =========================================================

// const names = ['ahmet', 'mehmet','ali','veli','deli','selim','emre']
// let i=0
// for(;i<names.length; i++){
// console.log(names[i])
// }
// ==============
// const names =['ali fuat cebesoy','halis demir','ismetinönü','rauf orbay']
// for(let i = 0 ; i< names.length; i++){
//     console.log(names[i])
// }

// =============================================================

// let numbers = [5,10,15]

// let sum =5

// for (let i=0 ; i < numbers.length; i++){
//     sum+= numbers[i]
// }
// console.log('toplam', sum);

// ===============================

// let countries = ['turkey','kıbrıs','usa']
// let newCountries = []

// for(let i = 0; i< countries.length; i++){
//     newCountries.push(countries[i].toUpperCase())
// }
// console.log(countries);
// console.log(newCountries);

//! ==================ORTA SEVİYE ALIŞTIRMALAR=========================

// !0-100 ARASI N ADET TAMSAYI ÜRETEN KOD YAZINIZ.

// let number = +prompt('enter sayi')

// for(let i= 0 ; i<number ; i++){
//   let  randomNum= Math.round(Math.random() * 100 )
//     console.log(`${i}.random number ${randomNum}`);
// }

//! =========GİRİLEN SAYININ ASAL OLUP OLMADIGINI BULAN KODU YAZINIZ============

// let asal =+prompt('enter number')
// let isPrime = true
// if (asal <2){
//     console.log('sayı 1 den küçük');
// }else {
//     for(let i =2 ; i< asal ; i++){
//         if(asal % i ===0){
//             console.log('asal degildir');
//             isPrime=false
//         }
//     }
// }
// if (isPrime ===true){
//     console.log('asal sayidir');
// }

// ================ASAL SAYI=====================

// let number = +prompt("Enter a Number");
// let sonuc = true;
// if (number < 2) {
//   alert("sayı 2 den küçük");
// } else {
//   for (let i = 2; i <number ; i++) {
//     if (number % i === 0) {
//       alert("asal degildir");
//       sonuc = false;
//       break;
//     }
//   }
// }
// if (sonuc === true) {
//   alert("sayı asaldır");
// }
//! ==================  0 - 100 ARASINDA BİR SAYI İSTE ===========================

// let sayi = +prompt('0-100 arası bir sayı giriniz')

// while(sayi <0 || sayi>100){
//     console.log('sayi 0-100 arasında OLMALI!');
//     sayi = +prompt('0-100 arası bir sayı giriniz')
// }
// for(;sayi <0 || sayi>100 ;){
//     console.log('sayi 0-100 arasında OLMALI!');
//     sayi = +prompt('0-100 arası bir sayı giriniz')
// }
// console.log(`girilen sayi : ${sayi}`);
// if(sayi<0 || sayi > 100){
//     console.log('yanlış sayi');
// }





