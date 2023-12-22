const { NotImplementedError, ListNode } = require('../basic-js-ds/extensions/index.js');

class Queue {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    enqueue(value) {
        const listNode = new ListNode(value);
        if (this.size === 0) {
            this.head = listNode;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }

        prev.next = listNode;
        }
        this.size++;
        return value;
    }

    dequeue() {
         let removed = this.head;
         this.head = this.head.next;
         this.size--;
         return removed;
    }

    getUnderlyingList() {
      let prev = this.head;
          while (prev.next) {
              return prev;
              prev = prev.next;

          }

  }
  }


const list = new Queue();

list.enqueue(5);
console.log(list);

// lista.enqueue('c');
// lista.enqueue('a');
// lista.enqueue('s');
// lista.enqueue('d');

// lista.dequeue();

// console.log(lista);