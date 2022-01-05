#include  <stdio.h>
#include  <stdlib.h>
#include  <string.h>
#include  <sys/types.h>


void  ChildProcess( int , FILE *);

void  main(void)
{
     FILE *fp = fopen ( "data.txt", "w");
     
     pid_t   pid1,  pid;
     int     status;

     if ((pid1 = fork()) < 0) {
          printf("Failed to create child process 1\n");
          exit(1);
     }
     else if (pid1 == 0)  {
         //printf ( "  Child Process PID %d \n", getpid() );
         fprintf (fp, " Child created Process PID %d \n", getpid() );
         fclose(fp);
         exit(0);  
     }

     pid = wait(&status);
     //printf("Parent created  child PID1 %d \n", pid1);
     fprintf(fp, "Parent created  child PID1 %d \n", pid1);
     //printf("*** Parent sees child PID %d terminated ***\n", pid);
     //fprintf(fp, "*** Parent sees child PID %d terminated ***\n", pid);
     exit(0);
}

