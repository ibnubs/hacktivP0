//exercise-8--Pasangan Angka Terbesar(logic Challenge)


function pasanganTerbesar(num) {
    // you can only write your code here!
    var numArr   = String(num)
    var numSplit    = numArr.split('') 
    numSplit.sort(function(a,b){return b+a});
    var tampHasil = [];

    for (var i = 0; i < numArr.length - 1; i++) {
        tampHasil[i] = Number(numArr[i] + numArr[i + 1]);
    } 

    var nilai_besar = tampHasil [0];
    for (var j = 1; j < tampHasil.length; j++){
        if(tampHasil[j] > nilai_besar){
            nilai_besar = tampHasil[j];
        }
      }
    return nilai_besar;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99




//Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.



//atau bisa pakai fungsi ini
// function pasanganTerbesar(num) {
//     var stringNum = String(num)
//     var minNum = 0
//     var maxNum = 0
    
//     for(var i = 0; i < stringNum.length; i++) {
//       minNum = stringNum[i] + stringNum[i + 1]
//       if(minNum > maxNum) {
//         maxNum = minNum
//       }
//     }
//     return Number(maxNum)
//   }