//week-4>>exercise12

function shoppingTime(memberId, money) {
    // you can only write your code here!

    

    var obj = {}
      obj.memberId = memberId;
      obj.money = money;
    
    var arrItem = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'];
    
    var hargaBarang = [1500000, 500000, 250000, 175000, 50000]; 
    var bucketBeli = []; 
    var totalBeli = 0 ;
    var changeMoney= 0;
    
    if (memberId === '' || !memberId) {
      return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if (money <= 50000) {
      return 'Mohon maaf, uang tidak cukup';
      }

    for (var i = 0; i<arrItem.length; i++){
      if (money >= hargaBarang[i]){
          totalBeli = totalBeli + hargaBarang[i];
          bucketBeli.push(arrItem[i]);
          changeMoney = money - totalBeli
      }
    }
    obj.listPurchased = bucketBeli
    obj.changeMoney = changeMoney
    return obj
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja