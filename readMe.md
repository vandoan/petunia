 			Notes
--------------------------------

- took me forever, but I was able to figure out how to clear the page, took another route and instead of trying to reset the page, just remove all '.highlight' tags from all divs. 





- Adding color to divs

	- 	$(document).ready(
		function(pie){

		$('.highlightBox > div> div').hover(
		  function() {
		    $(this).addClass('highlight');
		  }, function() {

		})

	- <p id="button"  onclick="myFunction()"> Change color </p> 



- Remove all divs 
	- $('#reset').click(
		function(){
			var el = document.getElementById('board')
			el.parentNode.removeChild(el);
		}) 






 			CSS
--------------------------------
- line height
	- remove the gap between lines and text










