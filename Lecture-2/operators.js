// Arithmetic Operators

let a=20;
let b=30;

console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b);

let c=10;
let d=2;
console.log(c**d);

// Unary Operator
// postincrement method-1
let p=5;
console.log("p=",p++);
console.log("p=",p);

// postincrement method-2
let q=5;
q++;
console.log("q=",q);

// postdecrement method-1
let r=5;
console.log("r=",r--);
console.log("r=",r);

// postdecrement method-2
let s=5;
s--;
console.log("s=",s);


// Comparison Operator
let num1=5;
let num2=3;

console.log("num1==num2",num1==num2);
console.log("num1!=num2",num1!=num2);
console.log("num1<num2",num1<num2);
console.log("num1<=num2",num1<=num2);
console.log("num1>num2",num1>num2);
console.log("num1>=num2",num1>=num2);


let num3=6;
let num4="6";

console.log("num3===num4",num3===num4);
console.log("num3!==num4",num3!==num4);


// Logical Operator

let cond1=num1>num2;
let cond2=num1<num2;

console.log(cond1 && cond2);
console.log(cond1 || cond2);
console.log(!(cond1==cond2));