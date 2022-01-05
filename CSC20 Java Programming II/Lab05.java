/* This is my test file. Do NOT submit this file with your code. I include this so you can see how I will grade submission. */

package Main;
public class Lab05{
	public static void main(String[] args){
		StackInt st = new StackInt();
		p(st.isEmpty());			// This should be true
		p(st.peek());				// This should be -1
		p(st.size());				// This should be 0
		for(int i = 0; i < 10; i++)
		st.push(i); 				// This adds 10 items to the stack
		p(st.toString());			// This should be [0,1,2,3,4,5,6,7,8,9]
		p(st.isEmpty());			// This should be false
		p(st.peek());				// This should be 9
		p(st.size());				// This should be 10
		p("Popped " + st.pop() + " from stack...");	// This should be "Popped 9 from stack..."
		p(st.toString());			// This should be [0,1,2,3,4,5,6,7,8]
		st.clear(); 				// This should clear the stack...
		p(st.isEmpty());			// This should be true
	}
	
	public static <E> void p(E s){
		System.out.println(s);
	}
}