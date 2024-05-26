// get a user input using prompt("Enter a number:") check number is multiple of 5

let num=prompt("Enter a number:");

if(num%5==0)
{
    console.log("multiple of 5");
}
else
{
    console.log("not multiple of 5");
}


/* Write a code which can give the grades to the students according to their scores
80-100 A 
70-89 B 
60-69 C 
50-59 D 
0-49 F 
*/

let score=prompt("Enter your score:");
let grade;


if(score>=80 && score<=100)
grade="A";
else if(score>=70 && score<=89)
grade="B";
else if(score>=60 && score<=69)
grade="C";
else if(score>=50 && score<=59)
grade="D";
else
grade="F";


console.log("Grade:",grade);