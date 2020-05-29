/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i=nums.length;
    while (i>1){
        let a=nums.pop();
        let j=target-a;
        let k=nums.indexOf(j);
        if(k===-1){
            i--;
        }else{
            return [k,nums.length];
        }
    }
};