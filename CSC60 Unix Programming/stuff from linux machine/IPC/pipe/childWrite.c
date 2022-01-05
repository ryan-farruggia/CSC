#include <sys/wait.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define MAX_LINE  32

int
main(int argc, char *argv[])
{
     int fd[2] ;  
     pid_t cpid ;
     char buf[32] ;

     if (pipe(fd) == -1) {  
         perror("pipe");
          exit( 1);
     }

     cpid = fork();
     if (cpid == -1) {
          perror("fork");
          exit( 1);
       }

     if (cpid == 0) {    /* Child reads from pipe */
               close(fd[0]);          /* Close unused read end */
               write(fd[1], "hello world ", strlen("helloworld")+1);
               close(fd[1]);          /* Reader will see EOF */

         exit ( 0);

     } else {            /* Parent writes argv[1] to pipe */
               wait(NULL);                /* Wait for child */
               close(fd[1]);          /* Close unused write end */
               int num = read(fd[0], &buf, MAX_LINE) ; // system call
               printf( "Parent Process: read from client: %s \n", buf );
               close(fd[0]);          /* Close unused write end */
           }
   
    exit( EXIT_SUCCESS);
}

