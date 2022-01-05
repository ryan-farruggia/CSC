/*
The critical section is just incrementing a
variable.  Because of the instruction is very small,
all threads will increment and you get the correct 
value. But it is wrong way to simulate multithreading
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
     critical_value++;
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

   printf ("The critical section value is %d \n", critical_value);

   pthread_exit(NULL); 

}


