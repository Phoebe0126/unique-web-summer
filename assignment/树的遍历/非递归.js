// 1. 前序遍历
function preOrder(node) {
  let result = [];
  let stack = [];
  let current = node;
  while (current || stack.length > 0) {
    while (current) {
      result.push(current.val);
      stack.push(current);
      current = current.left;
    }
    // 左节点
    current = stack.pop();
    current = current.right;
  }
  return result;
}

// 2. 中序遍历
function midOrder(node) {
  let result = [];
  let stack = [];
  let current = node;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
}

// 3. 后序遍历
function backOrder(node) {
  if (!node) {
    return [];
  }
  let stack = [];
  let result = [];
  let current = node;
  stack.push(current);
  while (stack.length > 0) {
    current = stack.pop();
    result.push(current.val);
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return result.reverse();
}
// 节点的创造函数
function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}
// 树 只需要知道他的根节点就行
function Tree() {
  this.root = null;
}
Tree.prototype = {
  insert: function (val) {
    if (!this.root) {
      this.root = new Node(val, null, null);
    } else {
      let current = this.root;
      let parent = null;
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
  },
};
const tree = new Tree();
tree.insert(5);
tree.insert(2);
tree.insert(6);
tree.insert(3);
tree.insert(8);

console.log(preOrder(tree.root));
console.log("----------------------");
console.log(midOrder(tree.root));
console.log("----------------------");
console.log(backOrder(tree.root));
// console.log('---------');
