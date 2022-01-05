#include <stdio.h>

int main() {
    unsigned char a,b,c,d, j;
    printf("Enter an IP address in this format AA.BB.CC.DD\n");
    scanf ( "%hhu%c%hhu%c%hhu%c%hhu", &a, &j, &b, &j, &c,&j,  &d ) ;
    printf ( "a=%d b=%d c=%d d=%d\n", a, b, c, d );
    if (( a >> 5 ) == 6 )
      printf ( "This is class-C network address \n");
    else
    if (( a >> 6 ) == 2 )
      printf ( "This is class-B network address \n");
    else
    if (  ( a >> 7 ) == 0 )
      printf ( "This is class-A network address \n");
    else
    printf ( "This is neither A, B and C network address \n");
    
    return 0;
}
