let str="hello world";
// uppercase method
console.log(str.toUpperCase());
// lowercase method
console.log(str.toLowerCase());

let str1="       Hello  World";
console.log(str1);
// trim method
console.log(str1.trim());

// slicing method
console.log(str.slice(6,11));

// concat method
let str2="Shubhangi";
console.log(str.concat(str2));

//replace method
let str3="hello";
console.log(str3.replace("e","a"));
// changes in original string
str3=str3.replace("h","y");
console.log("changes original string",str3);

// charAt method
console.log(str3.charAt(1));
