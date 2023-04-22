//1. set a value to test
//2. check value with if statement if truthy, print true
//3. if value is falsy go to next step
//4. Check falsy condition using else if statements
//5. Print out the following if the value is:
// a. false "The boolean value false is falsy"
// b. null "The null value is falsy"
// c. undefined "undefined is falsy"
// d. 0 "The number 0 is falsy (the only falsy number)"
// e. "" "The empty string is falsy (the only falsy string)"

var value = ""; // Change this to test different values
if (value) {
  console.log(true);
} else if (value === false) {
  console.log("The boolean value false is falsy");
} else if (value === null) {
  console.log("The null value is falsy");
} else if (value === undefined) {
  console.log("undefined is falsy");
} else if (value === 0) {
  console.log("The number 0 is falsy (the only falsy number)");
} else if (value === "") {
  console.log("The empty string is falsy (the only falsy string)");
}
