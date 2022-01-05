// THIS PROGRAM DEMONSTRATES fscanf 
// NOTE: THE RETURN VALUE IS num, NUMBER OF ITEMS READ
//
#include <stdio.h>
int main ( ) 
{
  FILE *fp = fopen ( "read_data.in", "r");
  char name[32];
  int age;

  
  int num = fscanf ( fp, "%s %d", name, &age);
  if ( num == 2 ) {
      printf ( "name=%s:age %d \n", name, age);
  }
       
 // READ PAST EOF 
  num = fscanf ( fp, "%s %d", name, &age);
  if ( num == EOF ) {
      printf ( " EOF REACHED \n") ;
  }

  fclose ( fp);
  
}
 
