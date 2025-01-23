#include<stdio.h>
int main (){
	char character;
	printf("enter the vowel character:");
	scanf("%c",&character);
	switch(character){
		case 'a':
			printf(" a is vowel character");
			break;
		case 'e':
                        printf(" e is vowel character");
                        break;
		case 'i':
                        printf(" i is vowel character");
                        break;
		case 'o':
                        printf(" o is vowel character");
                        break;
		case 'u':
                        printf(" u is vowel character");
                        break;
		default:
		printf("Not a vowel character");
	break;
	}
return 0;
}



