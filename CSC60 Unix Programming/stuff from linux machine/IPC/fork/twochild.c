#include  <stdio.h>
#include  <stdlib.h>
#include  <string.h>
#include  <sys/types.h>


void  ChildProcess( int );

void  main(void)
{
     pid_t   pid1, pid2, pid;
     int     status;

     if ((pid1 = fork()) < 0) {
          printf("Failed to create child process 1\n");
          exit(1);
     }
     else if (pid1 == 0) 
          ChildProcess(2);

     if ((pid2 = fork()) < 0) {
          printf("Failed to create child process 2\n");
          exit(1);
     }
     else if (pid2 == 0) 
          {
          ChildProcess( 4) ;
          }
     printf("Parent created  child PID1 %d \n", pid1);
     printf("Parent created  child PID2 %d \n", pid2);

     pid = wait(&status);
     printf("*** Parent sees one child PID %d terminated ***\n", pid);
     pid = wait(&status);
     printf("*** Parent sees one child PID %d terminated ***\n", pid);
     exit(0);
}

void  ChildProcess( int time) 
{

     sleep ( time );
     printf ( " Child Process PID %d \n", getpid() );
     exit(0);  // THIS IS IMPORTANT
}
