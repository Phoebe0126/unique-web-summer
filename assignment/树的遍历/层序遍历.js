function levelOrder (root) {
    let result = [];
    if (!root) {
        return result;
    }
    let temp = [];// 队列
    let arr = [];
    let last = root, nlast;// 当前行末尾节点， 下一行末尾节点
    while (root) {
        if (root.left) {
            temp.push(root.left);
            nlast = root.left;
        }
        if (root.right) {
            temp.push(root.right);
            nlast = root.right;
        }
        arr.push(root);
        if (root === last) {
            result.push(arr);
            last = nlast;
            arr = [];
        }
        if (temp.length > 0) {
            root = temp.shift();
        } else {
            root = null;
        }
    }
    return result;
}