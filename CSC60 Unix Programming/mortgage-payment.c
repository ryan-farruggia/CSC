#include <stdio.h>
#include <math.h>

int main()
{

int n=360;
int dollars, i;
float cents;

float loan=230000.00;
float interest =4.875;
float mP=0;
float mI=0;
float temp;

printf("Enter the loan amount: \n");
scanf("%f", &loan);

printf("Enter the number of payments: \n");
scanf("%d", &n);

printf("Enter the annual interest percentage: \n ");
scanf("%f", &interest);

mI = interest/1200;
temp = pow ( 1 + mI, n);

mP = ( loan * mI *  temp )  /  ( temp - 1 ) ;
printf ( " Monthly Mortgage %.2f \n", mP);

}