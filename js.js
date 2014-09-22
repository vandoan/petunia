

// prepare it with jquery
$(document).ready(

	function(pie){

//in this box, when I hover over a div
$("#board > div > div").hover(
  function() {

// add the highlight class
    $(this).addClass('highlight');
  }, function() {

// then leave it

//     -------      hover effect     --------
    // $(this).removeClass('highlight');
// })




//   -------    click to remove highligh class on all div -----


 // $('#reset').click(
 // 	function(){
 // 		$('div').removeClass('highlight');
 // 	})

//    --------        code to delete all divs -------

$('#reset').click(
	function(){
		var el = document.getElementById('board')
		el.parentNode.removeChild(el);

		
		})
}), 
		 function promptMessage() { 
	 		var boxNumber = prompt("How many boxes would you like?", "Don't go crazy"); 
				if (boxNumber != null){
					document.getElementById("bread").innerHTML = 
					boxNumber + " box(es)!";
				}

				else {
					alert("You did not specify a number");
				}
				}






return console.log(pie)
});



