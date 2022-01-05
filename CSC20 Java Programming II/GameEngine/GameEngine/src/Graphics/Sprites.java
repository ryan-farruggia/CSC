package Graphics;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import Data.Sprite;

/* This class will handle the details concerning image files. It won't render them as that is the job of the
 * renderer. But it will handle the linked list, setting up, etc. Hopefully, this can become a robust sprite
 * engine! */

public class Sprites{
	private List<Sprite> sprites;
	public Sprites(){
		sprites = new ArrayList<Sprite>();
	}
	
	public void addSprite(int x, int y, String fileName){
		Sprite temp = new Sprite(x, y, fileName);
		if(temp != null)
			sprites.add(temp);
	}
	
	public void addSprite(Sprite s){
		sprites.add(s);
	}
	
	public Sprite getSprite(int index){
		if(sprites.size() <= index)		return null;
		return sprites.get(index);
	}
	
	public void delSprite(int index){
		sprites.remove(index);
	}
	
	public void changeSprite(int index, String fileName){
		Sprite t1 = sprites.get(index);
		int x = t1.getX();
		int y = t1.getY();
		Sprite temp = new Sprite(x, y, fileName);
		sprites.set(index, temp);
	}
	
	public void changeSprite(int index, Sprite newSprite){
		sprites.set(index, newSprite);
	}
	
	public void clearSprites(){
		sprites.clear();
	}
	
	public int size(){
		return sprites.size();
	}
	
	public Iterator<Sprite> getIterator(){
		Iterator<Sprite> it = sprites.iterator();
		return it;
	}
}