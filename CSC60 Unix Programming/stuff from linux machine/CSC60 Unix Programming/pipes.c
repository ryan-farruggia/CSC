#include <sys/wait.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

#define MAX_LINE 32
int main(int argc, char *argv[]) {
    int pipefd[2];
    pid_t cpid;
    char buf[MAX_LINE];
    if (pipe(pipefd) == -1) {
        perror("pipe");
        exit(EXIT_FAILURE);
    }
    cpid = fork(); // fork a child
    if (cpid == -1) {
        perror("fork");
        exit(EXIT_FAILURE);
    }
    if (cpid == 0) { /* Child reads from pipe */
        close(pipefd[1]); /* Close unused write end */
        int num = read(pipefd[0], &buf, MAX_LINE);
        printf ("Reading in child process\n");
        printf("%s \n", buf );
        close(pipefd[0]);
    } else { /* Parent writes argv[1] to pipe */
        close(pipefd[0]); /* Close unused read end */
        write(pipefd[1], "Hello World", 12);
        close(pipefd[1]); /* Reader will see EOF */
        wait(NULL); /* Wait for child */
    }
    exit(EXIT_SUCCESS);
}