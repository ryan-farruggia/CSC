//In this program, we create 10 threads and each of the would update the value in the file count.txt

// FILE is the critical section that requires MUTEX
//


#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

int count = 0;  

#ifdef USE_MUTEX
pthread_mutex_t count_mutex = PTHREAD_MUTEX_INITIALIZER;
#endif



void *IncrementOne( void *ptr ) 
{

#ifdef USE_MUTEX
 pthread_mutex_lock(&count_mutex); //waits in the queue
#endif

   // at the mercy of the operating system
   // critical section 
   FILE *fp;
   int temp;
   fp = fopen ( "count.txt", "r+");
   fscanf ( fp, "%d", &temp);
   temp++;
   fseek (fp, 0L, SEEK_SET ); 
   fprintf (fp, "%d", temp);
   fclose (fp);

#ifdef USE_MUTEX
 pthread_mutex_unlock(&count_mutex);
#endif


   pthread_exit((void*) 0);
}


main()
{

     pthread_t threads[10] ;
     
     int  id1; 
     int temp, i;

     for ( i = 0 ; i < 10 ; i++)  {
        id1 = pthread_create( &threads[i], NULL, IncrementOne, (void*) &temp);
        if ( id1 )  {
           perror ( "thread creation error ");
           exit ( 0 );
        }
     }

     for ( i = 0 ; i < 10 ; i++)
        pthread_join( threads[i], NULL);

pthread_exit(NULL);
}
