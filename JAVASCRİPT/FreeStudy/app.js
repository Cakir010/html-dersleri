
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


// const n1 = prompt("number1")
// const n2 = prompt("number2")
// const n3 = prompt("number3")

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

// console.log("-------------------------------------")
// console.log(" ***** 4 Islem Hesap Makinasi ****** ")
// console.log("-------------------------------------")
// const sayı1 = Number(prompt("1.Sayiyi Giriniz:"))
// const islem = prompt("Islemi giriniz: +,-,*, /")
// const sayı2 = +prompt("2.Sayiyi Giriniz:")
// let sonuc = 0
// switch (islem) {
//   case "+":
//     sonuc = sayı1 + sayı2
//     break
//   case "-":
//     sonuc = sayı1 - sayı2 
//     break
//   case "*":
//     sonuc = sayı1 * sayı2
//     break
//   case "/":
//     sonuc = sayı1 / sayı2
//     break
//   default:
//     alert("Yanlıs islem girisi")
//     break
// }
// console.log(`${sayı1} ${islem} ${sayı2} = ${sonuc}`)




// ==================================TERNARY=====================================


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


// ==============================================================
//                SELMAN HOCA İLE YAPILAN ÖRNEKLER
// ==============================================================


//? Soru-1  1000 ile 2000 arasındaki 13 e bölümünden 3 kalan sayıları konsola yazdırınız ?

// let x = 16
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

for(let i=1; i<=100;i++){
console.log(i);
if(i%15===0){
    console.log('fizzBuzz')
}else if (i % 5 ===0){
    console.log('buzz')
}else if (i%3===0){
    console.log('fizz');
}else{

    console.log(i);
}
}

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

for(let i = 1 ;i<=5;i++){
    let result =''
    for(let j = 1 ;j<=5;j++){
        result +=' *'
        
        
}
console.log('\n');
console.log(result);
}

   









//? soru-8 Aşağıdaki çıktıyı konsola yazdırınız ?
//? O
//? OO
//? OOO
//? OOOO
//? OOOOO
//? OOOOOO
//? OOOOOOO


//? soru-9 Aşağıdaki çıktıyı konsola yazdırınız ?
//?    O
//?   OOO
//?  OOOOO
//? OOOOOOO




































































