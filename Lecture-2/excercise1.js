// find and print all even numbers fromn 1 to 100

for(let i=1;i<=100;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}


// create a game where you start with any random number.Ask the user to keep guessing the game number until the user enters correct value.
let guessNumber=39;
let userNo=prompt("Enter a number");

while(userNo!=guessNumber)
{
    userNo=prompt("Sorry you entered wrong number enter again:");
}

console.log("congratulations you entered right number!");