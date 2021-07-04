/**
 * Given a sorted array of integers and a target integer, 
 * find the first occurrence of the target and return its index. Return -1 if the target is not in the array.
    Input:arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100],target = 3

    Output:1

    Explanation: The first occurrence of 3 is at index 1.
 */

const findFirstOccurence = (arr, target) => {
    if(!arr || !target){
        return -1;
    }

    if(arr.length === 0) {
        return -1;
    }

    let l = 0, r = arr.length -1 , mid, firstOccurence = -1;

    while(l <= r) {
        mid = Math.floor((l + r)/2);
        if(arr[mid] == target){
            firstOccurence = mid;
            if(arr[mid - 1] === target) {
                r = mid - 1;
            } else {
                return firstOccurence;
            }
        } else {
            l = mid + 1;
        }
    }

    return firstOccurence;
}

console.log("Find occurrence :", findFirstOccurence([1, 3, 3, 3, 3, 6, 10, 10, 10, 100],3));