/**
 * A mountain array is defined as an array that:

    Has at least 3 elements.
    Has an element with the largest value called the “peak”, at an index k. The array elements monotonically increase from the first element to A[k], and then monotonically decreases from A[k + 1] to the last element of the array. Thus creating a “mountain” of numbers.
    Find the index of the peak element. Assume there are no duplicates. 

    Example #
    Input: 0 1 2 3 2 1 0

    Output: 3

    Explanation: The largest element is 3 and its index is 3.

    Input : 0, 1, 2, 1
    Output: 2
 */

    const findPeakElement = (arr) => {
        if(arr && arr.length === 0){
            return -1;
        } 
        if(arr.length < 3) {
            return -1;
        }

        let l = 0, r = arr.length - 1, mid, res;

        while(l<=r) {
            mid = Math.floor((l+r)/2);
            if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
                return mid;
            }

            if(arr[mid] < arr[mid + 1]){
                l = mid + 1;
            }

            if(arr[mid] < arr[mid - 1]){
                r = mid - 1;
            }
        }

        return mid;
    }

console.log("Find Peak of mountain :", findPeakElement([0, 1, 2, 3, 2, 1, 0]));
console.log("Find Peak of mountain :", findPeakElement([0, 10, 3, 2, 1, 2]));
console.log("Find Peak of mountain :", findPeakElement([0, 10, 0]));