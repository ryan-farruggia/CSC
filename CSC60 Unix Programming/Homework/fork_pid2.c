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