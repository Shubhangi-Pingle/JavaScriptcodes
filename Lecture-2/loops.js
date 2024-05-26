// For Loop


for(let i=1;i<=5;i++)
{
    console.log("Hello World!");
}

// the below line gives error becoz the variable i initialized within the loop with let keyword.
// if we initialize the variable using var keyword it is initialized globally  then the value of i is printed
// console.log(i);

// calculate sum of 1 to 5

let sum=0 ;
for(let i=1;i<=5;i++)
{
    sum=sum+i;

}

console.log("Sum:",sum);


// While loop

let i=1;
while(i<=10)
{
    console.log("i=:",i);
    i++;
}
// console.log("i=:",i);


// do-while loop
let j=2;
do
{
    console.log("j:",j);
    j++;
}
while(j<2);


// for-of loop

let str="Hello";
let size=0;
for( let i of str)
{
    console.log(i);
    size++;
}
console.log("size:",size)

// for-in loop

const student=
{
    name:"Shubhangi",
    age:21,
    sgpa:9.02,
    isPass:true
};

for(let key in student)
{
    console.log(key,":",student[key]);
}