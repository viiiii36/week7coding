/*1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.*/
//original array
let ages = [3, 9, 23, 64, 2, 8, 28, 93, 36];
console.log(ages);
let firstElement=ages.shift();
//last element - first element
console.log(ages[ages.length-1]-firstElement)
//return to original array
ages.unshift(firstElement);
console.log(ages);
//Use a loop to iterate through the array and calculate the average age.
let sum =0
for (let i=0; i<ages.length;i++) {
    sum += ages[i];
}
console.log(sum/ages.length);
/*2.Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.*/
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//average number of letters
let charCount=0;
for (let i=0; i<names.length;i++) {
    charCount+=names[i].length;
}
console.log(charCount/names.length)
//concatenate names
let nameString='';
for (let i=0; i<names.length;i++) {
    nameString+=` ${names[i]}`
}
console.log(nameString)
/*3.How do you access the last element of any array?
Answer: I use .length-1 to grab the index of last element
4.How do you access the first element of any array?
Answer: I used shift
*/
/*5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array

6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.*/
let nameLengths=[];
for (let i=0; i<names.length;i++) {
    nameLengths[i]=names[i].length;
}
console.log(nameLengths);
/*7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/
const nameDup = (wordInput,n) => {
    let wordString='';
    for (let i=1; i<=n;i++){
       wordString += wordInput;
    }
    console.log(wordString);
}
nameDup('hello',3);

/*8.Write a function that takes two parameters, firstName and lastName, and returns a full name.
 The full name should be the first and the last name separated by a space.*/
 const fullName = (firstName,lastName) => console.log(firstName+' '+lastName);
 fullName('Vi','Nguyen');

 /*9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.*/
 const sumFunc = (a) => {
    let sum=0;
    for (let i=0; i<a.length;i++){
        sum+=a[i];
    }
    if (sum>100){return true}
    else {return false};
 }
 console.log(sumFunc([12, 19]));

 /*10. Write a function that takes an array of numbers and returns the average of all the elements in the array.*/
 const avgFunc = (array) => {
    let sum=0;
    for (let i=0; i<array.length;i++){
        sum+=array[i];
    }
   return sum/array.length;
 }
 console.log(avgFunc([12, 19, 50]));

 /*11. Write a function that takes two arrays of numbers and returns true if the average of the elements 
 in the first array is greater than the average of the elements in the second array.*/
 const compArrays = (a,b) =>{
    let sum1=0;
    let sum2=0;
    let ave1=0;
    let ave2=0;
    for (let i=0; i<a.length;i++){
        sum1+=a[i];
    }
    ave1=sum1/a.length;
    for (let i=0; i<b.length;i++){
        sum2+=b[i];}
    ave2=sum2/b.length;
    if (ave1>ave2) {return true}
    else {return false};
    }
 console.log(compArrays([7,8,9],[2,4,6]));

 /*12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
  and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
  const willBuyDrink = (a, b) => {
    if (a==true && b>10.50) {return true}
    else {return false};
  }
  isHotOutside=false;
  moneyInPocket=12;
  console.log(willBuyDrink(isHotOutside,moneyInPocket));

/*13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.*/
/*I'm going to create a function that takes an array representing to buy list and the total money available. If the total cost for all the items 
is larger than total money then it's going to print out "Need more saving", else it's going to print out "Let's go to the store"*/
const canAfford = (itemList,saving) =>{
    let sum=0;
    for (let i=0; i<itemList.length;i++){
        sum+=itemList[i];
    }
    if (sum>saving){
        console.log ('Need more saving');
    }
    else {console.log("Let's go to the store")};
}
canAfford ([120, 200, 300, 75, 20, 45, 17],500)


