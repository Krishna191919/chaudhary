#include<stdio.h>
int main(){
	int a[4];
	printf("enter five elements number:");
	for(int i=0;i<5;i++){
		scanf("%d",&a[i]);}
printf("you inserted:\n");	
	for(int i=0;i<5;i++){
		printf("a[%d]:%d ,address:%d\n",i,a[i],(unsigned int)&a[i]);
	} return 0; }
