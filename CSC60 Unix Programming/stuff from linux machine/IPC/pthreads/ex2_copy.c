//In this program, we create 100 threads and each of the would update the value in the file count.txt

// FILE is the critical section that requires MUTEX
//

#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

int count = 0;  


pthread_mutex_t myMutex = PTHREAD_MUTEX_INITIALIZER;

void *IncrementOne( void *ptr ) 
{

   FILE *fp;
   int temp;

   pthread_mutex_lock ( &myMutex);  // INTERNAL QUEUE 
   // CRITICAL SECTION
   fp = fopen ( "count.txt", "r+");  // when a thread is executing
   fscanf ( fp, "%d", &temp);
   temp++;
   fseek (fp, 0L, SEEK_SET ); 
   fprintf (fp, "%d", temp);
   fclose (fp);
   // END CRITICAL SECTION

   pthread_mutex_unlock ( &myMutex); 

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
