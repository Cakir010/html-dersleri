// // // ?==============================================
// // // ?            DIZILER (ARRAYS)
// // // ?==============================================

// // console.log("***** ARRAYS ******")

// // //* Dizi Tanimlama
// // //*-----------------------------------------------

// // // ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
// // const names = ["emir", "oğuzhan", "levent", "tarik"]

// // console.log(names)

// // //? 4 (names dizisinin lenght property'sine erisiyoruz.)
// // //* non-primitive verilerde ozellikler olabilir ve bunlara
// // //* erisim . notasyonu ile olabilir.
// // console.log(names.length)

// // const x = 5.234 //? primitive
// // console.log(x.toFixed(2)) //? object wrapper sayesinde
// // //? Primitive'lerde normal sartlarda property olmaz.

// // //? Ancak JS kullanimi kolaylastirmak icin bazi durumlarda
// // //? primitive verileri bir obje sarmlayicisi ile sarmalar.

// // console.log(typeof names) //? JS de array aslinda object dedigimiz base object'den turetilmistir.

// // const emptArr = []
// // console.log(emptArr)

// // // ! 2.Yöntem (Object Constructor)
// // const codingLangs = new Array("C", "C++", "JS", "Go")
// // console.log(codingLangs)

// // const numbers = new Array(3, 2, 1)
// // console.log(numbers) //? (3) [3, 2, 1]

// // //? 10 elemanli bos bir dizi olusturur.
// // const numbers1 = new Array(10)
// // console.log(numbers1) //?(10) [empty × 10]

// // // ! 3.Yöntem (Array.of())
// // const number2 = Array.of(1, 2, 3)
// // console.log(number2) //?(3) [1, 2, 3]

// // const numbers3 = Array.of(5)
// // console.log(numbers3) //? [5]


// // const langs = ["pyhton", "java", " C++", "Javascript"];

// // const a = ["merhaba", 22, null, undefined, 3.14];

// // console.log(a);
// // console.log(langs);
// // // const numbers = [43, 21, 54, 67, 88, 33, 45, 11, 94];

// // // value = numbers.length;
// // // value = numbers[2];
// // // value = numbers[5];
// // // value = numbers[7];
// // // value = numbers[1];
// // // value = numbers[3];
// // // console.log(value);
// // // console.log(numbers);
// // //! ============= ! HERHANGİ BİR İNDEKSTEKİ DEGERİ DEGİŞTİRME
// // numbers[3]= 2500;
// // value = numbers;  // [43, 21, 54, 2500, 88, 33, 45, 11, 94];
// // console.log(value);
// // // !===================  ! Index Of
// // // !ÇAGIRDIGIMIZ DEGERİN HANGİ İNDEXTE OLDUGUNU BULMAK İÇİN
// // value =numbers.indexOf(2500);
// // console.log(value);  //3. INDEXTE

// // //!====================== !PUSH
// // // !===========ARRAY IN SONUNA DEGER EKLEME
// // numbers.push(5555);
// // value=numbers
// // console.log(value);     //[43, 21, 54, 2500, 88, 33, 45, 11, 94,5555];
// // //! ====================== !UNSHIFT
// // //! ============ARRAY IN BAŞINA DEGER EKLEME

// // numbers.unshift(91919);
// // value=numbers;
// // console.log(value);     //[91919,43, 21, 54, 2500, 88, 33, 45, 11, 94,5555];
// // // !======================= ! POP
// // // !=================== SONUNDAN DEGER ATMA

// // numbers.pop()
// // value=numbers;
// // console.log(value);    //[91919,43, 21, 54, 2500, 88, 33, 45, 11, 94];

// // // !======================== ! SHİFT
// // //!======================BAŞINDAN DEGER ATMA
// // numbers.shift()
// // // value=numbers
// // console.log(numbers);     //[43, 21, 54, 2500, 88, 33, 45, 11, 94]

// // // !======================= ! SPLİCE
// // // !============İNDEX İÇİNDEKİ BELLİ BÖLÜMÜ ATMAK İÇİN
// // //! NOT == Burada ilk yazılan degere kadar git onuda al ve son deger ne ise o kadar deger at ama son degeri atma seklinde atma işlemi yapar.
// // numbers.splice(2,3);
// // console.log(numbers);    //[43, 21, 33, 45, 11, 94]

// // // !======================== ! REVERSE
// // // !==================ARRAYI TERS CEVİRMEK İÇİN
// // numbers.reverse();
// // value=numbers;
// // console.log(value);      //[94, 11, 45, 33, 21, 43]
// // // !========================== ! SORT
// // numbers.sort();
// // console.log(numbers);   //[11, 21, 33, 43, 45, 94]

// // value = numbers.sort(function(x,y){
// //     return x-y;

// // })

// // // const numbers = [22, 44, 5, 11, 89, 3, 47, 99, 1, 81, 7];
// // // numbers.sort();
// // // value = numbers;
// // // console.log(value); //[1, 11, 22, 3, 44, 47, 5, 7, 81, 89, 99]

// // // value = numbers.sort(function (a, b) {
// // //   return a - b;
// // // });
// // // console.log(value); // [1, 3, 5, 7, 11, 22, 44, 47, 81, 89, 99]

// // //!Normal yapmış oldugumuz 'sort' işleminde ilk rakamların baz alındıgını ve bize 1'den itibaren bir sıralama yaptıgını biliyoruz. fakat biz rakamların gercek degeriyle küçükten büyüge sıralanmasını istersek function kullanıyoruz.Yukarıda functıon a-b tanımlanmasının açıklması ise, ilk iki rakamı birbirinden çıkarıp sonucu mecburi olarak '-'(eksi) bir deger cıkaracaktır. (Çünkü normal sort sıralamasında ilk başa en küçük rakam gelecek.)js bunu kendisine, bu bir küçükten büyüge sıralama işlemi olarak aktarıp, rakamları artık gercek degerleriyle sıralayacaktır. LMS olan örnekte de aynı mantıkla bakılırsa ilk rakamları baz aldıgı için a<b sorusunun cevabı false oldugu için yine küçükten büyüğe işlemi olarak algılayacaktır.

// // // const numbers = [0, 1 , 6, 3, 77, 20, 99 ];
// // // numbers.sort( function( a , b){
// // //     if(a < b) return 1;
// // //     if(a > b) return -1;
// // //     return 0;
   
// // // });

// // //  console.log(numbers);

// // //! ==================== ÖRNEKLER ================

// // // !=====================FOR İN

// // const adlar = ['ahmet','can','mustafa','ayşe','elif']
// // const soyadlar = ['öztürk','yılmaz','arı','çalı','yazı']


// // const birleştir = (x,y) =>{
// //     let advesoyad=[];
// //     for(let i in x){
// //           advesoyad[i]=`${x[i]} ${y[i]}`
// //     }
// //   return advesoyad;
// // }
// // console.log(birleştir(adlar,soyadlar));

// // //! ========================= FOR OF
// // // elemanların toplamını bulur 
// // const sayılar = [-5,15,22,-4,45,78,-25]
// // let sonuc=0;
// // for (let item of sayılar){
// //     sonuc += item;
// // }
// // console.log(sonuc);

// // // !=============for of 
// // let arabalar = ['BMW','Volvo','mini']
// // let yazı='';
// // for (let arac of arabalar){
// //     yazı += arac + '';
// // }
// // console.log(yazı);   //BMWVolvomini

// // // !===================FOREACH
// // // !herbirini ayrı ayrı yazdırır
// // let ögrenciler = ['john','ali','ahmet']
// // ögrenciler.forEach(yazdır)
// // function yazdır(v){
// //     console.log(v);
// // }





// // // =======================================================================================
// // // ==============================!NOAH HOCAYLA YAPILAN ÖRNEKLER!============================

// // // !diziler farklı veri tiplerini bir arda saklayabilirler 

// // const ageArr = [22,44,55]
// // const people = [
// // 'John',
// // 'Varmont',
// // new Date().getFullYear() - 1990 ,
// // true,
// // ageArr,
// // ]
// // console.log(people);
// // console.log(people[4]);
// // console.log(++people[4][1]); 


// // function polindrom(x){
// //     const test = x.split('').reverse().join('');
// //     if(x===test){
// //         console.log('sayı polindromdur');
// //     }else{
// //         console.log('sayı polindrom degildir');
// //     }
// // }
// // polindrom('6588');


// function polindrom(x) {
//     const test = x.split("").reverse().join("");
//     if (x === test) {
//       console.log(`${x} sayi polindrom sayıdır`);
//     } else {
//       console.log(`${x} sayi polindrom sayıdır değildir`);
//     }
//     return x
//   }
//   console.log(polindrom('77'));
// while (x==!test)


// =======================================================================


// const countries = ['Finland','Sweden', 'Sthiyoya','Denmark', 'Norway', 'IceLand','TR','Irak']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ];


// countries.forEach((v) => console.log(v));
// console.log('*********************************');
// names.forEach(v=>console.log(v))
// console.log('*********************************');
// numbers.forEach((v, i) => console.log(v, i))
// console.log('*********************************');
// const x=countries.map(v=> v.toUpperCase()) 
// console.log(x);
// console.log('*********************************');
// let y= countries.map((v,i) => v.length)
// console.log(y);
// console.log('*********************************');
// let kare = numbers.map(v=> v**2)
// console.log(kare);
// console.log('*********************************');
// let a = names.map(v => v.toUpperCase())
// console.log(a);
// console.log('*********************************');
// let p = products.map(v => v.price)
// console.log(p);
// console.log('*********************************');
// let l=countries.filter((v) => v.toLowerCase().includes('land'))
// console.log(l);
// console.log('*********************************');
// let char=countries.filter(v=> v.length===6)
// console.log(char);
// console.log('*********************************');
// let chart=countries.filter(v=> v.length>=6)
// console.log(chart);
// console.log('*********************************');
// let country=countries.filter(v=> v.startsWith('S'))
// console.log(country);
// console.log('*********************************');
// let salary = products.filter(v =>typeof v.price=='number')
// console.log(salary);
// console.log('*********************************');
// const arr =['ali','veli','deli','sezai',5,33,true,false,'fikret']
// let arr1 = arr.filter(v => typeof v == 'string')
// console.log(arr1);
// console.log('*********************************');
// let total = numbers.reduce((a , c)=> a + c,0  ) 
// console.log(total);
// console.log('*********************************');
// const concatCounties = countries.reduce((total, value) => {
//   return value === "IceLand" ? total + ", and " + value : total + ", " + value;
// }, "Estonia");
// console.log(concatCounties + "are north European countries")
// console.log('*********************************');
// let x3=names.some(v=> v.length >= 7)
// console.log(x3);
// console.log('*********************************');
// let ülke=countries.every(v=> v.includes('land') )
// console.log(ülke);
// console.log('*********************************');
// let ülkeler=countries.find(v=> v.length==6)
// console.log(ülkeler);
// console.log('*********************************');
// let z =countries.findIndex(v=> v.length==6)
// console.log(z);
// let bul = countries.findIndex(v => v == 'norway')
// console.log(bul);
// const bul1=countries.findIndex(v=> v ==='russia')
// console.log(bul1);







// ======================================================
// ===========================================================






const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland",];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
//?3-Use forEach to console.log each country in the countries array.
countries.forEach((v,i)=>console.log(`${i}`,v))
console.log("******3*************");
//?4-Use forEach to console.log each name in the names array.
names.forEach(v=>console.log(v))
console.log("*********4**********");
//?5-Use forEach to console.log each number in the numbers array.
numbers.forEach(v=>console.log(v))
console.log("***********5********");
//?Use map to create a new array by changing each country to uppercase in the countries array.
const a=countries.map(v=>v.toUpperCase())
console.log(a);
console.log("***********6********");
//?7-Use map to create an array of countries length from countries array.
const uzunluk=countries.map(v=>v.length)
console.log(uzunluk);
console.log("***********7********");
//?8Use map to create a new array by changing each number to square in the numbers array

let kare=numbers.map(v=>v**2)
console.log(kare);
console.log("***********8********");

//?9Use map to change to each name to uppercase in the names array
let n=names.map(v=>v.toUpperCase())
console.log(n);
console.log("***********9********");
//?10Use map to map the products array to its corresponding prices.
let p =products.map(v=>v.price)
console.log(p);
console.log("***********10********");
//?11Use filter to filter out countries containing land.
let l=countries.filter(v=>v.toLowerCase().includes("land"))
console.log(l);
console.log("***********11********");
//?12Use filter to filter out countries having six character.
let char =countries.filter(v=>v.length===6)
console.log(char);
console.log("***********12********");
//?13Use filter to filter out countries containing six letters and more in the country array.
let char1 = countries.filter((v) => v.length >=6);
console.log(char1);
console.log("***********13********");
//?14Use filter to filter out country start with 'E';

let count=countries.filter(v=>v.startsWith("S"))
console.log(count);
console.log("***********14********");
//?15Use filter to filter out only prices with values.
let p1=products.filter(v=>typeof v.price=="number")
console.log(p1);
console.log("*****************15*****************");
//?16Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const arr = [true, 1, 45, "ali", "veli", "deli",false,0,5,9];
let ar1=arr.filter(v=>typeof v=="string")
console.log(ar1);
console.log("*****************16*****************");
//?17Use reduce to sum all the numbers in the numbers array.
const nn=numbers.reduce((a,c)=>a+c,0)
console.log(nn);
console.log("*****************17*****************");

?18 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concatCounties = countries.reduce((total, value) => {
  return value === "IceLand" ? total + ", and " + value : total + ", " + value;
}, "Estonia");
console.log(concatCounties + "are north European countries");

console.log("*****************18*****************");
//?20Use some to check if some names' length greater than seven in names array
let n1=names.some(v=>v.length>7)
console.log(n1);

console.log("*****************20*****************");
//?21Use every to check if all the countries contain the word land
let n2 = countries.every((v) => v.includes("land"));
console.log(n2);
console.log("*****************21*****************");
//?22

//?23Use find to find the first country containing only six letters in the countries array
const ülke=countries.find(v=>v.length==6)
console.log(ülke);
console.log("*****************23*****************");
//?24Use findIndex to find the position of the first country containing only six letters in the countries array
const ülke1=countries.findIndex(c=>c.length==6)
console.log(ülke1);
console.log("*****************24*****************");
//?25Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwaybul = countries.findIndex((value) => value === "Norway");
console.log(norwaybul);
console.log("*****************25*****************");
//?26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.


// =========================================================

const kitaplar = ['Roman','Hikaye','Kurgu','Ders']        
const filmler =['Aksiyon','Macera','Polisiye','Love','Dram','Suç','Live']
const sayılar =[1,2,3,4,5,6,7,8,9,10  ]
const food = [
  { ürün: 'Çikolata', fiyat: 5 },
  { ürün: 'cips', fiyat: 6 },
  { ürün: 'oyuncak', fiyat: 3 },
  { ürün: 'sakız', fiyat: 1 },
  { ürün: 'bisküvi', fiyat: 8 },
];

kitaplar.forEach(i => console.log(i))
filmler.forEach(i=> console.log(i))
sayılar.forEach(i=> console.log(i))
let a = kitaplar.map(i=> i.toUpperCase())
console.log(a);
let b = filmler.map(i=> i.toUpperCase())
console.log(b);
let x =filmler.map(i=> i.length)
console.log(x);
let sayi = sayılar.map(i=> i*i)
console.log(sayi);
let uzunluk=filmler.map(i=> i.length)
console.log(uzunluk);
let yiyecek=food.map(i=>i.fiyat )
console.log(yiyecek);
const filmlerInculudes=filmler.filter(i=> i.toLowerCase().includes('dram'))
console.log(filmlerInculudes);
const char=filmler.filter(i=> i.length>6)
console.log(char);
let x1= sayılar.reduce((a,b)=>a+b,0)
console.log(x1);
let f = filmler.filter

const birleştir= filmler.filter(i=> i.concat)
console.log(birleştir +  ' bunlar güzel filmlerdir.');











