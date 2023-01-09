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
