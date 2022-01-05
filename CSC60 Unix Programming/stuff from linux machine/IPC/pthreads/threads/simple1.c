
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <pthread.h>

typedef struct _athread {
     int  threadNum ;
     char msg[20];
} aThread_t ;

aThread_t thread_1;
aThread_t thread_2;
 
void *print_thread_info( void *info );

void *print_thread_info( void *info )
{
     aThread_t *t = (aThread_t *) info; 
     printf(" Thread id %d and Msg = %s \n", 
                   t->threadNum, t->msg ) ;
}

main ( )
{
     pthread_t thread1, thread2 ;


     int  threadOne ;
     int  threadTwo ;

     thread_1.threadNum = 1;
     strcpy ( thread_1.msg, "Thread_one" );
   threadOne = 
      pthread_create ( &thread1, NULL, print_thread_info, (void *)&thread_1);

   if (threadOne == 0) 
      printf (" Thread One success \n");

   thread_2.threadNum = 2;
   strcpy ( thread_2.msg, "Thread_two" );
   threadTwo = 
	pthread_create ( &thread2, NULL, print_thread_info, (void *)&thread_2);

   if (threadTwo == 0) 
     printf (" Thread Two success \n");

   pthread_join( thread1 , NULL);
   pthread_join( thread2 , NULL);

   pthread_exit(NULL); 

}


