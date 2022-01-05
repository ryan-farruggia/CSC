#include <sys/wait.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define MAX_LINE  1000

int
main(int argc, char *argv[])
{
     int fd[2] ;  
     char buf[1000];
     char *greeting = "Hello Child";

     if ( pipe(fd) == -1) {    // WE DON"T USE SYSTEM OPEN FILE, INSTEAD PIPE
         perror("pipe");
          exit( 1);
     }

     int cpid = fork();
     if (cpid == -1) {
          perror("fork");
          exit( 1);
       }

     if (cpid == 0) {    /* Child reads from pipe */
               close(fd[0]);          /* Close unused read end */
               write(fd[1], greeting, strlen(greeting)+1);
               close(fd[1]);          /* Reader will see EOF */

     } else {            /* Parent 
        int status;
        wait ( &status);
        close(fd[1]);          /* Close unused write end */
        int num = read(fd[0], buf, MAX_LINE) ; // system call
        printf( "child Process: reading from the parent: %s \n", buf );
        printf( "child: number of bytes read : %d \n", num );
        close(fd[0]);
           }
   
}

