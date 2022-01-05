
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

          signal ( SIGUSR1, signal_handler ); // CUSTOM SIGNAL
          raise ( SIGUSR1);

          signal ( SIGUSR1, SIG_IGN);
          raise ( SIGUSR1);

          sleep ( 1 ) ;
          exit ( EXIT_SUCCESS);
}
