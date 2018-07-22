//exercise-14-->Most Frequent Largest Numbers

function sorting(arrNumber) {
  // code di sini
  var tampArrNumber = arrNumber;

  for (i = 0; i < tampArrNumber.length; i++) {
    var angk1 = tampArrNumber[i];
    var angk2 = tampArrNumber[i + 1];
    tampArrNumber.sort(function(angk1, angk2) {
      return angk1 < angk2;
    });
  }
  return tampArrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  var highestNumber = 0;
  var countHighestNumber = 0;
  if (arrNumber.length === 0) {
    return "";
  } else {
    highestNumber = arrNumber[0];
    countHighestNumber = 1;
    for (var j = 1; j < arrNumber.length; j++) {
      if (arrNumber[j] === highestNumber) {
        countHighestNumber += 1;
      } else {
        break;
      }
    }
  }
  return (
    "angka paling besar adalah " +
    highestNumber +
    " dan jumlah kemunculan sebanyak " +
    countHighestNumber +
    " kali"
  );
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

  console.log(mostFrequentLargestNumbers([]));
  //''
