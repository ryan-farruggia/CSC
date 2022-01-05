
#include <stdio.h>
#include  <sys/types.h>
 #include <unistd.h>
 #include <sys/wait.h>
#include <stdlib.h>

int main( void )
{
       int i,j, status1, status2 ;
       pid_t pid[2];

       pid[0] = fork();

       if (pid[0] == 0 ) 
             {
               sleep ( 4); 
               printf ( "child process id %d \n",  getpid ( ) );
               exit(1);
             }
       else {
          pid[1] = fork();
          if (pid[1] == 0 ) 
             {
               sleep ( 8); 
               printf ( "child process id %d \n", getpid ( ) );
               exit(1);
             }  
       }

        waitpid(pid[0], &status1, 0);
        waitpid(pid[1], &status2, 0);
    printf ( "parent process code  \n"  );


#ifndef CSC60_SPG21_FLAG


       if ( WIFEXITED ( status1) )
           printf ( "pid1:Child exited normally %d \n", WEXITSTATUS (status1) );
       else if ( WIFSIGNALED ( status1) )
           printf ( "pid1:Child exited by a Signal #%d \n", WTERMSIG (status1) );

       if ( WIFEXITED ( status2) )
           printf ( "pid2:Child exited normally %d \n", WEXITSTATUS (status2) );
       else if ( WIFSIGNALED ( status2) )
           printf ( "pid2:Child exited by a Signal #%d \n", WTERMSIG (status2) );

#endif
}
