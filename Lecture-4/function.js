function addition(x,y)
{
    z=x+y;
    return z;
}
let val=addition(3,4);
console.log(val);

// *****************Practice**************************

function countVowels(str)
{
    let count=0;
    for(i=0;i<str.length;i++)
    {
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u")
        {
            count++;
        }
       

    }
    console.log(count);
}

countVowels("apnacollege")