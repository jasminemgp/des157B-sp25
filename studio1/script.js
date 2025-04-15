(function(){

    'use strict';

    console.log('reading JS');

    const myVideo = document.querySelector('#myVideo');
    const fs = document.querySelector('.fa-music');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const img1 = document.querySelector('#img1');

    const poem = {
        start: [0, 5],
        stop: [4, 7],
        line: [line1, line2]
    }

     //this variable calls a function named checkTime every second
    const intervalID = setInterval(checkTime, 1000);

    function checkTime() {
        console.log(parseInt(myVideo.currentTime));

        if (poem.start[0] < myVideo.currentTime && myVideo.currentTime < poem.stop[0]) {
            poem.line[0].className = "showing";
        } else {
            line1.className = "hidden";
        }

        if (5 < myVideo.currentTime && myVideo.currentTime < 7) {
            line2.className = "showing";
        } else {
            line2.className = "hidden";
        }

/*                 if (8 < myVideo.currentTime && myVideo.currentTime < 10) {
            img1.className = "showing";
        } else {
            img1.className = "hidden";
        } */
    }

    fs.addEventListener('click', function() {
        //the fullscreenElement attribute returns null if the element is in windowed mode
        if (!document.fullscreenElement) {
            //document.dpcumentElement returns the Element that is a direct child of the document,
            // which is the <html> element
            document.documentElement.requestFullscreen();

        } else {
            document.exitFullscreen();
        }
    });

    

})();