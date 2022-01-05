package Main;

import java.awt.Color;
import java.awt.Font;
import java.awt.GraphicsEnvironment;
import java.io.File;
import java.util.ArrayList;

import Data.Sprite;
import Data.gameString;
import Graphics.Graphic;
import Graphics.Sprites;
import Input.Keyb;
import gameloop.gameLoop;
import time.Timer;

public class LoadTest{
	public static void main(String[] args){
		Timer time = new Timer(0); 			// Start new timer
		Font hugeFont = null;
		try {
            hugeFont = Font.createFont(Font.TRUETYPE_FONT, new File("Font/rotunda.ttf")).deriveFont(40f); //$NON-NLS-1$
            GraphicsEnvironment ge = GraphicsEnvironment.getLocalGraphicsEnvironment();
            ge.registerFont(Font.createFont(Font.TRUETYPE_FONT, new File("Font/rotunda.ttf"))); //$NON-NLS-1$
        }catch (Exception e) {e.printStackTrace();}
		Sprites sprs = new Sprites();
		Sprites backbuffer = new Sprites();
		// Load the files here...
		final int max = 1000;
		for(int i = 0; i < max; i++)
			backbuffer.addSprite(new Sprite(0, 0, "Art/gameScreen_altar_00.bmp"));
		// End of load...
		
		// List time elapsed...
		gameString g = new gameString(Color.WHITE, 800, 100, "Loading time in mS: " + time.getTimeElapsedMS(), hugeFont);
		// End list time
		ArrayList<gameString> gs = new ArrayList<gameString>();
		Graphic gr = new Graphic(1920, 1080);
		//gr.hideCursor();
		Keyb kb = new Keyb();
		gr.addKeyListener(kb);
		// Add the game loop object
		gameLoop gl = new gameLoop(gr, gs, sprs);
		int frame = 0;
		char key = kb.getInputCodeX();
		while(key != '%'){
			gs.add(g);
			sprs.addSprite(backbuffer.getSprite(frame));
			gl.run();
			key = kb.getInputCodeX();
			sprs.clearSprites();
			gs.clear();
		}
		gr.normalClose();
	}
}