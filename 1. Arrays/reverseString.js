// Reverse String
// Question link --> https://leetcode.com/problems/reverse-string/

let reverseString = function(s){
    let n = s.length;
    let i = 0;
    let j = n-1;
    while(i<=j){
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    return s;
}
console.log(reverseString(["s", "h", "u", "b", "h", "a", "m"]));