'''
The Luhn algorithm, also known as the "modulus 10" or "mod 10" algorithm, is a simple checksum formula used to validate a variety of identification numbers, like credit card numbers. These are the steps to validate a number using the Luhn algorithm:

Starting from the right, and excluding the rightmost digit (the check digit), double the value of every other digit.
If the result of doubling a digit is greater than 9, sum the digits to get a single digit. Alternatively, you can subtract 9 from the result.
Take the sum of all the digits including the check digit.
If the sum of all the digits is a multiple of 10, then the number is valid; else it is not valid.
Let's say we have the number 453914881. The steps to validate it using the Luhn algorithm would be:

Account number      4   5   3   9   1   4   8   8   1 
Double every other  4  10   3  18   1   8   8  16   1 
Sum 2-char digits   4   1   3   9   1   8   8   7   1

Then sum all numbers, 4 + 1 + 3 + 9 + 1 + 8 + 8 + 7 + 1 = 42.
Since 42 is not a multiple of 10, the number is invalid.'''
def verify_card_number(digits):
    acc_num = [int(c) for c in digits if c.isdigit()]
    acc_num.reverse()

    for n in range(len(acc_num)):
        if n % 2 == 1:
            acc_num[n] *= 2
    
    for n in range(len(acc_num)):
        if acc_num[n] > 9:
            nums = [int(c) for c in str(acc_num[n])]
            acc_num[n] = nums[0] + nums[1]
    

    if sum(acc_num) % 10 == 0:
        return "VALID!"
    else:
        return "INVALID!" 


print(verify_card_number("4111-1111-1111-1111"))