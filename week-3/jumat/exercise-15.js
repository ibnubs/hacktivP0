//exercise-15--> mengelompokan hewan


/*
problem
Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
*/



  function groupAnimals(animals) {
    animals.sort(function(a,b){ return a > b})
    var cek = []
    var kategori = []
    
    for(var aa = 0; aa < animals.length; aa++){
      var index = -1
    
      for (var bb = 0; bb < kategori.length; bb++) {
        if (animals[aa][0] === kategori[bb]) {
          index = bb
        }
      }
    
      
      if(index === -1){
         kategori.push(animals[aa][0])
         cek.push([animals[aa]])
      } else {
        cek[index].push(animals[aa])
      }
    
    }
    return cek;
    }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]