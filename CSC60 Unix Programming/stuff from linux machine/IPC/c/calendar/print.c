#include <stdio.h>
int main ( int argc,  char *argv[])
{
 int whichDayIsJan1st = atoi ( argv[1]);
 int isItLeapYear = atoi ( argv[2]);

 int i = 0, day=1;
 for ( i =  0 ; i < whichDayIsJan1st; i++ )
   printf ( "%c", '-'); 

 for ( i = 0 ; i < 31; i++ ) {
   if (( (i + whichDayIsJan1st) % 7 ) == 0 )
      printf ( "\n" );
   printf ( "%d ", day++);
 }
   

}
  
