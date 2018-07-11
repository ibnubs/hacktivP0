//exercise-4-->Menggunakan Built-in Function pada Array
//splice(start, remove, add)//

function dataHandling2 (){ 

    
    input.splice(1,2,'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    
    input.splice(4,1,'Pria', 'SMA International Metro');
    
    console.log(input);
    

        //output
        //["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  


    //ambil angka bulan
    var bulan = input[3].split('/');
    switch(bulan[1]){
        case '01': {console.log('Januari');break; }
        case '02': {console.log('Februari');break; }
        case '03': {console.log('Maret');break; }
        case '04': {console.log('April');break; }
        case '05': {console.log('Mei');break; }
        case '06': {console.log('Juni');break; }
        case '07': {console.log('Juli');break; }
        case '08': {console.log('Agustus');break; }
        case '09': {console.log('September');break; }
        case '10': {console.log('Oktober');break; }
        case '11': {console.log('November');break; }
        case '12': {console.log('Desember');break; }
        default  : {console.log('bulan salah');}
        //Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.-cek
        // Format tanggal pada data adalah dd-mm-YYYY -cek
        // Misal angka bulan 01, tuliskan "Januari" -cek
        // Gunakan switch case untuk menuliskan bulan di atas. -cek
    }   
    var format  = input[3];
    var tanggal = format.split('/');
        tanggal.sort(function(a, b){return b-a}) ;
        console.log(tanggal);
    
        // Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.

    var joinVar = format.split('/');
    var join    = joinVar.join('-');
        console.log(join);


    
    // Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.

    var nama    = input [1];
    var i       = nama.slice(0,15);
        console.log(i)

    // Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);





//output
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

