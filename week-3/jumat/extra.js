/*
buat array yg berisi checklist task perminggu pengerjaan tugas kalian masing2
dimulai dari week ke 2 saja sampai week ke 4
dimana nilai 1 berarti sudah dikerjakan
nilai 0 berarti belum dikerjakan
contoh:
task = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,-,-,-,-,-], // week 2, exercise 1-13
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,-,-,-,], // week 3, exercise 1-15
  [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0] //week 4, exercise 1-18
]
jika exercise tidak ada beri nilai ceklis "-" tampilkan data dengan format sbb 
"exercise-"+week ke berapa+" "+nilai ceklist exercise tersebut week 1+" "+nilai ceklist exercise tersebut week 2+" "+nilai ceklist exercise tersebut week 1
contoh:
exercise-01 1 1 1
exercise-02 1 1 1
exercise-03 1 1 1
exercise-04 1 1 1
exercise-05 1 1 1
exercise-06 1 1 1
exercise-07 1 1 0
exercise-08 1 1 0
exercise-09 1 1 0
exercise-10 1 1 0
exercise-11 1 1 0
exercise-12 1 1 0
exercise-13 1 1 0
exercise-14 - 1 0
exercise-15 - 1 0
exercise-16 - 1 0
exercise-17 - 1 0
exercise-18 - 1 0
*/
  //console.log(task)-->cek isi task

function exercise (datas){


  var totalTugas= 18;
  var myNumber = 0;
  var week2 = datas[0];
  var week3 = datas[1];
  var week4 = datas[2];
  var tampung = ''
  
  for (var i = 0; i<totalTugas; i++){
      
      if (i<=totalTugas){
        var formattedNumber = ("0" + (i+1)).slice(-2);     
        var laporan = ' ' + week2[i] + ' ' + week3[i] + ' ' + week4[i]

      }
    

      tampung += 'exercise-' + formattedNumber + laporan + '\n';   
    
  } 
   
  return tampung
}


console.log(exercise([
  [1,1,1,1,1,1,1,1,1,1,1,1,1,'-','-','-','-','-'], // week 2, exercise 1-13
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,'-','-','-',], // week 3, exercise 1-15
  [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0] //week 4, exercise 1-18
])); 


