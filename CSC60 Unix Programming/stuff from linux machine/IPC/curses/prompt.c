#include "question.h"
void PromptTheQuestions ( Question_T questionNo )
{
     int score=0, question=1;
        printf ( "Question %d: ", question++ );
        printf ( "%s", questionNo.question);
        printf ( "%s", questionNo.answer1);
        printf ( "%s", questionNo.answer2);
        printf ( "%s", questionNo.answer3);
        printf ( "%s", questionNo.answer4);
        printf ( "Please enter 1, 2, 3, or 4:\n");

}

