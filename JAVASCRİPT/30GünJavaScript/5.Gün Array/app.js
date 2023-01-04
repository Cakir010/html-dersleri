// // ?==============================================
// // ?            DIZILER (ARRAYS)
// // ?==============================================

// console.log("***** ARRAYS ******")

// //* Dizi Tanimlama
// //*-----------------------------------------------

// // ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
// const names = ["emir", "oğuzhan", "levent", "tarik"]

// console.log(names)

// //? 4 (names dizisinin lenght property'sine erisiyoruz.)
// //* non-primitive verilerde ozellikler olabilir ve bunlara
// //* erisim . notasyonu ile olabilir.
// console.log(names.length)

// const x = 5.234 //? primitive
// console.log(x.toFixed(2)) //? object wrapper sayesinde
// //? Primitive'lerde normal sartlarda property olmaz.

// //? Ancak JS kullanimi kolaylastirmak icin bazi durumlarda
// //? primitive verileri bir obje sarmlayicisi ile sarmalar.

// console.log(typeof names) //? JS de array aslinda object dedigimiz base object'den turetilmistir.

// const emptArr = []
// console.log(emptArr)

// // ! 2.Yöntem (Object Constructor)
// const codingLangs = new Array("C", "C++", "JS", "Go")
// console.log(codingLangs)

// const numbers = new Array(3, 2, 1)
// console.log(numbers) //? (3) [3, 2, 1]

// //? 10 elemanli bos bir dizi olusturur.
// const numbers1 = new Array(10)
// console.log(numbers1) //?(10) [empty × 10]

// // ! 3.Yöntem (Array.of())
// const number2 = Array.of(1, 2, 3)
// console.log(number2) //?(3) [1, 2, 3]

// const numbers3 = Array.of(5)
// console.log(numbers3) //? [5]


// const langs = ["pyhton", "java", " C++", "Javascript"];

// const a = ["merhaba", 22, null, undefined, 3.14];

// console.log(a);
// console.log(langs);
// // const numbers = [43, 21, 54, 67, 88, 33, 45, 11, 94];

// // value = numbers.length;
// // value = numbers[2];
// // value = numbers[5];
// // value = numbers[7];
// // value = numbers[1];
// // value = numbers[3];
// // console.log(value);
// // console.log(numbers);
// //! ============= ! HERHANGİ BİR İNDEKSTEKİ DEGERİ DEGİŞTİRME
// numbers[3]= 2500;
// value = numbers;  // [43, 21, 54, 2500, 88, 33, 45, 11, 94];
// console.log(value);
// // !===================  ! Index Of
// // !ÇAGIRDIGIMIZ DEGERİN HANGİ İNDEXTE OLDUGUNU BULMAK İÇİN
// value =numbers.indexOf(2500);
// console.log(value);  //3. INDEXTE

// //!====================== !PUSH
// // !===========ARRAY IN SONUNA DEGER EKLEME
// numbers.push(5555);
// value=numbers
// console.log(value);     //[43, 21, 54, 2500, 88, 33, 45, 11, 94,5555];
// //! ====================== !UNSHIFT
// //! ============ARRAY IN BAŞINA DEGER EKLEME

// numbers.unshift(91919);
// value=numbers;
// console.log(value);     //[91919,43, 21, 54, 2500, 88, 33, 45, 11, 94,5555];
// // !======================= ! POP
// // !=================== SONUNDAN DEGER ATMA

// numbers.pop()
// value=numbers;
// console.log(value);    //[91919,43, 21, 54, 2500, 88, 33, 45, 11, 94];

// // !======================== ! SHİFT
// //!======================BAŞINDAN DEGER ATMA
// numbers.shift()
// // value=numbers
// console.log(numbers);     //[43, 21, 54, 2500, 88, 33, 45, 11, 94]

// // !======================= ! SPLİCE
// // !============İNDEX İÇİNDEKİ BELLİ BÖLÜMÜ ATMAK İÇİN
// //! NOT == Burada ilk yazılan degere kadar git onuda al ve son deger ne ise o kadar deger at ama son degeri atma seklinde atma işlemi yapar.
// numbers.splice(2,3);
// console.log(numbers);    //[43, 21, 33, 45, 11, 94]

// // !======================== ! REVERSE
// // !==================ARRAYI TERS CEVİRMEK İÇİN
// numbers.reverse();
// value=numbers;
// console.log(value);      //[94, 11, 45, 33, 21, 43]
// // !========================== ! SORT
// numbers.sort();
// console.log(numbers);   //[11, 21, 33, 43, 45, 94]

// value = numbers.sort(function(x,y){
//     return x-y;

// })

// // const numbers = [22, 44, 5, 11, 89, 3, 47, 99, 1, 81, 7];
// // numbers.sort();
// // value = numbers;
// // console.log(value); //[1, 11, 22, 3, 44, 47, 5, 7, 81, 89, 99]

// // value = numbers.sort(function (a, b) {
// //   return a - b;
// // });
// // console.log(value); // [1, 3, 5, 7, 11, 22, 44, 47, 81, 89, 99]

// //!Normal yapmış oldugumuz 'sort' işleminde ilk rakamların baz alındıgını ve bize 1'den itibaren bir sıralama yaptıgını biliyoruz. fakat biz rakamların gercek degeriyle küçükten büyüge sıralanmasını istersek function kullanıyoruz.Yukarıda functıon a-b tanımlanmasının açıklması ise, ilk iki rakamı birbirinden çıkarıp sonucu mecburi olarak '-'(eksi) bir deger cıkaracaktır. (Çünkü normal sort sıralamasında ilk başa en küçük rakam gelecek.)js bunu kendisine, bu bir küçükten büyüge sıralama işlemi olarak aktarıp, rakamları artık gercek degerleriyle sıralayacaktır. LMS olan örnekte de aynı mantıkla bakılırsa ilk rakamları baz aldıgı için a<b sorusunun cevabı false oldugu için yine küçükten büyüğe işlemi olarak algılayacaktır.

// // const numbers = [0, 1 , 6, 3, 77, 20, 99 ];
// // numbers.sort( function( a , b){
// //     if(a < b) return 1;
// //     if(a > b) return -1;
// //     return 0;
   
// // });

// //  console.log(numbers);

// //! ==================== ÖRNEKLER ================

// // !=====================FOR İN

// const adlar = ['ahmet','can','mustafa','ayşe','elif']
// const soyadlar = ['öztürk','yılmaz','arı','çalı','yazı']


// const birleştir = (x,y) =>{
//     let advesoyad=[];
//     for(let i in x){
//           advesoyad[i]=`${x[i]} ${y[i]}`
//     }
//   return advesoyad;
// }
// console.log(birleştir(adlar,soyadlar));

// //! ========================= FOR OF
// // elemanların toplamını bulur 
// const sayılar = [-5,15,22,-4,45,78,-25]
// let sonuc=0;
// for (let item of sayılar){
//     sonuc += item;
// }
// console.log(sonuc);

// // !=============for of 
// let arabalar = ['BMW','Volvo','mini']
// let yazı='';
// for (let arac of arabalar){
//     yazı += arac + '';
// }
// console.log(yazı);   //BMWVolvomini

// // !===================FOREACH
// // !herbirini ayrı ayrı yazdırır
// let ögrenciler = ['john','ali','ahmet']
// ögrenciler.forEach(yazdır)
// function yazdır(v){
//     console.log(v);
// }





// // =======================================================================================
// // ==============================!NOAH HOCAYLA YAPILAN ÖRNEKLER!============================

// // !diziler farklı veri tiplerini bir arda saklayabilirler 

// const ageArr = [22,44,55]
// const people = [
// 'John',
// 'Varmont',
// new Date().getFullYear() - 1990 ,
// true,
// ageArr,
// ]
// console.log(people);
// console.log(people[4]);
// console.log(++people[4][1]); 


// function polindrom(x){
//     const test = x.split('').reverse().join('');
//     if(x===test){
//         console.log('sayı polindromdur');
//     }else{
//         console.log('sayı polindrom degildir');
//     }
// }
// polindrom('6588');


function polindrom(x) {
    const test = x.split("").reverse().join("");
    if (x === test) {
      console.log(`${x} sayi polindrom sayıdır`);
    } else {
      console.log(`${x} sayi polindrom sayıdır değildir`);
    }
    return x
  }
  console.log(polindrom('77'));
while (x==!test)


