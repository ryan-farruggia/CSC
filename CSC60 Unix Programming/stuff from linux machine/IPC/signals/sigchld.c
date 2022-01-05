/*
 * You need to two windows to demo this program
 *
 * Run the program on one window 1
 * On the second window:  wait for the child to terminate
 * 
 * Run the program on window 1 again
 * On the second window:  kill -SIGKILL child_process_id 
 * */


#include  <stdio.h>
#include  <sys/types.h>
#include  <signal.h>
#include <sys/wait.h>

void signal_handler ( int signum ) 
{
  printf ( " Message Received -SIGCHLD \n");
  printf ( " WHOAMI : Process ID= %d\n" , getpid() ); 

}

void  main( void )
{
    pid_t  pid;

     pid = fork();
     if ( pid == 0 )  {
          // Child process gets pid = 0
          printf ( "child: I am the child process %d \n", getpid( ) ); 
          sleep (20);
     }
     else  // PARENT PROCESS
          {
             signal ( SIGCHLD, signal_handler );
             int status;
             printf ( "Parent process waiting for child to terminate\n");
             waitpid(pid, &status, 0);
              if ( WIFEXITED ( status) )
                 printf ( "Child exited normally %d \n", WEXITSTATUS (status) );
              else if ( WIFSIGNALED ( status) )
                 printf ( "pid1:Child exited by a Signal #%d \n", WTERMSIG (status) );

          }
}
