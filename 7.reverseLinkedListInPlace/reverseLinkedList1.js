class Node {
  constructor(value, next = null) {
    (this.value = value), (this.next = next);
  }

  getList() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
}

function reverse(head) {
  let current = head,
    previous = null;
  while (current !== null) {
    let next = current.next; // temporarily store the next node
    current.next = previous; // reverse the current node
    previous = current; // before we move to the next node point previous to current node
    current = next; // move onto the next node
  }
  return previous;
}

let head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original linked list are: ${head.getList()}`); // Output: 2 4 6 8 10
console.log(`Nodes of reversed linked list are: ${reverse(head).getList()}`); // Output: 10 8 6 4 2

/*
Time Complexity: O(n) where n is the num of nodes in the linked list
Space Complexity: O(1) constant space
*/
