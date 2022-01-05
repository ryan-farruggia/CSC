#include <stdio.h>

int addValues ( int data[ ] , int count ) 
{
 int i, sum = 0;
  for ( i = 0 ; i < 100000 ; i++ )
    sum += data [i] ;

 return sum;
}

int main ( ) 
{
   int ages[4] ;
   int sum = addValues ( ages, 4);
 return 0;
}
