// wap to take 5 decimal digit from user and convert into word.
#include <stdio.h>

void convert_to_words(int num) {
    // Define words for single digits, tens, and powers of ten
    char *ones[] = { "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"};
    char *teens[] = { "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
    char *tens[] = { "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
    
    if (num >= 1000) {
        printf("%s Thousand ", ones[num / 1000]);  // Thousands place
        num %= 1000;  // Remove the thousands part
    }
    if (num >= 100) {
        printf("%s Hundred ", ones[num / 100]);  // Hundreds place
        num %= 100;  // Remove the hundreds part
    }
    if (num >= 20) {
        printf("%s ", tens[num / 10]);  // Tens place (for numbers 20 and above)
        num %= 10;  // Remove the tens part
    }
    if (num >= 10 && num < 20) {
        printf("%s ", teens[num - 10]);  // Handle the 'teen' numbers (10-19)
        return;
    }
    if (num > 0) {
        printf("%s", ones[num]);  // Handle the ones place
    }
}

int main() {
    int num;

    // Prompt user to input a 5-digit number
    printf("Enter a 5-digit number: ");
    scanf("%d", &num);

    // Validate the input
    if (num < 10000 || num > 99999) {
        printf("Please enter exactly a 5-digit number.\n");
        return 1;  // Exit with an error code
    }

    // Convert the number to words
    printf("The number in words is: ");
    convert_to_words(num);
    printf("\n");

    return 0;
}

