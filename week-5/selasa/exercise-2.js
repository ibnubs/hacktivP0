//week-5.Exercise-2--> Naik Angkot

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  var outputArr = [];

  for (var i = 0; i < arrPenumpang.length; i++) {
    bayar = rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]);

    var data = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: bayar * 2000
    };
    outputArr.push(data);
  }

  return outputArr;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]