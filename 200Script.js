// Q1.Create a program that calculates and logs the result of (5 + 3) * 2 - 8 / 4.
// const result = (5 + 3) * 2 - 8 / 4;
// console.log(result);

// Q2.Log the value of a variable before and after incrementing it using ++.
// let variable = 10; 
// console.log("Before incrementing:", variable);
// variable++; 
// console.log("After incrementing:", variable);

// Q3Write a program that swaps the values of two variables without using a third variable.
// let a = 5;
// let b = 10;
// console.log("Before swapping: a =", a, ", b =", b);
// a = a + b;
// b = a - b;
// a = a - b; 
// console.log("After swapping: a =", a, ", b =", b);

// Q4.Create a variable with a template literal that includes your name and age.
// const name = "Your Name"; 
// const age = 25; 
// const introduction = `My name is ${name} and I am ${age} years old.`;
// console.log(introduction);

// Q5.Use console.table() to display the following object: { name: "John", age: 30, city: "New York" }.
// const person = { name: "John", age: 30, city: "New York" };
// console.table(person);

// Q6.Create a program that uses console.group() to group related logs.
// console.group("User Information");
// console.log("Name: John Doe");
// console.log("Age: 30");
// console.log("City: New York");
// console.groupEnd();

// Q7.Use console.time() and console.timeEnd() to measure the execution time of a simple loop.
// console.time("loopTime");
// for (let i = 0; i < 100; i++) {
    // let temp = i * 2;
// }
// console.timeEnd("loopTime");

// Q8.Log a variable’s value dynamically by including it in a string: "The value is: <value>".
// let value = 42;
// console.log(`The value is: ${value}`);

// Q9.Use console.trace() to debug a function call stack.
// function exampleFunction() {
    // console.trace("Trace from exampleFunction");
// }
// function anotherFunction() {
    // exampleFunction();
// }
// anotherFunction();

// Q10.Create and log an object dynamically using computed property names
// const key1 = "name";
// const key2 = "age";
// const key3 = "city";
// const dynamicObject = {
    // [key1]: "John",
    // [key2]: 30,
    // [key3]: "New York"
// };
// console.log(dynamicObject);

// Q11.Write a nested loop to generate a multiplication table (1 to 10.
// for (let i = 1; i <= 10; i++) {
    // let row = [];
    // for (let j = 1; j <= 10; j++) {
        // row.push(i * j);
    // }
    // console.log(row.join(" "));
// }

// Q12.Use a for...in loop to iterate through the properties of an object.
// const person = {
    // name: "John Doe",
    // age: 30,
    // city: "New York"
// };
// for (let key in person) {
    // console.log(`${key}: ${person[key]}`);
// }

// Q13.Write a program to calculate the sum of all even numbers between 1 and 100 using a for loop.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
    // if (i % 2 === 0) {
        // sum += i;
    // }
// }
// console.log(`The sum of all even numbers between 1 and 100 is: ${sum}`);

// Q14.Use a for...of loop to iterate over a string and count the vowels.
// const str = "This is an example string to count vowels.";
// let vowelCount = 0;
// const vowels = "aeiouAEIOU";
// for (const char of str) {
    // if (vowels.includes(char)) {
        // vowelCount++;
    // }
// }
// console.log(`The number of vowels in the string is: ${vowelCount}`);

// Q15.Create a loop that breaks out when a specific condition is met (e.g., number divisible by 7).
// for (let i = 1; i <= 100; i++) {
    // if (i % 7 === 0) {
        // console.log(`Breaking out of the loop at number: ${i}`);
        // break;
    // }
// }

// Q16.Write a loop that skips numbers divisible by 3 but logs all others up to 20.
// for (let i = 1; i <= 20; i++) {
    // if (i % 3 === 0) {
        // continue; 
    // }
    // console.log(i);
// }

// Q17.Use a do...while loop to prompt the user until they enter a positive number.
// let number;
// do {
    // number = parseFloat(prompt("Please enter a positive number:"));
// } while (isNaN(number) || number <= 0);
// console.log(`You entered a positive number: ${number}`);

// Q18.Write a nested loop to generate a pyramid pattern:

//    *
//   *** 
//  *****
// *******

// const rows = 4; // Number of rows in the pyramid
// for (let i = 1; i <= rows; i++) {
    // let output = ' '.repeat(rows - i) + '*'.repeat(2 * i - 1);
    // console.log(output);
// }

// Q19.Use a loop to reverse a string "JavaScript".
// let originalString = "JavaScript";
// let reversedString = "";
// for (let i = originalString.length - 1; i >= 0; i--) {
    // reversedString += originalString[i];
// }
// console.log(`Reversed string: ${reversedString}`);

// Q20.Write a program to calculate the product of all numbers in an array using a loop.
// const numbers = [1, 2, 3, 4, 5]; 
// let product = 1; 
// for (let i = 0; i < numbers.length; i++) {
    // product *= numbers[i]; 
// }
// console.log(`The product of all numbers in the array is: ${product}`);

// Q21.Write a program to merge two arrays and remove duplicate values.
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];
// const mergedArray = [...array1, ...array2];
// const uniqueArray = [...new Set(mergedArray)];
// console.log(`Merged array without duplicates: ${uniqueArray}`);

// Q22.Create a program to find the second largest number in an array.
// const numbers = [1, 2, 3, 4, 5]; 
// let firstLargest = -Infinity;
// let secondLargest = -Infinity;
// for (let i = 0; i < numbers.length; i++) {
    // if (numbers[i] > firstLargest) {
        // secondLargest = firstLargest;
        // firstLargest = numbers[i];
    // } else if (numbers[i] > secondLargest && numbers[i] !== firstLargest) {
        // secondLargest = numbers[i];
    // }
// }
// console.log(`The second largest number in the array is: ${secondLargest}`);

// Q23.Write a function that removes all falsy values from an array.
// function removeFalsyValues(arr) {
    // return arr.filter(Boolean);
// }
// const arrayWithFalsyValues = [0, 1, false, 2, '', 3, null, 4, undefined, 5];
// const cleanedArray = removeFalsyValues(arrayWithFalsyValues);
// console.log(`Array without falsy values: ${cleanedArray}`);

// Q24.Use .reduce() to find the total sum of numbers in an array.
// const numbers = [1, 2, 3, 4, 5];
// const totalSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(`The total sum of numbers in the array is: ${totalSum}`);

// Q25.Write a program that rotates an array to the left by n positions
// function rotateArrayLeft(arr, n) {
    // const length = arr.length;
    // n = n % length; 
    // return arr.slice(n).concat(arr.slice(0, n));
// }
// const arrayToRotate = [1, 2, 3, 4, 5];
// const positions = 2; 
// const rotatedArray = rotateArrayLeft(arrayToRotate, positions);
// console.log(`Array after rotating left by ${positions} positions: ${rotatedArray}`);

// Q26.Use .find() to locate the first even number in an array.
// const numbers = [1, 2, 3, 4, 5];
// const firstEven = numbers.find(num => num % 2 === 0);
// console.log(`The first even number in the array is: ${firstEven}`);

// Q27.Create a function that flattens a nested array (e.g., [1, [2, [3]]] → [1, 2, 3]).
// function flattenArray(arr) {
    // return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
// }
// const nestedArray = [1, [2, [3]]];
// const flattenedArray = flattenArray(nestedArray);
// console.log(`Flattened array: ${flattenedArray}`);

// Q28.Write a program that counts how many times each element appears in an array.
// const countOccurrences = (arr) => {
    // const occurrences = {};
    // arr.forEach(item => {
        // occurrences[item] = (occurrences[item] || 0) + 1;
    // });
    // return occurrences;
// };
// const arrayToCount = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// const countedOccurrences = countOccurrences(arrayToCount);
// console.log(`Occurrences of each element:`, countedOccurrences);

// Q29.Use .some() and .every() to check conditions on an array.
// const numbers = [1, 2, 3, 4, 5];
// const hasGreaterThanThree = numbers.some(num => num > 3);
// console.log(`Some numbers are greater than 3: ${hasGreaterThanThree}`);
// const allLessThanTen = numbers.every(num => num < 10);
// console.log(`All numbers are less than 10: ${allLessThanTen}`);

// Q30.Sort an array of objects by a specific property.
// const arrayOfObjects = [
    // { name: 'John', age: 25 },
    // { name: 'Jane', age: 30 },
    // { name: 'Alice', age: 22 },
    // { name: 'Bob', age: 28 }
// ];
// const sortedArray = arrayOfObjects.sort((a, b) => a.age - b.age);
// console.log('Array sorted by age:', sortedArray);

// Q31.Write a function that returns another function to calculate the power of a number.
// function powerCalculator(exponent) {
    // return function(base) {
        // return Math.pow(base, exponent);
    // };
// }
// const square = powerCalculator(2);
// console.log(`2 squared is: ${square(2)}`); 
// const cube = powerCalculator(3);
// console.log(`3 cubed is: ${cube(3)}`);

// Q32.Create a recursive function to calculate the Fibonacci sequence up to n terms.
// function fibonacci(n) {
    // if (n <= 0) return [];
    // if (n === 1) return [0];
    // if (n === 2) return [0, 1];
    // const seq = fibonacci(n - 1);
    // seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    // return seq;
// }
// const nTerms = 10; 
// const fibonacciSequence = fibonacci(nTerms);
// console.log(`Fibonacci sequence up to ${nTerms} terms:`, fibonacciSequence);

// Q33.Write a function that uses closures to create a counter.
// function createCounter() {
    // let count = 0; 
    // return function() {
        // count++; 
        // return count; 
    // };
// }
// const counter = createCounter();
// console.log(`Counter value: ${counter()}`);
// console.log(`Counter value: ${counter()}`);
// console.log(`Counter value: ${counter()}`);

// Q34.Create a function that memoizes the result of a computation.
// function memoize(fn) {
    // const cache = {};
    // return function(...args) {
        // const key = JSON.stringify(args);
        // if (cache[key]) {
            // return cache[key];
        // }
        // const result = fn(...args);
        // cache[key] = result;
        // return result;
    // };
// }
// function factorial(n) {
    // if (n <= 1) return 1;
    // return n * factorial(n - 1);
// }
// const memoizedFactorial = memoize(factorial);
// console.log(`Factorial of 5: ${memoizedFactorial(5)}`); 
// console.log(`Factorial of 5: ${memoizedFactorial(5)}`); 

// Q35.Write a function to debounce a button click event.
// function debounce(func, delay) {
    // let timeoutId;
    // return function(...args) {
        // if (timeoutId) {
            // clearTimeout(timeoutId);
        // }
        // timeoutId = setTimeout(() => {
            // func.apply(this, args);
        // }, delay);
    // };
// }
// const button = document.createElement('button');
// button.id = 'myButton';
// button.textContent = 'Click Me';
// document.body.appendChild(button);
// button.addEventListener('click', debounce(() => {
    // console.log('Button clicked!');
// }, 300));

// Q36.Implement a function that throttles an API call.
// function throttle(func, limit) {
    // let lastFunc;
    // let lastRan;
    // return function(...args) {
        // const context = this;

        // if (!lastRan) {
            // func.apply(context, args);
            // lastRan = Date.now();
        // } else {
            // clearTimeout(lastFunc);
            // lastFunc = setTimeout(function() {
                // if ((Date.now() - lastRan) >= limit) {
                    // func.apply(context, args);
                    // lastRan = Date.now();
                // }
            // }, limit - (Date.now() - lastRan));
        // }
    // };
// }
// const apiCall = () => {
    // console.log('API call made!');
// };
// const throttledApiCall = throttle(apiCall, 2000);
// setInterval(throttledApiCall, 500); 

// Q37.Create a higher-order function that applies a callback to each element of an array.
function applyCallbackToArray(arr, callback) {
    return arr.map(callback);
}

// Q38.Write a function that calculates the GCD (Greatest Common Divisor) of two numbers.
// function gcd(a, b) {
    // while (b !== 0) {
        // let temp = b;
        // b = a % b;
        // a = temp;
    // }
    // console.log(`The GCD of the two numbers is: ${a}`);
    // return a;
// }

// Q39.Create a function that accepts an array of functions and executes them sequentially.
// function executeFunctionsSequentially(functions) {
    // functions.forEach(func => {
        // if (typeof func === 'function') {
            // func();
        // }
    // });
// }

// Q40.Write a function to curry a simple mathematical operation.

// function curry(operation) {
    // return function curried(...args) {
        // if (args.length < operation.length) {
            // return function(...args2) {
                // return curried(...args, ...args2);
            // };
        // }
        // return operation(...args);
    // };
// }
// const add = (a, b) => a + b;
// const curriedAdd = curry(add);
// console.log(curriedAdd(2)(3)); 

// Q41.Write a program to reverse the words in a sentence but not the sentence itself.
// function reverseWordsInSentence(sentence) {
    // return sentence.split(' ').reverse().join(' ');
// }
// const sentence = "Hello world this is a test";
// const reversedSentence = reverseWordsInSentence(sentence);
// console.log(reversedSentence); 

// Q42.Use a regex to validate if a string is a valid email address.
// function isValidEmail(email) {
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return emailRegex.test(email);
// }
// const email = "example@example.com";
// console.log(`Is the email "${email}" valid?`, isValidEmail(email));

// Q43.Create a function to check if a string contains only digits.
// function containsOnlyDigits(str) {
    // const digitRegex = /^\d+$/;
    // return digitRegex.test(str);
// }
// const testString1 = "12345";
// const testString2 = "123a45";
// console.log(`Does "${testString1}" contain only digits?`, containsOnlyDigits(testString1)); // true
// console.log(`Does "${testString2}" contain only digits?`, containsOnlyDigits(testString2)); // false

// Q44.Write a function to extract all numbers from a string and return them as an array.
// function extractNumbersFromString(str) {
    // const numberRegex = /\d+/g;
    // return str.match(numberRegex) ? str.match(numberRegex).map(Number) : [];
// }
// const testString = "There are 3 apples, 5 oranges, and 12 bananas.";
// const numbers = extractNumbersFromString(testString);
// console.log(numbers);

// Q45.Use .match() to find all occurrences of a word in a string.
// function findAllOccurrences(word, str) {
    // const wordRegex = new RegExp(word, 'g');
    // return str.match(wordRegex) || [];
// }
// const testString = "The quick brown fox jumps over the lazy dog. The dog barked.";
// const occurrences = findAllOccurrences("dog", testString);
// console.log(`Occurrences of "dog":`, occurrences);

// Q46.Create a program to capitalize the first letter of each word in a string.
// function capitalizeFirstLetterOfEachWord(str) {
    // return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }
// const testString = "hello world this is a test";
// const capitalizedString = capitalizeFirstLetterOfEachWord(testString);
// console.log(capitalizedString);

// Q47.Write a function that removes duplicate characters from a string.
// function removeDuplicateCharacters(str) {
    // return [...new Set(str)].join('');
// }
// const testString = "hello world";
// const result = removeDuplicateCharacters(testString);
// console.log(`String after removing duplicates: "${result}"`);

// Q48.Use a regex to replace multiple spaces with a single space.
// function replaceMultipleSpaces(str) {
    // return str.replace(/\s+/g, ' ');
// }
// const testString = "This   is  a   string    with   multiple   spaces.";
// const result = replaceMultipleSpaces(testString);
// console.log(`String after replacing multiple spaces: "${result}"`);

// Q49.Write a function to check if a string is an anagram of another string.
// function isAnagram(str1, str2) {
    // const normalize = str => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    // return normalize(str1) === normalize(str2);
// }
// console.log(isAnagram("listen", "silent")); 
// console.log(isAnagram("hello", "world"));   
// console.log(isAnagram("Dormitory", "Dirty room")); 

// Q50.Create a function to count the frequency of each word in a string.
// function countWordFrequency(str) {
    // const words = str.toLowerCase().match(/\w+/g) || [];
    // const frequency = {};
    // words.forEach(word => {
        // frequency[word] = (frequency[word] || 0) + 1;
    // });
    // return frequency;
// }
// const testString = "This is a test. This test is only a test.";
// const wordFrequency = countWordFrequency(testString);
// console.log("Word Frequency:", wordFrequency);
