#include <stdio.h>


int main ( ) 
{
   unsigned short data[10] ;
   printf ( "address of first cell %p \n",   & (data[0])  ) ;
   printf ( "address of 2nd cell %p \n",   & (data[1])  ) ;
   printf ( "address of 3d cell %p \n",   & (data[2])  ) ;
   printf ( "address of 4th cell %p \n",   & (data[3])  ) ;

   printf ( "the size of the array is %d \n", sizeof ( data) ); // sizeof always give you bytes

 return 0;
}
