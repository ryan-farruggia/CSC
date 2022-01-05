/*
1) Read a random question from questionbank.txt using fgets and a while loop. 
2) Assume each line is not more than 300 characters.
3) Each question is 6 lines.
*/
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <errno.h>
#include <string.h>

int main() {
    char ch;
    int num;
    FILE *fr;
    fr = fopen("./questionbank.txt", "r");
    if (fr == NULL) {
        printf("The file you are attempting to read does not exist\n", errno);
        perror("Demo Failed");
        exit(0);
    }
    num = fscanf(fr, "%c", &ch);
    // Main program, refine and edit
    int i = 0, ans = 0, myScore2 = 0;
    Question_T test = getRandomQuestion();
    promptQuestion(test);
    scanf("%d", &answer);
    if (answer == test.correctAnswer) {
        printf("Correct!");
        score++;
    } else {
        printf("Incorrect!");
    }
}

// Output part, refine and edit
void promptQuestion(test) {
    int score = 0, question = 1;
    printf("Question %d:", question++);
    printf("%s", questionNo.question);
    printf("%s", questionNo.answer1);
    printf("%s", questionNo.answer2);
    printf("%s", questionNo.answer3);
    printf("%s", questionNo.answer4);
    printf("Please enter 1, 2, 3, or 4:\n");
}

// ADD LOGIC TO LOOP (EOF = end of line)
while (num != EOF) {
    if (ch != 10) {
        printf("something goes here");
    } else {
        printf("NEW LINE REACHED\n");
    }
}
// Input part, refine and edit
fgets(line, 300, fr);
strcpy(test.question, line);
fgets(line, 300, fr);
strcpy(test.answer1, line);
fgets(line, 300, fr);
strcpy(test.answer2, line);
fgets(line, 300, fr);
strcpy(test.answer3, line);
fgets(line, 300, fr);
strcpy(test.answer4, line);
fgets(line, 300, fr);
sscanf(line, "%d", &test.correctAnswer);
fclose(fr);
return test;
// Random calculator, refine and edit
unsigned char myScore = 0;
unsigned char answer;
srand(time(NULL));
if ((rand() % 6) == 0) {
  QUESTION_1;
  QUESTION_2;
  QUESTION_3;
} else if ((rand() % 6) == 1) {
  QUESTION_1;
  QUESTION_3;
  QUESTION_2;
} else if ((rand() % 6) == 2) {
  QUESTION_2;
  QUESTION_1;
  QUESTION_3;
} else if ((rand() % 6) == 3) {
  QUESTION_2;
  QUESTION_3;
  QUESTION_1;
} else if ((rand() % 6) == 4) {
  QUESTION_3;
  QUESTION_1;
  QUESTION_2;
} else if ((rand() % 6) == 5) {
  QUESTION_3;
  QUESTION_2;
  QUESTION_1;
}