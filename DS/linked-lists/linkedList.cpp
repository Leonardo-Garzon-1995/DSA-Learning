#include<iostream>
#include<string>

class Node {
    public:
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        next = NULL;
    }
};

class SingleNodeLinkedList {
    public:
    Node* head;

    SingleNodeLinkedList() {
        head = NULL;
    }
};

int getSize(Node* head){
    int count = 0;
    Node* current = head;
    while(current != NULL){
        count++;
        current = current->next;
    }
    return count;
}
int main(){
    Node nodeA = Node(1);
    Node nodeB = Node(2);
    Node nodeC = Node(3);
    Node nodeD = Node(4);
    nodeA.next = &nodeB;
    nodeB.next = &nodeC;
    nodeC.next = &nodeD;

    std::cout << "A value: " << nodeA.data << "\n";
    std::cout << "B value: " << nodeA.next->data << "\n";
    std::cout << "C value: " << nodeA.next->next->data << "\n";
    std::cout << "D value: " << nodeA.next->next->next->data << "\n";

    std::cout << "Size of linked list: " << getSize(&nodeA) << "\n";
    return 0;

    
}