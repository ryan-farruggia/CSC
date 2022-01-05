package Main;

import java.util.ArrayList;

public class Database {
	// Fields
	private ArrayList<Movie> movies;
	
	// Constructor
	public Database(String filename){
		movies = new ArrayList<>();
		fileRead fr = new fileRead(filename);
		for(int i = 0; i < fr.getNumberOfLines(); i++){
			String raw = fr.getLine(i);
			// TODO: Parse using the StringTokenizer here and place into movies as single entries...
		}
	}
	
	// Methods
	public void addEntry(Movie newEntry){
		// TODO
	}
	
	public void searchByTitle(String title){
		// TODO
	}
	
	public void searchByActor(String actor){
		// TODO
	}
	
	public void searchByDirector(String director){
		// TODO
	}
	
	public void searchByYear(int year){
		// TODO
	}
	
	public void searchByRuntime(int runtime){
		// TODO
	}
}
