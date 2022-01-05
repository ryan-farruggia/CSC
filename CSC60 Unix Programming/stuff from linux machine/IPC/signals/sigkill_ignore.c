
#include  <stdio.h>
#include  <stdlib.h>
#include  <sys/types.h>
#include  <signal.h>
#include <sys/wait.h>

void signal_handler ( int signum ) 
{
  printf ( "SIGNAL Handler : %d \n", getpid( ) ); 

}

void  main( void )
{
  printf ( "My process ID=%d \n", getpid( ) ); 

          signal ( SIGKILL, SIG_IGN);  // YOU CANNOT IGNORE SIGKILL signal
          while ( 1 ) ;

}
