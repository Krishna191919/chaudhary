#include<stdio.h>
int main()
{
	int a, b;
	printf("enter 1st number: ");
	scanf("%d",&a);
	if(a<0)
		goto negative;
	printf("enter 2nd number: ");
	scanf("%d",&b);
	if(b<0)
	goto negative;
	printf("Both number are positive");
	return 0;	
	negative:
	printf("The number is negative");	
	return 1;
}
