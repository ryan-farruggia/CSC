#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>

void filterout ( char *Number  )
{
  printf ( "%s \n", Number);
           int i = 0, sum = 0, wt = 10;
           for ( i = 0 ; i < strlen ( Number)-1; i++ ) {
              sum=sum+  (Number[i]-48)*wt;
              wt--;
           }
           printf ( "sum=%d \n", sum);
           sum = sum%11;
           sum = 11-sum;
           if ( sum == Number[9]-48)
              {
                 printf ("%s is  Valid number \n" , Number);
              }
           else
              {
                 printf ("%s is InValid number \n", Number );
              }
}

int main ( )
{
  
  // TASK1  complete the reading the file line by line
  FILE *fp = fopen ( "numbers.txt", "r");
  
  
  printf ( " File descriptor ID=%d \n", fp->_fileno );

  //  DO THE ERROR CHECKING

  while ( 1 ) {
  char isbn[14] = ""; // SUPPOSE TO COME THE FILE
   // TASK2 read from the file using fgets
   if ( fgets ( isbn, 15, fp) == NULL )  
    break;
  
  int pd = fork ( ) ;
  if ( pd == 0 ) {
      filterout( isbn);
      exit( 0);
  }
  else {
   int status;
   wait ( &status);
   exit (0);
  }
 } // WHILE
}
