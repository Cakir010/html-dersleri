let number1 = "11";
number1 = parseInt(number1);
console.log("number1:", number1, typeof number1);

let number2 = "11";
number2 = parseInt(number2);
console.log("number2:", number2, typeof number2);

// ===============STRİNG İFADELER =================

let email = "ynsckr01@gmail.com";
let firstName = "yunus emre";
let lastName = "CAKİR";

// karakter sayısını ögrenmek ===================

console.log(email.length);

// İLK KARAKTERİ BULMAK =======================

console.log(firstName[0]);

// BÜYÜK - KÜÇÜK HARF YAPMA =====================

firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

// string içindeki bir bilgiyi aramak yerini bulmak

console.log(email.search("@"));
console.log(email[15]);

// BELLİ BİR YERE KADAR OLANI ALMAK ================= slice

let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

// biligiy degiştirmek .==============

email = email.replace("gmail.com", "kodluyoruz.org");
console.log(email);

//İSTEDİĞİM BİLGİ VARMI ? ============================

email.includes("dasdads");
email.includes("@");






// ?================================================================
//? =============================================================

//! ==========KARŞILAŞTIRMA VE MANTIKSAL OPERATÖRLER==============

// ?==========================================================
//? ================================================================

let price = "100";
let user = "quest";

// =====EŞİTSE

console.log(price == 1);
console.log(price == 100);
//======= HEM DEĞERİHE DE TÜRÜ EŞİTSE
console.log(price === 1);
console.log(price === "100");

// EŞİT DEĞİLSE !=   =================

console.log(user != "quest");

// KÜÇÜKSE==============
console.log(price <= 100);

// BÜYÜKSE===============
console.log(price >= 100); //sadece büyükse false ama büyük eşitse true

// BÜYÜK VEYA EŞİTSE=================

console.log(price >= 100);

// && VE DEĞERİ ================
price = 0;
console.log(price > 0 || user != "quest");

// || VEYA  DEĞERİ =======================

console.log(price > 0 || user == "quest");

// !===================== IF YAPISI =================

// EHLİYET ÖRNEGİ=========================

// let usurName = prompt('kullanıcı adınız: ')
// let age= prompt('yaşınız:')

// if (usurName && age >=18){
//     console.log('ehliyet alablir');
// }else if (!usurName){
//     console.log('kullanıcı adı girilmedi');
// }else if (!(age >=18)){
//     console.log('yaşınızı giriniz veya 18 yasından kucuksunuz ');
// }

// ASKERE GİDER ÖRNEĞİ ============================

// let usurName = prompt('kimlikteki ad ve soyadınız: ')
// let age = prompt('yaşınızı giriniz:')
// let city = prompt('şehir giriniz')

// if (usurName && age >=18 && city){
//     console.log('askere gidebilir');
// }else if (!usurName){
//     console.log('adınızı girmediniz');
// }else if (!(age >=18)){
//     console.log('yaşınız küçük veya yaş giriniz');
// }else  if(!city){
//     console.log('şehir girinizz');
// }

// EVLENME ÖRNEGİ=============================

// let home = prompt('Ev bilgisi gir:')
// let car= prompt('araç bilgisi gir:')

// if (home && car )
// console.log('evlenebilirsin' );
// else if (!home){
//     console.log('eviniz yok veya varda söylemiyorsunuz');
// }else if (!car){
//     console.log('aracınız yok evlenemezsiniz');
// }

// let userName = prompt('kullanıcı bilgisi yazınız')
// let info = document.querySelector('#info')
// info.innerHTML = `${userName ? userName: 'kullaıcı bilgisi bulunamadı:('}`

// !========================NOT HESAPLAMA =============================

/*!
 PROMPT İLE ALDIGIN BİLGİYİ #İNFO YA YAZDIR 
1)AA 90-100
2)BA 85-89
3)BB 80-84
4)CB 75-70
5)CC 77-74
6)DC 65-69
7)DD 60-64
8)FD 50-59
9)FF 0-49
*/

// let not = prompt('puanı girin')
// let textInfo;

// if(not >=0 && not <=100){

// if (not >=90){
//     textInfo='AA'
// }else if (not >=85){
//     textInfo='BA'
// }
// else if (not >=80){
//     textInfo='BB'
// }
// else if (not >=75){
//     textInfo='CB'
// }
// else if (not >=70){
//     textInfo='CC'
// }
// else if (not >=65){
//     textInfo='DC'
// }
// else if (not >=60){
//     textInfo='DD'
// }
// else if (not >=50){
//     textInfo='FD'
// }
// else if (not < 50){
//     textInfo='FF'
// }

// }else{
//    textInfo =  'bilgiler dogru degil'
// }

// console.log(textInfo);

// !=============================================================

// PROMPT İLE ALDIGIN BİLGİYİ #İNFO YA YAZDIR
// 1)AA 90-100
// 2)BA 85-89
// 3)BB 80-84
// 4)CB 75-70
// 5)CC 70-74
// 6)DC 65-69
// 7)DD 60-64
// 8)FD 50-59
// 9)FF 0-49

// let not = prompt ('notunuzu giriniz')
// let textInfo ;

// if (not < 0 && not > 100){

// if(not >=90){
//     textInfo='AA'
// }else if  (not >=85){
//     textInfo='BA'
// }else if (not >=80){
//     textInfo ='BB'
// }else if(not>=75){
//     textInfo='CB'
// }else if (not>=70){
//     textInfo = 'CC'
// }else if (not>=65){
//     textInfo='DC'
// }else if (not >=60 ){
//     textInfo='DD'
// }else  if (not>=55){
//     textInfo='FD'
// }else if (not < 50 ){
//     textInfo='FF'
// }
// }else{
//     textInfo='yanlış'
// }

// console.log(textInfo);

//! =============================================================

// let sayi= prompt ('sayı gir ')

// if(sayi<0){

// if (sayi > 0){
//     console.log(`${sayi} is a pozitive number`);
// }
// }console.log(`${sayi} is a negative number`);

//! ==========================================================

// let weather = prompt ('sunny')
// if (weather = 'rainy'){
//     console.log('you need a rain coat');
// }else if (weather === 'cloudy'){
//     console.log('It might be  could you need a jacket ');
// }else if (weather ==='sunny '){
//     console.log('go out freely');
// }else {
//     console.log('no need for rain coat');
// }

//! ========================

// let hava = prompt('Hava kac derece')
// if( hava >= 20 ){
//     console.log('hava sıcak tisört giyebilirsin');
// }
// if (hava > 0 && hava <20){
//     console.log('hava ılık ceket giy');
// }
// if (hava <= 0 ){
//     console.log ('hava soguk');
// }
// !==========================

// let num = prompt('Enter a number')
// switch (true) {
//     case num > 0:
//         console.log('number is a positive ');
//         break;
// case num == 0 :
// console.log('number is zero');
// break;
// case num<0 :
// console.log('number is a negatve ');
// break;
//     default:
//         console.log('enter number ');
//         break;
// }
// !====================================
// let num = prompt('enter number')

// switch (true) {
//     case num >0 :
//         console.log('number pos');
//         break;
//     case num ==0 :
//         console.log('number zero');
//         break;
//     case num < 0:
//         console.log('number neg');
//         break;

//     default:
//         console.log('rakam giriniz');
//         break;
// }
// !============================================================
// let age = prompt('enter age')
// switch (true) {
//     case age>=18:
//         console.log('ehliyet alabilir');
//         break;
// case age<18:
//     console.log('alamaz');
// break;
//     default:
//         console.log('yas giriniz');
//         break;
// }

// !====================================================================

// let dolar ='1000'
// let tl ='500'

// let totalMoney = dolar + tl
// let totalMoney1 = +dolar + +tl
// console.log(totalMoney1);

//! =======================================================================

// let age = prompt('Enter is age')
// if  (age>= 18){
//     console.log('ehliyet alablir');
// } if ( age < 18 ){
//     console.log('alamaz');
// }
//! ===========================================================

// let number = prompt(' Enter number')

// if (number>0){
//     console.log(`${number} is a positive number`);
// }else if (number <0){
//     console.log(`${number}  is a negative number `);
// }else if(number ==0){
//     console.log(`${number } is zero`);
// }
//! =======================================================
// let num1= prompt('enter number')
// let num2= prompt('enter number')
// let num3= prompt('enter number')

// if (num1>num2 && num1>num3){
//     console.log(`${'num1'}i a biggest`);
// }else if (num2>num1 && num2>num3){
//     console.log(`${'num2'}is a biggest`);
// }else if (num3>num1 && num3 >num2){
//     console.log(`${'num3'} is a biggest`);
// }
//! =========================================================
// let biggest = n1

// if(n2 >= biggest){
// biggest =n2
// }
// if(n3>= biggest){
// biggest=n3

// }
// console.log(`${biggest} is a bigest`);
//! ===================================================

// let n1 = +prompt('sayi giriniz')
// let operator = prompt('operator giriniz: * ,  +  ,  -  ,  /')
// let n2 = +prompt('işlem giriniz')

// if(operator== '*'){
//     console.log(n1*n2);
// }else if (operator== '+'){
//     console.log(n1+n2);
// }else if (operator == '-'){
//     console.log(n1-n2);
// }else if (operator == '/'){
//     console.log(n1/n2);
// }else{
//     console.log('dikkat virus');
// }

//! ====================================================

// let ay = +prompt('Ay giriniz')

// switch (true) {
//     case ay ==11 :
//     case ay ==12 :
//     case ay ==1 :
//     case ay ==2 :

//         console.log('kış ayıdır');
//         break;
//     case ay == 3,4,5:
//         console.log(`${ay} ilkbahar ayıdır`);
//         break;
//     case ay == 6,7:
//         console.log(`${ay} sonbahar ayıdır`);
//         break;
//     case ay === 8,9,10:
//         console.log(`${ay} kış ayıdır`);
//         break;

//     default:
//         break;
// }
//! =================================

// let sayi = prompt('bir sayi giriniz')

// if(sayi%2 ==0){
//     console.log(`${sayi} is a çift`);
// }else {
//     console.log('tek sayidir');
// }

//! ===========================================

// let id = prompt('Kullanıcı ID giriniz')
// let password = prompt('Password giriniz')

// k='admin'
// p='12345'

// if(id== k && password==p){
//     console.log('giriş başarılı');
// }else if (id !==k || password!==p ){
//     console.log('giriş başarısız');
// }

// !=====================================================

// const day = prompt("Please select a day").toLowerCase()
// switch (day) {
//   case "monday":
//   case "thuesday":
//   case "wednesday":
//   case "thursday":
//     console.log("Inclass");
//     break;
//   case "friday":
//     console.log("Teamwork");
//     break;
//   case "saturday":
//     console.log("Inclass and workshop");
//     break;
//   case "sunday":
//     console.log("Self study.");
//     break;
//   default:
//     console.log("Incorrect day");
// }

// const day = prompt("Please select a day: ").toLowerCase() //! girilenleri kucuk harfe cevir
// switch (day) {
//   case "monday":
//   case "thuesday":
//   case "wednesday":
//   case "thursday":
//     console.log("Inclass")
//     break
//   case "friday":
//     console.log("Teamwork")
//     break
//   case "saturday":
//     console.log("Inclass and workshop")
//     break
//   case "sunday":
//     console.log("Self study.")
//     break
//   default:
//     console.log("Incorrect day")
// }

//! ==============================================================

// let gelir = +prompt('gelir giriniz')
// let gider = +prompt('gider giriniz')

// const kredi =

// gelir - gider >= 5500  ? 'kredi kullanablir' : 'kredi kullanamaz'
// console.log(kredi);

//! ========================================
// ?0 - 100 TAHMİN OYUNU
// do{
// let deneme = 5
// let tahmin
// const randomNumber = Math.round(Math.random() * 100)

// for (i = deneme ; i >0 ; i--){
//     tahmin = +prompt('0-100 arası rakam gir')
//     if(tahmin === randomNumber){
//         console.log(`Tebrikler kazandıız ${deneme -i + 1} deneme`);
//         break
//     }else if (tahmin < randomNumber){
//         console.log('yukarı');
//     }else if (tahmin > randomNumber){
//         console.log('aşagi');
//     }
// }
// if (tahmin !== randomNumber){
//     console.log(`Sorry , Numara buydu : ${randomNumber}`);
// }
// again = confirm('tekrar oynamak istermisiniz')
// }while(again)

// !===========================================================

// let firstName = null
// console.log(firstName);

// // !TOPLAMA CIKARMA İŞLEMİ===========

// let sayı1=5
// let sayı2=6

// let sum = sayı1 + sayı2
// console.log(sum);

// //! ÇEMBERİN ALANI HESAPLA===============

// const pi =3.14
// let radius=100

// const areaOfCircle =pi * radius * radius
// console.log(areaOfCircle);

// //! BİR CİSMİN AGIRLIGI HESAPLA

// const gravity = 9.81
// let mass= 72

// const weight= gravity* mass
// console.log(weight);

// // !==============================================

// // ?=========ARTIRMA OPERATÖRLERİ================

// //! =================================================

// let count = 0

// console.log(count++);
// console.log(count);

// // ================ÜÇLÜ OPERATÖRLER ===========

// let isRaining = true
// // isRaining
// console.log('you need a rain coat');
// console.log('no need for a rain coat');

// // !ÖR1

// // let number = 5
// // number > 5
// // console.log(`${number} is a positive number `);
// // console.log(`${number} is a negative number`)
// // number = -5

// // alert('JAVASCRİPTE HOŞGELDİNİZ')

// // prompt ('required text' , 'optional text')

// let number = prompt ('enter number')
// console.log(number);

// console.log("*****Operators******");

// console.log("*****Operators*****");

// const cola = 20;
// const chocolate = 5;
// const biscuits = 15;
// const totalPrice = cola + chocolate + biscuits;
// console.log(totalPrice);

// const comments = 50 + 40 + "TL";
// console.log(comments);

// const firstName = "Ahmet";
// const lastName = "Cakir";
// console.log(firstName + " " + lastName);

// const s1 = 5;
// s2 = "7";

// s3 = "three";
// console.log(s1 + s2);

// console.log(s1 + s2);
// console.log(s1 - s2);
// console.log(s1 - s3);

// ============================================

//     MANTIKSAL OPERATÖRLER

// ===========================================

// const v1 = true;
// const v2 = false;

// console.log(v1 && v2);
// console.log(v1 || v2);

// const age =prompt("please enter your age")
// const healty = confirm("ar you healty?")
// console.log(age, healty);

// if ( age >=18  && healty ==true){
//     console.log("ehliyet alabilir");
// } else {
//     console.log("ehliyet alamaz");
// }

// ?Javascripte 6 adet falsy deger vardır
// const nal= null;
// const tanimsiz =undefined;
// const bos =""
// const falsy= false
// const sifir = 0
// const sayiDegil = NaN

// console.log(v1 &&  false && null & true && true); // ? false
// console.log(v1 || 0);

// const num5 =0
// if (num5 === true)
// {
//     console.log("sayi sifir degildir");
// } else {
//     console.log("sayi sifirdir");
// }

// ===================================================

//                   TIP DONUSUMLERI

// ===================================================

// const dolar ="1000"
// const tl = "500"

// const totalMoney = Number(dolar) + Number(tl)
// const totalMoney1 = +dolar + +tl
// const totalMoney2=parseInt(dolar)+parseInt(tl)
// const totalMoney3=parseFloat(dolar)+parseFloat(tl)

// console.log(totalMoney2);
// console.log(Number(null));// 0
// console.log(Number("12.3")); //12.3
// console.log(Number("1ab")); //NaN
// console.log(Number("0b101")); //5  binary
// console.log(Number("0x10")); //16 hexadesimal
// console.log(String(55));

// ==============================================================

// ----------------------KARAR DEYİMLERİ-------------------------

// ==============================================================

//  ?conselden girilen sayının pozitif mi negatifmi ya da 0 oldugunu tespit ederek yazdırınız

// const num = prompt("Please enter a number:")

// if(num > 0)
// {
//     console.log(`${num} is positive`);
// } else if (num < 0) {
//     console.log(`${num} is negative`);
// } else {
//     console.log(`${num} is equal to zero`);
// }

// conselden  girilen 3 tamsayının en büyügünü bulan  programı yazınız

// const n1 = +prompt("number1")
// const n2 = +prompt("number2")
// const n3 = +prompt("number3")

// if (n1>=n2 && n1 >=n3){
//     console.log(`${n1} is big`);
// }else if (n2>=n1 && n2 >=n3){
//     console.log(`${n2} is big`);
// }else if(n3>=n1 && n3 >=n2) {
//     console.log(`${n3} is big`);
// }

// 2.yöntem

// let biggest = n1

// if (n2 >= biggest){
//     biggest = n2
// }

// if(n3 >=biggest){
//     biggest = n3
// }

// console.log(`${biggest} is big`);

// 3.yöntem

// console.log(`The Biggest`: ${`${n1} is big`});ı

// const year=11
// const kidsCount=3
// const graduate=true
// constlangCount=5

// const  increase=
//  year >= 10 && kidsCount >= 2 && graduate  == true && langCount  >=2

// if(increase === true){
//     console.log("he or she deserves an increased salary ");
// }

// ========================================================================

// SWITCH-CASE (Kosşul sayısı 4 den fazla oldugunda daha anlaşılır kod yazmak için kullanılır.)

// ========================================================================

console.log("-------------------------------------")
console.log(" ***** 4 Islem Hesap Makinasi ****** ")
console.log("-------------------------------------")
const sayı1 = Number(prompt("1.Sayiyi Giriniz:"))
const islem = prompt("Islemi giriniz: +,-,*, /")
const sayı2 = +prompt("2.Sayiyi Giriniz:")
let sonuc = 0
switch (islem) {
  case "+":
    sonuc = sayı1 + sayı2
    break
  case "-":
    sonuc = sayı1 - sayı2
    break
  case "*":
    sonuc = sayı1 * sayı2
    break
  case "/":
    sonuc = sayı1 / sayı2
    break
  default:
    alert("Yanlıs islem girisi")
    break
}
console.log(`${sayı1} ${islem} ${sayı2} = ${sonuc}`)

==================================TERNARY=====================================

// ÖRNEK : KALDI - GECTİ

// const grade = +prompt("please enter your grade:?")

// const result = grade >=  50 ? "Succesful" : "Failed"
// console.log(` ${result} with ${grade} `);

// 2.Yöntem

// const grade = +prompt("please enter your grade:?")

// const result =
// grade >= 50

// ?  `you are succesful with ${grade}`
// :  `you are failed with ${grade}`
// console.log(result);

// // ====================================

// // Ör:

// const gender ="male"
// const  age= 20
// const healty =true
// const status ="Teacher"

// age>=18 && gender === "male && healty === true"
// ? alert ("Military service is required")
// : alert ("Military service is not required")

// !======================================================================================
//! ========================FOR WHİLE ÖRNEKLER ====================================

// const n = +prompt('sayı gir')
// let sum = 0
// for (let i =1 ; i <= n ; i++){
//     sum += i
// }
// console.log('sum:' , sum);

// !======================================
// 0-100 ARASINDA N ADET RASTGELE TAMSAYI ÜRETEN KOD

// const num = +prompt('Enter a number2')

// for(let j=0 ; j < num ; j++){
//     const randomNum = Math.round(Math.random() * 100)
//     console.log(`${j}. random number : ${randomNum}`);
// }

// let sayi = +prompt ('Enter a sayi')
// for (let i = 0; i<sayi ; i++){
//     const randomNum =  Math.round(Math.random() * 100)
//     console.log(`${i} randomNum: ${randomNum}`);
// }

// !=================================================================
GİRİLEN SAYININ ASAL OLUP OLMDGNI YAZAN KOD

let primeNum =+prompt('enter a number')

let isPrime = true
if(primeNum< 2){
    console.log('sayi 1 den büyük ');
}else {
    for ( let i = 2 ; i < primeNum ; i++){
        if(primeNum % i === 0 ){
            console.log('is not prime' );
            isPrime=false
        }
    }
}
if ( isPrime=== true){
    console.log('prime number');
}

// let primeNum =+prompt ('enter a number')
// let isPrime = true
// if (primeNum<2){
//     console.log('sayi 1 den büyük');
// }else{
//     for(let i=2 ; i < primeNum ; i++){
//         if(primeNum % i === 0){
//             console.log('is not prime number');
//             isPrime=false
//         }
//     }
// }

// if (isPrime=== true){
//     console.log('prime number');
// }

//! =======================================WHİLE============

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

let grade = +prompt("your grade");

while ( grade <0 || grade > 100){
console.log('grade should be 0-100');
grade = +prompt('your grade')
}

for (; grade < 0 || grade > 100; ) {
      console.log("Grade should be 0-100")
      grade = Number(prompt("your grade:"))
    }
    
    console.log(`Your grade: ${grade}`)
    
    if (grade < 0 || grade > 100) {
      console.log("Incorrect grade")``
    }
// ===========================


// let not = +prompt('senin notun')

// while (not < 0 || not > 100){
//     console.log('grade should be ');
//     not =+prompt('your not')
// }
// for (; not <0 || not > 100;){
//     console.log('grade should be 0-100 ');
//     not =prompt('your grade')
// }
// console.log(`your grade ${not}`)

// if (not < 0 || not > 100) {
//           console.log("Incorrect grade")
//         }





// // 
//         let n = +prompt("sayi giriniz");
//         let fak = (n) => {
//           if (n == 0) return 1;
//           else return n * fak(n - 1);
//         };
//         console.log(fak(n));




// const factorial=(num)=>{
//     if(num<0){
//       console.log(`The number should be bigger or equal than zero `);
//     }else if (num===0){
//       return 1
//     }else{
//       return num*factorial(num-1)
//     }
//   }
//   let num=+prompt("Enter a number")
//   console.log(`${num}! = ${factorial(num)}`);



// //! ==========FAKTORİYEL HESAPLAMA ORNEGİ============

// const fakt = (number) => {
//     if(number < 0 ){
//         console.log(' Sıfırdan büyük sayı giriniz');
//     }else if ( number == 0 ){
//         return 1
//     }else {
//         return number* fakt(number-1)
//     }
// }
// const number= +prompt('Bir sayı giriniz')
// console.log(`${number} ! ${fakt(number)}`);


















// let x= +prompt('Enter number');
// let fak = (x) => {
//     if(x== 0) return 1;
// else return x * fak(x - 1);
// }
// console.log(`${x} fak (x)`);



// const fakt = 









// ==============================================================
//                SELMAN HOCA İLE YAPILAN ÖRNEKLER
// ==============================================================

//? Soru-1  1000 ile 2000 arasındaki 13 e bölümünden 3 kalan sayıları konsola yazdırınız ?

// let i = 16
// for (let i =1000 ; i<2000 ; i++ ){
// if (i%13 ==3)
// console.log(i);
// }

//? Soru-2  Kullanıcıdan alınan 5 sayının ortalamasını konsola yazdırınız ?
//! CEVAP : BİR YERDE TEKRAR VARSA ORDA LOOPS VARDIR !

// let sayac =0;
// let sum =0 //!Let kullanmamızın sebebi sayacın degisecegindendir
// while (sayac < 5){

//     const sayı=prompt('bir sayı giriniz')
// sum += sayı
//     sayac ++
// }
// console.log(sum / sayac );

//? Soru-3 Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve konsola yazan kodu yazınız ?

// let sum = 0     yanlıs çözüm
// let flag =true
// while (flag){
// const sayı= +prompt('bir sayı giriniz')
// if(sayı < 0){
//     flag = false {

//     }
//         else
//     }

// }
// sum+= sayı
// }
// console.log(sum);

//? Soru-4 Sizden 1'den 100'e kadar sayıları yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz',5'in katlarına gelince 'Buzz'.Hem 3'ün hemde 5'in katlarına gelince 'FizzBuzz' yazdırmanız istenmektedir ?

// for(let i=1; i<=100;i++){
// console.log(i);
// if(i%15===0){
//     console.log('fizzBuzz')
// }else if (i % 5 ===0){
//     console.log('buzz')
// }else if (i%3===0){
//     console.log('fizz');
// }else{

//     console.log(i);
// }
// }

//? Soru-5 bir sayının(number) basamak sayısını yazdıran kodu yazınız ?
// let sayi = 34134134636363634634
// let basamak = 0
// while (true){
//     sayi= Math.floor(sayi/ 10)
//     basamak++
// if(sayi == 0){
//     break
// }

// }
// console.log(basamak);

//? Soru-6 Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini konsola yazdırınız ?  //0 1 1 2 3 5 8 13

//? soru-7 Aşağıdaki çıktıyı konsola yazdırınız ?
//? * * * * *
//? * * * * *
//? * * * * *
//? * * * * *
//? * * * * *

// for(let i = 1 ;i<=5;i++){
//     let result =''
//     for(let j = 1 ;j<=5;j++){
//         result +=' *'

// }
// console.log('\n');
// console.log(result);
// }

//? soru-8 Aşağıdaki çıktıyı konsola yazdırınız ?
//? O
//? OO
//? OOO
//? OOOO
//? OOOOO
//? OOOOOO
//? OOOOOOO
 
// let str = ''
// for (let i = 1; i <= 7; i++) {
//   for (let j = 1; j <= i; j++) {
//     str += 'O'
//   }
//   str += '\n'
// }
// console.log(str)

//? soru-9 Aşağıdaki çıktıyı konsola yazdırınız ?
//?    O
//?   OOO
//?  OOOOO
//? OOOOOOO


// let str = ''
// for (let i = 1; i <= 7; i++) {
//   for (let j = 1; j <= i; j++) {
//     if (i + j >= 8) {
//       str += 'O'
//     } else {
//       str += ' '
//     }
//   }
//   str += '\n'
// }
// console.log(str)


// !==================================================================

// !==============SELMAN HOCA 2. DERS ==============================

// !=====================================================================

// 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit
// console.log(calFahrenheit(30)) // output: 86

function calFahrenheit(cel){
const fahr = cel * (9/5) + 32
return cel + ' derece ' +  fahr +  ' fahrenheit a eşittir'
}
console.log(calFahrenheit(30));






// 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// console.log(reverseString('hello world')) // output: dlrow olleh


// let str= 'Selamun Aleykum'
// function reverseString (str){
// for (let i =str.length -1 ; i >= 0 ; i--){  //DİKEY YAZDIRDI 
// console.log(str[i], i);

// }


// }

// // console.log('selam'[4]);
// console.log(reverseString('hello world'))



let str= 'Selamun Aleykum'
function reverseString (str){
    let str2 ='';
for (let i =str.length -1 ; i >= 0 ; i--){   // yatay 
    
str2 += str[i]
return str2
}


}

// console.log('selam'[4]);
console.log(reverseString('hello world'))







// 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?(Büyük , küçük harf duyarlılığı olmamalıdır.)
// const string = 'selles'
// console.log(isPalindrome(string)) // output: true






// 4- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?
// console.log(findVowels('hello world')) // output: eoo






// 6- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?
// console.log(sumOfDivisors(12)) // output: 28







// 7- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız?
// console.log(isPrime(7)) // output: true























