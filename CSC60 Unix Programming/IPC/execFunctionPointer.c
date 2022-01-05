#include <stdio.h>
// STEP 1
int add ( int x, int y)
{
 return x + y;
}

int sub ( int x, int y)
{
 return x - y;
}

int main ( )
{

 // STEP 2 Declare pointer to a function
 int ( * ptr ) (int , int );

 // STEP 3 Assign the pointer
  ptr = add ;

  // STEP 4 Call the function
  int sum = ptr ( 5, 4);
  printf (  "sum %d \n" , sum ) ;

  ptr = sub ;
  int minus = ptr ( 5, 4);
  printf (  "minus %d \n" , minus ) ;

}
