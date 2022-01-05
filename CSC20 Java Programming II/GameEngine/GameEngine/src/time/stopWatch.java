package time;

/* This is used as a basic class to time short interval periods (animations, counter attacks, etc.)*/

public class stopWatch{
	private double start;
	private double _duration;
	private double _elapsed;
	
	public stopWatch(double duration){
		_duration = duration;
		_elapsed = 0;
		resetWatch();
	}
	
	public stopWatch(double duration, double elapsedTime){
		_duration = duration;
		_elapsed = elapsedTime;
		resetWatch();
	}
	
	public void changeDuration(double newDuration){
		_duration = newDuration;
	}
	
	public void resetWatch(){
		start = System.currentTimeMillis();
	}
	
	/* Added to aid in game timing. Returns time left on stopWatch. */
	public double millisLeft(){
		double current = System.currentTimeMillis();
		return (current - start) + _elapsed;
	}
	
	public int secondsElapsed(){
		return (int)(millisLeft() / 1000);
	}
	
	public boolean isTimeUp(){
		double current = System.currentTimeMillis();
		if((current - start) + _elapsed >= _duration){
			_elapsed = 0;			// Elapsed only works the first time!
			return true;
		}
		return false;
	}
	
	/* Static method that will return game time given enough parms. */
	public static String getGameTime(stopWatch current, int timeToggle){
		int hour = 0;
		String meridian;
		int minutes;
		switch(timeToggle){
		case 0:
			hour = 0;
			break;
			
		case 1:
			hour = 6;
			break;
			
		case 2:
			hour = 12;
			break;
			
		case 3:
			hour = 18;
			break;
		}
		minutes = (int)(current.millisLeft() / 1000);
		while(minutes >= 60){
			minutes -= 60;
			hour++;
		}
		if(hour == 12){
			meridian = "PM"; //$NON-NLS-1$
		}else if(hour > 12){
			hour -= 12;
			meridian = "PM"; //$NON-NLS-1$
		}else			meridian = "AM"; //$NON-NLS-1$
		if(hour == 0)					hour = 12;
		String min = String.format("%02d", minutes); //$NON-NLS-1$
		return "Time of the Realm: " + hour + ":" + min + " " + meridian; //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$
	}
}