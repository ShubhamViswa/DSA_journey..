
let nums1 = [1 , 2 , 3, 4, 798, 879];
let nums2 = [2 , 5 , 6,77, 92, 99 , 500];
let m = nums1.length; 
let n = nums2.length; 
let result = [];

let i = 0;
let j = 0;
let k = 0;

while(i < m && j < n){
    if(nums1[i]<=nums2[j]){
        result[k] = nums1[i];
        i++;
    }else{
        result[k] = nums2[j];
        j++;
    }
    k++;
}

while(i<nums1.length){
    result[k]=nums1[i];
    i++;
    k++;
}

while(j < nums2.length){
    result[k] = nums2[j];
    j++;
    k++;
}
k = 0;
while(k < m+n){
    nums1[k] = result[k];
    k++;
}

console.log(result);