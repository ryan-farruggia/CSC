#include <stdio.h>
extern int add ( int , int);
extern int sub ( int , int);
main ( )
{
   int temp1 = add ( 10, 20);
   int temp2 = sub (  20, 10);

   printf ( "add %d sub %d \n", temp1, temp2);
 
}
