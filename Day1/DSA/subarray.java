// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class Main {
    public static void main(String[] args) {
        int arr[]={1,4,20,3,10,5};
        int count=0;
        for(int i=0;i<arr.length;i++){
            for(int j=i;j<arr.length;j++){
                //System.out.print(arr[j]+" ");
            
            for(int k=i;k<=j;k++){
                  System.out.print(arr[k]+" ");
                  
                  
            }
            
            
            System.out.println();
            count++;
            
        }
        }
        System.out.println("no of subarray is "+count);
}
}