#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
void * print_greeting( void *ptr );

// pthread get id ( )
void * print_greeting( void *num )
{
   printf("value=%d \n", *(int *)num);
   printf("address=%p \n", (int *)num);

   pid_t pid = pthread_self ( ) ; // ID of the pthread 
   printf("My process #%x, my thread ID #%x\n", getpid( ) , pid );
   pthread_exit(NULL);

}


// SUPPRESS COMPILE WARNING


main()
{
    int x = 20;
    int y = 30;

     // STEP1  declare a thread variable
     pthread_t th1, th2 ; 

     pthread_create( &th1, NULL, print_greeting, (void*) &x );
     pthread_create( &th2, NULL, print_greeting, (void*) &y );

     pthread_join( th1, NULL); // wait 
     pthread_join( th2, NULL);

 return ( 0 );

}

