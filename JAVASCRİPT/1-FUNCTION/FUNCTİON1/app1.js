// function merhaba(name, age) {
//     if (typeof name === 'undefined') name = 'bilgi yok'
//     if (typeof age === 'undefined') age = 'bilgi yok'
//     console.log(`isim:${name} yaş: ${age}`);
// }

// merhaba('emre ' , 30)

// merhaba('ys', 25)

// merhaba()

// function back() {
//     console.log('okey');
// }
// back('bugun çalışıldı ')

// function square(x) {

//     return (x * x);

//      console.log('naber');

// }
// function cube(x) {
//    return(x*x*x);
// }

// let a = square (12)

// a= cube(a)
// console.log(a);

// function merhaba() {
//     return ' selam'
// }

// console.log(merhaba());



// (function (name) {
//     console.log('mrb' + name );
// })('emre')


const database = {
    host: 'localost',
    add: function () {
        console.log('eklnedi');
    },
    get: function () {
         console.log('elde edildi');
    },
    update: function (id) {
        console.log(`ıd : ${id} güncellendl`);
},
    delete: function (id) {
    console.log(`id : ${id} 10.10.10`);
}
}

console.log(database.host);
database.delete(10)








