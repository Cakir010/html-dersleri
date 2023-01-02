// !========================! ARRAYS !==========================
// !==================== !İKİ TÜRLÜ KULLANIM=====================
const langs = ["pyhton", "java", " C++", "Javascript"];

const a = ["merhaba", 22, null, undefined, 3.14];

console.log(a);
console.log(langs);
const numbers = [43, 21, 54, 67, 88, 33, 45, 11, 94];

value = numbers.length;
value = numbers[2];
value = numbers[5];
value = numbers[7];
value = numbers[1];
value = numbers[3];
console.log(value);
console.log(numbers);
//! ============= ! HERHANGİ BİR İNDEKSTEKİ DEGERİ DEGİŞTİRME
numbers[3]= 2500;
value = numbers;  // [43, 21, 54, 2500, 88, 33, 45, 11, 94];
console.log(value);
// !===================  ! Index Of
// !ÇAGIRDIGIMIZ DEGERİN HANGİ İNDEXTE OLDUGUNU BULMAK İÇİN
value =numbers.indexOf(2500);
console.log(value);  //3. INDEXTE

//!====================== !PUSH
// !===========ARRAY IN SONUNA DEGER EKLEME
numbers.push(5555);
value=numbers
console.log(value);     //[43, 21, 54, 2500, 88, 33, 45, 11, 94,5555];
//! ====================== !UNSHIFT
//! ============ARRAY IN BAŞINA DEGER EKLEME

numbers.unshift(91919);
value=numbers;
console.log(value);     //[91919,43, 21, 54, 2500, 88, 33, 45, 11, 94,5555];
// !======================= ! POP
// !=================== SONUNDAN DEGER ATMA

numbers.pop()
value=numbers;
console.log(value);    //[91919,43, 21, 54, 2500, 88, 33, 45, 11, 94];

// !======================== ! SHİFT
//!======================BAŞINDAN DEGER ATMA
numbers.shift()
// value=numbers
console.log(numbers);     //[43, 21, 54, 2500, 88, 33, 45, 11, 94]

// !======================= ! SPLİCE
// !============İNDEX İÇİNDEKİ BELLİ BÖLÜMÜ ATMAK İÇİN
//! NOT == Burada ilk yazılan degere kadar git onuda al ve son deger ne ise o kadar deger at ama son degeri atma seklinde atma işlemi yapar.
numbers.splice(2,3);
console.log(numbers);    //[43, 21, 33, 45, 11, 94]

// !======================== ! REVERSE
// !==================ARRAYI TERS CEVİRMEK İÇİN
numbers.reverse();
value=numbers;
console.log(value);      //[94, 11, 45, 33, 21, 43]
// !========================== ! SORT
numbers.sort();
console.log(numbers);   //[11, 21, 33, 43, 45, 94]

value = numbers.sort(function(x,y){
    return x-y;

})

// const numbers = [22, 44, 5, 11, 89, 3, 47, 99, 1, 81, 7];
// numbers.sort();
// value = numbers;
// console.log(value); //[1, 11, 22, 3, 44, 47, 5, 7, 81, 89, 99]

// value = numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(value); // [1, 3, 5, 7, 11, 22, 44, 47, 81, 89, 99]

//!Normal yapmış oldugumuz 'sort' işleminde ilk rakamların baz alındıgını ve bize 1'den itibaren bir sıralama yaptıgını biliyoruz. fakat biz rakamların gercek degeriyle küçükten büyüge sıralanmasını istersek function kullanıyoruz.Yukarıda functıon a-b tanımlanmasının açıklması ise, ilk iki rakamı birbirinden çıkarıp sonucu mecburi olarak '-'(eksi) bir deger cıkaracaktır. (Çünkü normal sort sıralamasında ilk başa en küçük rakam gelecek.)js bunu kendisine, bu bir küçükten büyüge sıralama işlemi olarak aktarıp, rakamları artık gercek degerleriyle sıralayacaktır. LMS olan örnekte de aynı mantıkla bakılırsa ilk rakamları baz aldıgı için a<b sorusunun cevabı false oldugu için yine küçükten büyüğe işlemi olarak algılayacaktır.

// const numbers = [0, 1 , 6, 3, 77, 20, 99 ];
// numbers.sort( function( a , b){
//     if(a < b) return 1;
//     if(a > b) return -1;
//     return 0;
   
// });

//  console.log(numbers);