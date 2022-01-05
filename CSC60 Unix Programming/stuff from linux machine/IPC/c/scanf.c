 // READ THIS FIRST
 // IN THE EXAMPLES BELOW,  IF YOU WANT TO COMPILE AND RUN,  ONLY 
 // UNCOMMENT ONE EXAMPLE WHILE KEEPING THE REST UNDER COMMENTS
 //
#include <stdio.h>

int main ( )
{
  int operand1;


    // version 1
    // char name[32];
    // printf ( "please enter your name \n"); // enter Donald95670
    // scanf ("%[^0-9]", name);
    // printf ( "%s\n", name );

    // version=2 
    // printf ( "please enter your name \n"); // enter Donald95670
    // scanf ("%[a-zA-Z]", name);
    // printf ( "%s\n", name );
    
    // char zipcode[10];
    // scanf ("%[0-9]", zipcode); // enter 95670-9321
    // printf ( "zipcode=%s\n", zipcode );
    //
    
    // int zip; // set width = 5
    // scanf ("%5d", &zip); // enter 956709321
    // printf ( "zip=%d\n", zip );
   

    // char street[8] = {'\0'}; // set width = 5
    // scanf ("%5c", street); // enter 10230Penns St 
    // printf ( "street=%s\n", street);
   
    // discard one integer  using *,  enter 234 567
    // int x;
    //scanf ( "%*d %d", &x);
    //printf ( "The value of x =%d \n", x);
   
    // discard one word using *,  enter sam donald 
    // char first[16] = {'\0'}, last[16] = {'\0'};
    //INCORRECT USASGE scanf ( "%*s %s", first, last);
    //scanf ( "%*s %s", last);
    //printf ( "last=%s \n", last);


   // OTHER EXAMPLES
   // scanf ( "%[^\n] " means read until the end of line 
   // scanf ( "%[^:] " means read until you see :,   useful in reading /etc/passwd
   
   // enter  34 +      23 
   // THE NEXT SCANF WILL IGNORE EXTRA SPACES and reads 34+23
   // scanf (" %d %c %d ", &o1, &o, &o2);
   //
   
   // enter  34+23 
   // THE NEXT SCANF WILL DOESN"T LIKE SPACE INBETWEEN THEM 
   // scanf (" %d%c%d ", &o1, &o, &o2);
   

  // float fl;
  // printf ( "Please enter a float \n");
  // scanf ( "%f", &fl);
  // printf ( "%f \n", fl);  // PRINTS IN DEFAULT 6 POSITION
  // printf ( "%e \n", fl);  // PRINTS IN SCIENTIFIC NOTATION
  // printf ( "%g \n", fl);  // PRINTS THE SHORTER OF THE ABOVE TWO

  // fl = 123456789;
  // printf ( "%f \n", fl);  // PRINTS IN DEFAULT 6 POSITION
  // printf ( "%e \n", fl);  // PRINTS IN SCIENTIFIC NOTATION
  // printf ( "%g \n", fl);  // PRINTS THE SHORTER OF THE ABOVE TWO


}

 
