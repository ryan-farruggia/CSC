/* This is my attempt to update my Graphics Engine to be more readable. Might be used for educational purposes as well.
 * 2018 Matthew W. Phillips
 */

package Graphics;

import java.awt.Cursor;
import java.awt.DisplayMode;
import java.awt.Graphics;
import java.awt.GraphicsDevice;
import java.awt.GraphicsEnvironment;
import java.awt.Point;
import java.awt.Toolkit;
import java.awt.event.KeyListener;
import java.awt.event.MouseListener;
import java.awt.image.BufferedImage;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

@SuppressWarnings("serial")
public class Graphic extends JFrame{
	// Fields
	private GraphicsDevice gd;
	private DisplayMode _dm;
	private int _x, _y;
	
	// Constructor
	public Graphic(int x, int y){
		_x = x;
		_y = y;
		init();
	}
	
	// Methods
	public int getHeight(){
		return _y;
	}
	
	public int getWidth(){
		return _x;
	}
	
	public Graphics getGraph(){
		return this.getBufferStrategy().getDrawGraphics();
	}
	
	public void setMouseListener(MouseListener m){
		if(m == null)	errorClose("Null pointer in Mouse Listener...exiting"); //$NON-NLS-1$
		addMouseListener(m);
	}
	
	public void setKeyListener(KeyListener k){
		if(k == null)	errorClose("Null pointer in Key Listener...exiting"); //$NON-NLS-1$
		addKeyListener(k);
	}
	
	public void hideCursor(){
		BufferedImage cursorImage = new BufferedImage(16, 16, BufferedImage.TYPE_INT_ARGB);
		Cursor blankCursor = Toolkit.getDefaultToolkit().createCustomCursor(cursorImage, 
				new Point(0,0), "blank cursor"); //$NON-NLS-1$
		getContentPane().setCursor(blankCursor);
	}
	
	public void errorClose(String msg){
		//writeLog(msg);
		closeFullScreen();
		JOptionPane.showMessageDialog(null, msg);
		System.exit(0);
	}
	
	public void normalClose(){
		closeFullScreen();
		System.exit(0);
	}
	
	private int isSupported(int x, int y, int bits, DisplayMode[] dms){
		for(int i = 0; i < dms.length; i++){
			if(dms[i].getHeight() == y && dms[i].getWidth() == x && dms[i].getBitDepth() == bits){
				if(gd.isDisplayChangeSupported() == true)
					return i;
			}
		}
		return -1;
	}
	
	private void closeFullScreen(){
		gd.setFullScreenWindow(null);
	}
	
	private void init(){
		gd = GraphicsEnvironment.getLocalGraphicsEnvironment().getDefaultScreenDevice();
		if(gd.isFullScreenSupported() == false)
			errorClose("Full Screen is not supported...exiting."); //$NON-NLS-1$
		setUndecorated(true);
		setResizable(false);
		setIgnoreRepaint(true);
		gd.setFullScreenWindow(this);
		DisplayMode[] dms = gd.getDisplayModes();
		boolean isSupported = false;
		int vindexN = isSupported(_x, _y, 32, dms);
		if(vindexN != -1){
			_dm = dms[vindexN]; 
			isSupported = true;
		} 
		
		if(isSupported == false)
			errorClose("Display mode not supported."); //$NON-NLS-1$
		
		gd.setDisplayMode(_dm);
		createBufferStrategy(2);						// Create double buffering
		_x = _dm.getWidth();
		_y = _dm.getHeight();
	}
}