// ASAL SAYILARI BULAN KODU YAZIN

// let isNumber;
// for (i = 2; i <= 7; i++) {
//   isNumber = true;
//   for (j = 2; j < i; j++) {
//     if (i % j === 0) {
//       console.log(`${i} prime number degil`);
//       isNumber = false;
//       break;
//     } else {
//       console.log(`${i} prime`);
//     }
//   }
//   if (isNumber) {
//     console.log(`${i} asal sayıdır`);
//   }
// }

// 0 - 100 ARASI SAYILARIN TOPLAMI

//  let sum = 0
// for(i=0; i<=100; i++){
//     sum += i
//     console.log(sum);
// }


//  let sum = 0
// for(i=0; i<=100; i++){
//     if(i%2===0){
        
//     }
//     sum += i
//     console.log(sum);
// }



let arr= []
 let sum = 0
 let sum1=0
for(i=0; i<=100; i++){
    if(i%2===0){
        sum=sum1+ i
    }else {
       sum1 += i 
    }
    
}
 arr.push(sum,sum1);
console.log(arr);









































