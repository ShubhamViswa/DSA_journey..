// problem 217 on leetCode ---> Contains Duplicate --> This problem is based on the frequency mapping approach
// Question link--->  https://leetcode.com/problems/contains-duplicate/description/ 

var containsDuplicate = function(nums) {
    let frequencies = {};
    for(let x of nums){
        if(frequencies[x]){
            frequencies[x]++;
            return true;
        }else {
            frequencies[x] = 1;
        }
    }
    return false;
};
