#include<stdio.h>
int main(){
	float percentage,marks,s1,s2,s3,s4,s5,s6,s7;
	char name[40];
	printf("enter name of student");
	scanf("%c",&name);
	printf("enter marks of seven subject");
	scanf("%f%f%f%f%f%f%f",&s1,&s2,&s3,&s4,&s5,&s6,&s7);
	marks=s1+s2+s3+s4+s5+s6+s7;
	printf("total marks:%f",marks);
	percentage=(marks/700)*100;
	printf("total percentage:%f",percentage);
	if(percentage>=80){
		printf("student got distinction");
	}
	else if(percentage<=79 && percentage>=60){
		printf("student got first division");
	}
	else if (percentage<=59&&percentage>=45){
		printf("student got second division");
	}
	else if (percentage<=44&&percentage>=32){
			printf("student got third division");
			}
			else{
			printf("student got pass marks");
			}
			return 0;
}
