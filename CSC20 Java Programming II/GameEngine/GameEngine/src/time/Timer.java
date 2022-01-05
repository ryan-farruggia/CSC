package time;

public class Timer{
	private long tStart;
	private int elapsedSecs;
	private int offset;
	public Timer(int elapsed){
		offset = elapsed;
		init();
	}
	
	private void init(){
		tStart = System.currentTimeMillis();
		elapsedSecs = 0;
	}
	
	/* Resets the timer with elapsed as a starting offset (in seconds), if needed...otherwise, set to 0 for
	 * fresh timing. */
	public void reset(int elapsed){
		offset = elapsed;
		init();
	}
	
	public void addElapsed(int elapsed){
		offset = elapsed;
	}
	
	/* Get the time elapsed in mS */
	public long getTimeElapsedMS(){
		long temp = System.currentTimeMillis();
		long diff = temp - tStart;
		return diff;
	}
	
	/* Returns the time elapsed, in seconds*/
	public int getTimeElapsed(){
		long temp = System.currentTimeMillis();
		long diff = temp - tStart;
		elapsedSecs = (int)(diff / 1000);
		return (elapsedSecs + offset);
	}
	
	/* Returns a time string in hh:mm:ss format */
	public static String secsToString(int secs){
		int _mins = (secs / 60);
		int _secs = secs - (_mins * 60);
		int _hours = (_mins / 60);
		_mins = _mins - (_hours * 60);
		String min = String.format("%02d", _mins); //$NON-NLS-1$
		String sec = String.format("%02d", _secs); //$NON-NLS-1$
		String hrs = String.format("%02d", _hours); //$NON-NLS-1$
		String tmp = hrs + ":" + min + ":" + sec; //$NON-NLS-1$ //$NON-NLS-2$
		return tmp;
	}
}