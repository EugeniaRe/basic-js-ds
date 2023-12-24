const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.treeRoot) {
      this.treeRoot = newNode;
    } else {
      this.addNewNode(this.treeRoot, newNode);
    }
  }

  addNewNode(treeRoot, newNode) {
    if (newNode.data < treeRoot.data) {
      if (!treeRoot.left) {
        treeRoot.left = newNode;
      } else {
        this.addNewNode(treeRoot.left, newNode);
      }
    } else {
      if (!treeRoot.right) {
        treeRoot.right = newNode;
      } else {
        this.addNewNode(treeRoot.right, newNode);
      }
    }

  }

  has(data) {
    if (!this.treeRoot) {
      return false;
    } else {
      return this.hasData(this.treeRoot, data);
    }
  }

  hasData(treeRoot, data) {
    if (!treeRoot) {
      return false;
    } else {
      if (treeRoot.data === data) {
        return true;
      } else {
        if (treeRoot.data < data) {
          return this.hasData(treeRoot.right, data);
        } else {
          return this.hasData(treeRoot.left, data);
        }
      }
    }
  }
  find(data) {
    return(this.findData(this.treeRoot, data))

  }

  findData(treeRoot, data) {
    if (!treeRoot) {
      return null;
    } else {
      if (treeRoot.data === data) {
        return treeRoot;
      } else {
        if (treeRoot.data < data) {
          return this.findData(treeRoot.right, data);
        } else {
          return this.findData(treeRoot.left, data);
        }
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let tempNode = this.treeRoot;
    while (tempNode.left) {
      tempNode = tempNode.left;
    }
    return tempNode.data;
  }

  max() {
    let tempNode = this.treeRoot;
    while (tempNode.right) {
      tempNode = tempNode.right;
    }
    return tempNode.data;
  }
}

module.exports = {
  BinarySearchTree
};