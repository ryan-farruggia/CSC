// !!! ANSWERS FOR THIS ASSIGNMENT ARE BELOW THE FOLLOWING QUESTIONS

// Consider this code block for questions 1-12:
short x = 200;
short iData [] = {300, 400, 500, 600, 700};
short *iPtr1, *iPtr2;
 
// Fill in the blank to have iPtr1 point to x
1. iPtr1 = & x;

// Fill in the blank, I need to dereference to print
2. printf("%d", * iPtr1);

// Fill in the blank to have iPtr2 point to an array called "iData"
3. iPtr2 = _____

// What does the below statement print?
4. printf("%d", * iPtr2);

// Increment the pointer iPtr2:
iPtr2++;
 
// What does the below statement print now?
5. printf("%d \n", * iPtr2);
 
// Increment the pointer iPtr2 once more:
iPtr2++;

// What does the below statement print now?
6. printf("%d", * iPtr2);

// Set iPtr2 equal to iPtr1:
iPtr2 = iPtr1;

// What does the below statement print?
7. printf ("%d", * iPtr2);

// Consider the following for questions 8 and 9:
int y = 100;
iPtr1 = &y;
iPtr2   =   iPtr1;

// What does the below statement print?
8. printf ("%d \n", * iPtr1);

// What does the below statement print?
9. printf ("%d \n", * iPtr2);
 
// Given the following, what is printed after the below code block runs?
10. let y = 50;
    printf( "%d \n", * iPtr1);

// Consider the following for questions 11 and 12:
iPtr2 = iData + 2;
iPtr1 = iPtr2;

// What does the below statement print?
11.  printf ("%d", * iPtr1);

// What does the below statement print?
12.  printf ("%d", * iPtr2);

// Use the following array declaration for questions 13 and 14:
short nameBuf [5] = {0x8, 0x12, 0x4BB4, 0x5005};

// Is the following statement correct (valid)?
13. nameBuf++;

// Is the following statement correct (valid)?
14. nameBuf = 20;

// Consider the following code block for questions 15 and 16:
int count;
int *extraPtr1 = 10; // Question 15
int extraPtr2 = &count; // Question 16

15. // What is wrong with the indicated statement? 

16. // What is wrong with the indicated statement?


// Consider the following code block for questions 17 and 18:
short sh;
short *shortPtr1 = sh; // Question 17
short *shortPtr2 = &sh; // Question 18

17. // Is the indicated statement correct (valid)? 


18. // Is the indicated statement correct (valid)?


// Consider the following code block for questions 19 and 20:
int numData [10] = {19, 12, 23, 43, 87, 34};
int *numPtr = numData + 2;
numPtr = numPtr + 1;

19. // What is the value of numData[8]?


// Do you know why the following line of code may cause the program to crash?
20. numPtr = numPtr + 20;

// CODE w/ ANSWERS FOR QUESTIONS 1-12
short x = 200;
short iData [] = {300, 400, 500, 600, 700};
short *iPtr1, *iPtr2;
iPtr1 = & x;
printf("%d \n", * iPtr1); // Question 4: 200
iPtr2 = iData;
printf("%d \n", * iPtr2); // Question 5: 300
iPtr2++;
printf("%d \n", * iPtr2); // Question 6: 400
iPtr2 = iPtr1;
printf("%d \n", * iPtr2); // Question 7: 200
int y = 100;
iPtr1 = &y;
iPtr2   =   iPtr1;
printf ("%d \n", * iPtr1); // Question 8: 100
printf ("%d \n", * iPtr2); // Question 9: 100
y = 50;
printf( "%d \n", * iPtr1); // Question 10: 50
iPtr2 = iData + 2;
iPtr1 = iPtr2;
printf ("%d \n", * iPtr1); // Question 11: 500
printf ("%d \n", * iPtr2); // Question 12: 500






// CODE w/ ANSWERS FOR QUESTIONS 13-20

// Q 13-14
short nameBuf [5] = {0x8, 0x12, 0x4BB4, 0x5005};
nameBuf++; // Question 13: Invalid, need an operand to increment like nameBuf[0]
nameBuf = 20; // Question 14: Invalid, cannot assign an array type of int that's dumb
// Q 15-16
int count;
int *extraPtr1 = 10; // Question 15: The pointer cannot point to an integer, only a memory location.
int extraPtr2 = &count; // Question 16: The integer cannot be assigned to the address of an integer, especially an unassigned integer.
// Q 17-18
short sh;
short *shortPtr1 = sh; // Question 17: No, the pointer should be pointing to a memory location, not a value.
short *shortPtr2 = &sh; // Question 18: Yes, this is how pointers should be properly assigned.
// Q 19-20
int numData [10] = {19, 12, 23, 43, 87, 34};
int *numPtr = numData + 2;
numPtr = numPtr + 1;
// Question 19: numData[8] = 0
// Question 20: 