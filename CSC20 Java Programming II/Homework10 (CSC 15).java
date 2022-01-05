// H O M E W O R K   # 1 0
// C S C   1 5
// Student's Name Here: Ryan Farruggia
package Main;

import java.util.StringTokenizer;
import java.util.NoSuchElementException;

public class Homework10{
	public static void main(String[] args){
		// My code to dynamically create a text file (DO NOT MODIFY OR REMOVE!)
		EZFileWrite efw = new EZFileWrite("parse.txt");
		efw.writeLine("Shawshank Redemption*1994*Tim Robbins*2.36");
		efw.writeLine("The Godfather*1972*Al Pacino*2.92");
		efw.writeLine("Raging Bull*1980*Robert De Niro*2.15");
		efw.writeLine("Million Dollar Baby*2004*Hilary Swank*2.2");
		efw.writeLine("Straight Outta Compton*2015*Jason Mitchell*2.45");
		efw.saveFile();
		// End of test
		
		// TODO: Write your code to load the text file into memory, parse it, and display the data in a meaningful way...
		// (Use the instructions in the hand out to complete the assignment for full credit)
		EZFileRead efr = new EZFileRead("parse.txt");
			String[] movies = new String[efr.getNumLines()];
			int[] years = new int[efr.getNumLines()];
			String[] stars = new String[efr.getNumLines()];
			float[] runtimes = new float[efr.getNumLines()];
			int count = 0;
			for (int i = 0; i < efr.getNumLines(); i++) {
				try {
				String raw = efr.getLine(i);
				StringTokenizer st = new StringTokenizer(raw, "*");
				movies[count] = st.nextToken();
				years[count] = Integer.parseInt(st.nextToken());
				stars[count] = st.nextToken();
				runtimes[count] = Float.parseFloat(st.nextToken());
				// Trim unwanted whitespace
				while (st.hasMoreTokens()) {
					String s = st.nextToken();
					s = s.trim();
					System.out.println(s);
				}
			} catch (NoSuchElementException e1) {
				System.out.println(e1);
			} catch (Exception e2) {
				System.out.println(e2);
			}
				count++;
		}
			System.out.println("------MOVIES------");
			for (String w: movies) {
				System.out.println(w);
			}
			System.out.println("------YEARS------");
			for (int x: years) {
				System.out.println(x);
			}
			System.out.println("------STARS------");
			for (String y: stars) {
				System.out.println(y);
			}
			System.out.println("------RUNTIMES------");
			for (float z: runtimes) {
				System.out.println(z);
			}
		}
	}

