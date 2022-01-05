//Student Name: Ryan Farruggia
package Main;

//Use Fuel (0-100%), Cartridge (T/F), Work (hours, rate)

interface Work{
	double pay(double hours, double rate);
}

interface Cartridge{
	default String card(boolean inserted) {
		if (inserted == true) {
			return "Starting game...";
		} else {
			return "No cartridge inserted.";
		}
	}
}

interface Fuel{
	static String level(int percent) {
		if (percent >= 75 && percent <= 100) {
			return "Nothing better than a full tank of gas!";
		} else if (percent >= 50 && percent < 75) {
			return "Still got a decent amount, no need to worry.";
		} else if (percent >= 25 && percent < 50) {
			return "Ehh, I'll just get gas tomorrow.";
		} else if (percent >= 0 && percent < 25) {
			return "I'm gonna be stranded on the highway if I don't make a pit stop.";
		} else if (percent < 0 || percent > 100) {
			return "I don't think this is possible.";
		} else {
			return "Input not recognized.";
		}
	}
}

public class Lab03 implements Work, Cartridge, Fuel {
	public static void main(String[] args) {
		Lab03 obj = new Lab03();
		p("Pay before taxes: $" + obj.pay(20.5, 13.5));
		p("Pay before taxes: $" + obj.pay(40, 35));
		p(Fuel.level(30));
		p(Fuel.level(120));
		p(obj.card(true));
		p(obj.card(false));
	}
	
	public static <E> void p(E item) {
		System.out.println(item);
	}
	
	@Override
	public double pay(double hours, double rate) {
		return hours*rate;
	}
}
