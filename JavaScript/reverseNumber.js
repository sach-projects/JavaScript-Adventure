let number = 563748;
let reverse = 0;
let unit = 0;
let multiplier = 1
while(number > 0){
  unit = parseInt(number%10);
  reverse = unit*multiplier + reverse;
  multiplier *= 10;
  number = parseInt(number/10);
}
console.log(reverse);
