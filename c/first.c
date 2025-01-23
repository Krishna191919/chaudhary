#include<stdio.h>
int main(){
	char ch;
	printf("enter the vowel letter");
	ch=getchar();
	if(ch=='a'){
		printf("a is vowel");
	}
	else if(ch=='e'){
		printf("e is vowel");
	}
	else if(ch=='i'){
		printf("i is vowel");
	}
	else if(ch=='o'){
		printf("o is vowel");
	}
	else if(ch=='u'){
		printf("u is vowel");
	}
	else {
		printf("%c is not vowel",ch);
	}
	return 0;
}
