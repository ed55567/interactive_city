var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 


jQuery(function($) {
  var pop = $('.map-popup',);
  var id = $(this).attr('id');
  pop.click(function(e) {
    e.stopPropagation();
  });
  
  $('a.marker').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).next('.map-popup',).toggleClass('open');
    $(this).parent().siblings().children('.map-popup',).removeClass('open');
    $("audio").not(this).each(function(index, audio) {
      audio.pause();
     });
    $("video").not(this).each(function(index, video) {
      video.pause();
    });
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
    $("#bakeryon,#buttonOff1").toggle();
  });
});


$(document).ready(function(){
  $("#buttonOn1").click(function(){
    $("#bakeryon,#buttonOff1").toggle();
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





