unsigned char cells;
unsigned char j;
void printValues (unsigned char *ptr, int count){
    // print all values pointed by ptr
    printf("Value at cell %d is %d \n", j, *(ptr+j));
}
int main(){
    unsigned char data[] = {9, 8, 7, 5, 3, 2, 1};
    // call the printValues function passing the array data
    cells = sizeof (data) / sizeof(data[0]);
    for (j = 0; j < cells; j++) {
        printValues(&data, j);
    }
}