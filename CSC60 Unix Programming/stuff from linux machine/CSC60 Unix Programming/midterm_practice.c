/* MIDTERM STUDY GUIDE:
5 questions, 4 points each, 1 hour:
fork - write a program: forking, pipe, vfork, system
exec - write a program: showing execl or execlp program
function - write a program using pass by reference
Arrays - print values or addresses
Theory - state the difference between fork, pipe, vfork, system, execl
*/

/* PROGRAM FOR PRINTF FORMATTING:
#include <stdio.h>
int main(void) {
    int x = 1234567;

    // integers
    printf("|1234567890|\n");
    printf("|%15d| - default right justify\n", x);
    printf("|%-15d| - left justify\n", x);
    printf("|%015d| - padding 0s on the left\n", x);
    printf("|%-015d| - left justify, padding ignored\n", x);]
    printf("|%15i| - prints integer\n", x);
    printf("|%15x - prints in hexadecimal\n", x);
    printf("|%15o| - prints in octal\n", x);
    printf("|%15o| - prints in unsigned\n", x);
    
    // floats (with casts)
    printf("|%5.2f| - print 5 spaces, no truncation\n", (float) x);
    printf("|%10.2f| - prints 10 spaces\n", (float) x);
    printf("|%-11.2f| - prints 11 spaces, left justify\n", (float) x);
    printf("|%11.2f| - prints 11 spaces, right justify\n", x);
    printf("|%011.2f| - pad 0s, prints 11 spaces, right justify\n", (float) x);
    
}*/

// PROGRAM FOR PIPES:
    #include <sys/wait.h>
    #include <stdio.h>
    #include <stdlib.h>
    #include <unistd.h>
    #define MAX_LINE 32
    int main(int argc, char *argv[]){
        int pipefd[2];
        pid_t cpid;
        char buf[ MAX_LINE ];
        if (pipe(pipefd) == -1) {
            perror("pipe");
            exit(EXIT_FAILURE);
        }
        cpid = fork();
        if (cpid == -1) {
            perror("fork");
            exit(EXIT_FAILURE);
        }
        if (cpid == 0) { // Child reads from pipe
            close(pipefd[1]); // Close unused write end
            int num = read(pipefd[0], &buf, MAX_LINE);
            printf ( " Reading in child process\n");
            printf( "%s \n", buf );
            close(pipefd[0]);
        } else { // Parent writes argv[1] to pipe
            close(pipefd[0]); // Close unused read end
            write(pipefd[1], "Hello World", 12);
            close(pipefd[1]); // Reader will see EOF
            wait(NULL); // Wait for child-
        }
        exit(EXIT_SUCCESS);
    }

// PROGRAMS FOR FORKPID:

/* Program 1
    #include <stdio.h>
    #include <sys/types.h>
    #include <unistd.h>

    void main(void) {
        pid_t pid;
        pid = fork();
        if (pid == 0) {
            // getppid() gets the parent process ID
            printf("I am the parent process, my ID is: %d ***\n", getppid());
            // getpid() gets the child process ID
            printf("I am the child process, my ID is: %d ***\n", getpid());
        }
    }
    */

/* Program 2
#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

void main(void){
    pid_t pid;
    int status;
    pid = fork(); // create a new child
    if (pid == 0){ // child process
        execl("/bin/pwd", "\npwd", (char*) NULL);
    }
}
*/

/* Program 3
#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

void main(void){
    pid_t pid;
    int status;
    pid = fork(); // create a new child
    if (pid == 0){ // child process
        execl("/bin/cal", "cal", (char*) NULL);
    }
}
*/

/* Program 4
#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

void main(void){
    pid_t pid;
    int status;
    pid = fork();
    if (pid == 0){
        exit(0);
    } else {
        wait(pid, &status);
    }
}
*/