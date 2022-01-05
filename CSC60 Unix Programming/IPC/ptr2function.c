#include <stdio.h>
int add ( int x, int y)
{
 return x + y ;
}
int multiply ( int x, int y)
{
 return x * y ;
}

print (    int (* ptr) ( int, int), int a, int b)

{
  printf ( " value=%d \n" , ptr( a,b) );
}

 
main  ( )
{
  print ( add , 10, 20);
  print ( multiply , 10, 20);

}
