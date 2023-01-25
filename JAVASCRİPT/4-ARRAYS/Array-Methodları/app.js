const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];
const isimler = ["sezer", "ali", "hasan", "ayse"];
const ogrenciler = [
  { id: 12, isim: "sezer", yas: 30 },
  { id: 22, isim: "hasan", yas: 15 },
  { id: 32, isim: "fatma", yas: 55 },
  { id: 13, isim: "nuriye", yas: 19 },
  { id: 92, isim: "kemal", yas: 45 },
  { id: 15, isim: "mustafa", yas: 75 },
  { id: 44, isim: "ceren", yas: 30 },
];
//? ===================================================================
//*---SHİFT-- UNSHİFT----Shift = İlk elemanı siler  / Unshift = ilk başa eleman  ekler.
const a = sayilar.shift();
console.log(a); //!  1
// ?================================================================================
//* ---SLİCE----1 yazdıgımız dahil son yazdıgımız dahil olmadan belli bölümü alır. Slice methodu kaynak diziyi bozmaz
// const b = sayilar.slice(1 , 5)
// console.log(b);  //!(4) [50, 2, 41, 41]
// //*Slice methodu kaynak diziyi bozmaz. Slice harici hepsi kaynağı bozuyor.
// console.log(sayilar);  //!(9) [1, 50, 2, 41, 41, 84, 8, 35, 3]
// ?===========================================================================
//*1.ÖRNEK---SPLİCE---- diziden istedigimiz bir bölümü çıkarma methodu / 2. indexten itibaren 4 eleman sil demek.
// const c = sayilar.splice(2,4) //!(4) [2, 41, 41, 84]
// console.log(c);
// //* kaynak diziyi bozar görüldüğü üzere
// console.log(sayilar); //!(5) [1, 50, 8, 35, 3]
//*2.ÖRNEK---SPLİCE-------
//*2. indexi silme 1212 ve 2323 ekle ve devam et / 0 silme --- 1 olursa 1 tane, 2 olursa 2 tane, aç yazarsak o kadar sil demek.
// const d = sayilar.splice(2 , 0 , 1212 , 2323)
// console.log(d);
// console.log(sayilar); //!(11) [1, 50, 1212, 2323, 2, 41, 41, 84, 8, 35, 3]
// ?=============================================================================
//*---FİND--- Bulma
const e = ogrenciler.find((kisi) => kisi.id === 92);
console.log(e); //! {id: 92, isim: 'kemal', yas: 45}
const f = ogrenciler.find((kisi) => kisi.yas === 30);
console.log(f); //!{id: 12, isim: 'sezer', yas: 30}
//? =========================================================================
//*----İNCLUDES --- Dizide istedigim bilgi varmı
const g = isimler.includes("sezer");
console.log(g); //! true
// ?======================================================================
//*----ForEach--- dizi içinde gezinme / foreach ile geziniyoruz ve neyapacagımızı da function fonksiyonuna yazıyoruz.
const h = sayilar.forEach(function (sayi) {
  console.log(sayi * 2); //! sayilar dizisinin tüm elemanlarını 2 ile çarptı
});
//? =====================================================================
//*----FİLTER--- id si çift olanları getir
const ı = ogrenciler.filter((item) => item.id % 2 == 0);
console.log(ı); //! id si çift olanları yazdırdı..
//* item.id %2 !==   --------!------ DEGİL İFADESİ
const i = ogrenciler.filter((item) => item.id % 2 !== 0);
console.log(i); //! id si tek olanları yazdırdı..
// ?=============================================================================
//* ----CONCAT---- BİRLEŞTİRME METHODU  --- isimler ve sayiları birleştirdi..
const j = isimler.concat(sayilar);
console.log(j); //! (13) ['sezer', 'ali', 'hasan', 'ayse', 1, 50, 2, 41, 41, 84, 8, 35, 3]
//? ================================================================================
//* ----MAP----  İŞLEM METHODU ---- Her bir elemana 10 ekledi..
const k = sayilar.map((x) => x + 10);
console.log(k); //!(9) [11, 60, 12, 51, 51, 94, 18, 45, 13]
//? =====================================================================
//* -----FROM----
const l = Array.from("sezer");
console.log(l);
// ===========================================================================
//* ----SORT ---- Sıralama methodu --- Bir dizi üzerindeki sayılarda direk sort methodu uygulandıgında bu degerleriotomatik oalrak stringe çevirir. ve stringe dönüştürdüğünde bu karakterlerin UTF16 setindeki yerlerine göre karşılaştırma yapar. yani örnek 100 ve 25 i karşılaştırırken 1, 2 den önce geldiği için 100 başa geçiyor. Biz bunu sıraya koymak istersek bir fonksiyon içinde (a-b) veya (x-y) şeklinde karşılaştırıyoruz.
const n = sayilar.sort();
console.log(n); //!8) [2, 3, 35, 41, 41, 50, 8, 84]
// ============================
const m = sayilar.sort((a, b) => a - b);
console.log(m); //! (8) [2, 3, 8, 35, 41, 41, 50, 84]
//? ==========================================================================
