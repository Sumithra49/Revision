// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.*;
class Main {
    public static void main(String[] args) {
        String s="sumithra";
        Stack<Character> st=new Stack<>();
        for(int i=0;i<s.length();i++){
            st.push(s.charAt(i));
        }
      while(!st.isEmpty())
      {
        System.out.print(st.pop());
      }
    }
}



//array
import java.util.*;
class Main {
    public static void main(String[] args) {
        int[] a={10,20,30,40};
        Stack<Integer> st=new Stack<>();
        for(int i=0;i<a.length;i++){
           st.push(a[i]);
        }
      while(!st.isEmpty())
      {
        System.out.println(st.pop());
      }
    }
}