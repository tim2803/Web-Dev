#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	int mas[4][4];
	for(int i=0;i<=4;i++)
	{
		for(int y=0;y<=4;y++)
		{
			mas[i][y]=i+1;
		    printf("%d ",mas[i][y]);
		}
		printf("\n");
	}
	
	return 0;
}
