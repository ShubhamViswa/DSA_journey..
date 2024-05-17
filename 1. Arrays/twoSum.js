// Question link --> 
//https://leetcode.com/problems/two-sum/description/

let twoSum = function(nums, target){
    let n=nums.length
    for(let i = 0; i < n-1; i++){
    for(let j = i + 1; j<n ; j++){
        if(nums[i]+nums[j] == target){
            return [i,j];
        }
    }
  }
  return null; 
}

console.log(twoSum([4,66,2,66,],132));
