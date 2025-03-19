import java.util.*;
class Main {
    public static void main(String[] args) {
        String s = "{([])}";
        
       Stack<Character> a=new Stack<>();
       for(int i=0;i<s.length();i++){
           if(s.charAt(i)=='(' || s.charAt(i)=='[' || s.charAt(i)=='{'){
               a.push(s.charAt(i));
           }
           else{
               if(!a.isEmpty() && ((a.peek()=='(' && s.charAt(i)==')') || (a.peek()=='['&& s.charAt(i)==']') ||
               (a.peek()=='{' && s.charAt(i)=='}'))){
                   a.pop();
                   
               }else{
                   System.out.println("false");
                   return;
               }
           }
       }
       System.out.println(a.isEmpty());
      
    }
}

//output is true