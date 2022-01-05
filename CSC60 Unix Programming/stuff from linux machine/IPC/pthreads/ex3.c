#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>
#define NUM_THREADS     5

pthread_mutex_t key1 = PTHREAD_MUTEX_INITIALIZER;


int x = 0;
#define MILLION 1000000

void *PrintHello1( )
{
   int i;
   pid_t pid = pthread_self ( ) ; // know this function
   printf("first thread #%x, my thread ID #%x\n", getpid( ) , pid );
   for ( i = 0 ; i < MILLION; i++)
   {
      pthread_mutex_lock(&key1);
      x++;
      pthread_mutex_unlock(&key1);
   }
   //pthread_exit(NULL);
}

void *PrintHello2( )
{
   int i;
   pid_t pid = pthread_self ( ) ; // know this function
   printf("second thread #%x, my thread ID #%x\n", getpid( ) , pid );
   for ( i = 0 ; i < MILLION; i++)
   {
      pthread_mutex_lock(&key1);
      x++;
      pthread_mutex_unlock(&key1);

   }
}

int main (int argc, char *argv[])
{
   pthread_t th1, th2;
   int rc;

      rc = pthread_create(&th1, NULL, PrintHello1, NULL ); // like forking
      if (rc){
         printf("ERROR; return code from pthread_create() is %d\n", rc);
         exit(-1);
      }
 
      rc = pthread_create(&th2, NULL, PrintHello2, NULL ); // like forking
      if (rc){
         printf("ERROR; return code from pthread_create() is %d\n", rc);
         exit(-1);
      }
 

      pthread_join ( th1, NULL );  // just wait in forks
      pthread_join ( th2, NULL );  // just wait in forks
     
      printf ( "value  x %d \n", x );

}
