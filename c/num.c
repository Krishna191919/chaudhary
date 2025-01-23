#include<stdio.h>
int main()
{
	int a, b, c;
	printf("Enter the number: ");
	scanf("%d%d%d",&a,&b,&c);
	if(a>b && a<c || a>c && a<b)
	{
		printf("\n Second largest number is:%d",a);
	}
	else
	{
		if(b>a && b<c || b>c && b<a)
		{
			printf("\n Second largest number is:%d",b);
		}
		else 
		{
			printf("\n Second largest number is:%d",c);
		}
	}
		return 0;

}
