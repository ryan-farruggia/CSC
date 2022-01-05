
/*
 *  How to run this program
 *  Keep two terminal windows side by side
 *
 *  on first terminal
 *  compile as gcc wait2.c
 *  run the program and note the Process ID of the child
 *
 *  on the second terminal,  to kill the process
 *  kill -9 processID  
 *  kill -KILL processID
 *
 *  or to STOP the process
 *  kill -STOP processID
 *
 *
 *
 *
 *
 *
 */

#include <stdio.h>
#include  <sys/types.h>
 #include <unistd.h>
 #include <sys/wait.h>

void main( void )
{
       int status;
       pid_t pid;

     pid = fork();

     if (pid == 0) {
         printf(" *** Child process is %d ***\n", getpid( ) );
         sleep ( 30);
         exit ( 1 );

    }  else {
       wait ( &status);

       if ( WIFEXITED ( status) ) // autopsy report on why the child terminated
         printf ( "Child exited normally %d \n", WEXITSTATUS (status) );
       else if ( WIFSIGNALED ( status) )
         printf ( "Child exited by a Signal #%d \n", WTERMSIG (status) );
    }
}
