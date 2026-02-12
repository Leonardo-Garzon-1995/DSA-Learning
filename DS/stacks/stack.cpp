#include <iostream>
#include <stack>

// implemented with <stack>
int main() {
    // Stack - Last in First out

    std::stack<int> stk;
    std::cout << "Initial Stack: empty" << std::endl;

    // append to top of Stack O(1)
    stk.push(5);
    stk.push(4);
    stk.push(3);

    std::cout << "Stack after pushing elements: [5, 4, 3]" << std::endl;

    // Pop from stack top - O(1)

    int x = stk.top();
    stk.pop();

    std::cout << "popped element: " << x << std::endl;
    std::cout << "Stack after popping: [5, 4]" << std::endl;

    // Peeking at the top of the stack - O(1)

    std::cout << "Top element of the stack: " << stk.top() <<  std::endl; 

    // Asking if stack is empty 

    if (stk.empty()) {
        std::cout << "Stack is empty" << std::endl;
    }
}