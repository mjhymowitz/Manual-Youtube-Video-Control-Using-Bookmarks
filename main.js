// Go back 5 seconds
javascript:(
  function(){
    var video = document.querySelectorAll('video');
    if(video == null){
      return nil;
    }

    video.forEach(element => {
      element.currentTime -= 5;
    });
  }
)();

// Go forward 5 seconds
javascript:(
  function(){
    var video = document.querySelectorAll('video');
    if(video == null){
      return nil;
    }
    video.forEach(element => {
      element.currentTime += 5;
    });
  }
)();

// Speedup video speed by user input
javascript:(
  function(){
    var video = document.querySelectorAll('video');
    if(video == null){
      return nil;
    }

    var speed = prompt("What speed would you like this to play at?");
    if (speed == null){
      return nil;
    }

    video.forEach(element => {
      element.playbackRate = speed;
    });
  }
)();

// Go to timestamp
javascript:(
  function(){
    var video = document.querySelectorAll('video');
    if(video == null){
      return nil;
    }

    var timestamp = prompt("Go to timestame ("+video.duration.toFixed(0)+")?");
    if (timestamp == null){
      return nil;
    }

    video.forEach(element => {
      element.currentTime = timestamp;
    });
  }
)();

// Remove recommended video Element
javascript:(
  function(){
    document.querySelector(".ytp-ce-video").remove();
  }
)();