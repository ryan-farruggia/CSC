package Data;

import java.awt.Color;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics;

public class gameString{
	private String _str;
	private Color _color;
	private int _x, _y;
	private Font cFont;
	
	public gameString(Color color,
			int x, int y, String str, Font font){
		_str = str;
		_color = color;
		_x = x;
		_y = y;
		cFont = font;
	}
	
	public int getX(){
		return _x;
	}
	
	public int getY(){
		return _y;
	}
	
	public Color getColor(){
		return _color;
	}
	
	public String toString(){
		return _str;
	}
	
	public Font getFont(){
		return cFont;
	}
	
	public void resetString(String newStr){
		_str = newStr;
	}
	
	/* Get width of a string in pixels */
	private static int getStringWidth(Graphics g, Font f, String s) {		
	    FontMetrics fm   = g.getFontMetrics(f);
	    java.awt.geom.Rectangle2D rect = fm.getStringBounds(s, g);
	    return (int)Math.round(rect.getWidth());
	}
	
	public static int getCenteredXPosition(Graphics g, Font f, 
			String s, int x, int x2){
		int bWidth = x2 - x;
		int width = getStringWidth(g, f, s);
		int newX = x + ((bWidth/2)- (width/2));
		return newX;
	}
}