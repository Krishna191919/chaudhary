#include<stdio.h>
int main (){
	int num=0,n;
	printf("enter the 5 digit decimal number");
       scanf("%d",&n);
while(n!=0){
 num=(num*10)+(n%10);
n=n/10;
}while(num!=0){
	switch(num){
		case 0:printf(" zero ");break;
		case 1:printf(" one ");break;
		case 2:printf(" two ");break;
		       case 3:printf(" three ");break;
			      case 4:printf(" four ");break;
				     case 5:printf(" five ");break;
					    case 6:printf(" six ");break;
						   case 7:printf(" seven ");break;
							  case 8:printf(" eight ");break;
								 case 9:printf(" nine ");break;
								 default:printf("mistake gareu mitrra!!");break;
	}num=num/10;
}return 0;}
