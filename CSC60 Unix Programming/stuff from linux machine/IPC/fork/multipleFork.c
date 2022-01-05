#include  <stdio.h>
#include  <unistd.h>
#include  <stdlib.h>
void  main( void )
{
     pid_t pid[5];
     int i , count = 50; 
     srand(time (NULL) );

     for ( i = 0; i  < 5; i++ ) {
      pid[i] = fork();  // system will create two processes

     if (pid[i] == 0)  {
          count++;
          printf("   child:Count %d \n", count  );
          printf("   child:My process ID=%d \n", getpid(  )  );
          printf("   child:My parent process ID %d =\n", getppid(  )  );
          exit ( 0 );
     }
     else 
          {  // THIS IS PARENT
             count++;
             printf("Parent:Count %d \n", count  );
             printf("Parent: My Child process id %d \n", pid[i]  );
             printf("Parent: My process is %d \n", getpid(  )  );
             printf("Parent: MY parent process ID %d =\n", getppid(  )  );
             sleep(1);
          }
    }
}

