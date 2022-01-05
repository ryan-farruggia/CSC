
#include <stdio.h>
#include  <sys/types.h>
 #include <unistd.h>
 #include <sys/wait.h>
 #include <stdlib.h>

void main( void )
{
       int status;
       pid_t pid;

     pid = fork();
     if (pid == 0) {
       printf("Child process is %d \n", getpid( ) );
       sleep ( 5 );
       exit(5);
    }  else       {
       waitpid (pid,  &status, WUNTRACED | WCONTINUED );
       if ( WIFEXITED ( status) )
           printf ( "Child exited normally %d \n", WEXITSTATUS (status) );
       else if ( WIFSIGNALED ( status) )
           printf ( "Child exited by a Signal #%d \n", WTERMSIG (status) );
    }
}
