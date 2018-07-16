/*input --> process --> output

input
[]


ALGORITMA
1. MENERIMA DATA BERUPA ARRAY OF NAME
    // PROSES LOOPING ISI DATANYA
2. MELAKUKAN LOOPING ARRAY OF NAME
    //PROSES PENGECEKAN
    2.A. LAKUKAN PENGECEKAN APAKAH INDEX MODULUS 2 SAMA DENGAN 0 ATAU BUKAN
    2.A.1 KALAU MIS INDEKS MODULUS SAMA DENGAN 0, MAKA DIBALIK
    //PROSES MEMBALIKAN KATA
        2.A.1.A INITIALISASI COUNTER  DENGAN NILAI PANJANG NAME -1 ATAU PANJANG ELEMENT
        2.A.1.B INISIALISASI PENAMPUNG DENGAN STRING KOSONG
        2.A.1.C LOOPING ISI ELEMENT ARRAY ATAU NAME NYA DENGAN BATAS COUNTER >=0
        2.A.1.B.1   TAMBAHKAN PENAMPUNG DENGAN ELEMENT DARI NAMA 
        2.A.1.B.2. DECKREMENT COUNTER DENGAN NILAI 1.
    //PROSES MEMBALIKKAN KATA
    // PROSES SET ULANG ARRAY LOOPING
        2.A.1.D SET ULANG ELEMENT ARRAYNYA DENGAN HASIL PENAMPUNG
    2.A.2 KALAU MIS INDEKS MODULUS TIDAK SAMA DENGAN 0, MAKA NORMAL
    2.A.2.1 DO NOTHING


PELAJARI RE ASIGN ULANG INDEX DI ARRAY
MISALNYA
VAR A = [1,2,3] INPUT
VAR B = [2,2,3] OUTPUT
PROCESENYA
A[0]=2
B = A





materi 16 juli 2018
//array
var countries = [[],[],[]]


//object
var object = {}
var student = {
    name: 'rama',
    age : 20,
    hobbies: ['traveling', 'coding'],
    address : {
        city: 'jakarta',
        zipcode: 14045,
    }
}
cara menggilnya 
console.log (student.name)// hasilnya'rama'

var countriesObj = {
    asia: ['indonesia','malaysia'],
    euro: ['croatia'],
    america: ['brazil']
}


for (var i = 0; i< countriesObj.asia.length; i++){
    console.log(countriesObj.asia[i].asia.length; i++)
}


-->>cara push di object
var countriesObj = {
    asia: ['indonesia','malaysia'],
    euro: ['croatia'],
    america: ['brazil']
}

countriesObj.asutralia = ['negara australia']

hasilnya
    asia: ['indonesia','malaysia'],
    euro: ['croatia'],
    america: ['brazil']
    asutralia = ['negara australia']










*/