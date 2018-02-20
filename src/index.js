 module.exports =function getZerosCount(number, base) { 
  var prime = findPrime(base); //we got zero at the end of number  by product of primes
  var zeros = 0;

  for(var i = prime; i  < number; i *= prime){
    zeros += Math.floor(number / i); 
  }
  
  return zeros;
}

function findPrime(base){
  var prime = base;

for(var i = 2; i <= prime / 2; i++){
  if(prime % i == 0){
      if(Math.floor(prime / i) == i) break;
      prime = Math.floor(prime / i);
      //if(prime < leastPrime) leastPrime = prime;
      i = 1;
  }
}

  return prime;
}

