package Main;

import java.util.Scanner;

public class keyboardInput {
	// Fields
	private Scanner keyb;
	
	// Constructor
	public keyboardInput(){
		keyb = new Scanner(System.in);
	}
	
	// Methods
	public String getKeyboardLine(){
		// TODO: Use the scanner object to acquire a String and return this String to the caller
		
	}
	
	/* Call this method before you exit the program! Do NOT close the scanner object inside of getKeyboardLine method! */
	public void closeKeyboard(){
		keyb.close();
	}
}
