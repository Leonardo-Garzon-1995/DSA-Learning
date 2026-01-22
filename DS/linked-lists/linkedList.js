class Node {
    constructor(val) {
        this.value = val;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    // insert at end(tail)
    insertAtTail(val) {
        if (!this.head) {
            this.head = new Node(val)
        } else {
            let current = this.head

            while (current.next) {
                current = current.next
            }

            current.next = new Node(val)
        }
    }

    // insert at beginning(head)
    insertAtHead(val) {
        const newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode

    }

    contains(val) {
        let current = this.head

        while(current) {
            if (current.value === val)  {
                return true
            }

            current = current.next
        }

        return false
    }

    print() {
        let current = this.head
        let list = []

        while(current) {
            list.push(current.value)

            current = current.next
        }

        console.log(list.join(" \x1b[32m-> \x1b[0m") + " \x1b[32m-> \x1b[0mnull")

    }
}

const newll = new LinkedList()

newll.insertAtTail("a")
newll.insertAtTail("b")
newll.insertAtTail("c")
newll.insertAtTail("d")
newll.insertAtTail("e")

newll.insertAtHead(0)
newll.insertAtHead(-1)



newll.print()
console.log(newll.contains("a"))
