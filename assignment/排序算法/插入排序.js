// 3 2 1 4
// 2 3 1 4 i=1, temp = 1, j =2 --> i = 1, temp =0, j = 1
// 1 2 3 4
function insertSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        let j = i + 1;
        for (let temp = i; temp >= 0; temp--) {
            if (arr[j] < arr[temp]) {
                // 每一次比较都得换，直到比前一个数大为止
                [arr[j], arr[temp]] = [arr[temp], arr[j]];
                // 记得这时候已经换了要比较的数 1 <--> 3 == > 1, 3
                j = temp;
            } else {
                break;
            }
        }
    }
    return arr;
}
// O(n2) 稳定
let arr = [-3, 2, 0, 1, -888,11];
console.log(insertSort(arr));
