#include <stdio.h>
extern int add ( int , int ) ;
extern int minus ( int , int ) ;
int main ( )
{
  int a = add ( 3, 4);
  int b = minus ( 4, 2);
  int c = multiply( 5,4);

 printf ( "add= %d \n", a);
 printf ( "minus= %d \n", b);
 printf ( "multiply= %d \n", c);
 
 return 0;

}

