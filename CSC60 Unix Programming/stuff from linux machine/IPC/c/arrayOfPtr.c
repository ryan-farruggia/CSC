#include <stdio.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <math.h>
#include <string.h>
  char *questionList[300];
  int count = 0;

int readQuestions ( )
{

    static const char filename[] = "questionbank.txt";
    FILE *file = fopen(filename, "r");
    char line[ 300 ];

    while (fgets(line, 300, file) != NULL) {
       questionList[count] = (char * ) malloc ( strlen(line)+1 ) ;;
       strcpy (questionList[count++], line); 
    }

    fclose(file);          
}

int main(){
    readQuestions ( );

    int i = 0;
    for ( i = 0 ; i < 4; i++ ) 
       printf ( "i=%d %s ",i, questionList[i]);

    printf ( "correct Answer is=%s ", questionList[i]);


    
}

 
