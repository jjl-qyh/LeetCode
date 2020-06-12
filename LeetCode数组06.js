/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

//对角线遍历

var findDiagonalOrder = function(matrix) {

    //判断该矩阵是否为空
    if(!matrix || !matrix.length) {
        return [];
    }

    let xL=matrix.length;
    let yL=matrix[0].length;
    let arr=[];

    // 主要还是找规律，按照题目的举的例子来看：
    // 第一次：[0,0]
    // 第二次：[0,1],[1,0]
    // 第三次：[2,0],[1,1],[0,2]
    // 第四次：[1,2],[2,1]
    // 第五次：[2,2]
    // 不难发现，奇数次是横坐标减小，纵坐标增大
    //          偶数次是横坐标增大，纵坐标减小
    // 根据这个规律来

    let times=xL+yL-1;   //遍历的斜线的根数
    let count=0;         //一个数，用于坐标的增大减小

    for(let index=0;index<=times;index++){

        while(count<=index){
            let x=0;             //横坐标
            let y=0;             //纵坐标

            //奇数次遍历
            if((index+1)%2 != 0){
                x=index-count;       //横坐标减小
                y=count;             //纵坐标增大
            }

            //偶数次遍历
            if((index+1)%2 == 0){
                x=count;              //横坐标增大
                y=index-count;        //纵坐标减小
            }

            //限制条件，不能超过矩阵的行列坐标
            if(x>xL-1||y>yL-1){
                count++;
                continue;
            }

            arr.push(matrix[x][y]);
            count++;
        }
        count=0;
    }
    return arr;
};