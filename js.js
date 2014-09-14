
$document.ready(function(){
//in this box, when I hover over a div
$('.highlightBox div').hover(
function() {

//it will give this div an additional class
$(this).addClass("highlight");
}, function() {

//then take the class away
	$(this).removeClass('highlight');
	}
)
})
