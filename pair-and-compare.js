//1. Define four variables and set their values to the provided test values
//2. Use an if/else statement with strict equality operators to compare each pair of values
//3. Check if at least one of the pairs is truthy
//4. If at least one of the pairs is truthy, print "true"
//5. If none of the pairs is truthy, print "false"

var param1A = "five"; // Change this to test different values
var param1B = "5"; // Change this to test different values

var param2A = "dog"; // Change this to test different values
var param2B = "dawg"; // Change this to test different values

if ((param1A === param1B)  || (param2A === param2B) ) {
  console.log(true);
} else {
  console.log(false);
}