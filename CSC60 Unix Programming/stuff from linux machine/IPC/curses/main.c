#include "question.h"


#include <unistd.h>



Question_T getARandomQuestion (  ); // PROTOTYPE
void PromptTheQuestions ( Question_T ptr ); // prototype



main ( ) 
{
 srand ( time ( NULL )  );

   int i = 0, answer=0 , score=0;

   Question_T test  = getARandomQuestion ( ) ;
   PromptTheQuestions ( test );
   scanf ( "%d", &answer);
   if ( answer == test.correctAnswer ) {
     printf ( "Good Job\n");
     score++;
   } else
     printf ( "oh no...\n");
     
    


  //execlp ( "./muttmail.sh", "./muttmail.sh", "sankarsrivatsa@gmail.com", "Your Nat Geo Test Score ", NULL);
} 



