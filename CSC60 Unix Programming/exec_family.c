#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

void main(void){
    pid_t pid;
    int status;
    pid = fork(); // create a new child
    if (pid == 0){ // child process
        printf("Child process ID=%d \n", getpid());
        execlp("./sum.sh", "sum.sh", "3", "8", "11", (char *)NULL);
    } else {
        wait (pid, &status);
    }
}