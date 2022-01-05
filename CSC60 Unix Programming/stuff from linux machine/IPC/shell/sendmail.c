#include <stdio.h>
#include <unistd.h>

int main ( ) 
{

 char subj[64] = "Results of math quiz";
 char filename[64] = "quiz.out";
 char emailaddress[64] = "gvv8106@gmail.com" ;
 char body[1024] = "Your score in our challengeing math quiz is fantastic."; 

 char *arg [ ] = { "mail_script.sh", subj, filename, emailaddress, body, NULL};
  execlp ( "mail_script.sh", "mail_script.sh", 
     subj, filename, emailaddress, body, NULL );

  // execvp ( "mail_script.sh", NULL, arg); 


}
