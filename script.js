// Q1.Log your name and favorite hobby to the console.
// const Name = "Ankit billore" 
// const hobby = "Music"
// console.log("my name is ",Name ,"and hobby is", hobby);

// Q2.Perform and log the result of 45 * 2 - 10.
// const a = 45;
// const b = 2;
// const c = 10;

// console.log("The result is : " , a*b-c);

// Q3.Use console.log() to display the current year.

// const Year = new Date().getFullYear()
// console.log(Year);

// Q4.Create two variables for first and last name. Concatenate and log them.

// const First = "Ankit" 
// const Last = "Billore"
// const Fullyname = First + " " + Last
// console.log("My Name is :",Fullyname);

// Q5.Track the value of a variable by logging it before and after updating.

// let a = 10;
// let b = 20;
// console.log("Value of a before update:", a);
// a += 5; 
// console.log("Value of a after update:", a);
// console.log("Value of b before update:", b);
// b *= 2; 
// console.log("Value of b after update:", b);

//Q6.Use console.error() to simulate an error message.

// console.error("Server not Running :");

// Q7.Log the square of the number 12 to the console.

// const a = 12
// console.log(Math.pow(a, 2));

// Q8.Print the type of a variable holding the value true.

// const isTrue = true;
// console.log(typeof isTrue);

// Q9.Create a variable holding your age and log whether it’s greater than 18.

// const age = 20;
//  if (age > 18 ){
// console.log("Adult");
//  }else{
//  console.log("not adult"); 
//  }

// Q10.Log the result of 100 / 0 and observe the output.

// const num = 100;
// const num2 = 0;
// console.log(num/num2);

// Q11.Declare a variable using let and log its value.

// let Name  = "Ankit Billore"
// console.log(Name);

// Q12.Create a constant to store the value of PI and log it.

// const PI = Math.PI;
// console.log("Value of PI:", PI);

// Q13.Reassign a value to a variable declared with let and log the result.

// let a = 10;
// let b= a;
// b = 15; 
// console.log(b); 

// Q14.Check the type of null and log it.

// let value = null;
// console.log(typeof null);

// Q15.Create a variable with a number as a string (e.g., "25") and log its type.

// const num = "25";
// console.log(typeof num);

// Q16.Use typeof to check the type of a boolean variable.

// const val = true;
// console.log(typeof val);

// Q17.Create three variables of types string, number, and boolean, and log their values.

// const Name = "Ankit"
// const Age = 20
// const isMarried = false
// console.log(Name,Age,isMarried);

// Q18. Declare a variable without assigning a value. Log its type.

// let Value ;
// console.log(typeof Value);

// Q19.Create a variable with undefined and log its type.

// let myVariable;
// console.log(typeof myVariable);

// Q20.Use const to create an array. Try reassigning the array and observe the error.

// const myArray = [1, 2, 3];
// console.log(myArray);
// try {
    // myArray = [4, 5, 6];
// } catch (error) {
    // console.error("Error:", error.message);
// }

// Q21.Write a for loop to print numbers from 1 to 50.

// for (let i = 1; i <= 50; i++) {
 // console.log(i);
// }

// Q22.Use a while loop to sum the numbers from 1 to 10.

// let sum = 0;
// let i = 1;
// while (i <= 10) {
    // sum += i;
    // i++;
// }
// console.log("Sum of numbers from 1 to 10:", sum);

// Q23.Create a for...of loop to log each character of the string "JavaScript".

// const str = "JavaScript";
// for (const char of str) {
    // console.log(char);
// }

// Q24.Write a for loop that skips even numbers between 1 and 20.

// for (let i = 1; i <= 20; i++) {
    // if (i % 2 === 0) {
        // continue; 
    // }
    // console.log(i); 
// }
// 

// Q25.Use a do...while loop to log numbers from 5 to 1.

// let number = 5;
// do {
    // console.log(number);
    // number--;
// } while (number >= 1);

// Q26.Create a for loop that calculates the factorial of 5.

// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
    // factorial *= i;
// }
// console.log("Factorial of 5:", factorial);

// Q27.Write a nested loop to print a 3x3 grid of numbers.

// for (let i = 0; i < 3; i++) {
    // let row = '';
    // for (let j = 0; j < 3; j++) {
        // row += (i * 3 + j + 1) + ' ';
    // }
    // console.log(row.trim());
// }

// Q28.Use a for loop to reverse an array [1, 2, 3, 4].

// const array = [1, 2, 3, 4];
// const reversedArray = [];
// for (let i = array.length - 1; i >= 0; i--) {
    // reversedArray.push(array[i]);
// }
// console.log("Reversed array:", reversedArray);

// Q29.Write a while loop that logs numbers from 1 to 100 divisible by 5.

// let number = 1;
// while (number <= 100) {
    // if (number % 5 === 0) {
        // console.log(number);
    // }
    // number++;
// }

// Q30.Use a for...in loop to iterate over an object and log its keys.


// const obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
    // console.log(key);
// }
// 

// Q31.Create an array of your top 5 favorite movies and log it.

// const favoriteMovies = ['Bahubali', 'Pushpa', 'KGF', 'hum aapke he kon', 'mass'];
// console.log(favoriteMovies);

// Q32.Find and log the second element of an array.

// const favoriteMovies = ['Bahubali', 'Pushpa', 'KGF', 'hum aapke he kon', 'mass'];
// console.log("Second element:", favoriteMovies[1]);

// Q33.Add two new elements to the start of an array using .unshift().

// const favoriteMovies = ['Bahubali', 'Pushpa', 'KGF', 'hum aapke he kon', 'mass'];
// favoriteMovies.unshift('Inception', 'The Dark Knight');
// console.log("Updated favorite movies:", favoriteMovies);

// Q34.Remove the last element of an array and log the updated array.

// const favoriteMovies = ['Bahubali', 'Pushpa', 'KGF', 'hum aapke he kon', 'mass'];
// favoriteMovies.pop();
// console.log("Updated favorite movies after removal:", favoriteMovies);

// Q35.Use .slice() to extract the first three elements of an array.

// const favoriteMovies = ['Bahubali', 'Pushpa', 'KGF', 'hum aapke he kon', 'mass'];
// const firstThreeMovies = favoriteMovies.slice(0, 3);
// console.log("First three favorite movies:", firstThreeMovies);

// Q36.Find the index of a specific element in an array using .indexOf().

// const favoriteMovies = ['Bahubali', 'Pushpa', 'KGF', 'hum aapke he kon', 'mass'];
// const indexOfMovie = favoriteMovies.indexOf('KGF');
// console.log("Index of 'KGF':", indexOfMovie);

// Q37.Check if a value exists in an array using .includes().

// const favoriteMovies = ['Bahubali', 'Pushpa', 'KGF', 'hum aapke he kon', 'mass'];
// const movieToCheck = 'KGF';
// const exists = favoriteMovies.includes(movieToCheck);
// console.log(`Does the movie "${movieToCheck}" exist in the array?`, exists);

// Q38.Combine two arrays [1, 2] and [3, 4] using .concat().

// const array1 = [1, 2];
// const array2 = [3, 4];
// const combinedArray = array1.concat(array2);
// console.log("Combined Array:", combinedArray);

// Q39.Sort an array of numbers [5, 2, 9, 1] in ascending order.

// const numbers = [5, 2, 9, 1];
// numbers.sort((a, b) => a - b);
// console.log("Sorted numbers in ascending order:", numbers);

// Q40.Write a program that creates a copy of an array without mutating the original.

// const originalArray = ['Bahubali', 'Pushpa', 'KGF', 'hum aapke he kon', 'mass'];
// const copiedArray = [...originalArray];
// console.log("Original Array:", originalArray);
// console.log("Copied Array:", copiedArray);

// Q41.Write a function to check if a number is even or odd.

// function isEvenOrOdd(number) {
    // return number % 2 === 0 ? 'Even' : 'Odd';
// }
// console.log(isEvenOrOdd(6)); 
// console.log(isEvenOrOdd(7)); 

// Q42.Create a function to calculate the area of a circle with a given radius.

// function calculateCircleArea(radius) {
    // return Math.PI * radius * radius;
// }
// const radius = 5;
// console.log("Area of the circle with radius", radius, "is:", calculateCircleArea(radius));

// Q43.Write a function that accepts an array and returns the sum of its elements.

// function sumArrayElements(arr) {
    // return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// }
// const sampleArray = [1, 2, 3, 4, 5];
// console.log("Sum of array elements:", sumArrayElements(sampleArray));

// Q44.Create a function that checks if a string starts with a specific character.

// function startsWithCharacter(str, char) {
    // return str.charAt(0) === char;
// }
// const testString = "Hello, world!";
// const characterToCheck = "H";
// console.log(`Does the string "${testString}" start with "${characterToCheck}"?`, startsWithCharacter(testString, characterToCheck));

// Q45.Write a function to find the maximum of two numbers.

// function findMaximum(num1, num2) {
    // return num1 > num2 ? num1 : num2;
// }
// console.log("Maximum of 5 and 10 is:", findMaximum(5, 10));
// console.log("Maximum of -1 and 0 is:", findMaximum(-1, 0));

// Q46.Create a function that takes a number and returns its factorial.
// function factorial(n) {
    // if (n < 0) return undefined; 
    // if (n === 0 || n === 1) return 1; 
    // return n * factorial(n - 1); 
// }
// console.log("Factorial of 5 is:", factorial(5));
// console.log("Factorial of 0 is:", factorial(0));
// console.log("Factorial of 7 is:", factorial(7));

// Q47.Write a function that accepts a string and returns its reverse.

// function reverseString(str) {
    // return str.split('').reverse().join('');
// }
// const testStringForReverse = "Hello, world!";
// console.log("Reversed string:", reverseString(testStringForReverse));

// Q48.Create a function to find the largest number in an array.

// function findLargestNumber(arr) {
    // return Math.max(...arr);
// }
// const sampleArrayForLargest = [3, 5, 7, 2, 8];
// console.log("Largest number in the array:", findLargestNumber(sampleArrayForLargest));

// Q49.Write a function that converts a string to kebab-case (e.g., "Hello World" → "hello-world").

// function toKebabCase(str) {
    // return str
        // .toLowerCase() 
        // .trim() 
        // .replace(/[\s]+/g, '-') 
        // .replace(/[^\w-]+/g, '');
// }
// const testStringForKebabCase = "Hello World";
// console.log("Kebab-case string:", toKebabCase(testStringForKebabCase));

// Q50.Create a function that logs "Hello, World!" every time it is called.

// function logHelloWorld() {
    // console.log("Hello, World!");
// }
// logHelloWorld()
// logHelloWorld()
