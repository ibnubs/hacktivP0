//exercise-5//Palindrome(logic Challange)

function palindrome(kata) {
    // you can only write your code here!
    var tampKata = '';
    for (var i = kata.length -1; i>=0; i--){
        tampKata = tampKata + kata[i];
    }
    return(tampKata===kata);

  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false