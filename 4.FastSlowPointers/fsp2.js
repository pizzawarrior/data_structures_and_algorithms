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

/*
Abstract: If we know the length of the LL cycle we can find the start position (value) of the cycle by:
- using 2 pointers, pointer1 and pointer2
- initialize the pointers to start at the head of LL
- find the length of the cycle as demo'd in the last challenge (fs1V2.js)
- let's say the length of the cycle is 'k'. move pointer2 k steps
- increment pointer1 and pointer2 until their values are equal
- because pointer2 is k nodes ahead of pointer1, it means that when they meet up pointer 2 must have completed 1 cycle.
- where they meet is he start of the cycle.
*/
