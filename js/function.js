// Get the popup element and the text elements
const popup1 = document.querySelector('.popup1');
const popup2 = document.querySelector('.popup2');
const popup3 = document.querySelector('.popup3');
const popup4 = document.querySelector('.popup4');
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const text3 = document.querySelector('#text3');
const text4 = document.querySelector('#text4');

// Show the first text after 2 seconds
setTimeout(function() {
  text1.classList.add('show');
}, 2000);

// Show the second text after 2 seconds
setTimeout(function() {
  text2.classList.add('show');
}, 2000);

setTimeout(function() {
  text3.classList.add('show');
}, 2000);

// Show the second text after 2 seconds
setTimeout(function() {
  text4.classList.add('show');
}, 2000);


// Show the first text after 5 seconds
setTimeout(function() {
  text5.classList.add('show');
}, 5000);

// Show the second text after 5 seconds
setTimeout(function() {
  text6.classList.add('show');
}, 5000);

setTimeout(function() {
  text7.classList.add('show');
}, 5000);

// Show the second text after 5 seconds
setTimeout(function() {
  text8.classList.add('show');
}, 5000);

// Hide the popup after 3 seconds
setTimeout(function() {
  popup1.classList.remove('hide');
}, 3000);


// Hide the popup after 3 seconds
setTimeout(function() {
  popup2.classList.remove('hide');
}, 3000);

// Hide the popup after 6 seconds
setTimeout(function() {
  popup3.classList.remove('hide');
}, 6000);


// Hide the popup after 6 seconds
setTimeout(function() {
  popup4.classList.remove('hide');
}, 6000);



function fadeInSvg(svgId, delay) {
    var svg = document.getElementById(svgId);
    setTimeout(function() {
      svg.style.opacity = 1;
    }, delay);
  }
  
  fadeInSvg('SA-3', 600); // fade in svg3 after 0.6 second (600 ms)
  fadeInSvg('SA-1', 900); // fade in svg1 after 0.9 seconds (900 ms)
  fadeInSvg('SA-4', 1400); // fade in svg4 after 1.4 seconds (1400 ms)
  fadeInSvg('SA-2', 1900); // fade in svg2 after 1.9 seconds (1900 ms)
  
  fadeInSvg('SA-5', 4500); // fade in svg5 after 4.5 second (4500 ms)
  fadeInSvg('SA-7', 5700); // fade in svg7 after 5.7 seconds (5700 ms)
  fadeInSvg('SA-6', 4200); // fade in svg6 after 4.2 seconds (4200 ms)
  fadeInSvg('SA-8', 5200); // fade in svg8 after 5.2 seconds (5200 ms)

  // fadeInSvg('SA-3', 6200); // fade in svg1 after 1 second (1000 ms)
  // fadeInSvg('SA-1', 6800); // fade in svg3 after 2 seconds (2000 ms)
  // fadeInSvg('SA-4', 6500); // fade in svg2 after 3 seconds (3000 ms)
  // fadeInSvg('SA-2', 7100); // fade in svg2 after 4 seconds (4000 ms)
  
  // fadeInSvg('SA-5', 10000); // fade in svg1 after 1 second (1000 ms)
  // fadeInSvg('SA-7', 10300); // fade in svg3 after 2 seconds (2000 ms)
  // fadeInSvg('SA-6', 10600); // fade in svg2 after 3 seconds (3000 ms)
  // fadeInSvg('SA-8', 10900); // fade in svg2 after 4 seconds (4000 ms)
  
  
  
  function fadeOutSvg(svgId, delay) {
    var svg = document.getElementById(svgId);
    setTimeout(function() {
      var opacity = 1;
      var timer = setInterval(function() {
        if (opacity <= 0) {
          clearInterval(timer);
          svg.style.display = 'none'; // hide the SVG element after it has faded out
        }
        svg.style.opacity = opacity;
        opacity -= 0.3; // decrease the opacity gradually
      }, 200); // fade out over 1 second (100 ms intervals)
    }, delay);
  }
  
  fadeOutSvg('SA-3', 3000); // fade out svg2 after 6 seconds (6000 ms)
  fadeOutSvg('SA-1', 3000); // fade out svg2 after 6 seconds (6000 ms)
  fadeOutSvg('SA-4', 3000); // fade out svg2 after 6 seconds (6000 ms)
  fadeOutSvg('SA-2', 3000); // fade out svg2 after 6 seconds (6000 ms)
  
  fadeOutSvg('SA-8', 6000); // fade out svg2 after 6 seconds (6000 ms)
  fadeOutSvg('SA-6', 6000); // fade out svg2 after 6 seconds (6000 ms)
  fadeOutSvg('SA-5', 6000); // fade out svg2 after 6 seconds (6000 ms)
  fadeOutSvg('SA-7', 6000); // fade out svg2 after 6 seconds (6000 ms)

  // fadeOutSvg('SA-3', 9000); // fade out svg2 after 6 seconds (6000 ms)
  // fadeOutSvg('SA-1', 9000); // fade out svg2 after 6 seconds (6000 ms)
  // fadeOutSvg('SA-4', 9000); // fade out svg2 after 6 seconds (6000 ms)
  // fadeOutSvg('SA-2', 9000); // fade out svg2 after 6 seconds (6000 ms)

  // fadeOutSvg('SA-8', 12000); // fade out svg2 after 6 seconds (6000 ms)
  // fadeOutSvg('SA-6', 12000); // fade out svg2 after 6 seconds (6000 ms)
  // fadeOutSvg('SA-5', 12000); // fade out svg2 after 6 seconds (6000 ms)
  // fadeOutSvg('SA-7', 12000); // fade out svg2 after 6 seconds (6000 ms)

  window.onload = function() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }

  function changeVolume(volume) {
    audio.volume = volume;
  }