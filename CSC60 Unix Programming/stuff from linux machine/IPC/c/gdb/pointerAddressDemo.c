#include <stdio.h>
myPrintWithArray ( int *ptr, int count)
{
 int i;
   for ( i = 0 ; i < count; i++)
      printf ( "%d \n", ptr[i]);
}
myPrintWithPointerOffset ( int *ptr, int count)
{
 int i;
  printf ( "Offset: ptr address %p \n", ptr);
   for ( i = 0 ; i < count; i++)
      printf ( "%d \n", *(ptr+i) ); // pointer offset method
  printf ( "Offset: ptr address %p \n", ptr);
}
myPrintWithPointerArithmetic ( int *ptr, int count)
{
 int i;
  printf ( "Arithmetic: ptr address %p \n", ptr);
   for ( i = 0 ; i < count; i++) {
      printf ( "%d \n", *ptr ); // pointer offset method
      ptr++;
   }
  printf ( "Arithmetic: ptr address %p \n", ptr);
  printf ( " ptr address %p \n", ptr);
}


int main ( ) 
{
  int d[3]  = { 4 , 3, 1};
  myPrintWithArray ( d, 3);
  myPrintWithPointerOffset ( d, 3);
  myPrintWithPointerArithmetic ( d, 3);
}
