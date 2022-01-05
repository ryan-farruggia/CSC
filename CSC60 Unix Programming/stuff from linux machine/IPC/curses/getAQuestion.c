#include "question.h"

 Question_T getARandomQuestion (  )
{

 Question_T test ;
 FILE *fp ;

 fp = fopen ("/home/college/srivatsa/IPC/curses/questionbank.txt", "r");

 if ( fp == NULL ) {
    perror ("Something is terribly wrong ");
    exit ( 1 );
 }

 char line[300];
 int qNumber, i = 0 ;

 qNumber = rand( ) % 50 + 1 ;

 int skipLines = (qNumber-1) * 6;

    while ( i < skipLines )  {
       fgets ( line, 300, fp );
       i++;
    }

 // read the next 6 lines
       fgets ( line, 300, fp );
       //printf ("Question : %s", line);
       strcpy(test.question, line);
       fgets ( line, 300, fp );
       strcpy(test.answer1, line);
       //printf ("Answer1 : %s", line);
       fgets ( line, 300, fp );
       strcpy(test.answer2, line);
       //printf ("Answer2 : %s", line);
       fgets ( line, 300, fp );
       strcpy(test.answer3, line);
       //printf ("Answer3 : %sn", line);
       fgets ( line, 300, fp );
       strcpy(test.answer4, line);
       //printf ("Answer4 : %s", line);
       fgets ( line, 300, fp );
       sscanf ( line, "%d", &test.correctAnswer);
       //printf ("correctAnswer : %s \n", line);

   fclose ( fp);
   return test;
}

