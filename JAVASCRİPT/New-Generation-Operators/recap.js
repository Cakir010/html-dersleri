const todoList = {
  x: {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  y: {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  z: {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
};
let yazdir = Object.values(todoList).forEach((a) =>
  console.log(a.task + a.time + a.completed)
);

let yazdir1 = Object.values(todoList).map((a) => {
  const { task, time, completed } = a;
  return time + task + completed;
});

console.log(yazdir1);

// ========================

let fonksiyon = () => {
  return {
    ad: "emre",
    soyad: "ckr",
  };
};
const { ad, soyad } = fonksiyon();

console.log(ad);
console.log(soyad);

// =============================

// const check = (data) => {
//   const { a, b, c } = data; //? icerde destr
//   console.log(a, b, c);
// };

const data = {
  a: 1,
  b: 2,
  c: 3,
};
const data1 = {
  a: 20,
  b: 25,
  c: 30,
};
const data2 = {
  a: 3,
  b: 9,
  c: 10,
};
const data3 = {
  a: 2,
  b: 5,
  c: 6,
};

const check = ({ a, b, c }) => {
  //? yolda destr.
  console.log(a, b, c);
};

check(data);
check(data1);
check(data2);
check(data3);
check(data2);

// =====BİREYSEL ÖRNEKLER============

const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "14000",
    drivingLicense: true,
  },
  person2: {
    name: "ali",
    surname: "örs",
    job: "tester",
    dob: "1990",
    salary: "11000",
    drivingLicense: false,
  },
  person3: {
    name: "veli",
    surname: "deli",
    dob: "2000",
    job: "developer",
    salary: "16000",
    drivingLicense: true,
  },
};
console.log(people.person2.name);
console.log(people.person2.job);
console.log(people.person1.drivingLicense);
console.log(people.person3.salary)




for (let person in people) {
  console.log(people['person2'].salary);
}

for (let person of Object.values(people)) {
  console.log(person.name);
}


for (let [k, v] of Object.entries(people)) {
  console.log(k,v.name);
}

Object.values(people).forEach((p) => console.log(p.name))

let x=Object.values(people).filter((p) => p.job === 'developer').map((p)=> p.dob)
console.log(x);