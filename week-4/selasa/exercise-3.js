//exercise-3-->Logic Challenge - Mencari Median


function cariMedian(arr) {
    // you can only write your code here!
    /* algoritma
    1.cek dlu apakah array tersebut ganjil atau genap

    */

   
   var ganjil = Math.floor(arr.length / 2);
   var genap = (arr[(arr.length / 2)] + arr[((arr.length / 2) - 1)]) / 2 
    if ( arr.length % 2 === 0 ){
       return genap    
    }
    return arr [ganjil]
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5