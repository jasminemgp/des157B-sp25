(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const sections = document.querySelectorAll('section')
    const miffyImg = document.querySelector('#miffy');
 

    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            button.className = 'switch';
            miffyImg.src = 'images/miffysw2.png';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            button.removeAttribute('class');
            miffyImg.src = 'images/miffysw1.png';
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark';
        }
    })
})()