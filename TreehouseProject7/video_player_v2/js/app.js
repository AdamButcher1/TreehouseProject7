var vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn, cues, videobox, controls;


function initializePlayer(){
	// Set object references
	vid = document.getElementById("my_video");
	playbtn = document.getElementById("playpausebtn");
	seekslider = document.getElementById("seekslider");
	curtimetext = document.getElementById("curtimetext");
	durtimetext = document.getElementById("durtimetext");
	mutebtn = document.getElementById("mutebtn");
	volumeslider = document.getElementById("volumeslider");
	fullscreenbtn = document.getElementById("fullscreenbtn");
	videoBox = document.getElementById("video_player_box");
    cues = document.querySelectorAll("span.cue");
	controls = document.getElementById("video_controls_bar");
	// Add event listeners
	playbtn.addEventListener("click",playPause,false);
	seekslider.addEventListener("change",vidSeek,false);
	vid.addEventListener("timeupdate",seektimeupdate,false);
	mutebtn.addEventListener("click",vidMute,false);
	volumeslider.addEventListener("change",setvolume,false);
	fullscreenbtn.addEventListener("click",toggleFullScreen,false);
	vid.addEventListener("timeupdate", highlightText, false);
	videoBox.addEventListener("mouseleave", hideControls, false);
	videoBox.addEventListener("mouseenter", showControls, false);
}

window.onload = initializePlayer;

function playPause(){
	if(vid.paused){
		vid.play();
		playbtn.innerHTML = "<img id=\"play-pause-icon\" src=\"icons/pause-icon.png\" alt=\"Pause Button\" />";
	} else {
		vid.pause();
		playbtn.innerHTML = "<img id=\"play-pause-icon\" src=\"icons/play-icon.png\" alt=\"Play Button\"/>";
	}
}

function vidSeek() {
	var seekto = vid.duration * (seekslider.value / 100);
	vid.currentTime = seekto;
}

function seektimeupdate() {
	var nt = vid.currentTime * (100/vid.duration);
	seekslider.value = nt;
	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.floor(vid.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
}

function vidMute() {
		if(vid.muted){
		vid.muted = false;
		mutebtn.innerHTML = "<img id=\"play-pause-icon\" src=\"icons/volume-on-icon.png\" alt=\"Volume On\"/>";
	} else {
		vid.muted = true;
		mutebtn.innerHTML = "<img id=\"play-pause-icon\" src=\"icons/volume-off-icon.png\" alt=\"Volume Off\"/>";
	}
}

function setvolume(){
	vid.volume = volumeslider.value / 100;
}

function toggleFullScreen(){
	if(vid.requestFullScreen){
		vid.requestFullScreen();
	} else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	} else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}

function toggleHighlight(n) {
		for (var i=0; i < cues.length; i++) {
			cues[i].classList.remove("highlighted");
		}
	cues[n].classList.add('highlighted');
}

function highlightText() {

	var highlightTime = vid.currentTime;

		if (highlightTime > 0 && highlightTime < 4.13) {
			toggleHighlight(0);
		} else if (highlightTime > 4.13 && highlightTime < 7.535) {
			toggleHighlight(1);
		} else if (highlightTime > 7.535 && highlightTime < 11.27) {
			toggleHighlight(2);
		} else if (highlightTime > 11.27 && highlightTime < 13.96) {
			toggleHighlight(3);
		} else if (highlightTime > 13.96 && highlightTime < 17.94) {
			toggleHighlight(4);
		} else if (highlightTime > 17.94 && highlightTime < 22.37) {
			toggleHighlight(5);
		} else if (highlightTime > 22.37 && highlightTime < 26.88) {
			toggleHighlight(6);
		} else if (highlightTime > 26.88 && highlightTime < 32.1) {
			toggleHighlight(7);
		} else if (highlightTime > 32.1 && highlightTime < 34.73) {
			toggleHighlight(8);
		} else if (highlightTime > 34.73 && highlightTime < 39.43) {
			toggleHighlight(9);
		} else if (highlightTime > 39.43 && highlightTime < 42.35) {
			toggleHighlight(10);
		} else if (highlightTime > 42.35 && highlightTime < 46.3) {
			toggleHighlight(11);
		} else if (highlightTime > 46.3 && highlightTime < 49.27) {
			toggleHighlight(12);
		} else if (highlightTime > 49.27 && highlightTime < 53.76) {
			toggleHighlight(13);
		} else if (highlightTime > 53.76 && highlightTime < 57.78 ) {
			toggleHighlight(14);
		}
}

function hideControls() {
	if (vid.paused === false) {
	controls.style.visibility = "hidden";
	}
	seekslider.style.bottom = "0";
}

function showControls() {
	controls.style.visibility = "visible";
	if (document.documentElement.clientWidth < 700) {
		seekslider.style.bottom = "45%";
	}
	if (document.documentElement.clientWidth < 705) {
		seekslider.style.bottom = "32%";
	}
	else if (document.documentElement.clientWidth < 1465) {
		seekslider.style.bottom = "20%";
	}
	else if (document.documentElement.clientWidth < 1560) {
		seekslider.style.bottom = "18%";
	} else
	seekslider.style.bottom = "12%";
}
