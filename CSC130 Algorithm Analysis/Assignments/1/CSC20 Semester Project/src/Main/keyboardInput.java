package Main;

import java.util.Scanner;

public class keyboardInput {
	// Private fields
	private static Scanner keyb;
	// Constructor for keyboardInput Class
	public keyboardInput(){
		keyb = new Scanner(System.in);
	}
	// Get user input (string)
	public static String getKeyboardLine(){
		keyb = new Scanner(System.in);
		String strKey = keyb.nextLine();
		return strKey;
	}
	// Get user input (integer)
	public static int getKeyboardInt(){
		keyb = new Scanner(System.in);
		int strKeyInt = keyb.nextInt();
		return strKeyInt;
	}
	// Main decision tree for primary user input
	public static String primary(String s) {
		if (s.equals("new entry")) {
			String abc = Database.addEntry();
			return abc;
		} else if (s.equals("search by actor")) {
			Movie.p(" Enter actor >");
			String a = keyboardInput.getKeyboardLine();
			if (a.length() > 4) {
				Database.searchByActor(a);
			} else {
				pn(" Invalid name.");
				return "del";
			}
		} else if (s.equals("search by year")) {
			Movie.p(" Enter year >");
			try {
				int b = keyboardInput.getKeyboardInt();
				if (b <= 2022 && b >= 1888) {
					Database.searchByYear(b);
				} else {
					pn(" Invalid date.");
					return "del";
				}
			} catch (Exception e) {
				pn(" Invalid input.");
				return "del";
			}
		} else if (s.equals("search by runtime")) {
			Movie.p(" Enter runtime (minutes) >");
			try {
				int c = keyboardInput.getKeyboardInt();
				if (c > 0) {
					Database.searchByRuntime(c);
				} else {
					pn(" Invalid runtime.");
					return "del";
				}
			} catch (Exception e) {
				pn(" Invalid input.");
				return "del";
			}
		} else if (s.equals("search by director")) {
			Movie.p(" Enter director >");
			String d = keyboardInput.getKeyboardLine();
			if (d.length() >= 4) {
				Database.searchByDirector(d);
			} else {
				pn(" Invalid name.");
				return "del";
			}
		} else if (s.equals("search by title")) {
			Movie.p(" Enter title >");
			String f = keyboardInput.getKeyboardLine();
			if (f.length() >= 3) {
				Database.searchByTitle(f);
			} else {
				pn(" Invalid title.");
				return "del";
			}
		} else if (s.equals("quit")) {
			p(" Successfully exited program.");
			closeKeyboard();
			System.exit(0);
		} else if (s.equals("!help")) {
			pn("");
			pn(" List of available commands:");
			pn("     new entry          -> contribute a new movie entry to the database");
			pn("     search by actor    -> search for all movies starring a specific actor");
			pn("     search by year     -> search for all movies published during a specific year");
			pn("     search by runtime  -> search for all movies containing a specific runtime *(in minutes)*");
			pn("     search by director -> search for all movies directed by a specific director");
			pn("     search by title    -> search for movie(s) containing a specific title");
			pn("     quit               -> exit this program");
			pn("     !help              -> display a list of available commands");
			pn("");
		} else {
			pn(" Invalid command: " + s + " - Please enter a valid command.");
		}
		return "del";
	}
	// Method to close input stream
	public static void closeKeyboard(){
		keyb.close();
	}
	// import helper method from main
	public static <E> void p(E item){
		System.out.print(item + " ");
	}
	// import helper method from main
	public static <E> void pn(E item){
		System.out.println(item);
	}
}
