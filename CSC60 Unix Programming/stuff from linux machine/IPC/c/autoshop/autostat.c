#include <stdio.h>
#include <string.h>
#include <assert.h>

void commissionOfAMechanic   (char *mechanicName, int *comm)
{
  FILE *fp = fopen ( "NameCommissions.txt", "r");
  assert ( fp != NULL );
  char temp[16];
  int commission;
   
  int i ;
  for ( i = 0 ; i < 4 ; i++ ) { 
      fscanf (fp,  "%s%d", temp, comm);
      if (strcmp ( temp, mechanicName) == 0 )  {
         break;
      }
  }

  assert ( i != 4 ) ;
  fclose ( fp);
  printf ( "The name given is %s  and his commission is=%d \n", temp, *comm );
}

void priceOfAllServices ( float pr[ ]  )
{
  FILE *fp = fopen ( "PriceOfServices.txt", "r");

  assert ( fp != NULL );
  char temp[16];

  fscanf (fp,  "%s%f", temp, &pr[0]);
  printf ( "ServiceName=%s Price=%0.2f\n", temp, pr[0]);
  fscanf (fp,  "%s%f", temp, &pr[1]);
  printf ( "ServiceName=%s Price=%0.2f\n", temp, pr[1]);
  fscanf (fp,  "%s%f", temp, &pr[2]);
  printf ( "ServiceName=%s Price=%0.2f\n", temp, pr[2]);
  fscanf (fp,  "%s%f", temp, &pr[3]);
  printf ( "ServiceName=%s Price=%0.2f\n", temp, pr[3]);
 
  fclose ( fp);

}

void getWeeklyStatsOfaMechanic( char *name, int jobs[] )
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

  printf ( "jobs done by %s %d %d %d %d \n", temp, jobs[0],jobs[1],jobs[2],jobs[3]);
   fclose ( fp);

}

int main ( )
{
 int percent;
 char name[16];
 int jobs[4];
 float prices[4];

 printf ("Please enter the name of the Mechanic \n" );
 scanf ( "%s", &name);

 commissionOfAMechanic   ( name, &percent); 

 priceOfAllServices ( prices  ) ;

 getWeeklyStatsOfaMechanic( name, jobs ) ;

 float total= (jobs[0]*prices[0]  + jobs[1]*prices[1] + jobs[2]*prices[2] +
     jobs[3]*prices[3] )*percent/100;

 printf ( "Name=%s Total Commission=%.2f\n",name ,total);
  
}

