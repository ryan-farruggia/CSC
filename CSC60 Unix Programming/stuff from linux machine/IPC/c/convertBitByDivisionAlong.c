#include <stdio.h>
void printABit ( unsigned char num)
{

 int i, divider = 128;;
  for ( i = 0 ; i < 8; i++ ) {
     if ( num / divider ) {
       printf ( "1");
       num -= divider;
     }
     else 
       printf ( "0");

       divider /= 2;
  }
       
}

       

int main ( )
{
 printf ( "Enter a number, I will print bits using / operator \n");
 unsigned char number;
 scanf ( "%hhu", &number);
 printABit ( number);
 printf ( "\n");
}
