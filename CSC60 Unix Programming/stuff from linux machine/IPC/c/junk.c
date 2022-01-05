#include <stdio.h>
int main ( ) 
{
  int *p;
  
  int data[10] = { 4, 3, 1 , 8, 3, 4, 19, 10 , 20 };

  printf ( "cell index 0 = %p \n", &data[0] );
  printf ( "cell index 1 = %p \n", &data[1] );
  printf ( "cell index 2 = %p \n", &data[2] );

#if 0
  p = &data[0] ; 
  printf ( "value where pointer is pointing %d \n", *p ) ;


  p = &data[1];
  printf ( "value where pointer is pointing %d \n", *p ) ;

  p = &data[2];
  printf ( "value where pointer is pointing %d \n", *p ) ;
#endif


   int i = 0 ;
  while ( i < 10 ) {

    p = &data[i];
    (*p)++;
    printf ( "using while loop:value where pointer is pointing %d \n", *p ) ;
    i++;

 }



return 0;
 }

