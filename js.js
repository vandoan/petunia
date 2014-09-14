

// prepare it with jquery
$(document).ready(
	function(pie){

//in this box, when I hover over a div
$('.highlightBox > div> div').hover(
  function() {

// add the highlight class
    $(this).addClass('highlight');
  }, function() {

// then leave it


    // $(this).removeClass('highlight');

$('#resetBut').click(
	function(){
		$("div").removeClass('highlight');
	})
})
return console.log(pie)
});



