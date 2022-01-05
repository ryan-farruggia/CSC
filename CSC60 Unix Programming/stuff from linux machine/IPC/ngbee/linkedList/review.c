#include "question.h"

void review ( Question_T *ptr )
{
     while ( ptr != NULL ) {
        // PRINT THE QUESTION JUST TO MAKE SURE THEY ARE POPULATED
        printf ( "%s", ptr->question);
        printf ( "%s", ptr->answer1);
        printf ( "%s", ptr->answer2);
        printf ( "%s", ptr->answer3);
        printf ( "%s", ptr->answer4);
        printf ( "%d\n", ptr->correctAnswer);
        printf ("You Answered as %d \n", ptr->userTypedAnswer);
        ptr = ptr->next ; // KEY POINT IN TRAVERSING LINKED LIST
     }
}


