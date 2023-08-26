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
console.log("After sorting Alphabatecally The Array_5 is: ",Array_5.sort())

// Check if all elements in an array are even.

var Array_6: number[] = [10, 20, 30, 40,50];
var foundEven:boolean=false
for(let i=0;i<Array_6.length;i++){
    if(Array_6[i]%2==0){ 
        foundEven=true;
        break ;    
    
    }
}
if (foundEven==true){
    console.log("True")
}else{
    console.log("False")
}

// Split an array into chunks of a specified size.
// Input: [1, 2, 3, 4, 5, 6, 7, 8], 3
// Output: [[1, 2, 3], [4, 5, 6], [7, 8]]
// Method 1
var Array_7:number[] = [1, 2, 3, 4, 5, 6, 7, 8];
var chunk_Array:number[][] = [];
var chunk_Size:number = 3;

for (let i = 0; i < Array_7.length; i += chunk_Size) {
    chunk_Array.push(Array_7.slice(i, i + chunk_Size));
}

console.log(chunk_Array);

// method 2
function chunksArray(arr:number[],chunkSize:number){
    var chunkedArray:Number[][]=[];
    for(let i=0;i<arr.length;i+=chunkSize){
        chunkedArray.push(arr.slice(i,i+chunkSize));
    }
    return chunkedArray;
}

var a:number[]=[1,2,3,4,5,6,7,8,9];
var b:number=3;
var result=chunksArray(a,b);
console.log(result)


// Find the intersection of two arrays
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]


 

