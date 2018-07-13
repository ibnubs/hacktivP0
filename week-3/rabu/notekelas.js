//catatan Array

//tambahkan tulisan Arr di tulisan variabelnya....untuk menandakan bahwa data tersebut array

//type data primitiv dan stucture
//bahwa dalam aray bisa ditulis dari ke 3 data
// array itu index atau alamat

//var animals = []


//pelajaran hari ini adalah multidimensional array

//var countries = [ 'canada', 'germany', 'japan']

// //contoh 1,,------------------------------------------
// var asiaCountries = ['INA', 'Japan', 'korea']
// var eropeCountries = ['GER', 'ENG', 'FRANCE']
// var americaCountries = ['usa', 'can', 'arg']

// var countries = [[asiaCountries],[eropeCountries],[americaCountries]]


// console.log(countries)
// //end contoh 1---------------------------------------



//contoh 2,,------------------------------------------
// var asiaCountries = ['INA', 'Japan', 'korea']
// var eropeCountries = ['GER', 'ENG', 'FRANCE']
// var americaCountries = ['usa', 'can', 'arg']

// var countries = []
// countries.push (asiaCountries)


// console.log(countries)
//end contoh 2---------------------------------------


//contoh 3,,------------------------------------------
var asiaCountries = ['INA', 'Japan', 'korea']
var eropeCountries = ['GER', 'ENG', 'FRANCE']
var americaCountries = ['usa', 'can', 'arg']

var countries = []
countries.push (asiaCountries, eropeCountries, americaCountries)


//for (var i=0; )
//end contoh 3---------------------------------------


//contoh4
var countries = [['asia'],['uk'],['us']]
console.log(countries)
//end contoh4



/*


function mengelompokkanAngka(arr) {
    // you can only write your code here!
    
    var arrGenap = [];
    var arrGanjil = [];
    var arrMulTree= [];
    
    
    //cari genap
    var tampung = []
    for (var i=0; i<arr.length; i++){
        if (arr[i] % 2 === 0){
        arrGenap.push([arr[i]])
        } 
        
    }
    console.log (arrGenap)

    //cari ganjil
    for (var j=1; j<arr.length; j++){
        if (arr[j]%2 !==0){
            arrGanjil.push([arr[j]])
        }
    }
    console.log(arrGanjil)


    /*buat test case baru -- gak berhasil
    for (var i=0; i<arr.length; i++){
        if (arr[i] % 2 === 0){
        arrGenap.push([arr[i]])
        } 
        
    } 
    var tamp = []
    for (var j=1; j<arr.length; j++){
        if (arr[j]%2 !==0){
            arrGanjil.push([arr[j]])
        }

    } return tamp   
    */

    /*case baru --> gagal

    for (var i=0; i<arr.length; i++){
        for (var j=1; j<arr.length; j++){
            if (arr[j]%2 !==0){
                arrGanjil.push([arr[j]])
                arrGanjil []; break;
            } else arrGenap.push([arr[i]])
        }       arrGenap []; break
    }

    */

      
/*  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]


*/
