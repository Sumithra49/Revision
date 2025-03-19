// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class Main {
    public static void main(String[] args) {
        int arr[]={1,4,20,3,10,5};
int target=33;
System.out.println(findSubArr(arr,target));
}

public static boolean findSubArr(int arr[],int target){
int n=arr.length;
int sum=0; int big=0;
for(int i=0;i<n;i++){
    if(sum<target){
        sum+=arr[i];
    }
    if(sum==target){
       return true;
            }
            else{
                while(big<n && sum>target){
                    sum=sum-arr[i];
                    big++;
                }
            }
        

}
return false;
    }
    
}