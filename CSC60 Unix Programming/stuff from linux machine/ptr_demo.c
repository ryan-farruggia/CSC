#include <stdio.h>
int main ( ) 
{
  int *ptr , age = 40, temp = 80, data[3] = { 3, 9, 18 }  ;
  int i;
/*
  printf ( " address of age = %p \n", &age ) ;
  printf ( " value of age =   %d \n",  age ) ;
  ptr = &age;
  printf ( "address stored in ptr=%p \n",  ptr ) ; 
  printf ( "valued stored %d \n",         *ptr ) ; 

  printf ( " address of temp = %p \n", &temp ) ;
  printf ( " value of temp =   %d \n",  temp ) ;
  ptr = &temp;
  printf ( "address stored in ptr=%p \n",  ptr ) ; 
  printf ( "valued stored %d \n",         *ptr ) ; 
  ptr = &data[0];
  printf ( " data[0] = %d \n", *ptr);
  ptr = &data[1];
  printf ( " data[1] = %d \n", *ptr);
  ptr = &data[2];
  printf ( " data[2] = %d \n", *ptr);

  for ( i = 0 ; i < 3; i++ ) {
     ptr = &data[i];
     printf ( " data[%d] = %d \n", i, *ptr);

*/
     ptr = &data[0];
     for ( i = 0 ; i < 3; i++ ) {
         printf ( " data[%d] = %d \n", i, *ptr);
         ptr++;
     }
  

}
