 var Myvideo=document.getElementById("video1");
	  function playPause(){
	   if(Myvideo.paused){
	     Myvideo.play();
	   }
	   else{
	    Myvideo.pause();
	   }
	  }
	  function markBig(){
	  Myvideo.width="500"
	  }
	  function makeSmall(){
	   Myvideo.width="300"
	  }
	  function makeNormal(){
	  Myvideo.width="400"
	  }

