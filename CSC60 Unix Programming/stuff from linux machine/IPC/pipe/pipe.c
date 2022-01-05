#include <sys/wait.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define MAX_LINE  500 

int
main(int argc, char *argv[])
{
     int pipefd[2] ; // STEP 1 , define the array 
     char buf[MAX_LINE];

     char *greeting = "Hello World 1234 how are you";

     if ( pipe(pipefd) == -1) {    // create the pipe in the kernel 
         perror("pipe");
          exit( 1);
     }

     int cpid = fork();
     if (cpid == -1) {
          perror("fork");
          exit( 1);
       }

     if (cpid == 0) {    /* Child reads from pipe */  
        close(pipefd[1]);          /* Close unused write end */
        int num = read(pipefd[0], buf, MAX_LINE) ; // system call
        printf( "child Process: reading from the parent: %s \n", buf );
        printf( "child: number of bytes read : %d \n", num );

        close(pipefd[0]);
        exit(0);
     } else {            /* Parent writes argv[1] to pipe */
		int status;
               close(pipefd[0]);          /* Close unused read end */
               write(pipefd[1], greeting, strlen(greeting)+1);
               close(pipefd[1]);          /* Reader will see EOF */
               wait(&status);                /* Wait for child */
           }
   
    exit( EXIT_SUCCESS);
}

