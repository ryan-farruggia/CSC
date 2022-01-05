package gameloop;

import java.awt.Color;
import java.awt.Graphics;
import java.util.List;

import Data.gameString;
import Graphics.Graphic;
import Graphics.Sprites;

public class gameLoop{
	Graphic _gph;
	List<gameString> _gs;
	Sprites _sps;
	
	public gameLoop(Graphic gph, List<gameString> gs, Sprites sps){
		if(gph == null)		throw new NullPointerException();
		_gph = gph;
		_gs = gs;
		_sps = sps;
	}
	
	public void run(){
		/* This will handle the game loop */
		do{
			do{
				Graphics g = null;
	            try {
	               g = _gph.getGraph();
	               g.clearRect(0, 0, _gph.getWidth(), _gph.getHeight());
	               g.setColor(Color.black);
	               g.fillRect(0, 0, _gph.getWidth(), _gph.getHeight());
	               Renderer.render(g, _gs, _sps);
	            } finally {
	               if( g != null ) {
	                  g.dispose();
	               }
	            }

			}while(_gph.getBufferStrategy().contentsRestored());
			_gph.getBufferStrategy().show();
		}while(_gph.getBufferStrategy().contentsLost());
	}
}