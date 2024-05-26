const arrowSum=(a,b)=>
{
    return a+b;
}

console.log(arrowSum);
console.log(arrowSum(3,4));

let arrowmult=(a,b)=>
{
    console.log(a*b);
}


arrowmult(3,4);

const hello=()=>
{
    console.log("hello");
}
console.log(hello);
console.log(hello());


// *****************Practice**************************
const countVowel=(str)=>
{
    let count=0;
    for(let char of str)
    {
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u")
        {
            count++;
        }
       

    }
    console.log("Vowel count",count);
}




countVowel("apnacollege")