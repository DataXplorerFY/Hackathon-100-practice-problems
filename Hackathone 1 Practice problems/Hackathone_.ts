// Find the maximum number in an array.

var Array_1: number[] = [3, 5, 1, 8, 10];
var max_num: number = Array_1[0];
for (var i = 0; i < Array_1.length; i++) {
  if (Array_1[i] > max_num) {
    max_num = Array_1[i];
  }
}

console.log("The maximum number in array is: ", max_num);


// Calculate the sum of all numbers in an array.

var Array_2: number[] = [2, 4, 6, 8];
var sum: number = 0;
for (var i = 0; i < Array_2.length; i++) {
  sum = sum + Array_2[i];

}
console.log("The Sum of All the arrays is:", sum);

// Remove duplicates from an array.
// Method 1
var Array_3: number[] = [1, 2, 2, 3, 4, 4, 5];
var unique_Array: number[] = [];
for (var i = 0; i < Array_3.length; i++) {
  if (unique_Array.indexOf(Array_3[i]) == -1)
    unique_Array.push(Array_3[i]);
}

console.log("Method 1 After removing Duplicates:", unique_Array);
// Method 2
var Array_3: number[] = [1, 2, 2, 3, 4, 4, 5];
var Unique: number[] = [...new Set(Array_3)];
console.log("Method 2 After removing Duplicates:", Unique);


// Find the index of a specific element in an array.

var Array_4: number[] = [10, 20, 30, 40];

console.log("Specific index if number 30 in array is: ", Array_4.indexOf(40))

// Sort an array of strings alphabetically

var Array_5: string[] = ["apple", "date", "banana", "cherry"]
console.log("After sorting Alphabatecally The Array_5 is: ", Array_5.sort())

// Check if all elements in an array are even.

var Array_6: number[] = [10, 20, 30, 40, 50];
var foundEven: boolean = false
for (let i = 0; i < Array_6.length; i++) {
  if (Array_6[i] % 2 == 0) {
    foundEven = true;
    break;

  }
}
if (foundEven == true) {
  console.log("True")
} else {
  console.log("False")
}

// Split an array into chunks of a specified size.
// Input: [1, 2, 3, 4, 5, 6, 7, 8], 3
// Output: [[1, 2, 3], [4, 5, 6], [7, 8]]
// Method 1
var Array_7: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
var chunk_Array: number[][] = [];
var chunk_Size: number = 3;

for (let i = 0; i < Array_7.length; i += chunk_Size) {
  chunk_Array.push(Array_7.slice(i, i + chunk_Size));
}

console.log(chunk_Array);

// method 2
function chunksArray(arr: number[], chunkSize: number) {
  var chunkedArray: Number[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push(arr.slice(i, i + chunkSize));
  }
  return chunkedArray;
}

var a: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var b: number = 3;
var result = chunksArray(a, b);
console.log(result)


// Find the intersection of two arrays
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]


// 11. Merge two sorted arrays into one sorted array.
// - Input: [1, 3, 5], [2, 4, 6]
// - Output: [1, 2, 3, 4, 5, 6]

function merge(arr1: number[], arr2: number[]) {

  let arr3: number[] = arr1.concat(arr2);
  arr3.sort()
  console.log(arr3);

}

merge([1, 3, 5], [2, 4, 6]);

// 12. Find the difference between two arrays.
// - Input: [1, 2, 3, 4], [2, 3]
// - Output: [1, 4]


function diff(arr: number[], arr1: number[]) {


  let result: number[] = arr.filter(values => !arr1.includes(values))

  console.log(result);


}

diff([1, 2, 3, 4], [2, 3])



// 13. Count the occurrences of a specific element in an array.
// - Input: [1, 2, 2, 3, 2, 4, 5], 2
// - Output: 3

function countOccurrences(arr: number[], target: number): number {
  let count = 0;

  for (const element of arr) {
    if (element === target) {
      count++;
    }
  }

  return count;
}


const inputArray: number[] = [1, 2, 2, 3, 2, 4, 5];
const targetElement: number = 2;
const result1: number = countOccurrences(inputArray, targetElement);
console.log(result1);


// 14. Find the second smallest number in an array.
// - Input: [5, 2, 8, 1, 7]
// - Output: 2


function findSecondSmallestNumber(arr: number[]): number | undefined {
  if (arr.length < 2) {

    return undefined;
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of arr) {
    if (num < smallest) {

      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {

      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {

    return undefined;
  }

  return secondSmallest;
}

const inputArray1 = [5, 2, 8, 1, 7];
const secondSmallest = findSecondSmallestNumber(inputArray1);

if (secondSmallest !== undefined) {
  console.log("Second smallest number:", secondSmallest);
} else {
  console.log("There is no second smallest number in the array.");
  console.log("There is no second smallest number in the array.");
}


// 15. Find the longest consecutive sequence of numbers in an array.
// - Input: [100, 4, 200, 1, 3, 2]
// - Output: [1, 2, 3, 4]

function longestConsecutiveSequence(nums: number[]): number[] {
  if (nums.length === 0) {
    return [];
  }

  nums.sort((a, b) => a - b);
  let longestSequence: number[] = [nums[0]];
  let currentSequence: number[] = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      currentSequence.push(nums[i]);
    } else if (nums[i] !== nums[i - 1]) {
      if (currentSequence.length > longestSequence.length) {
        longestSequence = [...currentSequence];
      }
      currentSequence = [nums[i]];
    }
  }

  if (currentSequence.length > longestSequence.length) {
    longestSequence = [...currentSequence];
  }

  return longestSequence;
}


const inputArray11: number[] = [100, 4, 200, 1, 3, 2];
const result11: number[] = longestConsecutiveSequence(inputArray);
console.log(result);



// 16. Implement a stack using an array with push and pop methods


class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

// Example usage:
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // Output: 3
console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: 1

// 17. Implement a queue using an array with enqueue and dequeue methods.

class Queue<T> {
  private items: T[] = [];


  enqueue(item: T): void {
    this.items.push(item);
  }


  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }


  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }


  isEmpty(): boolean {
    return this.items.length === 0;
  }


  size(): number {
    return this.items.length;
  }
}


const myQueue = new Queue<number>();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.size());


// 18. Flatten a nested array.
// - Input: [1, [2], [3, [4]]]
// - Output: [1, 2, 3, 4]



function flattenArray(inputArray: any[]): any[] {
  const result: any[] = [];

  for (const item of inputArray) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

const nestedArray = [1, [2], [3, [4]]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);

// 19. Calculate the product of all numbers in an array.
// - Input: [2, 3, 4]
// - Output: 24



function calculateProduct(numbers: number[]): number {
  if (numbers.length === 0) {
    return 1;
  }

  let product = 1;

  for (const number of numbers) {
    product *= number;
  }

  return product;
}

// 20. Find the first non-repeating element in an array.
// - Input: [1, 2, 3, 2, 1, 4]
// - Output: 3
function findFirstNonRepeatingElement(arr: number[]): number | undefined {
  const countMap: Map<number, number> = new Map();

  for (const num of arr) {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num)! + 1);
    } else {
      countMap.set(num, 1);
    }
  }

  for (const num of arr) {
    if (countMap.get(num) === 1) {
      return num;
    }
  }

  return undefined; // Return undefined if no non-repeating element is found
}

const input: number[] = [1, 2, 3, 2, 1, 4];
const final: number | undefined = findFirstNonRepeatingElement(input);

if (final !== undefined) {
  console.log(`The first non-repeating element is: ${final}`);
} else {
  console.log("No non-repeating element found in the array.");
}

// 21. Remove the specified element from an array in-place.
// - Input: [1, 2, 3, 4, 5], 3
// - Output: [1, 2, 4, 5]

function removeElementFromArray(arr: number[], elementToRemove: number): void {
  const index = arr.indexOf(elementToRemove);
  if (index !== -1) {
    arr.splice(index, 1);
  }
}

const iinputArray: number[] = [1, 2, 3, 4, 5];
const elementToRemove: number = 3;

removeElementFromArray(iinputArray, elementToRemove);
console.log(iinputArray);

//22. Check if two arrays are equal (have the same elements in the same order).
// - Input: [1, 2, 3], [1, 2, 3]
// - Output: true
function areArraysEqual(array1: any[], array2: any[]): boolean {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}






// 23. Find the kth smallest element in an unsorted array.
// - Input: [5, 3, 1, 2, 4], k=3
// - Output: 3
function findKthSmallest(arr: number[], k: number): number {
  if (k < 1 || k > arr.length) {
    throw new Error('Invalid value of k');
  }

  const sortedArr = arr.slice().sort((a, b) => a - b);
  return sortedArr[k - 1];
}

const input_Array = [5, 3, 1, 2, 4];
const k = 3;
const kthSmallest = findKthSmallest(input_Array, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);

// 24. Remove all falsy values (false, null, 0, "", undefined, and NaN) from an array.
// - Input: [0, 1, false, true, null, undefined, NaN, "hello"]
// - Output: [1, true, "hello"]

function removeFalsyValues(arr: any[]): any[] {
  return arr.filter((item) => !!item);
}

const input__Array: any[] = [0, 1, false, true, null, undefined, NaN, "hello"];
const outputArray: any[] = removeFalsyValues(input__Array);

console.log(outputArray);

// 25. Reverse an array in-place.
// - Input: [1, 2, 3, 4, 5]
// - Output: [5, 4, 3, 2, 1]

function reverseArrayInPlace(arr: number[]): void {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}

const InputArray: number[] = [1, 2, 3, 4, 5];
reverseArrayInPlace(InputArray);
console.log(InputArray);

// 26. Calculate the median of an array of numbers.
// - Input: [4, 2, 7, 1, 5]
// - Output: 4
function calculateMedian(numbers: number[]): number {

  numbers.sort((a, b) => a - b);

  const length = numbers.length;

  if (length % 2 === 0) {

    const middle1 = numbers[length / 2 - 1];
    const middle2 = numbers[length / 2];
    return (middle1 + middle2) / 2;
  } else {

    return numbers[Math.floor(length / 2)];
  }
}

const Input = [4, 2, 7, 1, 5];
const median = calculateMedian(Input);
console.log("Median:", median);


// 27. Find the missing number in an array of consecutive numbers.
// - Input: [1, 2, 4, 5, 6]
// - Output: 3

function missingNumber(arr1: number[]): number | null {
  
  arr1.sort((a, b) => a - b);

  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== i + 1) {
     
      return i + 1;
    }
  }


  return null;
}


const inputArray22: number[] = [1, 2, 4, 5, 6];
const result22: number | null = missingNumber(inputArray22);

console.log("Missing number:", result22);


// 28  Implement a binary search algorithm on a sorted array.

function binarySearch(arr: number[], target: number): number {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
      const mid: number = Math.floor((left + right) / 2);

      // Checking if target is present at the middle
      if (arr[mid] === target) {
          return mid;
      }

      // If target is greater, ignore the left half
      else if (arr[mid] < target) {
          left = mid + 1;
      }

      // If target is smaller, ignore the right half
      else {
          right = mid - 1;
      }
  }

  // If we reach here, then the element was not present
  return -1;
}

// Example usage
const sortedArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue: number = 7;
const Result: number = binarySearch(sortedArray, targetValue);

if (Result !== -1) {
  console.log(`Element ${targetValue} is present at index ${result}`);
} else {
  console.log(`Element ${targetValue} is not present in the array`);
}
//29  Remove elements from an array that satisfy a given condition.
// - Input: [1, 2, 3, 4, 5], element => element % 2 === 0
// - Output: [1, 3, 5]
function removeElementsByCondition(arr: number[], condition: (element: number) => boolean): number[] {
  return arr.filter(element => !condition(element));
}

const Input_Array: number[] = [1, 2, 3, 4, 5];
const conditionFunction = (element: number) => element % 2 === 0;

const output_Array: number[] = removeElementsByCondition(Input_Array, conditionFunction);

console.log(output_Array); 

// 30. Implement a function to shuffle the elements of an array randomly
function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Shuffled Array:", shuffledArray);

// 31: 31. Print numbers from 1 to 10 using a for loop.
// - Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// question 32  swap two numbers
function swapNumbers(a: number, b: number): [number, number] {
  let temp: number;

  temp = a;
  a = b;
  b = temp;

  return [a, b];
}

// Example usage:
let num1: number = 5;
let num2: number = 10;

console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);

[num1, num2] = swapNumbers(num1, num2);

console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);

//Q32: write a program to print the pattern of stars
function printStarPattern(rows: number): void {
  for (let i = 1; i <= rows; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
          row += '* ';
      }
      console.log(row);
  }
}

// Change the argument to the number of rows you want in the pattern
const numberOfRows = 5;
printStarPattern(numberOfRows);

// Q33 Write a program to print the star pattern

function generateSquarePattern(size: number): void {
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      row += '* ';
    }
    console.log(row);
  }
}

// Example: Generate a square pattern of size 5
generateSquarePattern(5);

// 33. Calculate the factorial of a number using a for loop.
// - Input: 5
// - Output: 120

function calculateFactorial(number: number): number {
  if (number < 0) {
      throw new Error("Factorial is not defined for negative numbers");
  }

  let factorialResult: number = 1;

  for (let i = 1; i <= number; i++) {
      factorialResult *= i;
  }

  return factorialResult;
}

// Example usage
const inputNumber: number = 5;
const result111: number = calculateFactorial(inputNumber);

console.log(`Factorial of ${inputNumber} is: ${result111}`);
