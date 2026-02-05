// When using a linked list to implement a stack:
// - Pushing and popping generally takes O(1) time, but accessing the top element takes O(n) time.
// - No shifting is required like when using an array to implement a stack.
// - No fixed size is required like when using an array to implement a stack.

class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }

    // Push value - add to top - O(1)
    // i am always adding to the head/top of the linked List
    pushToTop(val) {
        const newNode = new Node(val)

        newNode.next = this.top
        this.top = newNode

        this.size++
    }

    // Pop value - remove from top - O(1)
    popFromTop() {
        if (!this.top) return null

        const removedValue = this.top.value
        this.top = this.top.next

        this.size--

        return removedValue

    }

    // Look at the top value - O(1)
    peekAtTop() {
        return this.top ? this.top.value : null
    }

    isEmpty() {
        return this.size === 0
    }

    sizeOfStack() {
        return this.size
    }

    clearStack() {
        this.top = null
        this.size = 0
    }

    print() {
        let current = this.top
        let list = []

        while (current) {
            list.push(current.value)
            current = current.next
        }

        console.log(list.join(` \x1b[32m-> \x1b[0m`))
    }
}

let test = new Stack()

test.pushToTop("a")
test.pushToTop(2)
test.pushToTop("b")
test.pushToTop(4)
test.popFromTop()
test.print()
console.log(test.peekAtTop())
console.log(test.sizeOfStack())
console.log(test)