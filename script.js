//const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  root() {

  }

  add(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.addNewNode(this.root, newNode);
    }
  }

  addNewNode(root, newNode) {
    if (newNode.data < root.data) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.addNewNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.addNewNode(root.right, newNode);
      }
    }

  }

  has(data) {
    if (!this.root) {
      return false;
    } else {
      return this.hasData(this.root, data);
    }
  }

  hasData(root, data) {
    if (!root) {
      return false;
    } else {
      if (root.data === data) {
        return true;
      } else {
        if (root.data < data) {
          return this.hasData(root.right, data);
        } else {
          return this.hasData(root.left, data);
        }
      }
    }
  }
    find(/* data */) {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }

    remove(/* data */) {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }

    min() {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }

    max() {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
  }

module.exports = {
  BinarySearchTree
};

const tree = new BinarySearchTree();

tree.add(1);

tree.add(2);

tree.add(3);

tree.add(4);

tree.add(5);
console.log(tree.has(9));