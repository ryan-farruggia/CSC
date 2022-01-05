#include <curses.h>

void displayError ( 
  unsigned char s, 
  unsigned char l, 
  unsigned char d, 
  unsigned char u )
{
  clear ( ) ;
  move ( 1, 0 ) ;
  if ( d == 0 )
     printw ( "You did not enter digits in your password");
  move ( 2, 0 ) ;
  if ( u == 0 )
     printw ( "You did not enter uppercase letter in your password");
  move ( 3, 0 ) ;
  if ( l == 0 )
     printw ( "You did not enter lowercase letter in your password");
  move ( 4, 0 ) ;
  if ( s == 0 )
     printw ( "You did not enter symbols letter in your password");

}
int main ( void ) 
{
  unsigned char symbols = 0, digits=0, uppercase=0, lowercase=0;
  initscr  ( ) ;
  noecho ( ) ;
  cbreak;
  wmove (stdscr, 0,0);
  clear( ); 
  int ch = getch ( ) ;
  while ( ch != '\n' ) {

      if ( ch == '@' || ch == '#' || ch == '$' || ch == '%' ||
      ch == '&' || ch == '*' || ch == ')' || ch == '(' ||
      ch == '+' || ch == '-'  )
        symbols = 1;
      else
      if ( ch >= 65 && ch <= 90 )
        uppercase = 1;
      else
      if ( ch >= 97 && ch <= 122 )
        lowercase = 1;
      else
      if ( ch >= 49 && ch <= 57 )
        digits = 1;
       
      ch = getch ( ) ;
  } 
      
  displayError  (symbols, lowercase, digits, uppercase  ) ; 
   
  refresh( ); 
  sleep ( 8 );
  endwin  ( ) ;

  return 0 ;
}



#if 0
 

  addch ( 'X' );

  addch ( 'Y' | A_REVERSE );
  mvaddch ( 4, 1, 'Y' | A_BOLD );




}

#endif
