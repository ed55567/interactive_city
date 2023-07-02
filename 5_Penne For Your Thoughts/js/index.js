var x = document.getElementById("#myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 


jQuery(function($) {
  var pop = $('.map-popup',);
  pop.click(function(e) {
    e.stopPropagation();
  });
  
  $('a.marker').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).next('.map-popup',).toggleClass('open');
    $(this).parent().siblings().children('.map-popup',).removeClass('open');
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
    $("#lightsOn,#buttonOff1").toggle();
  });
});


$(document).ready(function(){
  $("#buttonOn1").click(function(){
    $("#lightsOn,#buttonOff1").toggle();
  });
});


$(document).ready(function(){
  $("#buttonOff2").click(function(){
    var audio = document.getElementById("myAudio");
		audio.play();
    audio.currentTime = 0;
    $("#buttonOff2").toggle();
  });
});


$(document).ready(function(){
  $("#buttonOn2").click(function(){
    var audio = document.getElementById("myAudio");
		audio.pause();
    $("#buttonOff2").toggle();
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
    var audio = document.getElementById("myAudio");
		audio.pause();
    $("#sound_off").toggle();
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





