// function quickSort(arr) {
//     if(arr.length < 2) {
//         return arr;
//     }
//     let target  = arr[0];
//     let left = [];
//     let right = [];
//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] <= target) {
//             left.push(arr[i]);
//         }
//         else {
//             right.push(arr[i]);
//         }
//     }
//     return quickSort(left).concat([target], quickSort(right));
// }
function quickSort(arr, start, end) {
    if (start > end) {
        return;
    }
    let target = arr[start];
    let l = start;
    let r = end;
    while (l < r) {
        while (arr[r] >= target && l < r) {
            r--;
        }
        arr[l] = arr[r];
        while (arr[l] < target && l < r) {
            l++;
        }
        arr[r] = arr[l];
    }
    arr[l] = target;
    quickSort(arr, start, l-1);
    quickSort(arr, l+1, end);
    return arr;
}
//O(nlgn) 不稳定
let arr = [4,2,2,11,3];
console.log(quickSort(arr, 0, arr.length-1));
