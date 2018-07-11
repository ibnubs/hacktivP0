//exercise-2.Mengakses Nilai Dalam Array
function balikKata (kata){
    var tampungKata = '';
    for (var i= kata.length-1; i>=0; i--){
        tampungKata += kata[i];
    } return tampungKata;
}
console.log(balikKata("Hello World"))