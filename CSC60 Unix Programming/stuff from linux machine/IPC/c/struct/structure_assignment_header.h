 
struct _file_info {
  unsigned int offset ;
  unsigned char permission ;
  unsigned short iNode ;
  unsigned char fid;
} ;

typedef struct _test TEST_T ;

void print_structure ( struct _test );
void update_structure ( struct _test * );
void print_structure_T ( TEST_T);
void update_structure_T ( TEST_T * );
void print_array_of_structures ( struct _test [], int )  ;

typedef struct _test2 {
      int created;
      TEST_T n1;
} TEST2_T  ;


void print_nested_structure ( TEST2_T ) ;
