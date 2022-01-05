#include "question.h"

 Question_T getARandomQuestion (  )
{

 Question_T test ;
 FILE *fp ;

 fp = fopen ( "/home/college/srivatsa/IPC/ngbee/questionBank.txt", "r");

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

       fgets ( line, 300, fp );
       strcpy(test.question, line);
       fgets ( line, 300, fp );
       strcpy(test.answer1, line);
       fgets ( line, 300, fp );
       strcpy(test.answer2, line);
       fgets ( line, 300, fp );
       strcpy(test.answer3, line);
       fgets ( line, 300, fp );
       strcpy(test.answer4, line);
       fgets ( line, 300, fp );
       sscanf ( line, "%d", &test.correctAnswer);

   fclose ( fp);
   return test;
}

