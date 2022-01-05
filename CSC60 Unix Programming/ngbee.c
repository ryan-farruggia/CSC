#include <stdio.h>
#include <stdlib.h>

#define QUESTION_1 { \
printf ( "What is USA stands for\n"); \
printf ( "1. United States of America\n"); \
printf ( "2. United Stand Always\n"); \
printf ( "3. United South Africa\n"); \
printf ( "4. United State Employees\n"); \
\
scanf ( "%hhu", &answer); \
if ( answer == 1 )  \
    score++;  \
} \


#define QUESTION_2 { \
printf ( "Where is USA\n"); \
printf ( "1. Above Canada\n"); \
printf ( "2. Below Canada\n"); \
printf ( "3. Below Mexico\n"); \
printf ( "4. Next to Texas\n"); \
scanf ( "%hhu", &answer); \
if ( answer == 2 ) \
    score++; \
} \


#define QUESTION_3 { \
printf ( "Where is Canada\n");\
printf ( "1. Below USA\n");\
printf ( "2. Next to Australia\n");\
printf ( "3. Below Mexico\n");\
printf ( "4. Above USA\n");\
\
scanf ( "%hhu", &answer); \
if ( answer == 4 ) \
    score++;\
} \


int main () 
{
	
unsigned char score  = 0;
unsigned char answer;

srand ( time ( NULL ));

if ( ( rand( ) % 6 ) == 0 ) {
  QUESTION_1;
  QUESTION_2;
  QUESTION_3;
} else if ( ( rand( ) % 6 ) == 1 ) {
  QUESTION_1;
  QUESTION_3;
  QUESTION_2;
} else if ( ( rand( ) % 6 ) == 2 ) {
  QUESTION_2;
  QUESTION_1;
  QUESTION_3;
} else if ( ( rand( ) % 6 ) == 3 ) {
  QUESTION_2;
  QUESTION_3;
  QUESTION_1;
} else if ( ( rand( ) % 6 ) == 4 ) {
  QUESTION_3;
  QUESTION_1;
  QUESTION_2;
} else if ( ( rand( ) % 6 ) == 5 ) {
  QUESTION_3;
  QUESTION_2;
  QUESTION_1;
}

	


printf ( "Thank you for completing the Quiz. Your score=%d\n", score );

return 0;
}