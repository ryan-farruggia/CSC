#include <stdio.h>
#include <string.h>
#include <assert.h>

struct _name_percent  {
  char name[16];
  int percent;
};

typedef struct _name_percent NAME_PERCENT_T;

struct _prices {
  char name[16];
  float r, b, a, o;
};
typedef struct _prices PRICES_T;

struct _jobs {
  char name[16];
  int r, b, a, o;
} ;

typedef struct _jobs JOBS_T;


void commissionOfAMechanic   (NAME_PERCENT_T *np)
{
  FILE *fp = fopen ( "NameCommissions.txt", "r");
  assert ( fp != NULL );
  char temp[16];
  int commission;
   
  int i ;
  for ( i = 0 ; i < 4 ; i++ ) { 
      fscanf (fp,  "%s%d", temp, &commission);
      if (strcmp ( temp, np->name) == 0 )  {
         break;
      }
  }

  assert ( i != 4 ) ;
  np->percent = commission;
  strcpy(np->name, temp);
  fclose ( fp);
  printf ( "The name given is %s  and his commission is=%d \n", np->name, np->percent ) ;
}

void priceOfAllServices ( PRICES_T *pr  )
{
  FILE *fp = fopen ( "PriceOfServices.txt", "r");

  assert ( fp != NULL );
  char temp[16];

  fscanf (fp,  "%s%f", temp, &(pr->r) ) ;
  printf ( "ServiceName=%s Price=%0.2f\n", temp, pr->r);
  fscanf (fp,  "%s%f", temp, &(pr->b) ) ;
  printf ( "ServiceName=%s Price=%0.2f\n", temp, pr->b);
  fscanf (fp,  "%s%f", temp, &(pr->a) ) ;
  printf ( "ServiceName=%s Price=%0.2f\n", temp, pr->a);
  fscanf (fp,  "%s%f", temp, &(pr->o ) );
  printf ( "ServiceName=%s Price=%0.2f\n", temp, pr->o);
 
  fclose ( fp);

}

void getWeeklyStatsOfaMechanic( JOBS_T *jobs )
{
  FILE *fp = fopen ("JobsDone.txt", "r");
  assert ( fp != NULL );

  char temp[16];
  
  int i ;
  for ( i = 0 ; i < 4 ; i++ ) { 
      fscanf (fp,  "%s%d%d%d%d", temp, &(jobs->r), &(jobs->b),&(jobs->a),&(jobs->o));
      if (strcmp ( temp, jobs->name ) == 0 )  {
         break;
      }
  }

  assert ( i != 4 );

  printf ( "jobs done by %s %d %d %d %d \n", temp, jobs->r,jobs->b,jobs->a,jobs->o);
   fclose ( fp);

}

int main ( )
{
 NAME_PERCENT_T np;
 PRICES_T prices;
 JOBS_T jobs;

 int percent;
 char name[16];

 printf ("Please enter the name of the Mechanic \n" );
 scanf ( "%s", &name);

 strcpy ( np.name, name);
 strcpy ( jobs.name, name);

 commissionOfAMechanic   ( &np ); 

 priceOfAllServices ( &prices  ) ;

 getWeeklyStatsOfaMechanic( &jobs ) ;

 float total= (jobs.r*prices.r  + jobs.b*prices.b + jobs.a*prices.a +
     jobs.o*prices.o )*np.percent/100;

 printf ( "Name=%s Total Commission=%.2f\n",name ,total);
  
}

