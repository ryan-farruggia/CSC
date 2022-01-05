#include <stdio.h>

int main() {
	unsigned char x;
	printf("Please enter a number from 0 to 255\n");
	scanf("%d", &x);

	char se, si, fi, fo, th, tw, on, ze;

	se = x / 128;
	x = x % 128;

	si = x / 64;
	x = x % 64;

	fi = x / 32;
	x = x % 32;
	
	fo = x / 16;
	x = x % 16;

	th = x / 8;
	x = x % 8;

	tw = x / 4;
	x = x % 4;

	on = x / 2;
	x = x % 2;

	ze = x / 1;

	printf ("The binary number is %d%d%d%d %d%d%d%d", se, si, fi, fo, th, tw, on, ze);
}
