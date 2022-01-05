// RUN THIS PROGRAM
// You are setting alarm at 4 seconds
// Generally, the process should not terminate when there is an handler 
// Try commenting out the signal handler call.  The program will terminate 

#include <stdio.h>
#include <signal.h>
#include <string.h>


void signal_handler ( int signum )
{
  if ( signum == SIGALRM)
     printf ( "Signal Received  \n ")  ;

}

int main( )
{
  
    signal ( SIGALRM, signal_handler );
    alarm ( 4 );  

  while ( 1 ) {  char ch = getchar ( ) ;  putchar ( ch); } 
}
