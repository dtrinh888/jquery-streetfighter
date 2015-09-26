$(document).ready(function(){

	//to prevent flickering when mousing in/out while pressing x, we keep track of whether the .ryu-cool div is shown
	var isCool = false;

	$('.ryu').mouseenter(function(){
		if (!isCool){
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		}
	})
	.mouseleave(function(){
		if (!isCool) {
			$('.ryu-ready').hide();
			$('.ryu-still').show();
		}
	})

	.mousedown(function(){
		if (!isCool) {
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show().animate( {'left': '1020px'}, 500, function() {
				$(this).stop();
				$(this).hide().css('left', '520px');
			});
		}
		
	})

	.mouseup(function(){
		if (!isCool) {
			$('.ryu-throwing').hide();
			$('.ryu-ready').show();
		}
	});

	$(document).keydown(function(e) {
    	if (e.keyCode == 88) {
    		//because we don't know if 
	      $('.ryu-action').hide();
	      $('.ryu-cool').show();
	      isCool = true;
	    }   
  	})
	.keyup(function(e) {
		if (e.keyCode == 88) {
	      $('.ryu-cool').hide();
	      $('.ryu-still').show();
	      isCool = false;
		}
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
	