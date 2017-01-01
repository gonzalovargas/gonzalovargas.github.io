jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});


$(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(window).width() >= 768){
          if ($(document).scrollTop() > 200) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar-fixed-top").css("background-color", "rgba(0,156,215,0.8)"); // if yes, then change the color of class "navbar-fixed-top"
            $(".navbar-fixed-top").css("border-bottom", "1px solid rgba(0,156,215,0.5)"); // if yes, then change the color of class "navbar-fixed-top"
          } else {
            $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
            $(".navbar-fixed-top").css("border-bottom", "0px solid rgba(0,156,215,0.5)");
          }
        };
      });

    });

console.log('historia');