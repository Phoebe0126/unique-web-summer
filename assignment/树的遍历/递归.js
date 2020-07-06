// 1. 先序遍历
function preOrder (root) {
    if (root) {
        root.show();
        preOrder(root.left);
        preOrder(root.right);
    }
}
// 2. 中序遍历
function midOrder (root) {
    if (root) {
        midOrder(root.left);
        root.show()
        midOrder(root.right);
    }
}
// 3. 后序遍历
function backOrder (root) {
    if (root) {
        backOrder(root.left);
        backOrder(root.right);
        root.show();
    }
}

// 节点的创造函数
function Node (val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}
// 打印某个节点的数值
Node.prototype.show = function () {
    console.log(this.val)
}
// 树 只需要知道他的根节点就行
function Tree () {
    this.root = null;
}
Tree.prototype = {
    insert: function (val) {
        if (!this.root) {
            this.root = new Node(val, null, null);
        } else {
            let current = this.root;
            let parent = null;;
           while (current) {
               parent = current;
               if (val < current.val) {
                   current = current.left;
                   if (!current) {
                       parent.left = new Node(val, null, null);
                       return;
                   }
               } else {
                   current = current.right;
                   if (!current) {
                       parent.right = new Node(val, null, null);
                       return;
                   }
               }
           }
        }
    }
}
const tree = new Tree();
tree.insert(5);
tree.insert(2);
tree.insert(6);
tree.insert(3);
tree.insert(8);

preOrder(tree.root);
console.log('--------');
midOrder(tree.root);
console.log('---------');
backOrder(tree.root);
console.log('---------');