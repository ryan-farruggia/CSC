#include <stdio.h>
#include <string.h>


int main ( )
{
  char userID[16]  ;
  char output[33] ;
  char name[10], md5[33];
  

  printf ( "Please enter a user id \n");
  scanf ( "%s", userID );
  int i, j;
  MDStringVersion2 ( userID,  output  ) ;

  FILE *fp = fopen ( "md5.data", "r");

  while ( fscanf ( fp, "%s", name ) != NULL ) 
  {
     if (strcmp ( name, userID) == 0 ) {
        printf ( "we got a name match \n"); 
        fscanf ( fp, "%s", md5  ) ; 
        printf (  "%s\n", md5  ) ; 
         if ( strcmp ( md5, output ) == 0  )
             printf ( "password matched \n" );
             break;
        }

  }
  fclose ( fp) ;

}
