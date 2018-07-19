//exercise-5>>ubah huruf


function ubahHuruf(kata) {
    // you can only write your code here!
    
    // buat variabel alphabet untuk pengganti
    var alphabet;
    alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    //console.log( alphabet)
    //console.log ( 'ini adalah index ke 5 = ' +alphabet[5])
    
    //looping  ke tiap karakter kata
    var tampKata = '';
    var kataBaru = '';
    for(var a = 0; a<kata.length; a++ ){
        for ( var b = 0; b < alphabet.length; b++){
            if (kata[a]===alphabet[b]){
                kataBaru += alphabet[b+1];
            }
        }
    }
    return kataBaru

  }
  



  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu





    