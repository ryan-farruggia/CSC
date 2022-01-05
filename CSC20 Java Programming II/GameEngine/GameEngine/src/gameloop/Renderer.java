package gameloop;

import Graphics.Sprites;

import java.awt.Font;
import java.awt.Graphics;
import java.util.Iterator;
import java.util.List;

import Data.Sprite;
import Data.gameString;

public class Renderer{
	
	public static void render(Graphics g, List<gameString> gs, Sprites sps){
		/* This is a generic function that can start fresh for any new gaming project.
		 * All one has to do is wipe the contents and start new and it should work fine
		 * with the rest of the game engine. */
		
		// First sprites...
		
		Iterator<Sprite> it = sps.getIterator();
		while(it.hasNext()){
			Sprite tmp = it.next();
			g.drawImage(tmp.getSprite(), tmp.getX(), tmp.getY(), null);
		}
		
		// ... then text
		for(gameString a: gs){
			Font temp = a.getFont().deriveFont(Font.BOLD);
			g.setFont(temp);
			g.setColor(a.getColor());
			g.drawString(a.toString(), a.getX(), a.getY());
		}
	}
}