#include <stdio.h>
#include <string.h>

int main () {
   FILE *fp;
   char str[] = "this is Sac State\n";
   char buf[50]={0};

   fp = fopen("test.txt", "w");

   fwrite(str, 1, strlen(str) ,  fp);
   fclose(fp);

   fp = fopen("test.txt", "r");
   fseek(fp, 0, SEEK_SET);

   fread(buf, 1, strlen(str) ,  fp);
   buf[strlen(str) + 1] ='\0' ;
   printf("%s\n", buf);
   fclose(fp);
   
   return(0);
}
