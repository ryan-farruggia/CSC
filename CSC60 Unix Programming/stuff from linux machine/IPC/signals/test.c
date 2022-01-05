
#include   <setjmp.h>
#include   <signal.h>
#include   <unistd.h>
#include <stdio.h>

static void sig_alrm(int);

#define MAXLINE 20
int
main(void)
{
    int     n;
    char    line[MAXLINE];

    if (signal(SIGALRM, sig_alrm) == SIG_ERR)
        perror("signal(SIGALRM) error");

    alarm(10);
    if ((n = read(STDIN_FILENO, line, MAXLINE)) < 0)
        perror("read error");
    alarm(0);

    write(STDOUT_FILENO, line, n);
    exit(0);
}

static void
sig_alrm(int signo)
{
    /* nothing to do, just return to interrupt the read */
  printf ( "HELLO \n");
}
