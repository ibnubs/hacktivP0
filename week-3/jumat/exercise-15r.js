//exercise-15--> mengelompokan hewan

/*
problem
Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
*/

function groupAnimals(animals) {
  var coll = [];

  for (a = 0; a <= animals.length - 1; a++) {
    var hitung = 0;

    for (b = 0; b <= coll.length - 1; b++) {
      for (c = 0; c <= coll[b].length - 1; c++) {
        if (animals[a][0] === coll[b][c][0]) {
          coll[b].push(animals[a]);

          hitung = hitung + 1;

          break;
        }
      }
    }

    coll.push([animals[a]]);
    if (hitung > 0) {
      coll.pop();
    }
  }

  //------------------
  return coll.sort();
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
