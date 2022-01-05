package Main;

import java.util.ArrayList;
import java.io.IOException;
import java.io.FileWriter;

public class fileWrite {
	// Private fields
	private ArrayList<String> writeBuffer;
	private String filename = "db.txt";
	
	// Constructor for fileWrite Class
	public fileWrite(String filename){
		this.setFilename(filename);
		writeBuffer = new ArrayList<>();
	}
	// Method to write line to writeBuffer
	public void writeLine(String newLine){
		writeBuffer.add(newLine);
	}
	// Method to write lines in writeBuffer to db.txt
	public void saveFile(){
		try {
			FileWriter fw = new FileWriter(filename, true);
			for(String s: writeBuffer) {
				fw.flush();
				fw.append(s + "\n");
				fw.close();
			}
			//fw.close();
		} catch (IOException e){
			e.getStackTrace();
		}
	}
	// Method to return filename wherever necessary
	public String getFilename() {
		return filename;
	}
	// Method to set filename for parameter passing
	public void setFilename(String filename) {
		this.filename = filename;
	}
}
