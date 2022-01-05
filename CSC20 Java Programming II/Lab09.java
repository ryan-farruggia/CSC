// Your name here: Ryan Farruggia

package Main;
import java.lang.Math;
public class Lab09{
	public static void main(String[] args){
		// My tests (DO NOT MODIFY!)
		int[] a = {3,2,6,4,15,7,9,8,6};
		p(recurseSum(a));				// Sum should be 60
		p(recurseMax(a));				// Max should be 15
		// End of tests!
	}
	
	// Recursive methods below here...
	public static int recurseSum(int[] a){
	// TODO: This is the wrapper method. You must complete this AND implement helper method
		return recurseSum(a, a.length);
	}
	
	private static int recurseSum(int[] a, int n){
	// Helper Method
		if (n <= 0) {
			return 0;
		} return (recurseSum(a, n-1) + a[n-1]);
	}

	public static int recurseMax(int[] a){
	// TODO: This is the wrapper method. You must complete this AND implement helper method
		return recurseMax(a, a.length - 1);
	}
	private static int recurseMax(int[] a, int b) {
	// Helper Method
		if (b > 0) {
			return Math.max(a[b], recurseMax(a, b-1));
		} return a[0];
	}
	
	// End recursive methods
	
	/* Method to make printing text easy */
	public static <E> void p(E item){
		System.out.println(item);
	}
}