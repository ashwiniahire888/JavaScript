#include <stdio.h>
int binarysearch(int a[],int n,int key)
{
    int begin,end,mid;
    begin=0;
    end=n-1;
    while(begin<=end)
    {
        mid=(begin+end)/2;
        if(a[mid==key])
            return mid;
        if(key<a[mid])
            end=mid-1;
        else
            begin=mid+1;

    }
    return -1;
}
void create(int a[],int n)
{
    int i;
    printf("\n enter elements in ascending order");
    for(i=0;i<n;i++)
    scanf("%d",&a[i]);


}
void display(int a[],int n)
{
    int i;
    for(i=0;i<n;i++)
        printf("\n%d",a[i]);
}
void main()
{
    int a[30],n,i,key;
    printf("\n enter how many numbers:");
    scanf("%d",&n);
    create(a,n);
    display(a,n);
    printf("\n enter key element:");
    scanf("%d",&key);
    i=binarysearch(a,n,key);
    if(i== -1)
        printf("\n NOT FOUND");
    else
        printf("\n %d FOUND at %d position",key,i);
}
