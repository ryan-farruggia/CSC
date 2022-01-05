package main;
import java.util.Scanner;
import java.io.*;

public class Main {
	public static void part1() throws Exception {
		Stack myStack = new Stack();
		File input = new File("areacode.txt");
		Scanner infile = new Scanner(input);
		while (infile.hasNextLine()) {
			String line = infile.nextLine();
			// may need to edit this part
			myStack.push(line);
			if (infile.hasNextLine()) {
				myStack.push("\n");	
			}
		}
		infile.close();
		
		FileWriter output = new FileWriter("temp.txt");
		BufferedWriter outfile = new BufferedWriter(output);
		while (!myStack.isempty()) {
			outfile.write(myStack.top());
			myStack.pop();
		}
		outfile.close();
	}
	public static void part2() throws Exception {
		Queue myQueue = new Queue();
		File input = new File("areacode.txt");
		Scanner infile = new Scanner(input);
		while (infile.hasNextLine()) {
			String line = infile.nextLine();
			myQueue.enqueue(line);
			if (infile.hasNextLine()) {
				myQueue.enqueue("\n");
			}
		}
		infile.close();
		
		FileWriter output = new FileWriter("temp.txt");
		BufferedWriter outfile = new BufferedWriter(output);
		
		while(!myQueue.isempty()) {
			String str = myQueue.front();
			// may need to edit this part
			myQueue.dequeue();
		}
		outfile.close();
	}
	public static void part3() throws Exception {
		Queue myQueue1 = new Queue();
		Queue myQueue2 = new Queue();
		File input = new File("areacode.txt");
		Scanner infile = new Scanner(input);
		while (infile.hasNextLine()) {
			String line = infile.nextLine();
			myQueue1.enqueue(line);
			if (infile.hasNextLine()) {
				myQueue1.enqueue("\n");
			}
		}
		infile.close();
		input = new File("areacode.txt");
		infile = new Scanner(input);
		while (infile.hasNextLine()) {
			String line = infile.nextLine();
			myQueue2.enqueue(line);
			if (infile.hasNextLine()) {
				myQueue2.enqueue("\n");
			}
		}
		infile.close();
		while(!myQueue1.isempty() || !myQueue2.isempty()) {
			/*if (myQueue1.front() != myQueue2.front()) {
				System.out.println("The files are not the same");
				return;
			}*/
			myQueue1.dequeue();
			myQueue2.dequeue();
		}
		System.out.println("The files are identical");
	}
	public static void main(String[] args) throws Exception {
		part1();
		part2();
		System.out.println("Result for part 3: ");
		part3();
	}
}

class Node {
	public String info;
	public Node next;
	
	public Node() {
		info = "";
		next = null;
	}
	public Node(String str) {
		info = str;
		next = null;
	}
}

class Stack {
	private Node head;
	public Stack() {
		head = null;
	}
	public void push(String str) {
		if (head == null) {
			head = new Node(str);
		} else {
			Node temp = new Node(str);
			temp.next = head;
			head = temp;
		}
	}
	public void pop() {
		if (head == null) {
			return;
		} else {
			head = head.next;
		}
	}
	public void display() {
		Node temp = head;
		while (temp != null) {
			System.out.println();
			temp = temp.next;
		}
		System.out.println();
	}
	public String top() {
		return head.info;
	}
	public boolean isempty() {
		return head == null;
	}
}

class Queue {
	private Node head;
	public Queue() {
		head = null;
	}
	public void enqueue(String str) {
		if (head == null) {
			head = new Node(str);
		} else {
			Node temp = head;
			while(temp.next != null) {
				temp = temp.next;
			}
			temp.next = new Node(str);
		}
	}
	public void dequeue() {
		if (head == null) {
			return;
		} else {
			head = head.next;
		}
	}
	public void display() {
		Node temp = head;
		while (temp != null) {
			System.out.println(temp.info);
			temp = temp.next;
		}
		System.out.println();
	}
	public String front() {
		return head.info;
	}
	public boolean isempty() {
		return (head == null);
	}
}
