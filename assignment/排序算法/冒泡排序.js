// 3 2 4 1
// 2 3 4 1
// 2 3 4 1
// 2 3 1 4
// 找到最大的放末尾
function BubbleSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    
    let complete = true;
    // i表示排了几位数
    for(let i = 0; i < arr.length; i++) {
        // j表示目前的坐标，没排一次，最大数减一
        for(let j = 0; j < arr.length- 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                complete = false;
            }
        }
        // 如果一次冒泡通过，则说明不需要再循环，直接返回
        if (complete === true) {
            return arr;
        }
    }
    return arr;
}
// O(n2) 稳定
let arr = [-3, 2, 1, 1, -888,11];
console.log(BubbleSort(arr));

