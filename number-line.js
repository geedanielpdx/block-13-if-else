//1. Set two variables num1 and num2 and enter different values to test
//2. Calculate the sum of the two numbers and store the result in a variable called sum
//3. Using if/else statements, compare the sum with the following values:
//a. If the sum is less than -1000, print "sum is less than -1000"
//b. If the sum is negative, print "sum is a negative number"
//c. If the sum is equal to 0, print "sum is equal to 0"
//d. If the sum is greater than 0 and less than or equal to 100, print "sum is larger than 0"
//e. If the sum is greater than 100, print "sum is greater than 100"

var num1 = 0; // Change this to test different values
var num2 = 101; // Change this to test different values
var sum = num1 + num2;

if (sum < -1000) {
  console.log(sum + " is less than -1000");
} else if (sum < 0) {
  console.log(sum + " is a negative number");
} else if (sum == 0) {
  console.log(sum + " is equal to 0");
} else if (sum > 0 && sum < 100) {
  console.log(sum + " is greater than 0");
} else if (sum >100) {
  console.log(sum + " is greater than 100");
}