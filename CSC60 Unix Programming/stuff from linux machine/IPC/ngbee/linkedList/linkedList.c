
#include "question.h"

Question_T *  CreateNode ( Question_T input )
{
       Question_T *ptr = ( Question_T * ) malloc ( sizeof ( Question_T ) ) ;

      if ( ptr != NULL ) {
         *ptr = input ;
         ptr->next = NULL ;
         return ptr;
      }
     return NULL;


}

void AddANode ( Question_T *hptr, Question_T test )
{
   Question_T *temp = CreateNode ( test );  // CREATE

   while ( hptr->next != NULL )  // GO TO THE END OF THE LINKED LIST
     hptr = hptr->next ;

    hptr->next = temp ;  // ADD THE NEW STRUCTURE TO THE END

}

