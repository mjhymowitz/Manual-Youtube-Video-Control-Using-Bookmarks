// Go back 5 seconds
javascript:(
  function(){
    var video = document.getElementsByClassName("html5-main-video")[0];
    if(video == null){
      return nil;
    }

    video.currentTime -= 5;
  }
)();

// Go forward 5 seconds
javascript:(
  function(){
    var video = document.getElementsByClassName("html5-main-video")[0];
    if(video == null){
      return nil;
    }

    video.currentTime += 5;
  }
)();

// Speedup video speed by user input
javascript:(
  function(){
    var video = document.getElementsByClassName("html5-main-video")[0];
    if(video == null){
      return nil;
    }

    var speed = prompt("What speed would you like this to play at?");
    if (speed!==null){
      video.playbackRate = speed;
    }
  }
)();

// Go to timestamp
javascript:(
  function(){
    var video = document.getElementsByClassName("html5-main-video")[0];
    if(video == null){
      return nil;
    }

    var timestamp = prompt("Go to timestame ("+video.duration.toFixed(0)+")?");
    if (timestamp!==null){
      video.currentTime = timestamp;
    }
  }
)();