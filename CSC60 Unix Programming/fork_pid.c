/* 
Write C programs to fork a process:
Program 1: After forking, print the parent process in the child process. Print the child process ID in the parent process ID.
Program 2: After forking, execute the bash command pwd using execl command
Program 3: After forking, execute the bash command cal using execl command
Program 4: After forking, wait in the parent process. Call exit (0) in the child process.
*/

// Program 1:
#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int main() {
    pid_t pid;
    pid = fork();
    if (pid == 0) {
        // child gets process ID = 0
        printf("I am the child process, my ID is: %d ***\n", getpid());
    } return 0;
}

// Program 2:


// Program 3:


// Program 4:

