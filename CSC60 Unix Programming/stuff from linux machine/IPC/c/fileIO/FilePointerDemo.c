// Example of a Buffered IO
#include <stdio.h>
int main  ( )
{
   
  char ch;
  int num;
  FILE *fp ;

  fp = fopen ( "/gaia/class/student/srivatss/IPC/c/fileIO/pangram.in", "r");


#if 0 
  PATH TO THE STRUCTURE :  /usr/include/libio.h
  char *_IO_read_ptr;   /* Current read pointer */
  char* _IO_read_end;   /* End of get area. */
  char* _IO_read_base;
#endif

  printf ( "Address of the read pointer %p\n", fp->_IO_read_ptr );
  if ( fp->_IO_read_ptr != NULL ) 
     printf ( "value %c\n", *(fp->_IO_read_ptr) );
       

  fscanf ( fp, "%c", &ch);
  printf ( "%c\n", ch);  /// JUST TO SHOW YOU

  // reading through the back door
  printf ( "first-character %c\n", *(fp->_IO_read_ptr) );
  fp->_IO_read_ptr ++;
  printf ( "second-character %c\n", *(fp->_IO_read_ptr));
  fp->_IO_read_ptr ++;
  printf ( "third-character %c\n", *(fp->_IO_read_ptr));

  fscanf ( fp, "%c", &ch);
  printf ( "after the backdoor: %c\n", ch);  /// JUST TO SHOW YOU



 fclose ( fp );

}


  
