// Student Name: Ryan Farruggia

package Main;
import java.lang.StringBuilder;
import java.util.EmptyStackException;

public class StackInt{
	// Fields
	private int[] a;			// Array to hold the stack items behind the scenes
	private int top;			// This is the "top" of the stack
	private final int n = 256;	// This is going to be the fixed size of the stack
	
	private int counter = 0;	// Keep track of every time an array element is added
	
	// Constructor
	public StackInt(){
		// TODO: Initialize the private fields (except the final constant "n")
		a = new int[n];
		top = -1;
	}
	
	// Methods
	public void push(int item){
		counter++;
		// TODO: Add the item to the stack based on how stacks are supposed to work
		if (top == n-1) {
			System.out.println("Overflow");
		} else {
			a[++top] = item;
		}
	}
	
	public int pop(){
		// TODO: Remove and return the item at the top of the stack. If stack is empty, return -1
		if (a.length >= 1) {
			int b = a[top--];
			return b;
		} else if (a.length == 0) {
			return -1;
		} else {
			return -1;
		}
	}
	
	public int peek(){
		// TODO: Return the item at the top of the stack. If stack is empty, return -1
		try {
			return top;
		} catch (EmptyStackException e) {
			return -1;
		}		// This can be removed but is here to prevent the Java error while testing!
	}
	
	public boolean isEmpty(){
		// TODO: Return whether the stack is empty (true if empty) or not (false if stack is not empty)
		if (counter == 0) {
			return true;
		} else {
			return false;
		}
	}
	
	public int size(){
		// TODO: Return how many items are currently in the stack; Return 0 if stack is empty
		try {
			return counter;
		} catch (Exception e) {
			return 0;
		}
	}
	
	public void clear(){
		// TODO: Find a way to clear access to the stack so it appears empty to the user (Consider "Lazy Evaluation" for efficiency)
		a = new int[0];	// reset the array when clear() is called
		counter = 0;	// reset the counter when clear() is called
	}
	
	public String toString(){
		// TODO: Return the String with the format of [1,2,3,4] as an example. Have stack items separated by commas, enclosed inside brackets, and no comma at the end!
		if (a.length == 0) {
			return "[]";
		} System.out.print("[");
		String bc = "";
		StringBuilder sb = new StringBuilder(100);
		for (int i = -1; i < top; i++) {
			bc = a[i+1] + ",";
			sb.append(bc);
		}
		String cd = sb.toString();
		cd = cd.substring(0, cd.length()-1);
		System.out.print(cd);
		System.out.print("]");
		return "";
	}
}

