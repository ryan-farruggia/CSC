#include <stdio.h>
#include <limits.h>  /* /usr/include/limits.h */

int main() {
    printf("bits in a char = %d\n", CHAR_BIT);
    printf("maximum value in a char= %d\n", CHAR_MAX);
    printf("Minimum value in a char= %d\n", CHAR_MIN);
    
    printf("maximum value of long long= %lld\n", LLONG_MAX);
    printf("minimum value of long long= %lld\n", LLONG_MIN);
    printf("maximum value of unsigned long long= %llu\n", ULLONG_MAX);
    
	printf("max number of open file = %d\n", FOPEN_MAX);
	
    return 0;
}