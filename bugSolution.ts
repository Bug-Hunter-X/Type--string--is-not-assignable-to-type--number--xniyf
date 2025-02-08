function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result1 = add(5, 3);
let result2 = subtract(5, 3);

let result3: number;
let num1 = "5";
let num2 = 3;

if(isNumber(num1)){
    result3 = add(Number(num1),num2);
}
console.log(result3); // Type 'string' is not assignable to type 'number'.