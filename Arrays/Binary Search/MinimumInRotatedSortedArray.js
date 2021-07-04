/**
 * A sorted array was rotated at an unknown pivot. 
 * For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20]. 
 * Find the index of the minimum element in this array.
 * 
 * Input: [30, 40, 50, 10, 20]

    Output: 3

    Explanation: The smallest element is 10 and its index is 3.

 */

const findMinInSortedRotatedArray = (arr) => {
    if(arr && arr.length === 0){
        return -1;
    }

    if(arr.length === 1){
        return arr[0];
    }

    let l = 0, r = arr.length - 1, mid, res = -1;

    while(l <= r) {
        if( l === r) {
            return l;
        }
        mid = Math.floor((l+r)/2);
        if(arr[mid] <=  arr[arr.length - 1]) {
            res = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return res;
}

console.log("Find minimum rotated :", findMinInSortedRotatedArray([20, 30, 40, 50, 10]));
console.log("Find minimum rotated :", findMinInSortedRotatedArray([0, 1, 2, 3, 4, 5]));
console.log("Find minimum rotated :", findMinInSortedRotatedArray([0]));