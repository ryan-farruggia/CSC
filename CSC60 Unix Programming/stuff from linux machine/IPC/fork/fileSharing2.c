#include  <stdio.h>
#include  <stdlib.h>
#include  <string.h>
#include  <sys/types.h>

void  main(void)
{
     
     pid_t   pid1,  pid;
     int     status, i;
     FILE *fp = fopen ( "data.txt", "w");   // open the file

     if ((pid1 = fork()) < 0) {
          exit(1); // exit on error
     }
     else if (pid1 == 0)  {
          for ( i = 0 ; i < 1000 ; i++ )
            fprintf ( fp, "hello I am the child process:%d \n", getpid  ( ) ) ;
         exit(0);  
     } else {
         //wait ( &status);
         for ( i = 0 ; i < 10000 ; i++ )
           fprintf (fp, " Hello I am the parent process = %d \n", getpid  ( )  );
         fclose(fp);
     }
     exit(0);
}

