#include <stdio.h>
#include <string.h>
int main ( ) 
{
  char name[10] = "ABCD" ;
  char t1[10] = {'A','\0','C','D','E','\0'};
  
  if ( strcmp ( name, t1 ) == 0 )
    printf ( " they are the same \n");
 else
    printf ( " they are not the same \n");

  printf ( "Length of the string %d \n", strlen(t1) );
}
