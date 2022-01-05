
#include  <stdio.h>
#include  <stdlib.h>
#include  <sys/types.h>
#include  <signal.h>
#include <sys/wait.h>

void signal_handler ( int signum ) 
{
  printf ( "Hello %d \n", getpid( ) ); 

}

void  main( void )
{

          signal ( SIGSTOP, SIG_IGN);
          while ( 1 ) ;

}
