/**
 * Given an array of integers sorted in increasing order and a target, find the index of the first element in the array that is larger or equal to the target. 
 * Assume that it is guaranteed to find a satisfying number.
 * Input: arr = [1, 3, 3, 5, 8, 8, 10],target = 2

    Output: 1

    Explanation: the first element larger than 2 is 3, which has index 1.
 */

const firstNotSmaller = (arr, target) => {
    
    let l = 0, r = arr.length - 1, mid;
    let firstNotSmaller;
    while(l <= r) {
        console.log("l , r", l, r);
        mid = Math.floor((l + r) / 2);
        if(arr[mid] >= target) {
            firstNotSmaller = mid;
            if(arr[mid -1] >= target) {
                r = mid - 1;
            } else {
                return firstNotSmaller;
            }
        } else {
            l = mid + 1;
        }
    }

    return firstNotSmaller;

}

// console.log("Find first element :",firstNotSmaller([1, 3, 3, 5, 8, 8, 10],2))
// console.log("Find first element :",firstNotSmaller([1, 3],2))
// console.log("Find first element :",firstNotSmaller([1, 3, 5, 9], 8));
// console.log("Find first element :",firstNotSmaller([0],0))
// console.log("Find first element :",firstNotSmaller([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],10))
console.log("Find first element :",firstNotSmaller([1, 1, 1, 1, 4, 5],3))