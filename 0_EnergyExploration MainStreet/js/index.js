document.body.addEventListener('touchstart', function() {
  if(audiosWeWantToUnlock) {
   for(let audio of audiosWeWantToUnlock) {
    audio.play()
    audio.pause()
    audio.currentTime = 0
   }
   audiosWeWantToUnlock = null
 }
 }, false)
 //where earlier you did:
 var audiosWeWantToUnlock = []
 audiosWeWantToUnlock.push(new Audio('mySoundEffect.wav'))
 audiosWeWantToUnlock.push(new Audio('myOtherSoundEffect.wav'))


var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 


jQuery(function($) {
  var pop = $('',);
  pop.click(function() {
    e.stopPropagation();
  });
  
  $('a.marker').click(function(e) {
  
  });
  
  $(document).click(function() {
    pop.removeClass('open');
  });
  
  pop.each(function() {
    var w = $(window).outerWidth(),
        edge = Math.round( ($(this).offset().left) + ($(this).outerWidth()) );
    if( w < edge ) {
      $(this).addClass('edge');
    }
  });
});


$(document).ready(function(){
  $("#buttonOff1").click(function(){
    $("#turbines_phone,#buttonOff1").toggle();
  });
});

$(document).ready(function(){
  $("#buttonOn1").click(function(){
    $("#turbines_phone,#buttonOff1").toggle();
  });
});



$(document).ready(function(){
  $("#anim_off").click(function(){
    $("#anim_off").toggle();
  });
});

$(document).ready(function(){
  $("#anim_on").click(function(){
    $("#anim_off").toggle();
  });
});


$(document).ready(function(){
  $("#sound_off").click(function(){
    $("#sound_off").toggle();
  });
});

$(document).ready(function(){
  $("#sound_on").click(function(){
    $("#sound_off").toggle();
  });
});


$("audio").on("play", function() {
  var id = $(this).attr('id');

  $("audio").not(this).each(function(index, audio) {
      audio.pause();
  });
});

// pause animation
document.querySelector("#anim_off").addEventListener('click', function() {
	document.querySelector("#steam-one").style.animationPlayState = 'paused';
});

// play animation
document.querySelector("#anim_on").addEventListener('click', function() {
	document.querySelector("#steam-one").style.animationPlayState = 'running';
});


// pause animation
document.querySelector("#anim_off").addEventListener('click', function() {
	document.querySelector("#steam-two").style.animationPlayState = 'paused';
});

// play animation
document.querySelector("#anim_on").addEventListener('click', function() {
	document.querySelector("#steam-two").style.animationPlayState = 'running';
});

// pause animation
document.querySelector("#anim_off").addEventListener('click', function() {
	document.querySelector("#steam-three").style.animationPlayState = 'paused';
});

// play animation
document.querySelector("#anim_on").addEventListener('click', function() {
	document.querySelector("#steam-three").style.animationPlayState = 'running';
});

// pause animation
document.querySelector("#anim_off").addEventListener('click', function() {
	document.querySelector("#steam-four").style.animationPlayState = 'paused';
});

// play animation
document.querySelector("#anim_on").addEventListener('click', function() {
	document.querySelector("#steam-four").style.animationPlayState = 'running';
});

// pause animation
document.querySelector("#anim_off").addEventListener('click', function() {
	document.querySelector("#steam-five").style.animationPlayState = 'paused';
});

// play animation
document.querySelector("#anim_on").addEventListener('click', function() {
	document.querySelector("#steam-five").style.animationPlayState = 'running';
});

// pause animation
document.querySelector("#anim_off").addEventListener('click', function() {
	document.querySelector("#steam-six").style.animationPlayState = 'paused';
});

// play animation
document.querySelector("#anim_on").addEventListener('click', function() {
	document.querySelector("#steam-six").style.animationPlayState = 'running';
});


// pause animation
document.querySelector("#anim_off").addEventListener('click', function() {
	document.querySelector("#steam-eight").style.animationPlayState = 'paused';
});

// play animation
document.querySelector("#anim_on").addEventListener('click', function() {
	document.querySelector("#steam-eight").style.animationPlayState = 'running';
});


// pause animation
document.querySelector("#anim_off").addEventListener('click', function() {
	document.querySelector(".x1").style.animationPlayState = 'paused';
});

// play animation
document.querySelector("#anim_on").addEventListener('click', function() {
	document.querySelector(".x1").style.animationPlayState = 'running';
});

// pause animation
document.querySelector("#anim_off").addEventListener('click', function() {
	document.querySelector(".x2").style.animationPlayState = 'paused';
});

// play animation
document.querySelector("#anim_on").addEventListener('click', function() {
	document.querySelector(".x2").style.animationPlayState = 'running';
});

// pause animation
document.querySelector("#anim_off").addEventListener('click', function() {
	document.querySelector(".x3").style.animationPlayState = 'paused';
});

// play animation
document.querySelector("#anim_on").addEventListener('click', function() {
	document.querySelector(".x3").style.animationPlayState = 'running';
});

// pause animation
document.querySelector("#anim_off").addEventListener('click', function() {
	document.querySelector(".x4").style.animationPlayState = 'paused';
});

// play animation
document.querySelector("#anim_on").addEventListener('click', function() {
	document.querySelector(".x4").style.animationPlayState = 'running';
});

// pause animation
document.querySelector("#anim_off").addEventListener('click', function() {
	document.querySelector(".x5").style.animationPlayState = 'paused';
});

// play animation
document.querySelector("#anim_on").addEventListener('click', function() {
	document.querySelector(".x5").style.animationPlayState = 'running';
});

// pause animation
document.querySelector("#anim_off").addEventListener('click', function() {
	document.querySelector("#coffeeOn").style.animationPlayState = 'paused';
});

// play animation
document.querySelector("#anim_on").addEventListener('click', function() {
	document.querySelector("#coffeeOn").style.animationPlayState = 'running';
});

window.addEventListener("orientationchange", function() {
  if (window.orientation == "90" || window.orientation == "-90") {
      //Do stuff
  }
}, false);