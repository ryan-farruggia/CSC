#include <curses.h>

int main ( void ) 
{
  initscr  ( ) ;
  int x, y;
  keypad ( stdscr, TRUE);
  noecho ( ) ;
  cbreak;
  int ch = getch ( ) ;
  while ( ch != 'q' ) {
    clear( ); 
    wmove (stdscr, 0,0);
    switch ( ch ) {
      case KEY_UP :
        printw ( "you pressed UP KEY "); 
      break;
      case KEY_DOWN :
        printw ( "you pressed DOWN KEY "); 
      break;
      case KEY_LEFT :
        printw ( "you pressed LEFT KEY "); 
      break;
      case KEY_RIGHT :
        printw ( "you pressed RIGHT KEY "); 
      break;
      default :
       printw ( "you pressed %c ", ch); 
      break;
    } 
    ch = getch ( ) ;
  } 
    
  refresh (  );
  sleep ( 3 );
  endwin  ( ) ;

  return 0 ;
}



#if 0
 

  addch ( 'X' );

  addch ( 'Y' | A_REVERSE );
  mvaddch ( 4, 1, 'Y' | A_BOLD );




}

#endif
