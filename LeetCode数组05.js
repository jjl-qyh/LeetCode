/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

//零矩阵

var setZeroes = function(matrix) {
    let xarr=[];
    let yarr=[];
    let n=matrix.length;
    let m=matrix[0].length;

    //寻找元素为0的下标，并将其加入到xarr和yarr中
    //这边要注意的是，嵌套的for循环是先执行外循环一次，然后将内循环执行完后
    //然后再执行外循环，内循环执行完，一直到外循环执行完
    for(let x=0;x<n;x++){
        for(let y=0;y<m;y++){
            if(matrix[x][y]===0){
                xarr.push(x);
                yarr.push(y);
            }
        }
    }
    //行清零
    for(let j=0;j<xarr.length;j++){
        for(let i=0;i<n;i++){
            matrix[xarr[j]][i]=0;
        }
    }
    //列清零
    for(let b=0;b<yarr.length;b++){
        for(let a=0;a<m;a++){
            matrix[a][yarr[b]]=0;
        }
    }
    //最后返回清零后的数组
    return matrix;

};