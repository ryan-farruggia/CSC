package Main;

import java.util.StringTokenizer;
import java.util.Scanner;
import java.io.File;

public class Database {
	// addEntry method for "new entry" cmd
	public static String addEntry(){
		String one = Movie.getTitle();
		String two = Integer.toString(Movie.getYear());
		String three = Integer.toString(Movie.getRuntime());
		String four = Movie.getActor1();
		String five = Movie.getActor2();
		String six = Movie.getDirector();
		String combine = String.join("*", one, two, three, four, five, six);
		return combine;
	}
	// searchByTitle method for "search by title" cmd
	public static void searchByTitle(String title){
		try {
			File file = new File("db.txt");
			final Scanner sc = new Scanner(file);
			Movie.pn("");
			while (sc.hasNextLine()) {
			    final String lineFromFile = sc.nextLine();
			    int counter = 0;
			    if(lineFromFile.contains(title)) {
			    	Movie.pn(" Succesfully retrieved information for " + title + ":");
			    	StringTokenizer str = new StringTokenizer(lineFromFile, "*", false);
			    	while (str.hasMoreTokens()) {
			    		counter++;
			    		int i = lineFromFile.indexOf('*');
					    lineFromFile.substring(0,i);
					    lineFromFile.substring(i);
			    		String abc = str.nextToken();
			    		if (counter == 1) {
				    		Movie.pn(" Title: " + abc);
				    	} else if (counter == 2) {
				    		Movie.pn(" Year: " + abc);
				    	} else if (counter == 3) {
				    		Movie.pn(" Runtime (minutes): " + abc);
				    	} else if (counter == 4) {
				    		Movie.pn(" Actor 1: " + abc);
				    	} else if (counter == 5) {
				    		Movie.pn(" Actor 2: " + abc);
				    	} else if (counter == 6) {
				    		Movie.pn(" Director: " + abc);
				    	}
			    	}
			    	int i = lineFromFile.indexOf('*');
				    lineFromFile.substring(0,i);
			    }
			}
			sc.close();
			Movie.pn("");
		} catch (Exception e) {
			Movie.p("Error. Please try again.");
		}
	}
	// searchByActor method for "search by actor" cmd
	public static void searchByActor(String actor){
		try {
			File file = new File("db.txt");
			final Scanner sc = new Scanner(file);
			Movie.pn("");
			Movie.pn(" " + actor + " has starred in the following movies:");
			while (sc.hasNextLine()) {
			    final String lineFromFile = sc.nextLine();
			    if(lineFromFile.contains(actor)) {
			    	StringTokenizer str = new StringTokenizer(lineFromFile, "*", false);
			    	String abc = str.nextToken();
			    	Movie.pn("   -" + abc);
			    }
			}
			sc.close();
			Movie.pn("");
		} catch (Exception e) {
			Movie.p("Error");
		}
	}
	// searchByDirector method for "search by director" cmd
	public static void searchByDirector(String director){
		try {
			File file = new File("db.txt");
			final Scanner sc = new Scanner(file);
			Movie.pn("");
			Movie.pn(" " + director + " has directed the following movies:");
			while (sc.hasNextLine()) {
			    final String lineFromFile = sc.nextLine();
			    if(lineFromFile.contains(director)) {
			    	StringTokenizer str = new StringTokenizer(lineFromFile, "*", false);
			    	String abc = str.nextToken();
			    	Movie.pn("   -" + abc);
			    }
			}
			sc.close();
			Movie.pn("");
		} catch (Exception e) {
			Movie.p("Error");
		}
	}
	// searchByYear method for "search by year" cmd
	public static void searchByYear(int year){
		try {
			File file = new File("db.txt");
			final Scanner sc = new Scanner(file);
			Movie.pn("");
			Movie.pn(" " + "Movies published in " + year + ":");
			while (sc.hasNextLine()) {
				String bcd = Integer.toString(year);
			    final String lineFromFile = sc.nextLine();
			    if(lineFromFile.contains(bcd)) {
			    	StringTokenizer str = new StringTokenizer(lineFromFile, "*", false);
			    	String abc = str.nextToken();
			    	Movie.pn("   -" + abc);
			    }
			}
			sc.close();
			Movie.pn("");
		} catch (Exception e) {
			Movie.p("Error");
		}
	}
	// searchByRuntime method for "search by runtime" cmd
	public static void searchByRuntime(int runtime){
		try {
			File file = new File("db.txt");
			final Scanner sc = new Scanner(file);
			Movie.pn("");
			Movie.pn(" Movies with a runtime of " + runtime + " minutes:");
			while (sc.hasNextLine()) {
				String bcd = Integer.toString(runtime);
			    final String lineFromFile = sc.nextLine();
			    if(lineFromFile.contains(bcd)) {
			    	StringTokenizer str = new StringTokenizer(lineFromFile, "*", false);
			    	String abc = str.nextToken();
			    	Movie.pn("   -" + abc);
			    }
			}
			sc.close(); 
			Movie.pn("");
		} catch (Exception e) {
			Movie.p("Error");
		}
	}
}
