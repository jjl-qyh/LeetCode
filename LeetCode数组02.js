/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    //数组的长度
    let n=nums.length;

    //如果目标值小于排序数组的第一项，则把目标值插入到第一项的位置，即0
    if(target<nums[0]){
        return 0
    }

    //如果目标值大于排序数组的最后一项，则把目标值插入到最后一项的位置，即n
    if(target>nums[n-1]){
        return n;
    }

    //如果排序数组中有目标值，则返回排序数组中该值的下标
    for(let i=0;i<n;i++){
        if(target===nums[i]){
            return i;
        }

        //如果目标值不在数组中，且不是第一项或者最后一项，就比较目标值和前后两项的大小
        //然后代替大的那一项，返回原来大的那一项的下标
        else if(target!==nums[i]){
            if(target>nums[i]&&target<nums[i+1]){
                return i+1;
            }
        }
    }

};