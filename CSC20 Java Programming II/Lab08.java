// Main tester file for your use (DO NOT MODIFY THIS!)

package Main;

public class Lab08{
	public static void main(String[] args){
		// TESTS ONLY! DO NOT MODIFY!
		StackList sl = new StackList();
		p(sl.pop());						// EMPTY
		p(sl.peek());						// EMPTY
		sl.push("Test string one");			// Stack size 1
		p(sl.peek());						// Test string one
		p(sl.size());						// 1
		p(sl.isEmpty());					// false
		sl.push("Test string two");			// Stack size 2
		sl.push("Test string three");		// Stack size 3
		p(sl.pop());						
		p(sl.size());						// 2
		p(sl.isEmpty());					// false			
		sl.clear();
		p(sl.isEmpty()); 					// true
		// END OF TESTS.
	}
	
	/* Helper method for easy displaying of text to console */
	public static <E> void p(E item){
		System.out.println(item);
	}
}