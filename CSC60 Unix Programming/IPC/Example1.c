#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
void * print_greeting( void *ptr );

void * print_greeting( void *ptr )
{
   printf(" The message is : %s \n", (char *) ptr);
//   printf ( " dummy data %x \n", *(int *) ptr );

   pid_t thread_id = pthread_self ( ) ; // ID of the pthread 
   printf("Thread: My process #%d, my thread ID #%x\n", getpid( ) , thread_id );
   pthread_exit(NULL);
}

main()
{
     char *msg1 = "T1: Hello World\n";
     char *msg2 = "T2: Good Bye\n";
//     int dummy1 = 0xabcdef01;
//     int dummy2 = 0x12345678;
     // STEP1  declare a thread variable
     pthread_t th1, th2 ; 

     //printf ( "Address of dummy1 is %p \n", &dummy1, &dummy2);
     //printf ( "Address of dummy2 is %p \n", &dummy2, &dummy1);
     printf ( "process ID %d \n", getpid ( ) );
  
     // creating two threads 
     //int x = pthread_create( &th1, NULL, print_greeting, (void*) &dummy1);
     //int y = pthread_create( &th2, NULL, print_greeting, (void*) &dummy2);
     
     
     int x = pthread_create( &th1, NULL, print_greeting, (void*) msg1);
     int y = pthread_create( &th2, NULL, print_greeting, (void*) msg2);
     

     pthread_join( th1, NULL); // wait 
     pthread_join( th2, NULL);

 return ( 0 );

}

