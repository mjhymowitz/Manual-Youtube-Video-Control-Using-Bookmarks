# Manual Youtube Video Control Bookmark
## Description
Using bookmarks to execute javascript scripts to control youtube videos  (Doesn't work on Youtube shorts)

Created: Jun 15, 2024

## Base Code
```JavaScript
javascript:(
  function(){
    var video = document.getElementsByClassName("html5-main-video")[0];
  }
)();
```

## Installation Instructions
1. Copy the code to your clipboard

For Chromium based browsers
2. Right click on the bookbar and click paste from the drop down
3. Right click the newly created bookmark and rename it to whatever you want
5. Go to Youtube and test it out on any video

For Firefox based browsers
2. Right click on the bookbar and click "Add Bookmark"
3. Paste the javascript in the URL box
4. Name the bookmark to whatever you want
5. Go to Youtube and test it out on any video

## Deep Dive Explaination
The `javascript:(...)` tells the browser to execute the code inside the "(...)" as javascript
The `function(){...}` tells the javascript compiler that the code is a function to execute.
The `var video = ... ;` is used to define a variable called video to make executing the code simpler and more readable for programers.
The `document` referers to the entire webpage of this tab as a variable.
The `document.getElementsByClassName("html5-main-video")` tells javascript to search the variable `document` for all html elements with the class name "html5-main-video".
The `[0]` at the end of `document.getElementsByClassName("html5-main-video")[0]` tells the javascript compiler to return the first html return by the `getElementsByClassName()` function.
