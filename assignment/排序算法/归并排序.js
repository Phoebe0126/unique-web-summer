function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    // 选一个中间的数
    let middle = Math.floor(arr.length / 2);
    // 分割
    let left  = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    //创建一个临时的数组
    let temp = [];
    //left和right数组，已经排好序，最前的数一定最小
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            temp.push(left.shift());
        }else {
            temp.push(right.shift());
        }
    }
    // 只要一边的数组为空，则全部添加另一个数组到temp里
    if (left.length) {
        // 说明right已空
        temp = temp.concat(left);
    }
    if (right.length) {
        temp = temp.concat(right);
    }
    return temp;
}
// //  O(nlgn) 稳定！！
let arr = [4, -6, 0, 5, 9];
console.log(mergeSort(arr));
