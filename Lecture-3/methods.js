let foodItems=["chips","apple","potato"];
// push()
foodItems.push("chips","maggie");
console.log(foodItems);

// pop()
let deletedItem=foodItems.pop();
console.log("deleted item:",deletedItem);
console.log(foodItems);

let marks=[97,86,54,36];
// toString()
console.log(marks.toString());
console.log(marks);


let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
let arr3=arr1.concat(arr2);
console.log(arr3);
let arr4=[11,12,13];

console.log(arr1.concat(arr2,arr4));

let heroes1=["thor","spiderman","ironman"];
// unshift method
heroes1.unshift("krish");
console.log(heroes1);

heroes1.shift();
console.log(heroes1);

// Slice()
console.log(heroes1.slice(0,2));
console.log(heroes1);


let arr5=[1,2,3,4,5];

// add element

// arr5.splice(2,0,100);
console.log(arr5);

// delete element
// arr5.splice(1,1);
console.log(arr5);

// replace element
// arr5.splice(1,1,1000);
console.log(arr5);





