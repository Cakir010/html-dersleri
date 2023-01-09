var kopek = {
  ismi: "Kuçu kuçu",
  bacak: 4,
  kuyruk: 1,
  sevmedikleri: ["Kediler"],
  rengi: "siyah",
};
console.log(kopek);

var araba = {
  marka: "Ford",
  model: "Focus",
  yil: "2016",
  renk: "beyaz",
  kasa: "sedan",
  vites: "otomatik",
  yakıt: "dizel",
  home: {
    kat: 7,
    sat: 5,
  },
};
console.log(araba.home);

const YunusEmre = {
  firstName: "Yunus Emre",
  lastName: "çakır",
  birthYear: "1994",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  age() {
    return new Date().getFullYear() - this.birthYear();
  },
};
console.log(YunusEmre);

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//   };
// console.log(person);

const person = new Object();
person.firstName = "John";
person.lastName = "Doe";

console.log(person);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
console.log(person);

// *NOKTA VEYA KÖŞELİ PARANTEZ İLE ERİŞİM

const itSchool = {
  name: "Clarusway",
  location: "U.S.",
  established: "2019",
};
console.log(itSchool.name); // Expected Output : 'Clarusway'
console.log(itSchool["location"]); // Expected Output : "U.S."

// *NOKTA VEYA KÖŞELİ PARANTEZ İLE YENİ ÖZELLİK EKLEME - DEĞİŞTİRME

itSchool.firstAlumniYear = "2020"; // added new property
itSchool["First Graduate Year"] = "2020";
console.log(itSchool); // Expected Output : { name: 'Clarusway', location: 'U.S.', established: '2019', firstAlumniYear: 2020, First Graduate Year: '2020'}

// class Dog {
//     constructor(name, foot) {
//       this.dogName = name;
//       this.foot = foot;
//     }
//   }

//   class Dog {
//     constructor(name, foot) {
//       this.dogName = name;
//       this.foot = foot;
//     }
//   }
//   myDog = new Dog("Buldog")

// console.log(new Dog);

class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
  current() {
    return "I have a " + this.dogName + " and it has " + this.foot + " legs";
  }
}
myDog = new Dog("Buldog", 4);
console.log(myDog.current());

// ==================================================
