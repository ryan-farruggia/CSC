#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>
#define NUM_THREADS     5

void *PrintHello( )
{
   pid_t pid = pthread_self ( ) ; // know this function
   printf("My process #%x, my thread ID #%x\n", getpid( ) , pid );
   pthread_exit(NULL);
}

int main (int argc, char *argv[])
{
   pthread_t threads[NUM_THREADS];
   int rc;
   long x;
   for(x=0; x<NUM_THREADS; x++){
      rc = 
     pthread_create(&threads[x], NULL, PrintHello, NULL ); // like forking
      if (rc){
         printf("ERROR; return code from pthread_create() is %d\n", rc);
         exit(-1);
      }
   }
 
   for(x=0; x < NUM_THREADS; x++)
      pthread_join ( threads[x] , NULL );  // just wait in forks

}
