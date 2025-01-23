#include<stdio.h>
int main()
{
	int n,i=1,j=2;
	printf("enter the number: ");
	scanf("%d", &n);
	while(i<=n)
	{
	
		printf("%d/%d\n",i,j);
		i++;
		j++;
	}
	return 0;
}
