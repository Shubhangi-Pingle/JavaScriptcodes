// Conditional Statements
// 1) if-statement

let age=25;
if(age>=18)
{
    console.log("Eligible for voting");
}


let mode="dark";
let color;
if(mode==="dark")
{
    color="black";
}

if(mode==="light")
{
    color="White";
}

console.log("color:",color);


// if-else Statement
age=17;
if(age>=18)
{
    console.log("Eligible for voting");
}
else
{
    console.log("you can not vote");
}


let num=20;

if(num % 2===0)
{
    console.log("even")
}
else
{
    console.log("odd")
}

// else-if statement

age=20

if(age<18)
{
    console.log("junior");
}
else if(age>60)
{
    console.log("Senior");
}
else
{
    console.log("middle");
}

// Ternary Operators

age=17;
age>=18? console.log("adult"):console.log("not adult");



// Switch-statement

const expr="Papayass";
switch(expr)
{
    case "Oranges":
        console.log("Oranges are $0.59 pound.");
        break;
    case "Papayas":
        console.log("Papayas are $2.59 pound.");
        break;
    default:
        console.log(`Sorry ,we are out of ${expr}`);
            
}