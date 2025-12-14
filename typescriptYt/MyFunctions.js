// tsc MyFunctions.ts
// Creates MyFunctions.js file...

function add(num1, num2) {
  return num1 + num2;
}
var sub = function (num1, num2) {
  return num1 - num2;
};
var superhero = ["Spiderman", "Superman", "Batman"];
var val = add(2, 3);
var val2 = sub(2, 3);
var obj = {};
var idx = 0;
superhero.map(function (hero) {
  obj[idx] = hero;
  idx++;
});
console.log(obj);
console.log(val);
console.log(val2);
