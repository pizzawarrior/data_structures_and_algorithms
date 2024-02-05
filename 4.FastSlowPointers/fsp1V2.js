// Similar to problem 1
// Given the head of a LinkedList with a cycle, find the length of the cycle.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findCycleLength(head) {
  let slow = head,
    fast = head; // it's only a fair race if they start in the same place!

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) {
      return calcCycleLength(slow); // found the cycle
    }
  }
  return 0;
}

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

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6); // no loop
head.next.next.next.next.next.next = head.next.next; // give us a loop
console.log(`LL cycle length? ${findCycleLength(head)}`);

head.next.next.next.next.next.next = head.next.next.next; // give us another loop
console.log(`LL cycle length?? ${findCycleLength(head)}`);

/*
Abstract: We can use the solution to the previous problem to find the cycle in the LinkedList.
Once the fast and slow pointers meet, we can save the slow pointer and iterate the whole cycle with
another pointer until we see the slow pointer again to find the length of the cycle.
*/
