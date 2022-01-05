#include <stdio.h>
#include <string.h>
#include <ctype.h>
int main ( ) 
{
char name[32]  ;
printf ( "Enter a string please \n");
scanf ( "%s", name ) ;
printf ( "You entered a string :%s \n", name ) ;

 int i , flag = 1;

 int len = strlen ( name);
 printf ( "len %d \n", len );

 char *pb = name;
 char *pe = name+len-1; 

 while ( pb < pe ) {
   if ( toupper(*pb) == toupper(*pe) ) {
      pb++; 
      pe-- ;
   }
    else {
      printf ("string is not palindrome\n");
      exit (0);
    }
 }
      printf ("string is palindrome\n");
}


