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

// Q51.Write a script to dynamically create 10 buttons on a webpage.
// for (let i = 1; i <= 10; i++) {
    // const button = document.createElement('button');
    // button.textContent = `Button ${i}`;
    // button.style.margin = '5px';
    // button.onclick = () => alert(`You clicked Button ${i}`);
    // document.body.appendChild(button);
// }

// Q52.Add an event listener to a button that logs its id when clicked.
// const button = document.createElement('button');
// button.id = 'logButton';
// button.textContent = 'Click me to log ID';
// button.style.margin = '5px';
// button.addEventListener('click', () => {
    // console.log(`Button ID: ${button.id}`);
// });
// document.body.appendChild(button);

// Q53.Write a program to change the background color of a <div> on hover.

// const div = document.createElement('div');
// div.textContent = 'Hover over me!';
// div.style.width = '200px';
// div.style.height = '100px';
// div.style.backgroundColor = 'lightblue';
// div.style.textAlign = 'center';
// div.style.lineHeight = '100px'; 
// div.style.margin = '10px';
// div.addEventListener('mouseover', () => {
    // div.style.backgroundColor = 'lightgreen';
// });
// div.addEventListener('mouseout', () => {
    // div.style.backgroundColor = 'lightblue';
// });
// document.body.appendChild(div);

// Q54.Dynamically add a CSS class to an element when a button is clicked.
// const button = document.createElement('button');
// button.textContent = 'Add CSS Class';
// button.style.margin = '5px';
// document.body.appendChild(button);
// 
// const targetDiv = document.createElement('div');
// targetDiv.textContent = 'Click the button to change my style!';
// targetDiv.style.width = '200px';
// targetDiv.style.height = '100px';
// targetDiv.style.backgroundColor = 'lightblue';
// targetDiv.style.textAlign = 'center';
// targetDiv.style.lineHeight = '100px'; 
// targetDiv.style.margin = '10px';
// document.body.appendChild(targetDiv);
// button.addEventListener('click', () => {
    // targetDiv.classList.toggle('highlight');
// });
// const style = document.createElement('style');
// style.textContent = `
    // .highlight {
        // background-color: yellow;
        // border: 2px solid red;
    // }
// `;
// document.head.appendChild(style);

// Q55.Create a function to toggle the visibility of an element.
// function toggleVisibility(element) {
    // if (element.style.display === 'none') {
        // element.style.display = 'block';
    // } else {
        // element.style.display = 'none';
    // }
// }
// const toggleButton = document.createElement('button');
// toggleButton.textContent = 'Toggle Visibility';
// toggleButton.style.margin = '5px';
// document.body.appendChild(toggleButton);
// const targetDiv = document.createElement('div');
// targetDiv.textContent = 'I can be toggled!';
// targetDiv.style.width = '200px';
// targetDiv.style.height = '100px';
// targetDiv.style.backgroundColor = 'lightblue';
// targetDiv.style.textAlign = 'center';
// targetDiv.style.lineHeight = '100px'; 
// targetDiv.style.margin = '10px';
// document.body.appendChild(targetDiv);
// toggleButton.addEventListener('click', () => {
    // toggleVisibility(targetDiv);
// });

// Q56.Write a program to count the number of <p> tags on a page.
// const countParagraphs = () => {
    // const paragraphs = document.getElementsByTagName('p');
    // return paragraphs.length;
// };
// const paragraphCountButton = document.createElement('button');
// paragraphCountButton.textContent = 'Count Paragraphs';
// paragraphCountButton.style.margin = '5px';
// document.body.appendChild(paragraphCountButton);
// const paragraphCountDisplay = document.createElement('div');
// paragraphCountDisplay.style.margin = '10px';
// document.body.appendChild(paragraphCountDisplay);
// paragraphCountButton.addEventListener('click', () => {
    // const count = countParagraphs();
    // paragraphCountDisplay.textContent = `Number of <p> tags: ${count}`;
// });

// Q57.Implement a function to disable all input fields on a form.
// function disableAllInputs(form) {
    // const inputs = form.querySelectorAll('input');
    // inputs.forEach(input => {
        // input.disabled = true;
    // });
// }
// const myForm = document.getElementById('myForm');
// const disableButton = document.createElement('button');
// disableButton.textContent = 'Disable All Inputs';
// disableButton.style.margin = '5px';
// document.body.appendChild(disableButton);
// disableButton.addEventListener('click', () => {
    // disableAllInputs(myForm);
// });

// Q58.Write a program to clone an element and append it to the DOM.
// const cloneElementButton = document.createElement('button');
// cloneElementButton.textContent = 'Clone Element';
// cloneElementButton.style.margin = '5px';
// document.body.appendChild(cloneElementButton);
// const originalElement = document.createElement('div');
// originalElement.textContent = 'I am the original element!';
// originalElement.style.width = '200px';
// originalElement.style.height = '100px';
// originalElement.style.backgroundColor = 'lightgreen';
// originalElement.style.textAlign = 'center';
// originalElement.style.lineHeight = '100px'; 
// originalElement.style.margin = '10px';
// document.body.appendChild(originalElement);
// cloneElementButton.addEventListener('click', () => {
    // const clonedElement = originalElement.cloneNode(true);
    // document.body.appendChild(clonedElement);
// });

// Q59.Add a click event to a list of items and display the clicked item’s text.
// const itemList = document.createElement('ul');
// const items = ['Item 1', 'Item 2', 'Item 3'];
// items.forEach(itemText => {
    // const listItem = document.createElement('li');
    // listItem.textContent = itemText;
    // listItem.style.cursor = 'pointer';
    // itemList.appendChild(listItem);
// 
    // listItem.addEventListener('click', () => {
        // alert(`You clicked: ${itemText}`);
    // });
// });
// document.body.appendChild(itemList);

// Q60.Create a program to validate a form using JavaScript.
// const myForm = document.createElement('form');
// myForm.id = 'myForm';
// document.body.appendChild(myForm);
// 
// const nameInput = document.createElement('input');
// nameInput.type = 'text';
// nameInput.placeholder = 'Enter your name';
// myForm.appendChild(nameInput);
// 
// const emailInput = document.createElement('input');
// emailInput.type = 'email';
// emailInput.placeholder = 'Enter your email';
// myForm.appendChild(emailInput);
// const submitButton = document.createElement('button');
// submitButton.textContent = 'Submit';
// myForm.appendChild(submitButton);
// submitButton.addEventListener('click', (event) => {
    // event.preventDefault(); 
    // let isValid = true;
    // let errorMessage = '';
    // if (nameInput.value.trim() === '') {
        // isValid = false;
        // errorMessage += 'Name is required.\n';
    // }
    // if (emailInput.value.trim() === '') {
        // isValid = false;
        // errorMessage += 'Email is required.\n';
    // } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        // isValid = false;
        // errorMessage += 'Email is invalid.\n';
    // }
    // if (isValid) {
        // alert('Form submitted successfully!');
    // } else {
        // alert(errorMessage);
    // }
// });

// Q61.Write a function to merge two sorted arrays into one sorted array.
// function mergeSortedArrays(arr1, arr2) {
    // let mergedArray = [];
    // let i = 0, j = 0;
// 
    // while (i < arr1.length && j < arr2.length) {
        // if (arr1[i] < arr2[j]) {
            // mergedArray.push(arr1[i]);
            // i++;
        // } else {
            // mergedArray.push(arr2[j]);
            // j++;
        // }
    // }
    // while (i < arr1.length) {
        // mergedArray.push(arr1[i]);
        // i++;
    // }
    // while (j < arr2.length) {
        // mergedArray.push(arr2[j]);
        // j++;
    // }
    // return mergedArray;
// }

// Q62.Implement a binary search algorithm.
// function binarySearch(arr, target) {
    // let left = 0;
    // let right = arr.length - 1;
    // while (left <= right) {
        // const mid = Math.floor((left + right) / 2);
        // if (arr[mid] === target) {
            // return mid; 
        // } else if (arr[mid] < target) {
            // left = mid + 1; 
        // } else {
            // right = mid - 1; 
        // }
    // }
    // return -1; 
// }

// Q63.Write a function to check if two strings are one edit away.
// function isOneEditAway(str1, str2) {
    // const len1 = str1.length;
    // const len2 = str2.length;
    // if (Math.abs(len1 - len2) > 1) {
        // return false;
    // }
    // let edits = 0;
    // let i = 0, j = 0;
    // while (i < len1 && j < len2) {
        // if (str1[i] !== str2[j]) {
            // edits++;
            // if (edits > 1) {
                // return false;
            // }
            // if (len1 === len2) {
                // i++;
                // j++;
            // } else if (len1 > len2) {
                // i++;
            // } else {
                // j++;
            // }
        // } else {
            // i++;
            // j++;
        // }
    // }
    // return true;
// }

// Q64.Create a function that finds the longest common prefix in an array of strings.
// function longestCommonPrefix(strs) {
    // if (strs.length === 0) return "";
    // let prefix = strs[0];
    // for (let i = 1; i < strs.length; i++) {
        // while (strs[i].indexOf(prefix) !== 0) {
            // prefix = prefix.substring(0, prefix.length - 1);
            // if (prefix === "") return "";
        // }
    // }
    // return prefix;
// }

// Q65.Write a program to check if a string can be rearranged into a palindrome.
// function canBeRearrangedToPalindrome(str) {
    // const charCount = {};
    // for (let char of str) {
        // charCount[char] = (charCount[char] || 0) + 1;
    // }
    // let oddCount = 0;
    // for (let count of Object.values(charCount)) {
        // if (count % 2 !== 0) {
            // oddCount++;
        // }
    // }  
    // return oddCount <= 1;
// }

// Q66.Create a function to find the intersection of two arrays.
// function intersection(arr1, arr2) {
    // const set1 = new Set(arr1);
    // const set2 = new Set(arr2);
    // const result = [];
    // for (let item of set1) {
        // if (set2.has(item)) {
            // result.push(item);
        // }
    // }
    // return result;
// }

// Q67.Implement the Sieve of Eratosthenes to find prime numbers up to n.
// function sieveOfEratosthenes(n) {
    // const primes = [];
    // const isPrime = new Array(n + 1).fill(true);
    // isPrime[0] = isPrime[1] = false; 
// 
    // for (let i = 2; i <= n; i++) {
        // if (isPrime[i]) {
            // primes.push(i);
            // for (let j = i * 2; j <= n; j += i) {
                // isPrime[j] = false; 
            // }
        // }
    // }
    // return primes;
// }

// Q68.Write a program to generate all subsets of a given array.
// function generateSubsets(arr) {
    // const subsets = [];
    // const totalSubsets = 1 << arr.length;
    // for (let i = 0; i < totalSubsets; i++) {
        // const subset = [];
        // for (let j = 0; j < arr.length; j++) {
            // if (i & (1 << j)) {
                // subset.push(arr[j]);
            // }
        // }
        // subsets.push(subset);
    // }
    // return subsets;
// }

// Q69.Create a function to calculate the power of a number iteratively.
// function power(base, exponent) {
    // let result = 1;
    // for (let i = 0; i < exponent; i++) {
        // result *= base;
    // }
    // return result;
// }

// Q70.Implement a function to sort an array using the quicksort algorithm.

// function quicksort(arr) {
    // if (arr.length <= 1) {
        // return arr;
    // }
    // const pivot = arr[arr.length - 1];
    // const left = [];
    // const right = [];
    // 
    // for (let i = 0; i < arr.length - 1; i++) {
        // if (arr[i] < pivot) {
            // left.push(arr[i]);
        // } else {
            // right.push(arr[i]);
        // }
    // }
    // return [...quicksort(left), pivot, ...quicksort(right)];
// }

// Q71.Write a program to handle a division by zero error.

// function divide(a, b) {
    // if (b === 0) {
        // throw new Error("Division by zero is not allowed.");
    // }
    // return a / b;
// }

// Q72.Use try...catch to log an error message for invalid JSON parsing.
// 
// function parseJSON(jsonString) {
    // try {
        // return JSON.parse(jsonString);
    // } catch (error) {
        // console.error("Invalid JSON string:", error.message);
    // }
// }

// Q73.Write a function to validate user input and throw a custom error if invalid.
// function validateInput(input) {
    // if (typeof input !== 'string' || input.trim() === '') {
        // throw new Error("Invalid input: Input must be a non-empty string.");
    // }
// }

// Q74.Create a program to handle a failed promise using .catch().
// function fetchData(url) {
    // return new Promise((resolve, reject) => {
        // setTimeout(() => {
            // const success = Math.random() > 0.5; 
            // if (success) {
                // resolve("Data fetched successfully!");
            // } else {
                // reject(new Error("Failed to fetch data."));
            // }
        // }, 1000);
    // });
// }
// fetchData("https://api.example.com/data")
    // .then(data => {
        // console.log(data);
    // })
    // .catch(error => {
        // console.error("Error:", error.message);
    // });

    // Q75.Use finally to log a cleanup message after a promise resolves or rejects.
    // fetchData("https://api.example.com/data")
        // .then(data => {
            // console.log(data);
        // })
        // .catch(error => {
            // console.error("Error:", error.message);
        // })
        // .finally(() => {
            // console.log("Cleanup: Promise has been settled.");
        // });

 // Q76.Implement a function to retry a failed API call up to 3 times.
// function retryFetchData(url, retries = 3) {
    // return fetchData(url).catch(error => {
        // if (retries > 0) {
            // console.log(`Retrying... Attempts left: ${retries}`);
            // return retryFetchData(url, retries - 1);
        // } else {
            // throw new Error("Max retries reached. " + error.message);
        // }
    // });
// }
// retryFetchData("https://api.example.com/data")
    // .then(data => {
        // console.log(data);
    // })
    // .catch(error => {
        // console.error("Error:", error.message);
    // });

    // Q77.Write a function that uses try...catch inside an async function.
    // async function fetchDataWithTryCatch(url) {
        // try {
            // const data = await fetchData(url);
            // console.log(data);
        // } catch (error) {
            // console.error("Error:", error.message);
        // }
    // }
    // fetchDataWithTryCatch("https://api.example.com/data");

    // Q78.Create a program to handle and log syntax errors dynamically.
    // function handleSyntaxError(codeString) {
        // try {
            // eval(codeString);
        // } catch (error) {
            // console.error("Syntax Error:", error.message);
        // }
    // }
    // const faultyCode = "console.log('Hello World'"; 
    // handleSyntaxError(faultyCode);

    // Q79.Write a function to ensure a variable is defined before using it.
    // function ensureDefined(variable, variableName) {
        // if (typeof variable === 'undefined') {
            // throw new Error(`${variableName} is not defined.`);
        // }
        // return variable;
    // }

    // Q80.Use error handling to check if a file exists before reading it.
    // const fs = require('fs');
    // function checkFileExists(filePath) {
        // try {
            // if (fs.existsSync(filePath)) {
                // const data = fs.readFileSync(filePath, 'utf8');
                // console.log("File content:", data);
            // } else {
                // throw new Error("File does not exist.");
            // }
        // } catch (error) {
            // console.error("Error:", error.message);
        // }
    // }
    // checkFileExists('path/to/your/file.txt');

// Q81.Write a function that groups an array of objects by a specific property
// function groupBy(array, property) {
    // return array.reduce((accumulator, current) => {
        // const key = current[property];
        // if (!accumulator[key]) {
            // accumulator[key] = [];
        // }
        // accumulator[key].push(current);
        // return accumulator;
    // }, {});
// }

// Q82.Use .map() to transform an array of objects into a new format.
// function transformArray(array) {
    // return array.map(item => ({
        // id: item.id,
        // name: item.name.toUpperCase(),
        // isActive: item.isActive ? 'Yes' : 'No'
    // }));
// }
// const sampleData = [
    // { id: 1, name: 'Alice', isActive: true },
    // { id: 2, name: 'Bob', isActive: false },
    // { id: 3, name: 'Charlie', isActive: true }
// ];
// const transformedData = transformArray(sampleData);
// console.log(transformedData);

// Q83.Write a program to deep clone an object without using external libraries.
// function deepClone(obj) {
    // if (obj === null || typeof obj !== 'object') {
        // return obj; 
    // }
    // const clone = Array.isArray(obj) ? [] : {};
// 
    // for (const key in obj) {
        // if (obj.hasOwnProperty(key)) {
            // clone[key] = deepClone(obj[key]);
        // }
    // }
    // return clone;
// }
// const original = {
    // name: 'Alice',
    // age: 30,
    // hobbies: ['reading', 'gaming'],
    // address: {
        // city: 'Wonderland',
        // zip: '12345'
    // }
// };
// const cloned = deepClone(original);
// console.log(cloned);
// console.log(cloned === original);
// console.log(cloned.address === original.address); 

// Q84.Create a function that merges multiple arrays into a single unique array.
// function mergeUniqueArrays(...arrays) {
    // const mergedArray = [].concat(...arrays);
    // return [...new Set(mergedArray)];
// }

// Q85.Write a function to count the occurrences of properties in an array of objects.
// function countPropertyOccurrences(array, property) {
    // return array.reduce((acc, obj) => {
        // if (obj.hasOwnProperty(property)) {
            // acc[obj[property]] = (acc[obj[property]] || 0) + 1;
        // }
        // return acc;
    // }, {});
// }
// const data = [
    // { id: 1, name: 'Alice', isActive: true },
    // { id: 2, name: 'Bob', isActive: false },
    // { id: 3, name: 'Alice', isActive: true },
    // { id: 4, name: 'Charlie', isActive: true }
// ];
// const nameOccurrences = countPropertyOccurrences(data, 'name');
// console.log(nameOccurrences); 
// const isActiveOccurrences = countPropertyOccurrences(data, 'isActive');
// console.log(isActiveOccurrences); 

// Q86.Implement a function to sort an array of objects by multiple properties.
// function sortByMultipleProperties(array, ...properties) {
    // return array.sort((a, b) => {
        // for (let property of properties) {
            // if (a[property] < b[property]) return -1;
            // if (a[property] > b[property]) return 1;
        // }
        // return 0;
    // });
// }
// const items = [
    // { id: 1, name: 'Alice', age: 30 },
    // { id: 2, name: 'Bob', age: 25 },
    // { id: 3, name: 'Alice', age: 25 },
    // { id: 4, name: 'Charlie', age: 30 }
// ];
// const sortedItems = sortByMultipleProperties(items, 'name', 'age');
// console.log(sortedItems);

// Q87.Write a function to create a nested object from a flat array of key-value pairs.
// function createNestedObject(pairs) {
    // return pairs.reduce((acc, [key, value]) => {
        // const keys = key.split('.');
        // keys.reduce((nestedAcc, k, index) => {
            // if (index === keys.length - 1) {
                // nestedAcc[k] = value;
            // } else {
                // nestedAcc[k] = nestedAcc[k] || {};
            // }
            // return nestedAcc[k];
        // }, acc);
        // return acc;
    // }, {});
// }

// Q88.Use .reduce() to transform an array into an object with grouped values.
// function groupBy(array, key) {
    // return array.reduce((acc, item) => {
        // const groupKey = item[key];
        // if (!acc[groupKey]) {
            // acc[groupKey] = [];
        // }
        // acc[groupKey].push(item);
        // return acc;
    // }, {});
// }
// const data = [
    // { id: 1, name: 'Alice', age: 30 },
    // { id: 2, name: 'Bob', age: 25 },
    // { id: 3, name: 'Alice', age: 25 },
    // { id: 4, name: 'Charlie', age: 30 }
// ];
// const groupedByName = groupBy(data, 'name');
// console.log(groupedByName);

// Q89.Create a function to find the difference between two arrays of objects.
// function findDifference(arr1, arr2) {
    // const arr2Ids = new Set(arr2.map(item => item.id));
    // return arr1.filter(item => !arr2Ids.has(item.id));
// }

// Q90.Write a function to filter and transform an array of objects in a single step.
// function filterAndTransform(array, filterFn, transformFn) {
    // return array
        // .filter(filterFn)
        // .map(transformFn);
// }

// Q91.Create a simple program that fetches and displays user data from a mock API
// const fetchDataBtn = document.createElement('button');
// fetchDataBtn.id = 'fetchDataBtn';
// fetchDataBtn.textContent = 'Fetch User Data';
// document.body.appendChild(fetchDataBtn);
// const userContainer = document.createElement('div');
// userContainer.id = 'userContainer';
// document.body.appendChild(userContainer)
// fetchDataBtn.addEventListener('click', fetchUserData);
// 
// function fetchUserData() {
//   const apiUrl = 'https://jsonplaceholder.typicode.com/users';
// 
//   fetch(apiUrl)
    // .then(response => response.json())
    // .then(data => {
    //   userContainer.innerHTML = '';
// 
    //   data.forEach(user => {
        // const userCard = document.createElement('div');
        // userCard.classList.add('user-card');
        // userCard.innerHTML = `
        //   <h2>${user.name}</h2>
        //   <p>Email: ${user.email}</p>
        //   <p>Phone: ${user.phone}</p>
        //   <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        // `;
        // userContainer.appendChild(userCard);
    //   });
    // })
    // .catch(error => console.error('Error fetching data:', error));
// }

// Q92.Write a program to simulate a shopping cart with add, remove, and total cost features.

// const shoppingCart = {
    // items: [],
    // addItem: function (name, price, quantity = 1) {
    //   const existingItem = this.items.find(item => item.name === name);
    //   if (existingItem) {
        // existingItem.quantity += quantity;
    //   } else {
        // this.items.push({ name, price, quantity });
    //   }
    //   console.log(`${quantity} ${name}(s) added to the cart.`);
    // },
    // removeItem: function (name) {
    //   const itemIndex = this.items.findIndex(item => item.name === name);
    //   if (itemIndex !== -1) {
        // console.log(`${this.items[itemIndex].name} removed from the cart.`);
        // this.items.splice(itemIndex, 1);
    //   } else {
        // console.log(`${name} is not in the cart.`);
    //   }
    // },
    // calculateTotal: function () {
    //   return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    // },
    // displayCart: function () {
    //   if (this.items.length === 0) {
        // console.log('Your cart is empty.');
    //   } else {
        // console.log('Shopping Cart:');
        // this.items.forEach(item => {
        //   console.log(`${item.name} - $${item.price} x ${item.quantity}`);
        // });
        // console.log(`Total Cost: $${this.calculateTotal().toFixed(2)}`);
    //   }
    // }
//   };
//   shoppingCart.addItem('Apple', 1.2, 3);
//   shoppingCart.addItem('Banana', 0.5, 5);
//   shoppingCart.addItem('Orange', 0.8, 2);
//   shoppingCart.displayCart();
//   shoppingCart.removeItem('Banana');
//   shoppingCart.displayCart();
//   console.log(`Final Total: $${shoppingCart.calculateTotal().toFixed(2)}`);

// Q93.Implement a simple pagination system for an array of data.
// class Pagination {
    // constructor(data, itemsPerPage) {
    //   this.data = data; 
    //   this.itemsPerPage = itemsPerPage; 
    //   this.currentPage = 1; 
    // }
    // getCurrentPageData() {
    //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    //   const endIndex = startIndex + this.itemsPerPage;
    //   return this.data.slice(startIndex, endIndex);
    // }
    // nextPage() {
    //   if (this.currentPage < this.getTotalPages()) {
        // this.currentPage++;
    //   } else {
        // console.log('You are on the last page.');
    //   }
    // }
// 
    // prevPage() {
    //   if (this.currentPage > 1) {
        // this.currentPage--;
    //   } else {
        // console.log('You are on the first page.');
    //   }
    // }
//   
    // getTotalPages() {
    //   return Math.ceil(this.data.length / this.itemsPerPage);
    // }
// 
    // displayPage() {
    //   console.log(`Page ${this.currentPage}/${this.getTotalPages()}`);
    //   console.log(this.getCurrentPageData());
    // }
//   }
//   const data = [
    // 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 
    // 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'
//   ];
// 
//   const itemsPerPage = 3;
//   const paginator = new Pagination(data, itemsPerPage);
//   
//   paginator.displayPage(); 
//   paginator.nextPage();
//   paginator.displayPage();
//   paginator.nextPage();
//   paginator.displayPage();
//   paginator.nextPage(); 
//   
//   paginator.prevPage();
//   paginator.displayPage();
  

// Q94.Write a program to dynamically update a chart using JavaScript.
// const ctx = document.getElementById('myChart').getContext('2d');
// const data = {
//   labels: ['0s', '1s', '2s', '3s', '4s'], 
//   datasets: [{
    // label: 'Dynamic Data',
    // data: [5, 10, 15, 20, 25],
    // borderColor: 'rgba(75, 192, 192, 1)',
    // borderWidth: 2,
    // fill: false,
//   }]
// };
// 
// const myChart = new Chart(ctx, {
//   type: 'line',
//   data: data,
//   options: {
    // responsive: true,
    // maintainAspectRatio: false,
    // scales: {
    //   x: {
        // title: {
        //   display: true,
        //   text: 'Time (s)'
        // }
    //   },
    //   y: {
        // title: {
        //   display: true,
        //   text: 'Value'
        // },
        // beginAtZero: true
    //   }
    // }
//   }
// });
// let counter = 5; 
// setInterval(() => {
//   const newValue = Math.floor(Math.random() * 50);
//   data.labels.push(`${counter}s`); 
//   data.datasets[0].data.push(newValue);
//   if (data.labels.length > 10) {
    // data.labels.shift(); 
    // data.datasets[0].data.shift();
//   }
//   counter++; 
//   myChart.update();
// }, 1000);

// Q95.Create a program to search for and highlight specific text on a webpage.
// function highlightText(searchText) {
    // const content = document.body.innerHTML;
    // const escapedSearchText = searchText.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    // const regex = new RegExp(`(${escapedSearchText})`, 'gi');
    // const highlightedContent = content.replace(regex, '<span style="background-color: yellow;">$1</span>');
    // document.body.innerHTML = highlightedContent;
//   }
//   highlightText("example");
  
// Q96.Write a program to simulate a basic stopwatch with start, stop, and reset functionality.
// let startTime = 0; 
// let elapsedTime = 0; 
// let timerInterval; 
// function formatTime(ms) {
//   const minutes = Math.floor(ms / 60000).toString().padStart(2, '0');
//   const seconds = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0');
//   const milliseconds = Math.floor((ms % 1000) / 10).toString().padStart(2, '0');
//   return `${minutes}:${seconds}:${milliseconds}`;
// }
// 
// function updateDisplay() {
//   const display = document.getElementById('stopwatch');
//   display.textContent = formatTime(elapsedTime);
// }
// 
// function startStopwatch() {
//   if (!timerInterval) {
    // startTime = Date.now() - elapsedTime; 
    // timerInterval = setInterval(() => {
    //   elapsedTime = Date.now() - startTime;
    //   updateDisplay();
    // }, 10); 
//   }
// }
// 
// function stopStopwatch() {
//   clearInterval(timerInterval);
//   timerInterval = null; 
// }
// function resetStopwatch() {
//   clearInterval(timerInterval);
//   timerInterval = null; 
//   elapsedTime = 0;
//   updateDisplay();
// }
// document.body.innerHTML = `
//   <div style="text-align: center; font-family: Arial, sans-serif; margin-top: 50px;">
    // <h1>Stopwatch</h1>
    // <div id="stopwatch" style="font-size: 2em; margin-bottom: 20px;">00:00:00</div>
    // <button onclick="startStopwatch()" style="padding: 10px 20px; margin: 5px;">Start</button>
    // <button onclick="stopStopwatch()" style="padding: 10px 20px; margin: 5px;">Stop</button>
    // <button onclick="resetStopwatch()" style="padding: 10px 20px; margin: 5px;">Reset</button>
//   </div>
// `;

// Q97.Implement a function to validate password strength based on rules.
// function validatePassword(password) {
// 
    // const lengthValid = password.length >= 8;
    // 
    // const lowercaseValid = /[a-z]/.test(password);
    // 
    // const uppercaseValid = /[A-Z]/.test(password);
    // 
    // const digitValid = /\d/.test(password);
// 
    // const specialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    // if (lengthValid && lowercaseValid && uppercaseValid && digitValid && specialCharValid) {
    //   return "Password is strong";
    // } else {
    //   return "Password is weak. It must meet the following requirements:\n" +
            //  "- At least 8 characters long\n" +
            //  "- Contain at least one lowercase letter\n" +
            //  "- Contain at least one uppercase letter\n" +
            //  "- Contain at least one digit\n" +
            //  "- Contain at least one special character (!@#$%^&*)";
    // }
//   }
//   const password = "P@ssw0rd123";
//   console.log(validatePassword(password));
  
// Q98.Create a simple image slider with next/previous buttons.
// let currentIndex = 0; 
// 
// const images = [
//   'https://via.placeholder.com/600x400?text=Image+1',
//   'https://via.placeholder.com/600x400?text=Image+2',
//   'https://via.placeholder.com/600x400?text=Image+3'
// ];
// 
// function createSlider() {
//   const sliderContainer = document.createElement('div');
//   sliderContainer.id = 'sliderContainer';
//   sliderContainer.style.position = 'relative';
//   sliderContainer.style.width = '600px';
//   sliderContainer.style.height = '400px';
//   sliderContainer.style.margin = 'auto';
//   
//   const sliderImage = document.createElement('img');
//   sliderImage.id = 'sliderImage';
//   sliderImage.style.width = '100%';
//   sliderImage.style.height = '100%';
//   sliderImage.style.objectFit = 'cover';
//   sliderContainer.appendChild(sliderImage);
//   const prevBtn = document.createElement('button');
//   prevBtn.id = 'prevBtn';
//   prevBtn.textContent = 'Prev';
//   prevBtn.style.position = 'absolute';
//   prevBtn.style.top = '50%';
//   prevBtn.style.left = '10px';
//   prevBtn.style.transform = 'translateY(-50%)';
//   prevBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//   prevBtn.style.color = 'white';
//   prevBtn.style.padding = '10px';
//   prevBtn.style.border = 'none';
//   prevBtn.style.cursor = 'pointer';
//   sliderContainer.appendChild(prevBtn);
//   
//   const nextBtn = document.createElement('button');
//   nextBtn.id = 'nextBtn';
//   nextBtn.textContent = 'Next';
//   nextBtn.style.position = 'absolute';
//   nextBtn.style.top = '50%';
//   nextBtn.style.right = '10px';
//   nextBtn.style.transform = 'translateY(-50%)';
//   nextBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//   nextBtn.style.color = 'white';
//   nextBtn.style.padding = '10px';
//   nextBtn.style.border = 'none';
//   nextBtn.style.cursor = 'pointer';
//   sliderContainer.appendChild(nextBtn);
//  
//   document.body.appendChild(sliderContainer);
//   prevBtn.addEventListener('click', prevImage);
//   nextBtn.addEventListener('click', nextImage);
// }
// 
// function changeImage() {
//   const sliderImage = document.getElementById('sliderImage');
//   sliderImage.src = images[currentIndex];
// }
// 
// function nextImage() {
//   currentIndex = (currentIndex + 1) % images.length; 
//   changeImage();
// }
// 
// function prevImage() {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   changeImage();
// }
// 
// window.onload = function () {
//   createSlider();
//   changeImage(); 
// };

// Q99.Write a program to sort and display data fetched from an API.
// function fetchDataAndSort() {
    // const apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
//   
    // fetch(apiUrl)
    //   .then(response => response.json())
    //   .then(data => {
        // const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
        // displayData(sortedData);
    //   })
    //   .catch(error => console.error('Error fetching data:', error));
//   }
//   
//   function displayData(data) {
    // const container = document.getElementById('dataContainer');
    // container.innerHTML = ''; 
    // 
    // data.forEach(item => {
    //   const itemDiv = document.createElement('div');
    //   itemDiv.classList.add('data-item');
    //   itemDiv.innerHTML = `
        // <h3>${item.name}</h3>
        // <p>Email: ${item.email}</p>
        // <p>Phone: ${item.phone}</p>
        // <p>Website: <a href="http://${item.website}" target="_blank">${item.website}</a></p>
    //   `;
    //   container.appendChild(itemDiv);
    // });
//   }
//   
//   window.onload = function() {
    // fetchDataAndSort();
//   };

// Q200.Create a program that automatically saves form data to localStorage.
// const form = document.createElement('form');
// form.id = 'myForm';
// 
// const nameLabel = document.createElement('label');
// nameLabel.setAttribute('for', 'name');
// nameLabel.textContent = 'Name:';
// form.appendChild(nameLabel);
// 
// const nameInput = document.createElement('input');
// nameInput.type = 'text';
// nameInput.id = 'name';
// nameInput.name = 'name';
// form.appendChild(nameInput);
// 
// const emailLabel = document.createElement('label');
// emailLabel.setAttribute('for', 'email');
// emailLabel.textContent = 'Email:';
// form.appendChild(emailLabel);
// 
// const emailInput = document.createElement('input');
// emailInput.type = 'email';
// emailInput.id = 'email';
// emailInput.name = 'email';
// form.appendChild(emailInput);
// 
// const messageLabel = document.createElement('label');
// messageLabel.setAttribute('for', 'message');
// messageLabel.textContent = 'Message:';
// form.appendChild(messageLabel);
// 
// const messageTextarea = document.createElement('textarea');
// messageTextarea.id = 'message';
// messageTextarea.name = 'message';
// form.appendChild(messageTextarea);
// 
// const submitButton = document.createElement('button');
// submitButton.type = 'submit';
// submitButton.textContent = 'Submit';
// form.appendChild(submitButton);
// 
// 
// document.body.appendChild(form);
// 
// 
// function saveToLocalStorage(event) {
//   const formData = new FormData(event.target); 
// 
//   formData.forEach((value, key) => {
    // localStorage.setItem(key, value);
//   });
// }
// 
// function restoreFromLocalStorage() {
//   const formElements = document.querySelectorAll('input, select, textarea'); 
// 
//   formElements.forEach(element => {
    // const savedValue = localStorage.getItem(element.name); 
    // if (savedValue) {
    //   element.value = savedValue; 
    // }
//   });
// }
// 
// document.getElementById('myForm').addEventListener('input', saveToLocalStorage);
// 
// window.onload = function () {
//   restoreFromLocalStorage();
// };


