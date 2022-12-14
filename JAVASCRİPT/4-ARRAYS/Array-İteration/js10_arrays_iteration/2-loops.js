//* ============================================
//*                FOR LOOP
//* ============================================

console.log("******* LOOPS IN ARRAYS ******");

//?-------------- ÖRNEK -------------------
//? grades'in ortalamasini hesaplayiniz.

const grades = [55, 77, 23, 89, 100];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}
console.log((sum / grades.length).toFixed(2));

//?-------------- ÖRNEK -------------------
//? arr dizisindeki negatif ve positif sayilari
//? 2 ayri diziye kaydediniz.
const arr = [-5, 15, 22, -4, 45, 78];
let negatives = [];
let positives = [];

for (let j = 0; j < arr.length; j++) {
  if (arr[j] < 0) {
    negatives.push(arr[j]);
  } else {
    positives.push(arr[j]);
  }
}
console.log(negatives);
console.log(positives);

//* =========================================
//*             FOR-IN LOOP
//* =========================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

const findStudent = (name) => {
  let counter = 0;
  for (let i in students) {
    if (name.toLowerCase() === students[i]) {
      counter++;
    }
  }
  if (!counter === 0) {
    return `${name} can not be found`;
  } else {
    return `${name}  found ${counter} times`;
  }
};
console.log(findStudent("Mehmet"));
console.log(findStudent("ismet"));
console.log(findStudent("feyza"));

//* =========================================
//*            FOR-OF LOOP
//* =========================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const findStudentsForOf = (name) => {
  let counter = 0;

  for (let student of students) {
    //?Ternary
    // !student ===name.toLowerCase() ? counter++ :null

    //?Short-Circuit
    //koşul false ise counteri eksilt
    //! student === name.toLowerCase() || counter--;
    //?Short-Circuit
    //koşul true ise arttır
    // student === name.toLowerCase() && counter++;
  }

  return !counter ? `${name} can not be found` : `${name} found `;
};

console.log(findStudenstForOf("Mehmet"));
