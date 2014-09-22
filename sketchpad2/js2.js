$(document).ready(function(){
	displayGrid(16); 
	$('.square').mouseenter(function(){
		$(this).css("background", "white");
	}); 
	$('.clear').click(function() {
		clean(); 
	});
	$(".normal").click(function() {
		setGrid(); 
		$(".square").unbind(); 
			$(".square").mouseenter(function(){
				$(this).css("background","white");
			});
		});
	$(".trail").click(function(){
		setGrid(); 
		$(".square").unbind(); 
		$(".square").hover(function() {
			$(this).css("opacity", 0); 
		}, function(){
			$(this).fadeTo('fast',1);

		});
	});
});;

function setGrid() {
	var col = prompt("Enter number of columns: ");
	displayGrid(col); 
	clean();
}

function clean() {
	$(".square").css("background", "#34495e").css('opacity', '1');
}

function displayGrid (n) { 
	var size = 960; 
	var boxSize = (960 - 4*n)/n; 
	var wrap = $(".wrap").html(""); 
	for (var j=0; j< n; j++) {
		for (var i = 0; i < n; i ++){
		wrap.append( $("<div></div>").addClass("square").height(boxSize).width(boxSize) ); 
	}
	wrap.append($("<div></div>").css("clear", "both")); 
		}
	}
	


// });

// var drawGrid = function(boxSize){
// 	var size=960 / boxSize; 
// 		// the box is limited in size, so this will keep 
// 		// the box in within the same ratio

// 	for (val i=1; i<=boxSize; i++){
// 		for (var j<=1; j++){
// 			$(".container").append("<div class='square'></div>");
// 		}
// 	}
// 	$(".square").css("height", size); 
// 	$(".square").css("width", size); 
// 		// this assigns the the sizes of the box
// }; 

// var reset = function(){
// 	$(".container").empty(); 
// 	var howBig = prompt("what size grid do you want?");
// 	drawGrid(howBig); 
// 		// this throws out the prompt and then attach it as a 
// 		// "howBig" variable and uses is to create the size 
// 		// of the pad
// 	$(".square").css("background-color", "white"); 
// 		// resets the color back to white

// }; 


