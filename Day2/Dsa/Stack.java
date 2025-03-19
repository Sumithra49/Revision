Stack is data structure it is stored many elements.
It follows FILO OR LIFO
working methods:
Push:add new elements(check overflow condition stack is full)
Pop:remove elements(check underflow condition stack is empty or not)
Peek: get the top element
isEmpty: check if stack is empty
size:no.of elements in stack

Stacks can be implemented by using arrays or linked lists.


Stack implementation in Java:

Syntax:
Stack<dataType> stack name = new Stack<dataType>();






import java.util.*;
class Main {
    public static void main(String[] args) {
       Stack<Integer> a=new Stack<>();
       a.push(1);
       a.push(8);
       a.push(9);
       System.out.println(a);//[1, 8, 9]
       System.out.println(a.pop());//9
       System.out.println(a.isEmpty());//false
       System.out.println(a.size());//2
       System.out.println(a.peek());//8
    }
}

//output
// [1, 8, 9]
// 9
// false
// 2
// 8


//when iam using
while(!a.isEmpty()){
    System.out.println(a.pop());//9,8,1  because when loop is false then only stop that loop i.e when my stack get empty
    }
    System.out.println(a.isEmpty());//true
       System.out.println(a.size());//0
