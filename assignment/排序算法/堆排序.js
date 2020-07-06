// 第一个非叶子结点 arr.length/2-1
// 下沉 非叶子节点和自己的孩子比
// 从第一个非叶子节点开始比
function adjust(arr, target, len) {
    // 大顶堆：arr[i] >= arr[2i+1] && arr[i] >= arr[2i+2]  
    for (let i = target * 2 + 1; i < len; i = i * 2 + 1) {
        // 从自己的孩子中选一个较大的
        if (arr[i] < arr[i + 1] && i + 1 < len) {
            // 说明右孩子较大
            i++;
        }
        if (arr[target] < arr[i]) {
            [arr[i], arr[target]] = [arr[target], arr[i]];
            //接着下沉
            target = i;
        } else {
            // 如果两个孩子都比他小，说明他比下面的都大
            break;
        }
    }
}
// 构建最大堆
function createHeap (arr) {
    // 从第一个非叶子节点开始
    let start = parseInt(arr.length/2)  - 1;
    for (let i = start; i >= 0; i--) {
        adjust(arr, i, arr.length);
    }
}
// 把根节点换到末尾，从最大堆的第一个非叶子节点开始交换调整 arr.length/2 -1
function heapSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    createHeap(arr);
    //console.log(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        // 根节点换到了末尾
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // 这一次直接从顶端开始比较 注意长度在减少，因为后面的先前比较过了
        adjust(arr, 0, i)
    }
    return arr;
}
//  O(nlgn) 不稳定
let arr = [4, 6, 8, 5, 9];
console.log(heapSort(arr));