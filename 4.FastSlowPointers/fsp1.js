// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head) {
  let slow = head,
    fast = head; // it's only a fair race if they start in the same place!

  while (fast != null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) {
      return true; // found the cycle
    }
  }
  return false;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6); // no loop
console.log(`LL has cycle? ${hasCycle(head)}`);

head.next.next.next.next.next.next = head.next.next; // give us a loop
console.log(`LL has cycle now? ${hasCycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next; // give us another loop
console.log(`LL has cycle now NOW? ${hasCycle(head)}`);

/*
Abstract:
Use a slow and a fast pointer to traverse the list
Slow pointer moves up one step, fast moves 2. This can have 2 outcomes:
-if fast finds the end of the LL before the slow one it means that there is no cycle
-the slow pointer will never be able to catch the fast pointer if there is no cycle (if the fast pointer hits the end first)
If the LL has a cycle, the fast pointer enters first, followed by the slow one. They keep cycling infinitely. If the pointers meet at any stage it means there is a cycle.
When the fast pointer wouls approach the slow one from behind (while inside of a loop) we have 2 possibilities:
-fast pointer is 1 step behind the slow pointer
-fast pointer is 2 steps behind slow pointer
All other distances btwn the pointers will reduce to one of these 2 possibilities:
-If the fast pointer is one step behind the slow pointer: The fast pointer moves two steps and the slow pointer moves one step, and they both meet.
-If the fast pointer is two steps behind the slow pointer: The fast pointer moves two steps and the slow pointer moves one step. After the moves, the fast pointer will be one step behind the slow pointer, which reduces this scenario to the first scenario. This means that the two pointers will meet in the next iteration.
*/
