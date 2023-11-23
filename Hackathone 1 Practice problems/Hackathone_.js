"use strict";
// Find the maximum number in an array.
var Array_1 = [3, 5, 1, 8, 10];
var max_num = Array_1[0];
for (var i = 0; i < Array_1.length; i++) {
    if (Array_1[i] > max_num) {
        max_num = Array_1[i];
    }
}
console.log("The maximum number in array is: ", max_num);
// Calculate the sum of all numbers in an array.
var Array_2 = [2, 4, 6, 8];
var sum = 0;
for (var i = 0; i < Array_2.length; i++) {
    sum = sum + Array_2[i];
}
console.log("The Sum of All the arrays is:", sum);
// Remove duplicates from an array.
// Method 1
var Array_3 = [1, 2, 2, 3, 4, 4, 5];
var unique_Array = [];
for (var i = 0; i < Array_3.length; i++) {
    if (unique_Array.indexOf(Array_3[i]) == -1)
        unique_Array.push(Array_3[i]);
}
console.log("Method 1 After removing Duplicates:", unique_Array);
// Method 2
var Array_3 = [1, 2, 2, 3, 4, 4, 5];
var Unique = [...new Set(Array_3)];
console.log("Method 2 After removing Duplicates:", Unique);
// Find the index of a specific element in an array.
var Array_4 = [10, 20, 30, 40];
console.log("Specific index if number 30 in array is: ", Array_4.indexOf(40));
// Sort an array of strings alphabetically
var Array_5 = ["apple", "date", "banana", "cherry"];
console.log("After sorting Alphabatecally The Array_5 is: ", Array_5.sort());
// Check if all elements in an array are even.
var Array_6 = [10, 20, 30, 40, 50];
var foundEven = false;
for (let i = 0; i < Array_6.length; i++) {
    if (Array_6[i] % 2 == 0) {
        foundEven = true;
        break;
    }
}
if (foundEven == true) {
    console.log("True");
}
else {
    console.log("False");
}
// Split an array into chunks of a specified size.
// Input: [1, 2, 3, 4, 5, 6, 7, 8], 3
// Output: [[1, 2, 3], [4, 5, 6], [7, 8]]
// Method 1
var Array_7 = [1, 2, 3, 4, 5, 6, 7, 8];
var chunk_Array = [];
var chunk_Size = 3;
for (let i = 0; i < Array_7.length; i += chunk_Size) {
    chunk_Array.push(Array_7.slice(i, i + chunk_Size));
}
console.log(chunk_Array);
// method 2
function chunksArray(arr, chunkSize) {
    var chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
}
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var b = 3;
var result = chunksArray(a, b);
console.log(result);
// Find the intersection of two arrays
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]
// 11. Merge two sorted arrays into one sorted array.
// - Input: [1, 3, 5], [2, 4, 6]
// - Output: [1, 2, 3, 4, 5, 6]
function merge(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    arr3.sort();
    console.log(arr3);
}
merge([1, 3, 5], [2, 4, 6]);
// 12. Find the difference between two arrays.
// - Input: [1, 2, 3, 4], [2, 3]
// - Output: [1, 4]
function diff(arr, arr1) {
    let result = arr.filter(values => !arr1.includes(values));
    console.log(result);
}
diff([1, 2, 3, 4], [2, 3]);
// 13. Count the occurrences of a specific element in an array.
// - Input: [1, 2, 2, 3, 2, 4, 5], 2
// - Output: 3
function countOccurrences(arr, target) {
    let count = 0;
    for (const element of arr) {
        if (element === target) {
            count++;
        }
    }
    return count;
}
const inputArray = [1, 2, 2, 3, 2, 4, 5];
const targetElement = 2;
const result1 = countOccurrences(inputArray, targetElement);
console.log(result1);
// 14. Find the second smallest number in an array.
// - Input: [5, 2, 8, 1, 7]
// - Output: 2
function findSecondSmallestNumber(arr) {
    if (arr.length < 2) {
        return undefined;
    }
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (const num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        }
        else if (num < secondSmallest && num !== smallest) {
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
}
else {
    console.log("There is no second smallest number in the array.");
    console.log("There is no second smallest number in the array.");
}
// 15. Find the longest consecutive sequence of numbers in an array.
// - Input: [100, 4, 200, 1, 3, 2]
// - Output: [1, 2, 3, 4]
function longestConsecutiveSequence(nums) {
    if (nums.length === 0) {
        return [];
    }
    nums.sort((a, b) => a - b);
    let longestSequence = [nums[0]];
    let currentSequence = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            currentSequence.push(nums[i]);
        }
        else if (nums[i] !== nums[i - 1]) {
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
const inputArray11 = [100, 4, 200, 1, 3, 2];
const result11 = longestConsecutiveSequence(inputArray);
console.log(result);
// 16. Implement a stack using an array with push and pop methods
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: 1
// 17. Implement a queue using an array with enqueue and dequeue methods.
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.size());
// 18. Flatten a nested array.
// - Input: [1, [2], [3, [4]]]
// - Output: [1, 2, 3, 4]
function flattenArray(inputArray) {
    const result = [];
    for (const item of inputArray) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        }
        else {
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
function calculateProduct(numbers) {
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
function findFirstNonRepeatingElement(arr) {
    const countMap = new Map();
    for (const num of arr) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        }
        else {
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
const input = [1, 2, 3, 2, 1, 4];
const final = findFirstNonRepeatingElement(input);
if (final !== undefined) {
    console.log(`The first non-repeating element is: ${final}`);
}
else {
    console.log("No non-repeating element found in the array.");
}
// 21. Remove the specified element from an array in-place.
// - Input: [1, 2, 3, 4, 5], 3
// - Output: [1, 2, 4, 5]
function removeElementFromArray(arr, elementToRemove) {
    const index = arr.indexOf(elementToRemove);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}
const iinputArray = [1, 2, 3, 4, 5];
const elementToRemove = 3;
removeElementFromArray(iinputArray, elementToRemove);
console.log(iinputArray);
//22. Check if two arrays are equal (have the same elements in the same order).
// - Input: [1, 2, 3], [1, 2, 3]
// - Output: true
function areArraysEqual(array1, array2) {
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
function findKthSmallest(arr, k) {
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
function removeFalsyValues(arr) {
    return arr.filter((item) => !!item);
}
const input__Array = [0, 1, false, true, null, undefined, NaN, "hello"];
const outputArray = removeFalsyValues(input__Array);
console.log(outputArray);
// 25. Reverse an array in-place.
// - Input: [1, 2, 3, 4, 5]
// - Output: [5, 4, 3, 2, 1]
function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
const InputArray = [1, 2, 3, 4, 5];
reverseArrayInPlace(InputArray);
console.log(InputArray);
// 26. Calculate the median of an array of numbers.
// - Input: [4, 2, 7, 1, 5]
// - Output: 4
function calculateMedian(numbers) {
    numbers.sort((a, b) => a - b);
    const length = numbers.length;
    if (length % 2 === 0) {
        const middle1 = numbers[length / 2 - 1];
        const middle2 = numbers[length / 2];
        return (middle1 + middle2) / 2;
    }
    else {
        return numbers[Math.floor(length / 2)];
    }
}
const Input = [4, 2, 7, 1, 5];
const median = calculateMedian(Input);
console.log("Median:", median);
// 27. Find the missing number in an array of consecutive numbers.
// - Input: [1, 2, 4, 5, 6]
// - Output: 3
function missingNumber(arr1) {
    // Sort the array in ascending order
    arr1.sort((a, b) => a - b);
    // Iterate through the array to find the gap
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== i + 1) {
            // Return the missing number
            return i + 1;
        }
    }
    return null;
}
const inputArray22 = [1, 2, 4, 5, 6];
const result22 = missingNumber(inputArray22);
console.log("Missing number:", result22);
