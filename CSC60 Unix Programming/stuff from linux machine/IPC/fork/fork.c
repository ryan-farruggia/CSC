#include  <stdio.h>
#include  <unistd.h>
#include  <stdlib.h>
void  main( void )
{
     int count = 10;
     pid_t pid = fork();  // system will create two processes

     if (pid == 0)  {
          count  = 30;  // child process variable
          printf("child: count %d \n", count ); 
          printf("child: My process ID %d =\n", getpid(  )  );
          printf("child: My parent process ID %d =\n", getppid(  )  );
          exit ( 0 ) ;
     }
     else 
          {  // THIS IS PARENT
             count = 50;
             printf("Parent: count value is %d \n", count );
             printf("Parent: My Child process id %d \n", pid  );
             printf("Parent: My process is %d \n", getpid(  )  );
             printf("Bash: Parent: MY parent process ID %d =\n", getppid(  )  );
          }

    printf ("Knock knock who is executing this code =%d \n", getpid( ) ) ;
}

