/*
Write four C programs to fork a process:
Program 1: After forking, print the parent process in the child process. Print the child process ID in the parent process.
Program 2: After forking, execute the bash command 'pwd' using 'execl' command.
Program 3: After forking, execute the bash command 'cal' using 'execl' command.
Program 4: After forking, wait in the parent process and call exit (0) in the child process.
*/

// Program 1: After forking, print the parent process in the child process. Print the child process ID in the parent process.
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


/* Program 2: After forking, execute the bash command 'pwd' using 'execl' command.
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

/* Program 3: After forking, execute the bash command 'cal' using 'execl' command.
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

/* Program 4: After forking, wait in the parent process and call exit (0) in the child process.
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