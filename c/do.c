#include<stdio.h>
int main (){
	int n,sum=0,counter=1;
	 printf("enter the value of n");
                scanf("%d",&n);
	do{
	sum=sum+counter;
	counter++;
	}while(counter<=n);
	printf("sum=%d",sum);
	return 0;
}
