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

const findCycleStart = (head) => {
  let cycleLength;
  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      cycleLength = calcCycleLength(slow);
      break;
    }
  }
  return cycleStart(head, cycleLength);
};

function calcCycleLength(slow) {
  let current = slow,
    cycleLength = 0;

  while (true) {
    current = current.next;
    cycleLength += 1;
    if (current === slow) {
      break;
    }
  }
  return cycleLength;
}

function cycleStart(head, cycleLength) {
  let pointer1 = head,
    pointer2 = head;

  // now that we know the cycle length, increment pointer2 by that value
  while (cycleLength > 0) {
    pointer2 = pointer2.next;
    cycleLength -= 1;
  }
  // increment both pointers until they meet. where they meet is the start position of the cycle.
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`Cycle starts: ${findCycleStart(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`Cycle starts: ${findCycleStart(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`Cycle starts: ${findCycleStart(head).value}`);
/*
Output:
Cycle starts: 3
Cycle starts: 4
Cycle starts: 1
*/

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
