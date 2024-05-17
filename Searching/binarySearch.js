
// it's been a great journey to learn binary search 

function binarySearch(arr, x){
    let n = arr.length;
    // declare search space 
    let lo = 0, hi = n-1;

    while(lo<=hi){
        let mid = Math.floor((lo + hi)/2);
        if (arr[mid] == x){
            //we got the index at which x is present 
            return mid;
        }else if (arr[mid] < x){
            // discard the left half and do {lo = mid + 1}
            lo = mid + 1;
        }else {
            // discard the right half and do {hi = mid - 1}
            hi = mid - 1;
        }
    }
    return -1;
}

let arr = [-6,1,4,7,8,13,18,33];
console.log(binarySearch(arr, 18));