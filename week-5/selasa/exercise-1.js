//Logic Challenge: Deep Sum


function deepSum (arr) {

    var hasil = 0;
    var a = 0;

    if (arr.length !== 0){
        for (a; a<arr.length; a++){
          var b=0;  
          var lengthB = arr[a].length
            for (b; b<lengthB; b++){
              var c=0;
              var lengthC = arr[a][b].length
                for (c; c<lengthC; c++){
                    hasil += arr[a][b][c]

                }
            }
        }return hasil
    } else {
       return 'No Number!' 
    }
  }
  
  //TEST CASE
  console.log(deepSum(
    [[[4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
    ])); // 316
  
  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number
  