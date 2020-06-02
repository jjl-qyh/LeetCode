/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

//旋转矩阵

var rotate = function(matrix) {
    let n=matrix.length;
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            //对角线互换
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];

        }
    }
    //取每一行的倒序
    return matrix.forEach(row=>row.reverse());
};