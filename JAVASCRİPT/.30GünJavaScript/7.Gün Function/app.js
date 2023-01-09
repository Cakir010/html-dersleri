// function merhaba (name , age){
//     if(typeof name === 'undefined') name = 'bilgi Yok';
//     if (typeof age === 'undefined') age= 'bilgi yok'
//     console.log(`İsim : ${name} Yaş: ${age}`);
// }
// merhaba('yunus' , 28);
// merhaba('Emre', 30)
// merhaba()

// // ===========

// function araba(model , renk) {
//    if(typeof araba ==='undefined') model= 'bigl girişi yapılmadı'
//    if(typeof araba ==='undefined') renk= 'bigl girişi yapılmadı'
//     console.log(`model:${model} renk:${renk}`);
// }
// araba('ford' , 'beyaz')
// araba('wolksvagen', 'lacivert')

//!burada merhaba isminde bir fonksiyn tanımladık ve içine isim ve yaş bilgisi olusturduk. bunları daha sonra cagırmak için merhaba fonksiyonunu kullanarak name ve age degişkenlerine deger atayabiliriz fakat herhangi bir deger girmegimizi varsayarsak bize undefined dönderecektir. fakat biz if koşulu ile bilgi girmegimiz takdirde bilgi yok tanımlamasını yaparsak merhaba fonksiyonumuza deger atamadıgımız takdırde bize bilgi yok ifadesini yazdıracaktır.
// =======================
// ÖR=========

// const database = {
//     host: 'localhost',
//     add:function(){
//         console.log('Eklendi');
//     },
//     get:function(){
//         console.log('Elde Edildi');
//     },
//     update:function(id){
//         console.log(`id: ${id} Güncellendi`);
//     },
//     delete:function(id){
//         console.log(`id: ${id} Silindi`);
//     }
// }
// console.log(database.host);
// database.update('192.168.1.16')

// function square() {
//     let num = +prompt('gir')
//     let sq = num * num
//     console.log(sq)
//   }

//   square() // 4

//   function printFullName (){
//     let firstName = 'Asabeneh'
//     let lastName = 'Yetayeh'
//     let space = ' '
//     let fullName = firstName + space + lastName
//     console.log(fullName)
// }

// printFullName() // calling a function

// =====================================

// function veriYazdir() {
//     let ad = 'yunus emre'
//     let soyad = ' çakır'
//     let yaş = 28
//     let boy = 175
//     let hepsi = ad + soyad + yaş + boy
//     console.log(hepsi);
// }

// veriYazdir()

// function  database (){
//     let firstname= 'yunus emre'
//     let lastname= '  cakır'
//     let space =' '
//     let toplam = firstname + space + lastname
// console.log(toplam);

// }
// database()

// function gelecekolan(){
//     let deger1='biz'
//     let deger2='ögrendik'
//     let sonuc= deger1 + deger2
//     console.log(sonuc);
// }
// gelecekolan()

// function functionName(){

// }
// functionName();

// ====================

// let uzunluk= +prompt('uzunluk giriniz')
// let genislik= +prompt ('genislik giriiz');

// const areaOfRectangle = (uzunluk,genislik)=> uzunluk*genislik
// console.log('dikdörtgen alanı', areaOfRectangle(uzunluk,genislik));

// let uzunluk = +prompt('uzunluk giriniz')
// let genislik = +prompt('genislik girin')
// let yükseklik= +prompt('yükseklik girin')

// const volumeOfRectPrism =(uzunluk  , genislik , yükseklik) => uzunluk * genislik * yükseklik
// console.log('ücgenin alanı ' , 'volumeOfRectPrism(uzunluk ,genislik');

// const pi = Math.PI
// let r =3
// const alan = bul =>pi*r*r
// console.log( alan(r) );

// let number =3
// const pi= Math.floor(Math.PI)

// let sonuc=pi *number*number

// console.log(sonuc);

// let agırlık =+prompt ('agırlık giriniz')
// let boy = +prompt ('boy gir')

// const bmi = agırlık / (boy * boy)

// console.log(bmi);

// if(bmi < 18.5){
//     console.log('zayıf');
// }

// const ay = +prompt('Ay giriniz')
// //  ay= ()=>{
// //    return
// // }

// switch (true) {
//     case ay ==11 :
//     case ay ==12 :
//     case ay ==1 :
//     case ay ==2 :

//         console.log('kış ayıdır');
//         break;
//     case ay == 3:
//     case ay == 4:
//     case ay == 5:

//         console.log(`${ay} ilkbahar ayıdır`);
//         break;
//     case ay == 6:
//     case ay == 7:

//         console.log(`${ay} sonbahar ayıdır`);
//         break;
//     case ay === 8:
//     case ay === 9:
//     case ay === 10:
//         console.log(`${ay} yaz ayıdır`);
//         break;

//     default:
//         break;
// }

// =========================================
// function square() {
//     let num = 2
//     let sq = num * num
//    return sq
//   }

//  let hello = square()
// console.log(hello);

// function number (){
//     let num1 =2
//     let num2= 5
//     const sum = num1 * num2 * 132
//    return sum
// }
//  let toplam = number()
// console.log(toplam);

// function printFullName() {
//   let firstName = "Asabeneh";
//   let lastName = "Yetayeh";
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   console.log(fullName);
// }

// printFullName();

// function string() {
//   let isim = "yns";
//   let soyad = "ckr";
//   let toplam = isim + soyad;
//   console.log(toplam);
// }
// string();

// function string() {
//   let isim = "yns";
//   let soyad = "ckr";
//   let toplam = isim + soyad;
//   console.log(toplam);
// }
// string();

// function addTwoNumbers() {
//     let numOne = 2
//     let numTwo = 3
//     let total = numOne + numTwo
// return total

// }
// let bir = addTwoNumbers()
// console.log(bir);

//  =====DAİRE ALANI ====
// function areaOfCircle (r){
//     let area =  Math.PI * r * r
//     return area
// }
// console.log(areaOfCircle(2));

// function areaOfCircle(r) {
//     let area =  Math.floor(Math.PI * r * r)
//     return area
// }
// console.log(areaOfCircle(4));


// function dikdortgenAlanı() {
//     let uzunkenar= 10
//     let kısakenar = 5
//     let hesap = uzunkenar + kısakenar
//     return hesap
// }
// console.log(dikdortgenAlanı());


// function perimeterOfRectangle() {
//     let uzunluk = 30
//     let genişlik = 20
//     let çevre = 2*(uzunluk + genişlik )
//     return çevre
// }
// console.log(perimeterOfRectangle());






// // ===================

// function sumArrayValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//     }
//     return sum;
//   }
//   const numbers = [1, 2, 3, 4, 5,10];
// //       //calling a function
//   console.log(sumArrayValues(numbers));

// function sumArrayValues(array){
//     let toplam =0
// for(let i = 0 ; i< array.length ; i++ ){
//     toplam = toplam+ array[i]
// }
// return toplam
// }
//  let dizi =[2,3,4,5,6,7,50,11111]
// console.log(sumArrayValues(dizi));

// ===========================
// const sumAllNums = (...args) => {

//  console.log(args)
// }

// sumAllNums(1, 2, 3, 4)
// // [1, 2, 3, 4]

// function greetings(name = 'Peter') {
//     let message = `${name}, welcome to 30 Days Of JavaScript!`
//     return message
//   }

//   console.log(greetings())
//   console.log(greetings('Asabeneh'))


// ===========================================================
// function fullName(){
//     let firstname ='yunus emre'
//     let space = ' '
// let lastName= 'cakır'
// let sum = firstname + space + lastName
// console.log(sum);
// }
// fullName()
// ====================================================

// function addTwoNumbers (){
//     let number = 5;
//     let number2 = 10;
//     let toplam = number + number2
//     return toplam
// }
// let sonuc = addTwoNumbers()
// console.log(`toplam sayi: ${sonuc}`);

// =============================================================

// function  areaOfRectangle(uzunluk , genişlik){
//     // let uzunluk
//     // let genişlik
//     let alan = uzunluk * genişlik
//     console.log(alan);
//     return alan
// }
// areaOfRectangle(5 , 5);

// ========================================================

// function perimeterOfRectangle (uzunluk , genişlik){
// let çevre = uzunluk * genişlik *2
// console.log(çevre);
// return çevre
// }
// perimeterOfRectangle(3 , 3)

// ======================================================

// function volumeOfRectPrism(){
//     let uzunluk=5
//     let genişlik=6
//     let yükseklik=7
// const hacim = uzunluk*genişlik*yükseklik
// console.log(hacim);
// return hacim
// }
// volumeOfRectPrism()

// =====================================================

// function AreaOfCircle(r){
//     let alan = Math.PI*r*r
//     console.log(alan);
//     return alan
// }
// AreaOfCircle(4)

// =====================================================

// function convertCelsiusToFahrenheit(c){
// let f= (c*9/5)+32
// console.log(f);
// return f
// }
// convertCelsiusToFahrenheit(5)

// =============================================

// function bmi(){

//     let agırlık = 88
//     let boy = 1.75
//     let hesap = 88 /(1.75 *2)
//     console.log(hesap);

//     return hesap
// }
// bmi();

//     if (bmi <= 18.5){
//     console.log('zayıf');

// }else if (bmi<18.5 && bmi>24.9){
//     console.log('Normal');
// }else if(bmi <25 && bmi>29.9){
//     console.log('fazla kilolu');
// }else if(bmi >= 30){
//     console.log('obez');
// }













// ==========================COURSES==============


function outer() {
    let x = 15; //declaration in outer scope
function inner() {
    console.log(x); //outer scope is captured on declaration.
}
    return inner; //x goes out of scope afterr outer returns

}

let innerWithX = outer();
innerWithX(); //we can still access x