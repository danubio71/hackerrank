/*
arr = [1,4,3,2]
newArr = []
 
arrLen = arr.length;

lastValue = arr.pop()

for(i = 0; i < arrLen; i++){    
    newArr.push(arr.pop())
}

newArr = arr.reverse()

console.log(newArr);

/*

let arr = [1,2,3,4,10,11]
function simpleArraySum(ar) {
    // Write your code here
    const sum = ar.reduce((acum, num)=> acum + num)
    return sum
}


console.log(simpleArraySum(arr));
*/

/*
(2) PROBLEM 2D Array - DS
=========================
Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

a b c
  d
e f g
There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .

Example


-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
The  hourglass sums are:

-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18
The highest hourglass sum is  from the hourglass beginning at row , column :

0 4 3
  1
8 6 6
Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

Function Description

Complete the function hourglassSum in the editor below.

hourglassSum has the following parameter(s):

int arr[6][6]: an array of integers
Returns

int: the maximum hourglass sum
Input Format

Each of the  lines of inputs  contains  space-separated integers .

Constraints

Output Format

Print the largest (maximum) hourglass sum found in .

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
Sample Output

19


(2) SOLUTION 2D Array - DS
=========================


const arr = [[-9,-9,-9,1,1,1],[0,-9,0,4,3,2],[-9,-9,-9,1,2,3],[0,0,8,6,6,0],[0,0,0,-2,0,0],[0,0,1,2,4,0]]

function hourglassSum(arr) {
    // Write your code here
    const finalArr = []
    for (let i = 0; i <= 3; i++ ) {    
        for (let k = 0; k <= 3; k++) {
            const newArr = []
            for (let j = k; j <= k+2; j++) {
                newArr.push(arr[i][j])        
            }
            
            newArr.push(arr[i+1][k+1]) 
            
            i++
            i++
            for (let j = k; j <= k+2; j++) {
                newArr.push(arr[i][j])        
            }
            i = i - 2
            const sum = newArr.reduce((acum, num)=> acum + num)
            finalArr.push(sum)
        }    
    }
    return Math.max(...finalArr)
}

console.log(hourglassSum(arr));

*/




