function add(num1: number, num2: number): number {
  return num1 + num2;
}

const sub = (num1: number, num2: number): number => {
  return num1 - num2;
};

const superhero = ["Spiderman", "Superman", "Batman"];

const val: number = add(2, 3);
const val2: number = sub(2, 3);

let obj: Object = {};

let idx: number = 0;

superhero.map(function (hero: string): void {
  obj[idx] = hero;
  idx++;
});

console.log(obj);

console.log(val);
console.log(val2);

export {};
