// Implementation of a stack using an array
let stack = []

// Initial stack
console.log("Initial Stack: ", stack)

// Append to the top of the stack - O(1)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)

console.log("Stack after appending elements: ", stack)

// Pop from the top of the stack - O(1)
let x = stack.pop()
console.log("Popped element: ", x)

console.log("Stack after popping element: ", stack)

// Peek at the top of the stack - O(1)
let y = stack[stack.length - 1]
console.log("Peeked element: ", y)
console.log("Stack after peeking element: ", stack)

// Check if stack is empty - O(1)
console.log("Is stack empty? ", stack.length === 0)

// Implementing stack using a doubly linked list
