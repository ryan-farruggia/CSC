#include <stdio.h>
void printABit ( unsigned char num)
{
   if  ( num <= 1 ) { printf  ( "%d", num); return; }

   printABit ( num / 2);

   if ( num % 2 ) 
       printf ( "1");
   else 
       printf ( "0");
   

}

int main ( )
{
 printf ( "Enter a number, I will print bits using recursion \n");
 unsigned char number;
 scanf ( "%hhu", &number);
 printABit ( number);
 printf ( "\n");
}
