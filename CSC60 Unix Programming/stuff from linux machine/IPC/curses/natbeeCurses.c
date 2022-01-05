#include <curses.h> // required

int r,c, // current row and column (upper-left is (0,0))
nrows, // number of rows in window
ncols; // number of columns in window


char question1 ( ) 
{
       char d;
       int coln=0, row=2;
       FILE *fp = fopen ( "questionBank.txt", "r");
       
       mvprintw(row++, coln, "What is capital of California" );
       mvprintw(row++, coln, "1. San Diego" );
       mvprintw(row++, coln, "2. Sacramento" );
       mvprintw(row++, coln, "3. San Francisco" );
       mvprintw(row++, coln, "4. Los Angeles" );

       move(row++, 0);
       d = getch ( ) ; // curses call to input from keyboard
       return d;
}

main()

{ 
    char ch;
    int score=0;

    WINDOW *wnd=  initscr(); // curses call to initialize window

    cbreak(); // curses call to set no waiting for Enter key
    //noecho(); // curses call to set no echoing
    //getmaxyx(wnd,nrows,ncols); // curses call to find size of window

    clear(); // curses call to clear screen, send cursor to position (0,0)

    refresh(); // curses call to implement all changes since last refresh

    while ( 1 ) {
       r = 0 ;     
         c = 0 ;

         ch = question1 (  ) ; 

          if ( ch == 'q' ) 
            break ; // quit?

          move(8,0); // curses call to move cursor to row r, column c
          clrtoeol ( ) ;

          if ( ch == '1' || ch == '3' || ch == '4' ) {
              mvprintw (8, 3, "Sorry Try Again" );
          }

          else if (ch == '2' ) {
             score++;
             mvprintw(8, 3, "Good Job..." );
             mvprintw(9, 3, "Your Score is =%d", score );
          }
          else
             mvprintw(8, 3, "That is not an option, Try again" );
         }
 

   endwin() ; // curses call to restore the original window and leave

}


