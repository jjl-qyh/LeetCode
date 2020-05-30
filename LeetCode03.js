/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let occ=new Set(); //创建新的哈希合集
    let n=s.length;    //把s的长度赋给n
    let r=-1;          //右指针，初始值为-1，相当于在左侧，没有开始移动
    let maxL=0;        //最大长度

    //左指针向右移动，移除移动到的字符
    for(let i=0;i<n;++i){
        if(i != 0){
            occ.delete(s.charAt(i-1));
        }

        //向右移动右指针，并且加入到occ中
        while(r+1<n&&!occ.has(s.charAt(r+1))){
            occ.add(s.charAt(r+1));
            ++r;
        }
        maxL=Math.max(maxL,r-i+1);
    }
    return maxL;
};