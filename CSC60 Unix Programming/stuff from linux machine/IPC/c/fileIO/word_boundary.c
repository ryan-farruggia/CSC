#include <stdio.h>
#include <stdlib.h>
int main ( ) 
{
 char *ptr1 = (char *)malloc ( 50 ) ; // CHECK IF THEY ARE ALLOCATAED NEXT 
 char *ptr2 = (char *)malloc ( 4 ) ; // TO EACH OTHER
 printf ("pointer-1 %p \n", ptr1);
 printf ("pointer-2 %p \n", ptr2);
}
