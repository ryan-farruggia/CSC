// RUN THIS PROGRAM
// do control-Z to stop
// put the program in foreground again
#include <stdio.h>
#include <signal.h>
#include <string.h>

void signal_18_handler ( int signum )
{
    printf ( "Signal received to continue \n");
    char buf[30] ;
    strcpy ( buf, strsignal ( signum ) ); // SAFER
    printf("Handling signal  %d %s\n", signum, buf);
   
}


int main( )
{
  signal ( SIGCONT, signal_18_handler );  // 18

  int i, flag, j;
  for ( i = 100; i < 100000 ; i ++)
   {
    for ( j = 2 ; j < i ; j++ )
     {
        if ( i%j == 0 ) 
          break;
     }

    if ( j == i ) 
       flag++;
   }
   printf ( "Number of prime numbers is %d \n", flag);
}

