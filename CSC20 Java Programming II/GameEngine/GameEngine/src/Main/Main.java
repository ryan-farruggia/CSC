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

public class Main{
	public static void main(String[] args){
		Font hugeFont = null;
		/* The try/catch block below loads a custom font from our directory and sets the style and size of it. */
		try {
            hugeFont = Font.createFont(Font.TRUETYPE_FONT, new File("Font/Lato-Thin.ttf")).deriveFont(40f); 
            GraphicsEnvironment ge = GraphicsEnvironment.getLocalGraphicsEnvironment();
            ge.registerFont(Font.createFont(Font.TRUETYPE_FONT, new File("Font/Lato-Thin.ttf"))); 
        }catch (Exception e) {e.printStackTrace();}
		/* Save custom "gameString" objects for displaying text to the screen in GUI mode */
		gameString g = new gameString(Color.WHITE, 8, 32, "Sprite, Animation, and Text Test", hugeFont);
		gameString g2 = new gameString(Color.RED, 8, 80, "Press ESC key to exit...", hugeFont);
		/* Set up variables for the walking Chicken */
		int x = 0;	// Set initial horizontal coordinates for the chicken
		int step = 12;	// Number of pixels moved per step
		Sprites sprs = new Sprites();	// Set up the sprite buffer that holds current frame sprites
		Sprites backbuffer = new Sprites();	// Set up sprite buffer that holds game sprites
		/* Add the Chicken (frames, positions, etc.) */
		backbuffer.addSprite(new Sprite(x, 500, "sprites/chick00.png"));
		backbuffer.addSprite(new Sprite(x, 500, "sprites/chick01.png"));
		backbuffer.addSprite(new Sprite(x, 500, "sprites/chick02.png"));
		backbuffer.addSprite(new Sprite(x, 500, "sprites/chick01.png"));
		/* Set up a buffer to hold current text strings to be displayed */
		ArrayList<gameString> gs = new ArrayList<gameString>();
		/* Initialize screen into graphics mode at the desired resolution */
		Graphic gr = new Graphic(1920, 1080);
		/* Hide the default mouse cursor */
		gr.hideCursor();
		/* Set up the real time keyboard listener */
		Keyb kb = new Keyb();
		gr.addKeyListener(kb);
		/* Add the game loop object */
		gameLoop gl = new gameLoop(gr, gs, sprs);
		int frame = 0;
		int frameCounter = 0;
		char key = kb.getInputCodeX();
		while(key != '%'){
			gs.add(g);	// Add 1st text string to gameString buffer
			gs.add(g2);	// Add 2nd text string to gameString buffer
			// Add current chicken frame to the sprite frame buffer
			sprs.addSprite(backbuffer.getSprite(frame));
			// Run the gameloop renderer
			gl.run();
			// Poll the keyboard object for new input
			key = kb.getInputCodeX();
			// Clear sprite buffer for the next frame
			sprs.clearSprites();
			// Clear text buffer for next frame
			gs.clear();
			// Increment frame counter for the chicken
			frameCounter++;
			// If chicken has went through all frames, reset to beginning of animation
			if(frameCounter == 8){
				frameCounter = 0;
				frame++;
				if(frame > 3) frame = 0;
				for(int i = 0; i < backbuffer.size(); i++){
					// Move Chicken's horizontal position
					backbuffer.getSprite(i).moveXRelative(step);
					if(backbuffer.getSprite(i).getX() > gr.getWidth())
						// Once the end is reached, reset Chicken to left side of screen
						backbuffer.getSprite(i).moveXAbsolute(-128);
				}
			}
		}
		gr.normalClose();
	}
}