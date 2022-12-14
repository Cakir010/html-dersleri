const a = Array()
console.log(typeof a)

const b =[ "a","b","c",5,4,18,"name",true,false]
console.log(b[2]);
console.log(b[6]);

const c =[ 23,["nehir","ayşe",6],{name:"mehmet",surname:"yılmaz"},"naber"] ;

const f =[[ 23,["nehir","ayşe",6],{name:"mehmet",surname:"yılmaz"},"naber"]]
console.log(f.length);
console.log(c.length); 
console.log(c[1][2]);
console.log(c[1][1],c[1][0]);
console.log(c[2]);
const d = c[2]
console.log(d);
 const string = "osmankaya";
console.log(string[3]); 
 console.log(string.split("")); 
 const names = "ali,veli,deli,haydar"
 const list1 = names.split(",")
 console.log(list1);
 const sentence = "I like to   play football and bağlama and voleyball"
 const arr = sentence.split(" ")
console.log(arr);
console.log(arr[5]);
console.log(arr.length);
console.log(arr[arr.length-6]);
console.log(arr[arr.length-4]);
/*const lastarr = arr.length-5;
console.log(lastarr);
console.log(arr[lastarr]);
console.log(arr[arr.length-10]);
console.log(arr[arr.length - 10]== arr[1]); */


const country = [
"Afganistan",
"Bolivia",
"Canada",
"Denmark",
"Ethiopia",
"Finland",
"Germany",
"Hungary",
"Ireland",
"Japan",
"Korea",
];
country[8]="USA"
console.log(country);
console.log(country[country.length-5]);
country[country.length -5]= "england"
console.log(country);

// const arr = Array(); // creates an an empty array
// console.log(arr);

// const eightEmptyValues = Array(8); // it creates eight empty values
// console.log(eightEmptyValues); // [empty x 8]

const yenilist= [1,1,2,4].concat(5,8,6,7,8,9)
console.log(yenilist);


// const fruits = ['banana', 'orange', 'mango', 'lemon']// array of fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
// const fruitsAndVegetables = fruits.concat(vegetables)  


const yepyeni=["ali",5,8,"veli",25,"deli"]
console.log(yepyeni.indexOf ("ali"));
console.log(yepyeni.indexOf ("veli"));
console.log(yepyeni.indexOf ("deli"));
console.log(yepyeni.indexOf (25));
console.log(yepyeni.indexOf (34));

const article = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ut sequi quis, recusandae aliquid totam accusantium libero, laboriosam quod ipsam eligendi, repellat obcaecati ea fugit. Accusantium officia nemo illum laboriosam";

const arrarticle =article.split(" ")
console.log(arrarticle);
console.log(arrarticle.indexOf("sit"));


// const b = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ut sequi quis, recusandae aliquid totam accusantium libero, laboriosam quod ipsam eligendi, repellat obcaecati ea fugit. Accusantium officia nemo illum laboriosam" ;

// const b1 = b.split(" ");
// console.log(b1);
// console.log(b1.indexOf(";"));
// console.log(b1.lastindexOf("ad"));
// console.log(b1.includes("ad"));
// console.log(b1.includes("orem"));

// const varMı





const numaralar =[1,3,4,5,6,7,8]
console.log(typeof numaralar);
const converts= numaralar.toString()
console.log(converts, typeof converts);
console.log(converts[5]);

const y = "1,3,4,5,6,7,8"
console.log(converts===y);

// console.log(Array.isArray(converst));
// const converst = 20
// console.log(Array.isArray(converst))


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
const ekledim =webTechs.join(" # ")
console.log(ekledim);
const arryedön = ekledim.split(" ")
console.log(arryedön);


const numbers = [1, 2, 3, 4, 5, 15, 6, 7, 8, 9]
numbers.splice()
console.log(numbers)

const numberChild= numbers.slice(4,9)
console.log(numberChild);

const s1 []















