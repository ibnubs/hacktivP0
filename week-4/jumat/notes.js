/*
// object yang didalamnya adalah berupa property



var student = {
    name: 'adi',//object dengan properti string
    age: 25, //object dengan properti number
    //object dengan properti aray
    score: [100,70,50],
    //object didalamnya function
    skills:{
        'programming language': 'javascript',
        'sport': 'futsal'
    },
    //batch:22,
    sayHello: function(nama){
       // return "hello " + nama;
       // console.log('hello world');
    }
}

//student.batch = 21;
//delete student.skills;
//console.log(student)


//console.log(Object.keys(student));// fungsinya untuk nampiling object2nya// output,, [ 'name', 'age', 'score', 'skills', 'sayHello' ]


// delete student;




student.name += ",yoki";
// jika ingin menambah string dari property yang sudah ada.

console.log(student.name);

*/



//catatan modular function

//catatan recursive function

//setiap recursive harus ada 'parameter'

/*
//membuat balikkata

function baliKata (name){
    var tampKata;
    for (var i=(name.length-1); i>=0; i--){
        tampKata = tampKata + name[i]
    }
    return tampKata
}
console.log(baliKata('budi'));



function recbaliKata (nama){
    if (nama.length == 0){
        return '';
    }

    return nama(nama.length-1)+ recbaliKata(nama.slice(0,nama.length-1));
}


//alurnya
//return 'i' + recbaliKata (nama) --> bud
    // 'd'  + recbaliKata (nama) --> bu
    // 'u' + recbaliKata (nama) --> b
    // 'b' + recbaliKata (nama)
    recbaliKata (nama) --> bud
console.log(recbaliKata('budi'));
*/


//modular function digunakan  untuk menjelaskan fungsi jika dipanggil akan menghasilkan apa..

//return hasilnya bisa dipakai lagi
//fungsi dibawah ini bisa dimatikan salah satu variabelnya
// modular function

// function calculatorUnik (num){
//     var kaliTiga = kali (num);
//     var bagiDua = bagi (kaliTiga);

//     return bagiDua
// }

// function kali (num){
//     return num *3
// }

// function bagi (num){
//     return num /2
// }

// console.log(calculatorUnik(9))



// function recbaliKata (nama){
//     //basecase
//     if (nama.length == 1){
//         return nama;
//     }

//     return nama(nama.length-1)+ recbaliKata(nama.slice(0,nama.length-1))

//     //alur programnya jalan
//     //  return i + recBalkKata ('bud')
//     //  return i + d + recBalkKata ('bu')
//     //  return i + d + u+  recBalkKata ('b')
//     //  return i + d + u + b
// }

// console.log(recbaliKata('budi'));




//obejct yang harus ngerti 'asign' secara langsung

var instructor = {
    nama: wika,
}

instructor.age = 37;
//atau instructor['age']

instructor['jagoan mobile legend'] = 'natalia'


