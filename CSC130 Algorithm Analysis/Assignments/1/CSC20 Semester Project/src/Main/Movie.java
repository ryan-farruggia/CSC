// Made with lots of Watermelon Arizona
// Student Name: Ryan Farruggia
// Course: CSC 20 - Professor Phillips - Spring 2021
package Main;
public class Movie {
	public static void main(String[] args){
		pn("  __  __            _        _____        _        _                             ___        __ ");
		pn(" |  \\/  |          (_)      |  __ \\      | |      | |                           / _ \\      /_ |");
		pn(" | \\  / | _____   ___  ___  | |  | | __ _| |_ __ _| |__   __ _ ___  ___  __   _| | | |      | |");
		pn(" | |\\/| |/ _ \\ \\ / / |/ _ \\ | |  | |/ _` | __/ _` | '_ \\ / _` / __|/ _ \\ \\ \\ / / | | |      | |");
		pn(" | |  | | (_) \\ V /| |  __/ | |__| | (_| | || (_| | |_) | (_| \\__ \\  __/  \\ V /| |_| |  _   | |");
		pn(" |_|  |_|\\___/ \\_/ |_|\\___| |_____/ \\__,_|\\__\\__,_|_.__/ \\__,_|___/\\___|   \\_/  \\___/  (_)  |_|");
		pn("");
		pn(" * Note: commands are case-sensitive.");
		primaryLoop();
	}
	
	public static void primaryLoop() {
		String ab = "";
		while (ab != "quit") {
			fileWrite fw = new fileWrite("db.txt");
			p(" Enter a command (type !help for a list of commands) >");
			ab = keyboardInput.getKeyboardLine();
			String ac = keyboardInput.primary(ab);
			if (ac.equals("del") || ac.equals("-1")) {
				fw.saveFile();
			} else {
				fw.writeLine(ac);
				fw.saveFile();
			}
		}
	    keyboardInput.closeKeyboard();
	}
	
	// Private fields for title, actors, year, runtime, director
	private static String title;
	private static String actor1;
	private static String actor2;
	private static String director;
	private static int year;
	private static int runtimeMinutes;
	
	// Constructor for Movie
	public Movie(String title, String actor1, String actor2, String director, int year, int runtimeMinutes){
		title = "";
		actor1 = "";
		actor2 = "";
		director = "";
		year = 0;
		runtimeMinutes = 0;
	}
	// Get Title Method
	public static String getTitle(){
		p(" Enter title >");
		title = keyboardInput.getKeyboardLine();
		if (title.length() >= 3) {
			return title;
		} else {
			pn(" Invalid title.");
			return getTitle();
		}
	}
	// Get Actor1 Method
	public static String getActor1(){
		p(" Enter actor 1 >");
		actor1 = keyboardInput.getKeyboardLine();
		if (actor1.length() > 0) {
			return actor1;
		} else {
			pn(" Invalid name.");
			return getActor1();
		}
	}
	// Get Actor2 Method
	public static String getActor2(){
		p(" Enter actor 2 >");
		actor2 = keyboardInput.getKeyboardLine();
		if (actor2.length() > 0) {
			return actor2;
		} else {
			pn(" Invalid name.");
			return getActor2();
		}
	}
	// Get Director Method
	public static String getDirector(){
		p(" Enter director >");
		director = keyboardInput.getKeyboardLine();
		if (director.length() > 4) {
			return director;
		} else {
			pn(" Invalid name.");
			return getDirector();
		}
	}
	// Get Year Method
	public static int getYear(){
		p(" Enter year >");
		year = keyboardInput.getKeyboardInt();
		try {
			if (year >= 1888) { // first movie in 1888
				return year;
			} else {
				pn(" Invalid date.");
				return getYear();
			}
		} catch (Exception e) {
			pn(" Invalid input.");
		}
		return getYear();
	}
	// Get Runtime Method
	public static int getRuntime(){
		p(" Enter runtime (minutes) >");
		runtimeMinutes = keyboardInput.getKeyboardInt();
		try {
			if (runtimeMinutes > 0) {
				return runtimeMinutes;
			} else {
				pn(" Invalid runtime.");
				return getRuntime();
			}
		} catch (Exception e) {
			pn(" Invalid input.");
		}
		return getYear();
	}
	// Printing helper method
	public static <E> void p(E item){
		System.out.print(item + " ");
	}
	// Printing w/ newline helper method
	public static <E> void pn(E item){
		System.out.println(item);
	}
}
