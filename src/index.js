module.exports = function getZerosCount(number, base){  
  
  var  divisionCount,num,possibleZeros = number;; 
  var zeros = number;

  for (var i = 2; i <= base;i++)
  {
    if (base % i == 0)
    {   
      divisionCount = 0;
      while (base % i == 0)
      {
        divisionCount++;
        base = Math.floor(base / i);  
      }
      var possibleZeros = 0;
      num = number;

      while (Math.floor(num / i) > 0)
      {
        possibleZeros += Math.floor(num / i);
        num = Math.floor(num / i);
      }
      zeros = Math.min (zeros , Math.floor(possibleZeros / divisionCount));
    }
}        
  return zeros;
}

//console.log(getZerosCount(61518152, 62));

//fisrt attempt
// module.exports = function getZerosCount(number, base) { 
//   var prime = findPrime(base); //we got zero at the end of number  by product of primes
//   var zeros = 0;

//   for(var i = prime; i  < number; i *= prime){
//     zeros += Math.floor(number / i); 
//   }
  
//   return zeros;
// }

// function findPrime(base){
//   var prime = base;

// for(var i = 2; i <= prime / 2; i++){
//   if(prime % i == 0){
//       //if(Math.floor(prime / i) == i) break;
//       prime = Math.floor(prime / i);
//       //if(prime < leastPrime) leastPrime = prime;
//       i = 1;
//   }
// }

//   return prime;
// }
