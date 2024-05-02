(function(){
	var playing = !!('ontouchstart' in window) || !!('ontouchstart' in document.documentElement) || !!window.ontouchstart || (!!window.Touch && !!window.Touch.length) || !!window.onmsgesturechange || (window.DocumentTouch && window.document instanceof window.DocumentTouch),
	snd = document.getElementsByTagName('audio')[0],
	ctrl = document.getElementById('pauseplay');
	ctrl.title = playing? 'Mute' : 'Unmute';
	ctrl.addEventListener('click', function(){
		if(playing){
			snd.pause();
		} else {
			snd.play();
		}
		playing = !playing;
		ctrl.title = playing? 'Mute' : 'Unmute';
		ctrl.src = playing? 'images/nomute.png' : 'images/mute.png';
	}, false);	
})(); //Mute button trigger


(function(){
	var playing = !!('ontouchstart' in window) || !!('ontouchstart' in document.documentElement) || !!window.ontouchstart || (!!window.Touch && !!window.Touch.length) || !!window.onmsgesturechange || (window.DocumentTouch && window.document instanceof window.DocumentTouch),
	snd = document.getElementsByTagName('audio')[0],
	ctrl = document.getElementById('reset');
	ctrl.title = playing? 'Reset' : 'Play';
	ctrl.addEventListener('click', function(){
		if(playing){
			snd.pause();
		} else {
			snd.currentTime = 0
			snd.play();
		}
		playing = !playing;
		ctrl.title = playing? 'Reset' : 'Play';
		ctrl.src = playing? 'images/stop.png' : 'images/play.png';
	}, false);	
})();

 
var audio = document.getElementById("bgAudio");
audio.volume = 0.2; //Set default volume range