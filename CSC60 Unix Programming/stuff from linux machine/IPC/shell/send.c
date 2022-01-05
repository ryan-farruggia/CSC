#include <stdio.h>
#include <unistd.h>

int main ( )
{
  // ALL THESE VARIABLE aRE TO be declared in your quiz.c
  char subject [ 64] = "Results of your quiz";
  char emailaddress[64] = "sankarsrivatsa@gmail.com";
  char fileName[32]= "test.txt";

  int id = fork ( ) ;
  if ( id == 0 ) {
     execlp ( "mail_script.sh", "mail_script.sh", subject, fileName, emailaddress,  NULL );
  }

  

}


