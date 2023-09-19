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
