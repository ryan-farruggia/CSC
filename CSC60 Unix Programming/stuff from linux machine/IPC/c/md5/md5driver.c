

#include <stdio.h>
#include <string.h>

int main ( )
{
  char userID[16]  ;
  char calculatedMD5[33] ;
  char name[10], md5[33];
  FILE *fp;

  printf ( "Please enter a user id \n");
  scanf ( "%s", userID );


  int i, j;
  MDStringVersion2 ( userID,  calculatedMD5  ) ;
  printf ( "calculated md5 %s\n", calculatedMD5) ;

  // open the file md5.data in read mode 
  // NOTE:  We are now storing password same as userID to make it simple
  //

  // in a while loop
  // keep reading two strings from file : name and md5 
  // if the user ID matches, compare calculateMD5 and md5 value 
  //  if there is a match in md5 values, print password matched
  

}

