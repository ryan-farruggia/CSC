#include <curses.h>

int main ( void ) 
{
  initscr  ( ) ;
  
  nocbreak( ) ;
  mvprintw ( 0,0, "What is 2+3:");
  move ( 0, 13);
  int ch = getch ( ) ;
  if ( ch == '5')
    mvaddstr ( 1,0, "Good Job" );
  else
    mvaddstr ( 1,0, "Oh no... " );

  refresh ( ) ;
  
  sleep ( 3 );
  endwin  ( ) ;

  return 0 ;
}
