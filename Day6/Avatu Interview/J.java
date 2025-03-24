
// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class Main {
    public static void main(String[] args) {
        // string rev
        // String S="Sumithra";
        // String rev="";
        // for(int i=S.length()-1;i>=0;i--){
        // rev+=S.charAt(i);
        // }
        String s = "this is my sentence";
        String s1[] = s.split(" ");
        String rev = "";
        for (int i = s1.length - 1; i >= 0; i--) {
            rev += s1[i] + " ";

        }
        System.out.println(rev.trim());

        // String S="Sumithra";
        // // for(int i=0;i<S.length();i+=2){
        // // System.out.print(S.charAt(i));

        // for(int i=0;i<S.length();i++){
        // if(i%2==0){
        // System.out.println(S.charAt(i));
        // }
        // }
        int[] a = { 1, 5, 25, 2, 5, 23, 1, 5, 2334, 42, 5, 4, 6 };
        // output [25,2,23,2334,42,4,6]
        // HashMap<Integer,Integer> map=new HashMap<>();
        // for(int num:a){
        // map.put(num,map.getOrDefault(num,0)+1);
        // }
        // for(int num:a){
        // if(map.get(num)==1){
        // System.out.print(num+" ");
        // }

        // }
        // for(int i=0;i<a.length;i++){
        // boolean flag=false;
        // for(int j=0;j<a.length;j++){
        // if(i!=j && a[i]==a[j]){
        // flag=true;
        // break;
        // }
        // }
        // if(!flag){
        // System.out.print(a[i]+" ");
        // }
        // }
        // int n=5;
        // for(int i=1;i<=100;i++){
        // if(n*i==100){
        // System.out.println(n+"X"+i+"="+n*i);
        // break;
        // }else{
        // System.out.println(n*i);
        // }

        // }

    }
}

// this is my sentence
// sentence my is this
// [1,5,25,2,5,23,1,5,2334,42,5,4,6]
