#include<stdio.h>
int main (){
int n,pro=100,count=1;
printf("enter the value of n:");
scanf("%d",&n);
while (count<=n){
pro=pro*count;
count++;
}
printf("pro=%d\n",pro);
return 0;
}
