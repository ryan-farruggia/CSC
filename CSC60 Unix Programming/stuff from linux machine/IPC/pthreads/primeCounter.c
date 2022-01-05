#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>

// TASK 1 Run without mutex

pthread_mutex_t key1 = PTHREAD_MUTEX_INITIALIZER;


int x = 2;
int primeCounter = 0;

void *primeCounter( )
{
   int i;
   while ( x < 10000) {
    // lock the mutex
    x++;
    //   unlock the mutex
    
    // check if x is prime or not  
    
    // if it is prime
      // if it is,  lock the mutex
      primeCounter++;
      // unlock the mutex
   }
}


int main (int argc, char *argv[])
{
   pthread_t thread1, thread2;
   int rc;

      rc = pthread_create(&thread1, NULL, primeCounter, NULL ); // like forking
      if (rc){
         printf("ERROR; return code from pthread_create() is %d\n", rc);
         exit(-1);
      }

      rc = pthread_create(&thread2, NULL, primeCounter, NULL ); // like forking
      if (rc){
         printf("ERROR; return code from pthread_create() is %d\n", rc);
         exit(-1);
      }

      pthread_join ( thread1, NULL );  // just wait in forks
      pthread_join ( thread2, NULL );  // just wait in forks
     
      printf ( "No of Primes is %d \n", primeCounter );
      printf ( "value  x %d \n", x );

}
