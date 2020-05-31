/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let i=0;
    let sum=0;//总的数组和
    let sumL=0;//从左开始慢慢加的和

    //如果数组长只有2个或者2个以下，就不存在中心索引了
    if(nums.length<=2){
        return 0;
    }

    //总的数组和
    for(i=0;i<nums.length;i++){
        sum+=nums[i];
    }

    for(let j=1;j<nums.length;j++){
        sumL+=nums[j-1];//从左开始慢慢加

        //每加一次就判断一下，得到的和是否等于（总和减去该数组元素）
        //的一半，如果是的，就返回该元素的下标，如果不是，返回循环
        if(sumL===(sum-nums[j])/2){
            return j;
        }
    }
    //如果不存在中心索引，返回-1；
    return -1;
};