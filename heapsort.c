#include<stdio.h>
int A[10];
int heapsize=9;
void Heapfy(int i){
    int i,l,r, t,largest;
    l=2*i+1;
    r=2*i+2;
    if((l<=heapsize)&&(A[l]>A[i]))
    largest=l;
    else
    largest=i;
    if((r<=heapsize)&&(A[r]>A[largest]))
    r=largest;
    if(i!=largest){
        t=A[i];
        A[i]=A[largest];
        A[largest]=t;
        Heapfy(largest);
    }
}
int main (){
    int i ;
    printf("enter the int 10 digit:");
    for(i=0;i<10;i++){
        scanf("%d",&A[i]);  
        for(i=heapsize/2;i>=0;i--) 
        Heapfy(i);
        Heapsort();
        for(i=0;i<10;i++)
        printf("%d",A[i]);
        return 0;
    }
    
}
void Heapsort()
{
    int i,t;
    for(i=heapsize;i>=1;i--){
     t=A[0];
     A[0]=A[i];
     A[i]=t;
     heapsize= heapsize-1;
     Heapfy(0);
    }
}