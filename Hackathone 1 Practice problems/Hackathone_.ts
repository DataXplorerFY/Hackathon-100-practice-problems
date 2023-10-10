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