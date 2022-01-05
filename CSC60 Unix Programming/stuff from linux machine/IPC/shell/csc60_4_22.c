#include <stdio.h>
#include <unistd.h>

int main ( ) 
{

 char subj[64] = "Results of math quiz";
 char emailaddress[64] = "akanotra@csus.edu" ;
 char body[1024] = "Your score in our challengeing Nat Geo Bee is fantastic."; 

  execlp ( "./mail_script.sh", 
           "mail_script.sh", 
           subj,  
           emailaddress, 
           body, 
           NULL );
}
