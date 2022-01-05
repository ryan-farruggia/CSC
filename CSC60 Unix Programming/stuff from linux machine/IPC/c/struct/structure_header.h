 
struct _test {
  unsigned int m1 ;
  unsigned char m2 ;
  unsigned short m3 ;
  unsigned char m4;
} ;

typedef struct _test TEST_T ;

void print_structure ( struct _test );
void update_structure ( struct _test * );
void print_structure_T ( TEST_T);
void update_structure_T ( TEST_T * );
void print_array_of_structures ( struct _test [], int )  ;

typedef struct _test2 {
      int index;
      TEST_T n1;
} TEST2_T  ;


void print_nested_structure ( TEST2_T ) ;
