#include <stdio.h>
int main ( ) 
{
 int data = 0x0A0B0C0D;
 char *ptr =  (char *) &data ;

  printf ( " addr 0x%p value 0x%x \n", ptr+0, *(ptr+0) );
  printf ( " addr 0x%p value 0x%x \n", ptr+1, *(ptr+1) );
  printf ( " addr 0x%p value 0x%x \n", ptr+2, *(ptr+2) );
  printf ( " addr 0x%p value 0x%x \n", ptr+3, *(ptr+3) );

} 
