let str="hello world";
console.log(str);
console.log("Size:",str.length);
console.log(str[0]);

let str1="Hello\t World";
console.log(str1);
console.log(str1.length);


let num=parseInt(prompt("Enter number"));
let len=num.toString().length;
console.log("len :"+len);
let num1=num;
let i=1;
let sum=0;
while(i<=len)
{
    let n=num1%10;
    num1=parseInt(num1/10);
    console.log("num1:"+num1);
    let z=Math.pow(n,len);
    sum=sum+z;
    i=i+1;
}

console.log("sum:"+sum);

if(sum==num)
{
    alert("The number is Armstrong");
}
else
{
    alert("The number is Armstrong");
}


