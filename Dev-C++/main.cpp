#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */
using namespace std;
int main(int argc, char** argv) {
	
	
for(int i=0;i<=9;i++)
   cout<<i<<'\t';
cout<<endl;
for(int i=1;i<=9;i++)
{
   cout<<i<<'\t';
   for(int j=1;j<=9;j++)
      cout<<i*j<<'\t';
   cout<<endl;
}
	return 0;
}
