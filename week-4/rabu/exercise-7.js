//week4-digit perkalian minimum--> 


function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var digit = '';
    var angkaArr = [];
    for (var i = 1; i <= angka; i++){
      if(angka % i === 0){
        var count = angka / i;
        digit += i.toString() + count.toString() + '-';
      }
    }
    var split = digit.split('-');
    split.pop();
    for(var j = 0; j < split.length; j++){
      angkaArr.push(split[j].length)
    }
    var min = Math.min.apply(null, angkaArr);
    return min;




  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
//   console.log(digitPerkalianMinimum(90)); // 3
//   console.log(digitPerkalianMinimum(20)); // 2
//   console.log(digitPerkalianMinimum(179)); // 4
//   console.log(digitPerkalianMinimum(1)); // 2