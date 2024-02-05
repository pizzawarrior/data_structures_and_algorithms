/*
Problem Statement:
Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = (head) => {
  let slow = head,
    fast = head;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`Cycle starts: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`Cycle starts: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`Cycle starts: ${find_cycle_start(head).value}`);
