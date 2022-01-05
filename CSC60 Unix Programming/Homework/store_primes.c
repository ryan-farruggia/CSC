#include <stdio.h>
#define MAX_PRIMES 5
int main() {
  unsigned char number;
  unsigned char j;
  unsigned char cells;
  unsigned char data[5];
  unsigned char a;
  int index = 0;
  int i, flag = 0;
  for (a = 0; a < MAX_PRIMES; a++) {
    printf("Enter a number from 2-255: ");
    scanf("%hhu", &number);
      for (i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
          a--;
          flag = 1;
          break;
        }
      }
    if (flag == 0) {
      printf("%hhu is a prime number\n", number);
      if (number == 2) {
        data[index] = number;
        index++;
      } else {
        data[index] = number;
        index++;
      }
    } else {
      printf("%hhu is not a prime number\n", number);
      flag = 0;
    }
  }
  cells = sizeof (data) / sizeof(data[0]);
  for (j = 0; j < cells; j++) {
    printf("Value at cell %d is %d \n", j, *(data+j));
  } return 0;
}