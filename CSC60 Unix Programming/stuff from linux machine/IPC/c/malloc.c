#include <stdio.h>
#include <stdlib.h>
#define INT_ITEMS 4
int main ( ) 
{
  unsigned int *ptr , i ; 

  ptr = (unsigned int *)malloc ( INT_ITEMS * sizeof ( unsigned int) ) ; // malloc returns void pointer
  *(ptr+0) = 0xABACADAE ;
  *(ptr+1)= 0x0A0B0C0D ;
  *(ptr+2) = 0x8A8B8C8D ;
  *(ptr+3)  =  0x4A4B4C4D ;
  
  for ( i  = 0 ; i < INT_ITEMS ; i++ ) 
     printf ( " value at %d=%X \n", i, *(ptr+i) ) ;

  free ( ptr);

  ptr = NULL;
  printf ( "After Free: address of ptr pointing to 0x%p \n", ptr);
 

 return 0;
}
