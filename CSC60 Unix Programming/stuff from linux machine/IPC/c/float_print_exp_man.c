#include <stdio.h>

int main ( ) 
{
  float x =  3.68;
  printf ( "Enter a floating number \n");
  scanf ( "%f", &x);
 
  unsigned int num  = *( unsigned int *)&x ;

   int i ;

     printf ( "The sign bit is :") ;
       if (num & (1 << 31))
           printf("1") ;
       else
           printf("0");
           printf("\n");
 
     printf ( "exponents bits are \n" );
     for(i = 30 ; i >= 23 ; i--)
       if (num & (1 << i))
           printf("1") ;
       else
           printf("0");
           printf("\n");

     printf ( "Mantissa bits are \n" );
     for(i = 22 ; i >= 0 ; i--)
       if (num & (1 << i))
           printf("1") ;
       else
           printf("0");
           printf("\n");



  return 0;
}
