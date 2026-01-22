// REcursion

// Factorial on n ---- n! = n * (n-1) * (n-2) * ... * 1
// 5! = 5 * 4 * 3 * 2 * 1

// Applying recursion to find factorial
function fact(n) {
    if (n == 0) return 1;  // base case
    return n * fact(n - 1); // recursive case
}

// Fibonacci Sequence - 
// first two numbers are 1, next number is sum of previous two numbers
// 1 1 2 3 5 8 13

function fib(n) {
    if (n >= 3) {   // base case
        return fib(n - 1) + fib(n - 2); // recursive case
    } else {
        return 1;
    }
}
