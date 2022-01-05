
#include  <stdio.h>
#include  <sys/types.h>
#include  <signal.h>
       #include <sys/wait.h>

void signal_handler ( int signum ) 
{
  printf ( "signal handler WhoAmI:ID=%d \n", getpid ( )); 

}

void  main( void )
{
    signal ( SIGUSR1, signal_handler );
    pid_t  pid;

     pid = fork();
     if ( pid == 0 )  {
          printf ( "fork: child ID =%d \n", getpid ( )); 
          kill ( getppid( ) , SIGUSR1 ); // CHILD IS GENERATING
          sleep (15);
     }
     else 
          {
             int status;
             waitpid(pid, &status, 0);
          }
}
