// Your name here: Ryan Farruggia

package Main;

import java.util.ArrayList;

public class StackList{
	// Fields
	private ArrayList<String> a;		// Declared object
	
	// Constructor
	public StackList(){
		a = new ArrayList<String>();
	}
	
	// Methods
	public void push(String item){
		a.add(item);
	}
	
	public String pop(){
		String c = "String popped from stack: ";
		if (a.size() <= 0) {
			return "EMPTY";
		} else if (a.size() > 0) {
			String top = a.get(a.size() - 1);
			a.remove(a.size() - 1);
			return c + top;
		}
		return c + peek();
	}
	
	public String peek(){
		if (a != null && !a.isEmpty()) {
			int pos = a.size() - 1;
			String b = a.get(pos);
			return b;
		} else if (a.size() <= 0) {
			return "EMPTY";
		} 
		return "EMPTY";
	}
	
	public boolean isEmpty(){
		if (a.isEmpty()) {
			return true;
		}
		return false;
	}
	
	public int size(){
		return a.size();
	}
	
	public void clear(){
		a.clear();
	}
}