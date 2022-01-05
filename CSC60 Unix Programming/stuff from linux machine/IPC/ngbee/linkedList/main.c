#include "question.h"

Question_T *head, *curr;

#include <unistd.h>



Question_T *  CreateNode ( Question_T );
Question_T getARandomQuestion (  ); // PROTOTYPE
void PromptTheQuestions ( Question_T *ptr ); // prototype
void AddANode (Question_T *, Question_T); //  prototype
void Review  ( Question_T *);



main ( ) 
{
 srand ( time ( NULL )  );

   int i = 0;
   Question_T *currPtr = NULL , *backUpPtr = NULL  ;
   currPtr = backUpPtr = NULL ;

   Question_T test  = getARandomQuestion ( ) ;
   backUpPtr = currPtr = CreateNode ( test );   

   // one question already created.  9 to go

   while ( i < 5 ) {

      Question_T test  = getARandomQuestion ( ) ;
      AddANode (currPtr, test);

    i++ ;
   }


  currPtr = backUpPtr;  // NEVER CHANGE YOUR BACKUP POINTER
  PromptTheQuestions ( currPtr) ; // BONUS 20 POINTS

  currPtr = backUpPtr;  // NEVER CHANGE YOUR BACKUP POINTER
  //review ( currPtr);  // PRINT THE 10 QUESTIONS


  //execlp ( "./muttmail.sh", "./muttmail.sh", "sankarsrivatsa@gmail.com", "Your Nat Geo Test Score ", NULL);
} 



