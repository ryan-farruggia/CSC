/*

This program reads the value from a file writedata.txt 
and increments the value by one. Writes the value back
to the file, and closes the file.

All threads do the same thing.

If you compile the code using
gcc thread_cs.c -pthread and run the code.
The file should have 100 (because we have 100 threads
incrementing the value by 1).

But there might be a time when two threads read the 
same value from the file and update the variable and write to the
file. This causes discrepancy ...the value will only be not 100.

so avoid the problem,  include the code by compiling
the same file using the Macro 
gcc thread_cs.c -DUSE_MUTEX -pthread
and run the code.
This time the value should be 100 because all threads
use mutex variable, read the value one at a time and increment
one at time.
*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <pthread.h>

#define MAX_THREADS 100
int critical_value = 0;
pthread_mutex_t mymutex = PTHREAD_MUTEX_INITIALIZER;
 
void *print_thread_info( void * );

void *print_thread_info( void *thread_num )
{
#if USE_MUTEX
pthread_mutex_lock (&mymutex);
#endif
  
     FILE *fp;
     fp = fopen ("writedata.txt", "r+");
     fscanf  (fp, "%d", &critical_value);


     critical_value++;
     fseek(fp, 0, SEEK_SET);
     fprintf (fp, "%d", critical_value);

     fclose (fp);

#if USE_MUTEX
pthread_mutex_unlock (&mymutex);
#endif
     
}

main ( )
{
     int i;
     pthread_t thread1, thread2 ;
     pthread_t threads[MAX_THREADS] ;

     int  threadOne ;
     int  threadTwo ;
     int  threadArray[MAX_THREADS];
     int dummy= 0;

   for ( i = 0; i < MAX_THREADS ; i++) {
      threadArray[i] = 
         pthread_create ( &threads[i], NULL, print_thread_info, (void *)&i);
      if (threadArray[i] != 0) {
         printf (" Thread = %d not success \n", i);
         exit (0);
      }
   }


   for ( i = 0; i < MAX_THREADS ; i++) 
      pthread_join( threads[i] , NULL);



   pthread_exit(NULL); 

}


