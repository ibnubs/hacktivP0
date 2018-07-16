/*
<-- soal1
function loketPelayan(nomorUrut) {
    // Your codes here.
  
    var loketA = (1, 4, 7, 10);
    var loketB = (2, 5, 8, 11)
    var loketC = (3, 6, 9, 12)
    
    switch (nomorUrut){
    case 1:
    case 4:
    case 7:
    case 10:
    {return('Layanan Loket A');break; }
    case 2:
    case 5:
    case 8:
    case 11:
    {return('Layanan Loket B');break; }
    case 3:
    case 6:
    case 9:
    case 12:
    {return('Layanan Loket C');break; }

    }
 
    
  }
  
  console.log(loketPelayan(1)); // Layanan Loket A
  console.log(loketPelayan(5)); // Layanan Loket B
  console.log(loketPelayan(6)); // Layanan Loket C
  -->
  */

//<--soal2

function tangga (tinggi){

var tampTinggi = 5;
var strTinggi = ''
for ( var i = tampTinggi; tampTinggi >= 0; i--){
    for ( var j = 0; j < tampTinggi; j++) {
    strTinggi += tinggi + ('')
    }
} return strTinggi
}

console.log(tangga(3));
//321
//21
//1
console.log(tangga(5));
// 54321
// 4321
// 321
// 21
// 1
console.log(tangga(1));
//1
//-->