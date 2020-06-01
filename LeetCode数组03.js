/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //判断是否为空
    if(intervals===0){
        return [];
    }

    //声明一个集合
    var res=[];

    //升序排序
    intervals.sort(function(a,b){
        return a[0]-b[0];
    })

    //把intervals的第一个区间加入到res中
    res.push(intervals[0]);

    for(let i=1;i<intervals.length;i++){
        //如果后一项的左边界大于前一项的右边界，表示不能重叠，把后一项加入到res中
        if(intervals[i][0]>res[res.length-1][1]){
            res.push(intervals[i]);
        }
        //前面如果得到后一项的左边界小于前一项的右边界，再如果后一项的右边界大于前一项的右边界，表示有重叠
        //并且把后一项的右边界赋给前一项的右边界，从而合并
        else if(intervals[i][1]>res[res.length-1][1]){
            res[res.length-1][1]=intervals[i][1];
        }
    }
    return res;
};