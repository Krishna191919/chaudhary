#include<stdio.h>
#include<math.h>
int main (){
	char operator;
	float op1,op2;
	printf("enter the operator:");
	scanf("%c",&operator);
	printf("eneter the value of op1 and op2:");
	scanf("%f%f",&op1,&op2);
	switch(operator){
	case'-':
		printf("%f",op1-op2);
			break;
	case'+':
			printf("%f",op1+op2);
		break;
	case'*':
		printf("%f",op1*op2);
		break;
	case'/':
		printf("%f",op1/op2);
		break;
	case'%':
		printf("%d",(int)op1%(int)op2);
		break;
deafult:
		printf("wrong operator");
		break;
	}
	return 0;
}

