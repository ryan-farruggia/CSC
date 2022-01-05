#include "question.h"
void PromptTheQuestions ( Question_T *ptr )
{
     int score=0, question=1;
     while ( ptr->next != NULL ) {
        // PROMPT EACH AND EVERY QUESTION TO THE USER
        printf ( "Question %d: ", question++ );
        printf ( "%s", ptr->question);
        printf ( "%s", ptr->answer1);
        printf ( "%s", ptr->answer2);
        printf ( "%s", ptr->answer3);
        printf ( "%s", ptr->answer4);
        printf ( "Please enter 1, 2, 3, or 4:\n", ptr->answer4);

       scanf ( "%d",  &(ptr->userTypedAnswer) );
       if ( ptr->userTypedAnswer == ptr->correctAnswer)
         printf ("Correct. Your current score is :%d \n", ++score);
       else
         printf ("Sorry.  The correct Answer is :%d \n", ptr->correctAnswer);

        ptr = ptr->next ; // KEY POINT IN TRAVERSING LINKED LIST
     }
}

