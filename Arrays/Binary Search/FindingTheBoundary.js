/**
 * An array of boolean values is divided into two sections: the left section consists of all false, and the right section consists of all true.
 *  Find the boundary of the right section, i.e. the index of the first true element. If there is no true element, return -1.
 * Input: arr = [false, false, true, true, true]

    Output: 2

    Explanation: first true's index is 2.
 */

const findBoundary = (arr) => {

    if(!arr) {
        return -1;
    }

    if(arr && arr.length === 0) {
        return -1;
    }

    let l = 0, r = arr.length -1 , mid;
    while(l <= r) {
       mid = Math.floor(l + r / 2);
        if(arr[mid]) {
            if(arr[mid - 1]) {
                r = mid - 1;
            } else {
                return mid
            }
        } else {
            l = mid + 1;
        }
    }
    return -1 ;
}

console.log("Find Boundary :",findBoundary([false, false, true, true, true]))
console.log("Find Boundary :",findBoundary([true]))
console.log("Find Boundary :",findBoundary([false, false, false]));
console.log("Find Boundary :",findBoundary([true, true, true, true, true]))
console.log("Find Boundary :",findBoundary([false, true]))

