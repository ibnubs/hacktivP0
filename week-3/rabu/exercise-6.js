//exercise-6//Number Palindrome(logic Challange)

function angkaPalindrome(angka) {
    // you can only write your code here!
    for (var i = 0; i < angka; i++){
        angka++;
        var angkaString = String(angka);
        var angkaLength = angkaString.length;
        var string = '';
        
        for (var j = angkaLength - 1; j >= 0; j--){
          string += angkaString[j];
        }
    
        if (angkaString === string){
            return angka;
        }

    }
}  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001


    //Diberikan sebuah function angkaPalindrome(angka) yang menerima  satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.
