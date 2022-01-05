package Data;

import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;
import java.awt.image.WritableRaster;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

/* This will work in tandem with the Sprites.java file in the graphics package. This is a single object of
 * type Sprite. That class will handle the grouping of the type for purposes of game development. */

public class Sprite{
	private BufferedImage _image;
	private int _x, _y;
	private String _file;
	public Sprite(int x, int y, String spriteFileName){
		try {
			_image = ImageIO.read(new File(spriteFileName));
		} catch (IOException e) {
			throw new IllegalArgumentException();
		}
		_x = x;
		_y = y;
		_file = spriteFileName;
	}
	
	public Sprite(int x, int y, BufferedImage image){
		_image = image;
		_x = x;
		_y = y;
	}
	
	public Sprite(Sprite newSprite){
		_x = newSprite.getX();
		_y = newSprite.getY();
		_image = deepCopy(newSprite.getSprite());
	}
	
	/* Used to copy buffered images by value */
	static BufferedImage deepCopy(BufferedImage bi) {
		 ColorModel cm = bi.getColorModel();
		 boolean isAlphaPremultiplied = cm.isAlphaPremultiplied();
		 WritableRaster raster = bi.copyData(null);
		 return new BufferedImage(cm, raster, isAlphaPremultiplied, null);
		}
	
	public BufferedImage getSprite(){
		return _image;
	}
	
	public int getX(){
		return _x;
	}
	
	public int getY(){
		return _y;
	}
	
	public void moveXAbsolute(int newX){
		_x = newX;
	}
	
	public void moveYAbsolute(int newY){
		_y = newY;
	}
	
	public void moveXRelative(int offsetX){
		_x += offsetX;
	}
	
	public void moveYRelative(int offsetY){
		_y += offsetY;
	}
	
	public String toString(){
		return _file;
	}
}