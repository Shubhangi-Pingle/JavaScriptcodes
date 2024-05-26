let arr1=[1,2,3,4,5];
console.log(arr1);
console.log(arr1.length);
// Modifying the array
arr1[0]=10;
console.log(arr1);

let arr2=["rahul",89,"Delhi"];
console.log(arr2);

// printing the length of array
console.log(arr2.length);

// typeof array
console.log(typeof arr2);

// printing the elements of array using for loop

for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
}

// printing the elements of array using for of loop
for(let i of arr1)
{
    console.log(i);
}


let cities=["Nashik","Delhi","Pune","Mumbai"];
for(let city of cities)
{
    console.log(city.toUpperCase());
}

// *****************************************PRACTICE ******************************************
// Q for given array find the average of marks

let marks=[85,97,44,37,76,60];
let sum=0;

for(let i=0;i<marks.length;i++)
{
    sum=sum+marks[i];
}

let avg=sum/marks.length;
console.log("avg:",avg);

// Q for a given array ith price of 5 items->[250,645,300,900,50] All items have an offer !0 % OFF on them.
// change the array to store final price after applying offer.

let items=[250,645,300,900,50];

for(let i=0;i<items.length;i++)
{
    let offer=items[i]/10;
    let val=items[i]-offer;
    items[i]=val;
}

console.log(items);