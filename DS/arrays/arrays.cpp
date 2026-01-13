#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

int main() {
    // Dynamic array/vector
    std::vector<int> arrA = {1, 2, 3};
    std::cout << "Initial array: ";
    for (int i : arrA) {
        std::cout << i << " ";
    }
    std::cout << std::endl;

    // Append - Insert element at the end of the vector - On average O(1)
    arrA.push_back(4);
    std::cout << "Array after appending 4: ";
    for (int i : arrA) {
        std::cout << i << " ";
    }
    std::cout << std::endl;

    // Pop - Remove element from the end of the vector - On average O(1)
    arrA.pop_back();
    std::cout << "Array after popping 4: ";
    for (int i : arrA) {
        std::cout << i << " ";
    }
    std::cout << std::endl;

    // Insert at specific index - O(n)
    arrA.insert(arrA.begin() + 2, 5);
    std::cout << "After insert 5 at index 2: ";
    for (int i : arrA) std::cout << i << " ";
    std::cout << std::endl;

    // Modify an element - O(1)
    arrA[0] = 7;
    std::cout << "After modifying element at index 0 to the value 7: ";
    for (int i : arrA) std::cout << i << " ";
    std::cout << std::endl;

    // Accessing an element at a given index - O(1)
    std::cout << "Element at index 2: " << arrA[2] << std::endl;

    // Checking if vector/array has an element - O(n)
    if (std::find(arrA.begin(), arrA.end(), 7) != arrA.end()) {
        std::cout << "The vector contains element 7: true" << std::endl;
    }

    // cheking length of vector/array - O(1)
    std::cout << "Vector's length: " << arrA.size() << std::endl;

    std::cout << "=====================================================" << std::endl;

    // Strings

    std::string s = "hello";

    // Append to end of string - O(n)
    std::string b = s + "z";
    std::cout << "String after appending z: " << b << std::endl;

    // checking if something is in the string - O(n)
    if (s.find("l") != std::string::npos) {
        std::cout << "The string contains the letter l: true" << std::endl;
    }

    // Access positions - O(1)
    std::cout << "Character at index 0: " << s[0] << std::endl;

    // Length - O(1)
    std::cout << "String's length: " << s.size() << std::endl;

    return 0;

}