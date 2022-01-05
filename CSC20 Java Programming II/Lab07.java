// Your name here (NO NAME, NO CREDIT!): Ryan Farruggia

package Main;

public class Lab07{
	public static void main(String[] args){
		// Do NOT modify this method! This portion is provided just so you can see how I will grade the assignment. 
		int[] a = {9,1,8,2,7,3,6,4,5};
		System.out.println(linearSearch(a, 0));		// This should return false
		System.out.println(linearSearch(a, 3));		// This should return true
		selectionSort(a);							// This should sort the array
		System.out.println(binarySearch(a, 0));		// This should return -1
		System.out.println(binarySearch(a, 3));		// This should return 2 (the index of value 3 once array is sorted)
		// END OF TEST DATA
	}
	
	////////////// DO ALL OF YOUR CODING BELOW THIS LINE! //////////////////////////////////
	
	public static boolean linearSearch(int[] a, int value){
		// TODO: Must run no worse than O(n) time!
		for (int i = 0; i < a.length; i++) {
			if (a[i] == value) {
				return true;
			}
		}
		return false;
	}
	
	public static void selectionSort(int[] a){
		// TODO: Must run no worse than O(n2) time!
		for (int x = 0; x < a.length - 1; x++) {
			int min = a[x];
			int y = x;
			for (int i = x + 1; i < a.length; i++) {
				if (a[i] < min) {
					min = a[i];
					y = i;
				}
			}
			int placehold = min;
			a[y] = a[x];
			a[x] = placehold;
		}
	}
	
	public static int binarySearch(int[] a, int value){
		// TODO: Must run no worse than O(log n) time!
		int size = a.length;
		int left = 0;
		int right = size - 1;
		int midpoint = 0;
		
		while(left <= right) {
			midpoint = (left + right) / 2;
			 if (a[midpoint] < value) {
				left = midpoint + 1;
			}
			else if (a[midpoint] > value) {
				right = midpoint - 1;
			}
			else {
				return midpoint;
			}
		}
		return -1;
	}
}
