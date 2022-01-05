#include <stdio.h>
#include <string.h>
#include <assert.h>

 int percent;
 char name[16];
 int jobs[4];
 float prices[4];

void commissionOfAMechanic   ( )
{
  FILE *fp = fopen ( "NameCommissions.txt", "r");
  assert ( fp != NULL );
  char temp[16];
  int commission;
   
  int i ;
  for ( i = 0 ; i < 4 ; i++ ) { 
      fscanf (fp,  "%s%d", temp, &commission);
      if (strcmp ( temp, name) == 0 )  {
         break;
      }
  }
  percent=commission;

  assert ( i != 4 ) ;
  fclose ( fp);
  printf ( "The name given is %s  and his commission is=%d \n", temp, commission );
}

void priceOfAllServices (   )
{
  FILE *fp = fopen ( "PriceOfServices.txt", "r");

  assert ( fp != NULL );
  char temp[16];

  fscanf (fp,  "%s%f", temp, &prices[0]);
  printf ( "ServiceName=%s Price=%0.2f\n", temp, prices[0]);
  fscanf (fp,  "%s%f", temp, &prices[1]);
  printf ( "ServiceName=%s Price=%0.2f\n", temp, prices[1]);
  fscanf (fp,  "%s%f", temp, &prices[2]);
  printf ( "ServiceName=%s Price=%0.2f\n", temp, prices[2]);
  fscanf (fp,  "%s%f", temp, &prices[3]);
  printf ( "ServiceName=%s Price=%0.2f\n", temp, prices[3]);
 
  fclose ( fp);

}

void getWeeklyStatsOfaMechanic(  )
{
  FILE *fp = fopen ("JobsDone.txt", "r");
  assert ( fp != NULL );

  char temp[16];
  
  int i ;
  for ( i = 0 ; i < 4 ; i++ ) { 
      fscanf (fp,  "%s%d%d%d%d", temp, &jobs[0], &jobs[1],&jobs[2],&jobs[3]);
      if (strcmp ( temp, name) == 0 )  {
         break;
      }
  }

  assert ( i != 4 );

  printf ( "jobs done by %s Radiator=%d Brakes=%d Alignment=%d OilChange=%d \n", temp, jobs[0],jobs[1],jobs[2],jobs[3]);
   fclose ( fp);

}

int main ( )
{

 printf ("Please enter the name of the Mechanic \n" );
 scanf ( "%s", &name);

 commissionOfAMechanic   ( ); 

 priceOfAllServices ( ) ;

 getWeeklyStatsOfaMechanic( ) ;

 float total= (jobs[0]*prices[0]  + jobs[1]*prices[1] + jobs[2]*prices[2] +
     jobs[3]*prices[3] )*percent/100;

 printf ( "Name=%s Total Commission=%.2f\n",name ,total);
  
}

