#include <sys/wait.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define MAX_LINE  32
int
main(int argc, char *argv[])
{
     int fd[2];
     pid_t id;

     if (pipe(fd) == -1) {  // very important call
         perror("pipe");
         exit(EXIT_FAILURE);
     }

     id = fork();
     if (id == -1) {
          perror("fork");
          exit(EXIT_FAILURE);
       }

     if (id == 0) {    /* Child reads from pipe */
        close(fd[1]);          /* Close unused write end */
        char buf[ MAX_LINE ]; // for reading purposes

        int num = read(fd[0], &buf, MAX_LINE) ; // system call
        printf( "child Process: reading from the parent: %s \n", buf );

        close(fd[0]);

     } else {            /* Parent writes argv[1] to pipe */
               close(fd[0]);          /* Close unused read end */
               char *buf = "in-class demo";
               write(fd[1], buf, strlen(buf) + 1 );
               close(fd[1]);          /* Reader will see EOF */
               wait(NULL);                /* Wait for child */
           }
   
    exit( EXIT_SUCCESS);
}

