#include <stdio.h>
#include <string.h>
#include <stdlib.h>


#ifndef STRUCTURE_HEADER
#define STRUCTURE_HEADER


typedef struct _question {
        char question [ 1024 ] ;
        char answer1 [128 ] ;
        char answer2 [128 ] ;
        char answer3 [128 ] ;
        char answer4 [128 ] ;
        int correctAnswer ;
        int userTypedAnswer ;
        struct _question *next ;
}  Question_T ;

Question_T *  CreateNode ( Question_T );
Question_T getARandomQuestion (  ); // PROTOTYPE
void PromptTheQuestions ( Question_T *ptr ); // prototype
void AddANode (Question_T *, Question_T); //  prototype
void Print ( Question_T *);

#endif

