// RUN THIS PROGRAM. IT SLEEPS 100 seconds
// DO a CONTROL-C
// Your program will see the signal handler 
#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <string.h>

void controlQuit ( int signum )
{
  printf ( "Thank you for pressing Ctrl-backslash \n");
 exit ( 0 );
}

int main( )
{
  signal ( SIGQUIT, controlQuit );
  while ( 1 )  // infinite loop
    sleep (1); // WATCHING TV 
  
}





 // signal ( SIGQUIT, signal_handler ); // control \
    //char buf[30] ;
    //strcpy ( buf, strsignal ( signum ) ); // SAFER
    //printf("Handling signal  %d %s\n", signum, buf);
