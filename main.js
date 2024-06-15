// Go back 5 seconds
javascript:(
  function(){
    var video = document.getElementsByClassName("html5-main-video")[0];
    video.currentTime -= 5;
  }
)();

// Go forward 5 seconds
javascript:(
  function(){
    var video = document.getElementsByClassName("html5-main-video")[0];
    video.currentTime += 5;
  }
)();

// Speedup video speed by user input
javascript:(
  function(){
    var speed = prompt("What speed would you like this to play at?");
    var video = document.getElementsByClassName("html5-main-video")[0];
    if (speed!==null){
      video.playbackRate = speed;
    }
  }
)();

// Go to timestamp
javascript:(
  function(){
    var timestamp = prompt("Go to timestamp (seconds)?");
    var video = document.getElementsByClassName("html5-main-video")[0];
    if (timestamp!==null){
      video.currentTime = timestamp;
    }
  }
)();