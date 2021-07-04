/**
 * Given an integer, find its square root without using the built-in square root function.
 *  Only return the integer part (truncate the decimals).
 * Input: 16

    Output: 4

    Input: 8

    Output: 2
 */

const findSquareRoot = (n) => {
    if(n === 0 ){
        return 0
    }

    if(n === 1) {
        return 1
    }

    let arr = [];
    for(let i = 0; i< n ; i++) {
        arr[i] = i;
    }

    console.log("🚀 ~ file: SquareRoot.js ~ line 23 ~ findSquareRoot ~ arr", arr)
    let l = 0, r = n - 1, mid; 
    while(l<=r) {
        if( l === r) {
            return arr[l];
        }
        if( r - l === 1) {
           const lSquare = arr[l] * arr[l];
           const rSquare = arr[r] * arr[r];
           const lDiff = n - lSquare < 0 ? -1 * (n - lSquare): n - lSquare;
           const rDiff = n - rSquare < 0 ? -1 * (n - rSquare): n - rSquare;
           if(lDiff < rDiff) {
               return arr[l];
           } else {
               return arr[r];
           }
        }
        mid = Math.floor((l+ r)/2);
        const midVal = arr[mid];
        
        if(midVal * midVal === n) {
            return midVal;
        }

        if(midVal * midVal > n) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

}

console.log(findSquareRoot(12));