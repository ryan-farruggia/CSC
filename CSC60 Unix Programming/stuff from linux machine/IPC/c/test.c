
#include <stdio.h>

#define MY_AGE 20
#define YOUR_AGE 30 

int main ( ) 
{
 unsigned char age, yourAge = 40; // unsigned char is 8bit= 1 byte=
 age  =  30  ;
 printf ( " My age is %d and your age=%d \n ", MY_AGE, YOUR_AGE);


 // LET US STORE CHARACTER
  char ch ;
  ch = 'k';  // CHARACTERS ALWAYS REQUIRE single quote
             // STRING requires DOUBEL QUOTES
             
  ch = ' '  ; // abusiving the data type
  printf ( " The character stored in ch %c \n", ch); // my interpretation
  printf ( " The value stored in ch is  %d \n", ch); // what is actually stored

 
  short x;
  x = 2345;
  printf ( " The value of short data type in Hex : x is %X  \n",  x); 

 
  
  float billSalary = 999990.34;
  printf ( " Bill's salary is %f \n", billSalary);
  printf ( " Bill's salary is %.2f \n", billSalary);

  
 


 return 0;
}
