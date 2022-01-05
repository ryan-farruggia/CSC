#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <pthread.h>
#include <time.h>

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER; // KEY

int max = 0;
int count = 0;
int counter = 0;
int number = 2;
int numOfPrimes = 0;
int ret_value;

void *minusminus(void *msg) {
   int *ptr = (int *) msg;
   (*ptr)--;
   int i;
   for (i = 0; i < max; i++) {
     pthread_mutex_lock(&mutex); // blocked
     count = count + 1;
     pthread_mutex_unlock(&mutex);
   }
   printf("Printing my young age is = %d \n", *ptr);
}

void *plusplus(void *msg) {
   int *ptr = (int *) msg;
   (*ptr)++;
   int i;
   for (i = 0; i < max; i++) {
     pthread_mutex_lock(&mutex);
     count = count + 1;
     pthread_mutex_unlock(&mutex);
   }
   printf("Printing your old age is = %d \n", *ptr);
}

main(int argc, char *argv[]) {
   pthread_t t1, t2; // two threads
   int  thread1, thread2;
   max = atoi(argv[1]);
   int myage = 40;
   int yourage = 21;
   thread1 = pthread_create(&t1, NULL, minusminus, (void *) &myage);
   thread2 = pthread_create(&t2, NULL, plusplus, (void *) &yourage);
   if (thread1 == 0) {
      printf("Thread One success \n");
   }
   if (thread2 == 0) {
      printf("Thread Two success \n");
   }
   pthread_join(t1, NULL);
   pthread_join(t2, NULL);
   printf("count is %d \n", count);
}

void countPrimes(void *empty){
   do {
      for (number = 2; number < count; number++){
         if (count%number == 0){
            break;
         }
      }
      if (number == count){
         numOfPrimes++;
         printf("prime number: %d %d \n", numOfPrimes, count);
      }
      count++;
   } while (count < 100000);
}

int IsItPrimeorNot (unsigned int value) {
// write a function to detect prime numbers
// if it is prime, return 1
   if (value % 2 == 0){
      return 1;
   } else {
      // if it is not prime return 0
      return 0;
   }
}

// The function each thread will call : 

void calculate() {
   int mycopy;
   lock(mutex);
   mycopy = number++; // picks a number, and increments 
   unlock(mutex);
   // now check if the mycopy is prime or not
   ret_value = IsItPrimeorNot(mycopy);
   if (ret_value == 1) {
      lock(mutex);
      counter++;
      unlock(mutex);
   }
}