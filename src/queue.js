const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
  }

  enqueue(value) {
      const listNode = new ListNode(value);
      if (this.size === 0) {
          this.head = listNode;
          this.tail = listNode
      } else {
          this.tail.next = listNode;
          this.tail = listNode;
      }
      this.size++;
  }

  dequeue() {
       let removed = this.head.value;
       this.head = this.head.next;
       this.size--;
       return removed;
  }

  getUnderlyingList() {
    return this.head;

}
}

module.exports = {
  Queue
};
