#include <stdio.h>

int main ( )
{
 printf ( "Enter a number, I will print bits using Array \n");
 unsigned char number;
 scanf ( "%hhu", &number);

 unsigned char data[8], i;
  for ( i = 0 ; i  < 8; i++, number /= 2 ) 
     data[8-i-1] =  number % 2 ;

 
  for ( i = 0 ; i  < 8; i++ ) 
     printf ( "%d", data[i] );
    
    
 printf ( "\n");
}
