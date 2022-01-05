#include <stdio.h>
    
void printBits(unsigned int value) {
    for(int i = 31; i >= 0; i--) 
       (value & (1 << i)) ? printf("%c", '1') : printf("%c", '0');
    
    printf("\n");
}

void WalkAOneAcrossZeros( ) {
 
    for(int i = 31; i >= 0; i--) 
        printBits(1 << i);      

    printf("\n");
}

void WalkAZeroAcrossOnes( ) {
    unsigned int j = -1;
 
    for(int i = 31; i >= 0; i--)
        printBits(~(1 << i) & j);      
      printf("\n");
}

int main() {


    unsigned char A = 0x55;
    unsigned char B = 0xAA;
    char ch = -60;
    char ch1 = 60;
    printBits ( ch) ;
    printBits ( ch1) ;
    printBits ( ch1+ch) ;


    printf ( "\nC = A & B \n");
    unsigned char C = A & B ;
    printBits ( C) ;

    printf ( "\nC = A | B \n");
    C = A | B ; 
    printBits ( C) ;

    printf ( "\nC = A ^ B \n");
    C = A ^ B ;
    printBits ( C) ;

    printf ( "\nC = 0xFF shift left 0, 8, 16, 24\n");
    C = 0xFF;
    printBits (C << 0 ) ;
    printBits (C << 8 ) ;
    printBits (C << 16 ) ;
    printBits (C << 24 ) ;

    printf ( "\nD = 0xFF000000 shift right 0, 8, 16, 24\n");
    unsigned int D = 0xFF000000;
    printBits ( D >> 0) ;
    printBits ( D >> 8) ;
    printBits ( D >> 16) ;
    printBits ( D >> 24) ;

    printf ( "\nE = -1 shift left 0, 8, 16, 24\n\n");
    int E = -1;
    printBits ( E << 0) ;
    printBits ( E << 8) ;
    printBits ( E << 16) ;
    printBits ( E << 24) ;

    printf ( "\nE = -1 shift right 0, 8, 16, 24\n\n");
    printBits ( E >> 0) ;
    printBits ( E >> 8) ;
    printBits ( E >> 16) ;
    printBits ( E >> 24) ;
    
    printf ( "\nE = -105 shift left 0, 8, 16, 24\n\n");
    E = - 100;
    printBits ( E ) ;
    printBits ( E << 8) ;
    printBits ( E << 16) ;
    printBits ( E << 24) ;
  

    printf ( "\n Remove the right most bit of a number\n");
    E = 125;  // say
    printBits ( E);

    E = ( E & ( E - 1)) ;  // THE & of a number n and n-1 will remove the right most bit
    printBits ( E);



    WalkAOneAcrossZeros();
    WalkAZeroAcrossOnes( );

    
    
    return 0;
}