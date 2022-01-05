#include <stdio.h>
#include <stdlib.h>
#include <sys/times.h>
#include <time.h>
#include <unistd.h>
#include <pthread.h>

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER; // KEY

int max = 0;
int count = 0;
int counter = 0;
int number = 2;
int numOfPrimes = 0;
int ret_value = 0;

// The function each thread will call : 
void *calculate() {
   int mycopy;
   pthread_mutex_lock(&mutex);
   mycopy = number++; // picks a number, and increments 
   pthread_mutex_unlock(&mutex);
   // now check if the mycopy is prime or not
   ret_value = IsItPrimeorNot(mycopy);
   if (ret_value == 1) {
      pthread_mutex_lock(&mutex);
      counter++;
      pthread_mutex_unlock(&mutex);
   }
}

main(int argc, char *argv[]) {
   pthread_t t1, t2; // two threads
   int  thread1, thread2;
   max = atoi(argv[1]);
   thread1 = pthread_create(&t1, NULL, calculate, (void *) &numOfPrimes);
   thread2 = pthread_create(&t2, NULL, calculate, (void *) &number);
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
   if (value % 2 == 0){
      return 1;
   } else {
      numOfPrimes++;
      return 0;
   }
}