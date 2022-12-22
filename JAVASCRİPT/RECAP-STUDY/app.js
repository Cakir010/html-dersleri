// function name(a,b){
//     return a*b + a*b*10
// }
// name(5,6);
// console.log(name(5,6));
// // =====================================================

// function ciftTekSayilar (num){
//     for(i=0; i<=num; i++){
//         if(i%2==0){
//            console.log(`${i}cift sayilar`);
//         }else {
//         console.log(`${i}tek sayı`);
//         }
//     }
// }
// ciftTekSayilar(45);

// !========================================================


function bölüm (num1){
    for(i=0; i<=num1; i++){
        if (i%2===0 && i%3!==0 ){
            console.log(`${i} buzz`);
        }else if (i%2!==0 && i%3!==0 ){
            console.log(`${i} fizz`);
        }else if (i%2==0 && i%3!==0 ){
            console.log(`${i} fizzbuzz`);
        
        }
    }
}
console.log(bölüm(85));

// ========================================================

// console.log(name ( 3,4));



// const yeniNesil = function(a,b,c,d){
//     return (a*b + 5)+(c+d)
// }
// console.log(yeniNesil(3,4,5,6));


// HESAP MAKİNESİ CALCULATER


const calculate = function(x,y,op){
    if(op=='+'){
        return x+y;
    }
   else if(op=='-'){
        return x-y;
    }
   else if(op=='/'){
        return x/y;
    }
   else if(op=='*'){
        return x*y;
    }
}




const sonuç =  calculate(5,7,'*')
function bölüm (sonuç){
    for(i=0; i<=sonuç; i++){
        if (i%2===0 && i%3!==0 ){
            console.log(`${i} buzz`);
        }else if (i%2!==0 && i%3!==0 ){
            console.log(`${i} fizz`);
        }else if (i%2==0 && i%3!==0 ){
            console.log(`${i} fizzbuzz`);
        
        }
    }
}
console.log(bölüm(sonuç));





