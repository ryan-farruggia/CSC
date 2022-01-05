package Main;

import java.util.ArrayList;
import java.io.File;
import java.util.Scanner;

public class fileRead {
	// Private fields
	private ArrayList<String> lines;
	// Constructor for fileRead Class
	public fileRead(String fileName){
		lines = new ArrayList<>();
		Scanner myScan = new Scanner(fileName);
		while (myScan.hasNext()) {
			lines.add(myScan.next());
		}
		myScan.close();
	}
	// Get Number of Lines from db.txt
	public int getNumberOfLines(){
		int counter = 0;
		try {
			File myFile = new File("db.txt");
			Scanner sc = new Scanner(myFile);
			while (sc.hasNextLine()) {
				sc.nextLine();
				counter++;
			}
			sc.close();
		} catch (Exception e) {
			Movie.p("Error.");
		}
		return counter;
	}
}
