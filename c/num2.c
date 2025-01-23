#include<stdio.h>
int main()
{
	char ch;
	printf("enter the character: ");
	scanf("%c",&ch);
	if (ch<=90)
	{
		ch=ch+32;
		printf("\nThe character is:%c",ch);
	}
	else 
	{
		ch=ch-32;
		printf("\nThe character is:%c\n",ch);
	}
	return 0;
}
